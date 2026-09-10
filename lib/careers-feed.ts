import { z } from "zod";

/**
 * The Nexus careers feed — validation and mapping.
 *
 * Nexus pushes a daily batch of open Talent Requests. It owns extraction,
 * sanitisation and scheduling; we own receiving, mapping and upserting.
 *
 * Kept out of the route handler so the mapping can be tested directly, which
 * matters here: the feed's vocabulary and ours differ in several places, and
 * a silent mis-map would publish 235 roles with the wrong employment type.
 *
 * Nothing in this file trusts the payload. Every field is validated, every
 * string is length-capped, and unknown keys are dropped rather than stored —
 * so a future upstream change that starts sending client names or rates
 * cannot land them in our database by accident.
 */

/* ----------------------------------------------------------- vocabulary */

/**
 * Their enum values are not ours. "Fulltime" and "Onsite" have to become
 * "Full Time" and "On-site" or the careers filters silently stop matching.
 */
const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  contract: "Contract",
  fulltime: "Full Time",
  "full time": "Full Time",
  "full-time": "Full Time",
};

const WORK_MODE_MAP: Record<string, string> = {
  onsite: "On-site",
  "on-site": "On-site",
  remote: "Remote",
  hybrid: "Hybrid",
};

/* ------------------------------------------------------------- schemas */

/** Trimmed, length-capped, and empty entries dropped. */
const list = (max: number) =>
  z
    .array(z.string().trim().max(600))
    .max(max)
    .transform((items) => items.filter(Boolean));

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD")
  .transform((value) => new Date(`${value}T00:00:00.000Z`))
  .refine((date) => !Number.isNaN(date.getTime()), "invalid date");

export const feedJobSchema = z.object({
  job_id: z.string().trim().min(1).max(64),
  department: z.string().trim().max(120).default(""),
  title: z.string().trim().min(1).max(200),
  slug: z
    .string()
    .trim()
    .min(1)
    .max(160)
    /* We build URLs from this, so anything outside the safe set is rejected
       rather than silently rewritten — a mangled slug is a broken link. */
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be lowercase-hyphenated"),

  employment_type: z.string().trim().min(1),
  work_mode: z.string().trim().default(""),

  location: z.string().trim().min(1).max(200),

  experience: z.string().trim().max(200).default(""),
  experience_min_years: z.number().int().min(0).max(80).nullable().optional(),
  experience_max_years: z.number().int().min(0).max(80).nullable().optional(),

  summary: z.string().trim().max(5000).default(""),

  responsibilities: list(40).default([]),
  tech_stack: list(60).default([]),
  required_qualifications: list(40).default([]),
  nice_to_have: list(40).default([]),

  posted_date: isoDate,
  closing_date: isoDate,

  status: z.enum(["active", "closed"]),
  content_hash: z.string().trim().max(128).optional().nullable(),
});

export type FeedJob = z.infer<typeof feedJobSchema>;

export const feedEnvelopeSchema = z.object({
  source: z.string().trim().max(64).optional(),
  generated_at: z.string().trim().max(64).optional(),
  /* Their contract says up to 250. Cap a little above so a slightly oversized
     batch is a clear error rather than a timeout. */
  jobs: z.array(z.unknown()).max(300),
});

/* ------------------------------------------------------------- mapping */

export interface MappedJob {
  nexusId: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  workplace: string;
  experience: string;
  experienceMin: number | null;
  experienceMax: number | null;
  description: string;
  responsibilities: string[];
  requirements: string[];
  technologies: string[];
  niceToHave: string[];
  status: "OPEN" | "CLOSED";
  postedAt: Date;
  validThrough: Date;
  contentHash: string | null;
}

/**
 * Turns one validated feed record into our shape.
 *
 * Throws on an unrecognised enum rather than guessing. A role published with
 * the wrong employment type disappears from the filters candidates use, and
 * nobody notices for weeks.
 */
export function mapFeedJob(job: FeedJob): MappedJob {
  const employmentType = EMPLOYMENT_TYPE_MAP[job.employment_type.toLowerCase()];

  if (!employmentType) {
    throw new Error(`unknown employment_type "${job.employment_type}"`);
  }

  /* Empty work_mode is expected and documented — "almost always Onsite today".
     Default rather than reject. */
  const workplace = job.work_mode
    ? WORK_MODE_MAP[job.work_mode.toLowerCase()]
    : "On-site";

  if (!workplace) {
    throw new Error(`unknown work_mode "${job.work_mode}"`);
  }

  return {
    nexusId: job.job_id,
    slug: job.slug,
    title: job.title,
    department: job.department,
    location: job.location,
    employmentType,
    workplace,
    experience: job.experience,
    experienceMin: job.experience_min_years ?? null,
    experienceMax: job.experience_max_years ?? null,
    description: job.summary,
    responsibilities: job.responsibilities,
    /* Their "required_qualifications" is our "requirements", and their
       "tech_stack" is our "technologies". Same content, different names. */
    requirements: job.required_qualifications,
    technologies: job.tech_stack,
    niceToHave: job.nice_to_have,
    status: job.status === "active" ? "OPEN" : "CLOSED",
    postedAt: job.posted_date,
    validThrough: job.closing_date,
    contentHash: job.content_hash ?? null,
  };
}

/** First validation error, phrased for the errors array in our response. */
export function firstIssue(error: z.ZodError): string {
  const issue = error.issues[0];
  const path = issue.path.join(".");

  return path ? `${path}: ${issue.message}` : issue.message;
}
