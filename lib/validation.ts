import { z } from "zod";

/**
 * Shared validation schemas.
 *
 * The client uses these for inline field errors and the API route uses the
 * same objects to validate again — a browser can be bypassed, so server-side
 * validation is the one that counts.
 */

const name = z
  .string()
  .trim()
  .min(2, "Please enter your full name.")
  .max(100, "That name is longer than we can store.");

const email = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, "We need an email address to reply to.")
  .email("That doesn't look like a valid email address.")
  .max(254);

const url = (message: string) =>
  z
    .string()
    .trim()
    .max(200)
    .refine((value) => value === "" || /^https?:\/\/\S+$/.test(value), {
      message,
    })
    .optional()
    .default("");

const phone = z
  .string()
  .trim()
  .max(32, "That phone number is too long.")
  .refine((value) => value === "" || /^[+()\d\s-]{7,}$/.test(value), {
    message: "Use digits, spaces and + ( ) - only.",
  });

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

export const contactSchema = z.object({
  name,
  email,
  company: z
    .string()
    .trim()
    .max(120, "That company name is too long.")
    .optional()
    .default(""),
  phone: phone.optional().default(""),
  enquiryType: z.enum(enquiryTypes, {
    message: "Please choose what your enquiry is about.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please give us a little more detail — 20 characters or more.")
    .max(5000, "Please keep the message under 5,000 characters."),
  consent: z.literal(true, {
    message: "Please confirm you're happy for us to contact you.",
  }),
  /**
   * Honeypot. Real users never see this field, so anything in it is a bot.
   *
   * Deliberately NOT constrained here: if zod rejected it, the 422 would tell
   * the bot exactly which field caught it. The route checks it after a
   * successful parse and returns a normal 200 without sending anything.
   */
  website: z.string().max(2000).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

/* -------------------------------------------------------------- application */

export const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB

export const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const ACCEPTED_CV_EXTENSIONS = ".pdf,.doc,.docx";

export const applicationSchema = z.object({
  jobId: z.string().trim().min(1),

  firstName: z.string().trim().min(1, "Please enter your first name.").max(60),
  lastName: z.string().trim().min(1, "Please enter your last name.").max(60),
  email,
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(32)
    .regex(/^[+()\d\s-]+$/, "Use digits, spaces and + ( ) - only."),

  location: z
    .string()
    .trim()
    .min(2, "Where are you based? City and country is enough.")
    .max(120),

  linkedin: url("Please include the full LinkedIn URL, starting with https://"),

  coverNote: z
    .string()
    .trim()
    .max(2000, "Please keep this under 2,000 characters.")
    .optional()
    .default(""),

  consent: z.literal(true, {
    message: "Please confirm you're happy for us to process your application.",
  }),

  /** Honeypot — see the note on the contact schema. */
  website: z.string().max(2000).optional().default(""),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

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

/** Turns a ZodError into a flat { field: message } map for the UI. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const result: Record<string, string> = {};

  for (const issue of error.issues) {
    const key = issue.path.join(".");
    if (key && !result[key]) result[key] = issue.message;
  }

  return result;
}
