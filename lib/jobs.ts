import { prisma } from "@/lib/db";

/**
 * Job data access.
 *
 * The database stores the three list fields as JSON strings (SQLite has no
 * array type). Everything above this file works with real arrays — the
 * conversion lives here and nowhere else, so a Postgres migration only has to
 * change these two helpers.
 */

export type { Job, JobStatus } from "./job-types";
export { JOB_STATUSES, EMPLOYMENT_TYPES, WORKPLACES } from "./job-types";

import type { Job, JobStatus } from "./job-types";

type JobRow = {
  responsibilities: string;
  requirements: string;
  technologies: string;
  niceToHave: string;
  status: string;
  [key: string]: unknown;
};

function parseList(value: string): string[] {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((v) => typeof v === "string")
      : [];
  } catch {
    return [];
  }
}

export function serialiseList(values: string[]): string {
  return JSON.stringify(values.map((v) => v.trim()).filter(Boolean));
}

function toJob(row: JobRow & { _count?: { applications: number } }): Job {
  const { _count, ...rest } = row;

  return {
    ...(rest as unknown as Omit<
      Job,
      | "responsibilities"
      | "requirements"
      | "technologies"
      | "niceToHave"
      | "status"
    >),
    responsibilities: parseList(row.responsibilities),
    requirements: parseList(row.requirements),
    technologies: parseList(row.technologies),
    niceToHave: parseList(row.niceToHave),
    status: row.status as JobStatus,
    applicationCount: _count?.applications,
  };
}

/**
 * Runs a query, and returns `fallback` if the database is unreachable.
 *
 * Build servers don't necessarily have a database — Vercel runs `next build`
 * before any runtime environment exists, and these pages are statically
 * generated, so `generateStaticParams` and the homepage both query at build
 * time. Without this the whole build fails with P2021 / P1001.
 *
 * Degrading to empty is also the right runtime behaviour: a database blip
 * should render a careers page with no roles on it, not take the entire site
 * down. Pages are ISR with a 300s window, so they self-heal on the next
 * revalidation.
 */
async function safely<T>(
  operation: string,
  query: () => Promise<T>,
  fallback: T,
): Promise<T> {
  try {
    return await query();
  } catch (error) {
    console.error(`[jobs] ${operation} failed — falling back:`, error);
    return fallback;
  }
}

/**
 * Strips the fields that exist only for the Nexus feed.
 *
 * The public pages hand the whole Job object to client components, so anything
 * on it is serialised into the page and readable by anyone viewing source.
 * The TR number and the content hash are internal bookkeeping — they have no
 * business leaving the server.
 */
function withoutInternals(job: Job): Job {
  /* contentHash sits on the database row but not on the Job type, so it rides
     through toJob's spread without TypeScript ever seeing it. Destructure it
     out explicitly rather than trusting the type to have caught it. */
  const { contentHash: _hash, ...rest } = job as Job & {
    contentHash?: string | null;
  };

  return { ...rest, nexusId: null };
}

/**
 * Midnight this morning, UTC.
 *
 * A role closing on the 17th should stay open all of the 17th, so the cutoff
 * is the start of today rather than the current instant — otherwise a job
 * would go dark at 00:01 on its own closing day.
 */
function startOfToday(): Date {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
}

/**
 * Has the closing date passed?
 *
 * `validThrough` is published to Google as the date the posting expires, so
 * letting a lapsed role stay live on our own site means telling Google one
 * thing and candidates another — and quietly collecting applications for a
 * role nobody is working. A null date never expires, which is what hand-made
 * roles in the admin leave it as.
 *
 * The Nexus feed slides closing_date to today + 7 on every extract, so a role
 * only lapses once the feed stops sending it. That is exactly the stale-post
 * safety net their team asked us to use.
 */
export function hasLapsed(job: { validThrough: Date | null }): boolean {
  return job.validThrough !== null && job.validThrough < startOfToday();
}

/** Live means open, and not past its closing date. */
export function isLive(job: {
  status: string;
  validThrough: Date | null;
}): boolean {
  return job.status === "OPEN" && !hasLapsed(job);
}

/* ---------------------------------------------------------------- public */

/** Roles visible on the public site. CLOSED stays reachable by direct link. */
export async function getPublishedJobs(): Promise<Job[]> {
  return safely(
    "getPublishedJobs",
    async () => {
      const rows = await prisma.job.findMany({
        where: {
          status: "OPEN",
          OR: [
            { validThrough: null },
            { validThrough: { gte: startOfToday() } },
          ],
        },
        orderBy: { postedAt: "desc" },
      });
      return rows.map((row) => withoutInternals(toJob(row)));
    },
    [],
  );
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  return safely(
    `getJobBySlug(${slug})`,
    async () => {
      const row = await prisma.job.findUnique({ where: { slug } });
      if (!row || row.status === "DRAFT") return null;
      return withoutInternals(toJob(row));
    },
    null,
  );
}

/** Slugs to prerender — drafts excluded so unpublished roles never get a URL. */
export async function getPublishedSlugs(): Promise<string[]> {
  return safely(
    "getPublishedSlugs",
    async () => {
      const rows = await prisma.job.findMany({
        where: { status: { in: ["OPEN", "CLOSED"] } },
        select: { slug: true },
      });
      return rows.map((row) => row.slug);
    },
    [],
  );
}

/* ----------------------------------------------------------------- admin */

export async function getAllJobs(): Promise<Job[]> {
  return safely(
    "getAllJobs",
    async () => {
      const rows = await prisma.job.findMany({
        orderBy: [{ status: "asc" }, { updatedAt: "desc" }],
        include: { _count: { select: { applications: true } } },
      });
      return rows.map(toJob);
    },
    [],
  );
}

export async function getJobById(id: string): Promise<Job | null> {
  const row = await prisma.job.findUnique({
    where: { id },
    include: { _count: { select: { applications: true } } },
  });

  return row ? toJob(row) : null;
}

/** URL-safe slug derived from the title, kept unique against existing rows. */
export async function uniqueSlug(
  title: string,
  excludeId?: string,
): Promise<string> {
  const base =
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "role";

  let candidate = base;
  let suffix = 2;

  while (true) {
    const clash = await prisma.job.findUnique({ where: { slug: candidate } });

    if (!clash || clash.id === excludeId) return candidate;

    candidate = `${base}-${suffix++}`;
  }
}
