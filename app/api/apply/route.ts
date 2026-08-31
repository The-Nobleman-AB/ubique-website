import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import {
  EmailNotConfiguredError,
  recipients,
  renderRows,
  renderText,
  sendEmail,
  type Row,
} from "@/lib/email";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { StorageNotConfiguredError, store } from "@/lib/storage";
import { applicationSchema, fieldErrors, validateCv } from "@/lib/validation";

export const runtime = "nodejs";

/** Short, human-quotable reference so a candidate can chase an application. */
function reference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const random = randomBytes(2).toString("hex").toUpperCase();
  return `UBQ-${stamp}${random}`;
}

export async function POST(request: Request) {
  /* ---------------------------------------------------------- rate limit */

  const limit = rateLimit(clientKey(request, "apply"), {
    limit: 4,
    windowMs: 30 * 60_000,
  });

  if (!limit.ok) {
    return NextResponse.json(
      {
        error:
          "You've submitted a few applications in a short window. Please wait a little and try again.",
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  /* --------------------------------------------------------------- parse */

  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "We couldn't read that submission. Please try again." },
      { status: 400 },
    );
  }

  const cv = form.get("cv");
  const cvFile = cv instanceof File ? cv : null;
  const cvError = validateCv(cvFile);

  if (cvError || !cvFile) {
    return NextResponse.json(
      { error: "Please check your CV upload.", fields: { cv: cvError } },
      { status: 422 },
    );
  }

  const raw = Object.fromEntries(
    [...form.entries()].filter(([, value]) => typeof value === "string"),
  );

  const parsed = applicationSchema.safeParse({
    ...raw,
    consent: raw.consent === "true",
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields.",
        fields: fieldErrors(parsed.error),
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  /* Honeypot: a filled hidden field means a bot. Look successful, store
     nothing. */
  if (data.website) {
    return NextResponse.json({ ok: true, reference: reference() });
  }

  /* The role must exist and be open — otherwise the payload was hand-crafted
     or the role closed while the form was on screen. */
  const job = await prisma.job.findUnique({ where: { id: data.jobId } });

  if (!job || job.status !== "OPEN") {
    return NextResponse.json(
      {
        error:
          "That role is no longer accepting applications. Please browse our current roles.",
      },
      { status: 409 },
    );
  }

  /* ------------------------------------------------------- store the CV */

  const ref = reference();
  const extension =
    cvFile.name.match(/\.(pdf|docx?)$/i)?.[0]?.toLowerCase() ?? ".pdf";
  const safeName = `${data.lastName}-${data.firstName}-CV${extension}`.replace(
    /[^A-Za-z0-9.\-]/g,
    "-",
  );

  const bytes = Buffer.from(await cvFile.arrayBuffer());

  /* Storage failing must not cost us the candidate. The CV bytes are already
     in memory and go out as an email attachment regardless, so the recruiter
     still receives it — losing the application record as well would turn a
     configuration problem into a lost applicant. */
  let stored: Awaited<ReturnType<typeof store>> | null = null;
  let storageError: string | null = null;

  try {
    stored = await store(
      `${ref}${extension}`,
      bytes,
      cvFile.type || "application/pdf",
    );
  } catch (error) {
    storageError =
      error instanceof StorageNotConfiguredError
        ? error.message
        : error instanceof Error
          ? error.message
          : "unknown error";

    console.error(
      `[apply] CV storage failed for ${ref} — saving the application anyway, ` +
        `CV will only exist on the notification email. Cause: ${storageError}`,
    );
  }

  /* ------------------------------------------------------ store the record

     The database write is what makes the application real. Email is a
     notification on top — if it fails, the application still exists in the
     admin, which is the opposite of the old behaviour. */

  const application = await prisma.application.create({
    data: {
      reference: ref,
      jobId: job.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      location: data.location,
      linkedin: data.linkedin,
      coverNote: data.coverNote,
      cvFilename: safeName,
      cvMimeType: cvFile.type || "application/pdf",
      cvSize: cvFile.size,
      /* Empty means "never stored" — the download route explains that rather
         than 404ing at a recruiter. */
      cvPath: stored?.key ?? "",
      consent: true,
    },
  });

  /* ---------------------------------------------------------- notify us */

  const rows: Row[] = [
    { label: "Reference", value: ref },
    { label: "Role", value: `${job.title} — ${job.location}` },
    { label: "Name", value: `${data.firstName} ${data.lastName}` },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
    { label: "Based in", value: data.location },
    { label: "LinkedIn", value: data.linkedin },
    { label: "Received", value: new Date().toUTCString() },
  ];

  try {
    await sendEmail({
      to: recipients("CAREERS_TO"),
      subject: `Application — ${job.title} — ${data.firstName} ${data.lastName} [${ref}]`,
      replyTo: data.email,
      html: renderRows(`New application: ${job.title}`, rows, {
        label: "Cover note",
        value: data.coverNote,
      }),
      text: renderText(`New application: ${job.title}`, rows, {
        label: "Cover note",
        value: data.coverNote,
      }),
      attachments: [{ filename: safeName, content: bytes.toString("base64") }],
    });

    await prisma.application.update({
      where: { id: application.id },
      data: { notifiedAt: new Date() },
    });
  } catch (error) {
    /* Not fatal — the application is saved and visible in the admin. Log it
       so the gap between "received" and "emailed" is traceable. */
    if (error instanceof EmailNotConfiguredError) {
      console.warn(
        "[apply] Stored, but email is not configured:",
        error.message,
      );
    } else {
      console.error("[apply] Stored, but the notification failed:", error);
    }
  }

  /* ------------------------------------------------ acknowledge candidate */

  try {
    const ackRows: Row[] = [
      { label: "Reference", value: ref },
      { label: "Role", value: job.title },
      { label: "Location", value: job.location },
    ];

    await sendEmail({
      to: [data.email],
      subject: `We've received your application — ${job.title} [${ref}]`,
      html: renderRows("Thanks — your application is with us", ackRows, {
        label: "What happens next",
        value:
          "Our team reviews every application. If your experience matches what the hiring manager is looking for, we'll be in touch within five working days to arrange an initial conversation.\n\nIf you don't hear from us in that time, the role has usually moved on — but we keep your details on file for similar positions unless you ask us not to.\n\nQuote the reference above in any correspondence.",
      }),
      text: renderText("Thanks — your application is with us", ackRows, {
        label: "What happens next",
        value:
          "Our team reviews every application. If your experience matches what the hiring manager is looking for, we'll be in touch within five working days.",
      }),
    });
  } catch (error) {
    console.error("[apply] Acknowledgement email failed:", error);
  }

  return NextResponse.json({ ok: true, reference: ref });
}
