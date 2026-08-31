"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import type { ActionState } from "@/lib/action-state";

import { prisma } from "@/lib/db";
import {
  createSession,
  destroySession,
  requireUser,
  sweepSessions,
  verifyPassword,
} from "@/lib/auth";
import { serialiseList, uniqueSlug } from "@/lib/jobs";
import { APPLICATION_STATUSES } from "@/lib/application-status";

/**
 * Admin server actions.
 *
 * Every mutating action calls requireUser() first — the middleware already
 * gates the routes, but actions are their own entry point and must not rely
 * on a page having checked.
 */

/* ------------------------------------------------------------------ auth */

const credentials = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address."),
  password: z.string().min(1, "Enter your password."),
});

export async function signIn(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = credentials.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Check the details below." };
  }

  const user = await prisma.adminUser.findUnique({
    where: { email: parsed.data.email },
  });

  /* Same message and roughly the same work whether the account exists or the
     password is wrong — don't let this endpoint enumerate accounts. */
  const ok = user
    ? await verifyPassword(parsed.data.password, user.passwordHash)
    : await verifyPassword(parsed.data.password, "scrypt:00:00");

  if (!user || !ok) {
    return { error: "That email and password don't match." };
  }

  await sweepSessions();
  await createSession(user.id);

  redirect("/admin");
}

export async function signOut(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

/* ------------------------------------------------------------------ jobs */

const jobSchema = z.object({
  title: z.string().trim().min(3, "Give the role a title."),
  department: z.string().trim().min(2, "Which practice or department?"),
  location: z.string().trim().min(2, "Where is this role based?"),
  employmentType: z.string().trim().min(2),
  workplace: z.string().trim().min(2),
  experience: z.string().trim().min(1, "e.g. “4+ Years”"),
  description: z
    .string()
    .trim()
    .min(40, "Write at least a couple of sentences — this is the summary candidates read first."),
  responsibilities: z.string().default(""),
  requirements: z.string().default(""),
  technologies: z.string().default(""),
  status: z.enum(["DRAFT", "OPEN", "CLOSED"]),
  validThrough: z.string().default(""),
});

/** Textareas collect one item per line. */
function lines(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);
}

function readJobForm(formData: FormData) {
  return jobSchema.safeParse({
    title: formData.get("title"),
    department: formData.get("department"),
    location: formData.get("location"),
    employmentType: formData.get("employmentType"),
    workplace: formData.get("workplace"),
    experience: formData.get("experience"),
    description: formData.get("description"),
    responsibilities: formData.get("responsibilities") ?? "",
    requirements: formData.get("requirements") ?? "",
    technologies: formData.get("technologies") ?? "",
    status: formData.get("status"),
    validThrough: formData.get("validThrough") ?? "",
  });
}

function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".");
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}

/** Public pages that must refresh when a role changes. */
function revalidateJobPages(slug?: string) {
  revalidatePath("/careers");
  revalidatePath("/sitemap.xml");
  if (slug) revalidatePath(`/careers/${slug}`);
  /* Country pages list roles by location. */
  revalidatePath("/countries/uk");
  revalidatePath("/countries/germany");
  revalidatePath("/countries/usa");
  revalidatePath("/countries/india");
}

export async function createJob(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireUser();

  const parsed = readJobForm(formData);

  if (!parsed.success) {
    return { error: "Check the highlighted fields.", fieldErrors: fieldErrors(parsed.error) };
  }

  const data = parsed.data;
  const slug = await uniqueSlug(data.title);

  await prisma.job.create({
    data: {
      slug,
      title: data.title,
      department: data.department,
      location: data.location,
      employmentType: data.employmentType,
      workplace: data.workplace,
      experience: data.experience,
      description: data.description,
      responsibilities: serialiseList(lines(data.responsibilities)),
      requirements: serialiseList(lines(data.requirements)),
      technologies: serialiseList(lines(data.technologies)),
      status: data.status,
      validThrough: data.validThrough ? new Date(data.validThrough) : null,
    },
  });

  revalidateJobPages(slug);
  redirect("/admin/jobs");
}

export async function updateJob(
  id: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireUser();

  const parsed = readJobForm(formData);

  if (!parsed.success) {
    return { error: "Check the highlighted fields.", fieldErrors: fieldErrors(parsed.error) };
  }

  const data = parsed.data;
  const existing = await prisma.job.findUnique({ where: { id } });

  if (!existing) return { error: "That role no longer exists." };

  /* Keep the slug stable once a role has been published — changing it breaks
     every link and every search result already pointing at it. */
  const slug =
    existing.status === "DRAFT" && existing.title !== data.title
      ? await uniqueSlug(data.title, id)
      : existing.slug;

  await prisma.job.update({
    where: { id },
    data: {
      slug,
      title: data.title,
      department: data.department,
      location: data.location,
      employmentType: data.employmentType,
      workplace: data.workplace,
      experience: data.experience,
      description: data.description,
      responsibilities: serialiseList(lines(data.responsibilities)),
      requirements: serialiseList(lines(data.requirements)),
      technologies: serialiseList(lines(data.technologies)),
      status: data.status,
      validThrough: data.validThrough ? new Date(data.validThrough) : null,
      /* Publishing a draft is the moment it goes live — date it now. */
      postedAt:
        existing.status === "DRAFT" && data.status === "OPEN"
          ? new Date()
          : existing.postedAt,
    },
  });

  revalidateJobPages(slug);
  if (slug !== existing.slug) revalidateJobPages(existing.slug);

  redirect("/admin/jobs");
}

export async function deleteJob(id: string): Promise<void> {
  await requireUser();

  const job = await prisma.job.findUnique({
    where: { id },
    include: { _count: { select: { applications: true } } },
  });

  if (!job) redirect("/admin/jobs");

  /* Applications cascade-delete with the job. Closing keeps the record and the
     candidates; deleting is only for roles that were never really used. */
  if (job._count.applications > 0) {
    redirect(`/admin/jobs/${id}?error=has-applications`);
  }

  await prisma.job.delete({ where: { id } });

  revalidateJobPages(job.slug);
  redirect("/admin/jobs");
}

/* ---------------------------------------------------------- applications */

export async function setApplicationStatus(
  id: string,
  formData: FormData,
): Promise<void> {
  await requireUser();

  const status = String(formData.get("status") ?? "");

  if (!(APPLICATION_STATUSES as readonly string[]).includes(status)) return;

  await prisma.application.update({ where: { id }, data: { status } });

  revalidatePath("/admin/applications");
  revalidatePath(`/admin/applications/${id}`);
}

export async function addApplicationNote(
  id: string,
  formData: FormData,
): Promise<void> {
  const user = await requireUser();

  const body = String(formData.get("body") ?? "").trim();

  if (!body) return;

  await prisma.applicationNote.create({
    data: { applicationId: id, authorId: user.id, body: body.slice(0, 4000) },
  });

  revalidatePath(`/admin/applications/${id}`);
}

