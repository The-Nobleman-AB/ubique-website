/**
 * The people on the Meet the Team page.
 *
 * Photos aren't needed — the page renders initials-based avatars, which read
 * as a deliberate design choice rather than a missing image. Add photos later
 * by setting `photo` to a path under /public/images/team.
 *
 * The page renders nothing until this array has entries, so a half-finished
 * team page can never ship.
 *
 * Order here is the order on the page. Group by seniority, then by region.
 */

export interface TeamMember {
  /** Full name, as they'd want it written. */
  name: string;
  /** Job title. */
  role: string;
  /**
   * Which office they're based in — matches a city in offices.ts. Optional:
   * leave it out rather than guess.
   */
  location?: string;
  /**
   * One or two sentences. What they actually do, not a career summary.
   * Optional — a name, role and location is enough to be useful.
   */
  bio?: string;
  /** Practice slugs from data/practices.ts, if they lead or specialise in one. */
  practices?: string[];
  linkedin?: string;
  /** Path under /public, e.g. "/images/team/name.jpg". Falls back to initials. */
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: "Ranajit Banerjee",
    role: "Chairman",
    bio: "A Master's in Computer Science and more than twenty years in IT consulting, including senior Oracle roles inside global organisations. Brings the business, leadership and finance side alongside the technical.",
    practices: ["oracle"],
  },
  {
    name: "Dipti Ranjan Barik",
    role: "Managing Director",
    bio: "Co-founder, with a Master's in Computer Science and over twenty years in IT consulting. Sets the technical direction of the group and the standards its delivery teams work to.",
  },
  {
    name: "Nirakar Vaidya",
    role: "Director",
    location: "London",
    bio: "Heads operations and finance in the UK. Fourteen years across retail, sales, service and IT, a management degree and a UK MBA, with experience spanning Nepal, Australia, Thailand, Laos and South Asia.",
  },
];

export function hasTeam(): boolean {
  return team.length > 0;
}

/** "Anish Banerjee" → "AB". Handles single names and extra middle names. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * A stable colour per person, so the same name always gets the same avatar
 * rather than shuffling between builds.
 */
const AVATAR_TONES = [
  "bg-brand/10 text-brand",
  "bg-accent/10 text-accent-dark",
  "bg-navy/10 text-navy",
  "bg-cat-violet/10 text-cat-violet",
  "bg-cat-teal/10 text-cat-teal",
] as const;

export function avatarTone(name: string): string {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return AVATAR_TONES[hash % AVATAR_TONES.length];
}
