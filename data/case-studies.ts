/**
 * Client case studies.
 *
 * INTENTIONALLY EMPTY.
 *
 * The homepage previously showed four generic value propositions ("Global
 * Reach", "Industry Expertise", "Agile Delivery", "Long-Term Partnership")
 * under the heading "case studies". Those aren't case studies — they're
 * adjectives, and every competitor claims the same four.
 *
 * One named engagement with a real number attached is worth more than all of
 * them, and it's the one thing a competitor can't copy. But it has to be real:
 * a fabricated result is a liability, not marketing.
 *
 * To add one, fill in the shape below. The homepage section renders itself the
 * moment this array is non-empty, and stays hidden until then.
 *
 * Before publishing any entry, confirm:
 *   1. The client has approved being named, or the anonymised descriptor.
 *   2. Every figure in `results` can be evidenced.
 *   3. Legal has cleared any client name or logo use.
 */

export interface CaseStudyResult {
  /** The number itself, e.g. "6 weeks", "40%", "120". */
  value: string;
  /** What it measures, e.g. "to first placement". */
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** Client name, or an approved anonymised descriptor. */
  client: string;
  /** Sector — used for the eyebrow. */
  industry: string;
  /** Country or region the work was delivered in. */
  region: string;
  /** One line: what they came to us with. */
  challenge: string;
  /** Two or three sentences: what we actually did. */
  approach: string;
  /** Evidenced outcomes. Two to four. */
  results: CaseStudyResult[];
  /** Practice slugs involved, from data/practices.ts. */
  practiceSlugs: string[];
  /** Optional attributed quote. Only with written approval. */
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [];

export function hasCaseStudies(): boolean {
  return caseStudies.length > 0;
}
