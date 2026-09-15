/**
 * The consent wording candidates agree to, and its version.
 *
 * Recording *that* someone consented without recording *what they agreed to*
 * is weak record-keeping — if the wording later changes, there is no way to
 * say what any historic applicant actually saw. So the text and its version
 * live together here, the form renders from this constant, and the version is
 * stamped onto the application at submission.
 *
 * When the wording changes: add a new entry to CONSENT_HISTORY, bump
 * CONSENT_TEXT_VERSION, and leave the old entry in place. Never edit an
 * existing one — that is the record.
 */

export const CONSENT_TEXT_VERSION = "v1-2026-09";

export const CONSENT_HISTORY: Record<string, string> = {
  "v1-2026-09":
    "I'm happy for Ubique Systems to process my details and CV for this and " +
    "comparable roles, as described in the privacy policy.",
};

/** The wording currently shown. The form renders this, so they cannot drift. */
export const CONSENT_TEXT = CONSENT_HISTORY[CONSENT_TEXT_VERSION];
