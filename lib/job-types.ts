/**
 * Job types and constants that are safe to import from client components.
 *
 * lib/jobs.ts imports the Prisma client, so anything a browser bundle touches
 * has to live here instead — otherwise the driver ends up in the client
 * bundle (and the build fails trying to resolve better-sqlite3's native
 * bindings).
 */

export type JobStatus = "DRAFT" | "OPEN" | "CLOSED";

export const JOB_STATUSES: JobStatus[] = ["DRAFT", "OPEN", "CLOSED"];

export const EMPLOYMENT_TYPES = [
  "Full Time",
  "Part Time",
  "Contract",
  "Temporary",
  "Internship",
] as const;

export const WORKPLACES = ["On-site", "Hybrid", "Remote"] as const;

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  workplace: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  technologies: string[];
  status: JobStatus;
  postedAt: Date;
  validThrough: Date | null;
  createdAt: Date;
  updatedAt: Date;
  applicationCount?: number;
}
