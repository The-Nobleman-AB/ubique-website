import { NextResponse } from "next/server";

import {
  EmailNotConfiguredError,
  recipients,
  renderRows,
  renderText,
  sendEmail,
  type Row,
} from "@/lib/email";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";
import {
  contactSchema,
  enquiryTypeLabels,
  fieldErrors,
} from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  /* ---------------------------------------------------------- rate limit */

  const limit = rateLimit(clientKey(request, "contact"), {
    limit: 5,
    windowMs: 10 * 60_000,
  });

  if (!limit.ok) {
    return NextResponse.json(
      {
        error:
          "That's a few messages in a short window. Please wait a moment and try again.",
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  /* ------------------------------------------------------------ validate */

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "We couldn't read that submission. Please try again." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

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

  /* Honeypot: a filled hidden field means a bot. Return success so the bot
     doesn't learn to work around it, but send nothing. */
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  /* --------------------------------------------------------------- send */

  const rows: Row[] = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Company", value: data.company },
    { label: "Phone", value: data.phone },
    { label: "Enquiry", value: enquiryTypeLabels[data.enquiryType] },
    { label: "Received", value: new Date().toUTCString() },
  ];

  const subject = `Website enquiry — ${data.name}${
    data.company ? ` (${data.company})` : ""
  }`;

  const body: Row = { label: "Message", value: data.message };

  try {
    const transport = await sendEmail({
      to: recipients("CONTACT_TO"),
      subject,
      replyTo: data.email,
      html: renderRows("New website enquiry", rows, body),
      text: renderText("New website enquiry", rows, body),
    });

    /* Confirmation to the sender, so they have a record of what they asked.
       Best-effort — the enquiry already reached us. */
    try {
      await sendEmail({
        to: [data.email],
        subject: `We've received your enquiry — ${siteConfig.name}`,
        html: renderRows("Thanks — we've got your enquiry", rows, {
          label: "What happens next",
          value:
            "A specialist from the relevant team will reply within one working day.\n\nIf your enquiry is urgent, call the office nearest you — the numbers are on ubique-systems.com/contact.",
        }),
        text: renderText("Thanks — we've got your enquiry", rows, {
          label: "What happens next",
          value:
            "A specialist from the relevant team will reply within one working day.",
        }),
      });
    } catch (error) {
      console.error("[contact] Sender confirmation failed:", error);
    }

    console.log(`[contact] Enquiry from ${data.email} sent via ${transport}`);
  } catch (error) {
    if (error instanceof EmailNotConfiguredError) {
      /* Fail loudly rather than silently accepting the message. A form that
         says "thanks" and drops the enquiry is worse than one that errors. */
      console.error("[contact] Email is not configured:", error.message);

      return NextResponse.json(
        {
          error: `We couldn't send that just now. Please email ${siteConfig.email} and we'll pick it up straight away.`,
        },
        { status: 503 },
      );
    }

    console.error("[contact] Delivery failed:", error);

    return NextResponse.json(
      {
        error: `Something went wrong sending your message. Please try again, or email ${siteConfig.email}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
