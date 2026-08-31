/**
 * Application pipeline states.
 *
 * Lives outside app/admin/actions.ts because a "use server" module may only
 * export async functions — a constant array there breaks the build.
 */
export const APPLICATION_STATUSES = [
  "NEW",
  "REVIEWING",
  "SHORTLISTED",
  "INTERVIEWING",
  "OFFERED",
  "REJECTED",
  "HIRED",
] as const;

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];
