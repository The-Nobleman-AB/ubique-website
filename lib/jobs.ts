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
      "responsibilities" | "requirements" | "technologies" | "status"
    >),
    responsibilities: parseList(row.responsibilities),
    requirements: parseList(row.requirements),
    technologies: parseList(row.technologies),
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

/* ---------------------------------------------------------------- public */

/** Roles visible on the public site. CLOSED stays reachable by direct link. */
export async function getPublishedJobs(): Promise<Job[]> {
  return safely(
    "getPublishedJobs",
    async () => {
      const rows = await prisma.job.findMany({
        where: { status: "OPEN" },
        orderBy: { postedAt: "desc" },
      });
      return rows.map(toJob);
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
      return toJob(row);
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
