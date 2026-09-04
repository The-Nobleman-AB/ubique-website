/**
 * The parts of validation that carry no zod dependency.
 *
 * Split out so the forms can render without loading the validation engine.
 * zod is roughly 70 KB gzipped and was landing in the initial payload of the
 * contact and application pages purely so a schema could exist before anyone
 * had typed anything. The schemas themselves now load on demand — see the
 * dynamic import in each form's submit path.
 */

/* ------------------------------------------------------------------ contact */

export const enquiryTypes = [
  "hiring",
  "consulting",
  "candidate",
  "partnership",
  "other",
] as const;

export const enquiryTypeLabels: Record<(typeof enquiryTypes)[number], string> =
  {
    hiring: "I'm hiring — talent and resourcing",
    consulting: "Consulting and delivery services",
    candidate: "I'm looking for a role",
    partnership: "Partnership or supplier enquiry",
    other: "Something else",
  };

/* -------------------------------------------------------------- application */

export const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB

export const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const ACCEPTED_CV_EXTENSIONS = ".pdf,.doc,.docx";

/** Validates the uploaded CV outside zod, since File isn't available on both sides. */
export function validateCv(file: File | null): string | null {
  if (!file || file.size === 0) return "Please attach your CV.";

  if (file.size > MAX_CV_BYTES) {
    return `That file is ${(file.size / 1024 / 1024).toFixed(1)} MB. The limit is 5 MB.`;
  }

  const typeOk = (ACCEPTED_CV_TYPES as readonly string[]).includes(file.type);
  const extensionOk = /\.(pdf|docx?)$/i.test(file.name);

  if (!typeOk && !extensionOk) {
    return "Please upload a PDF or Word document.";
  }

  return null;
}
