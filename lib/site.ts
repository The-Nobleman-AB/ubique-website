import { headquarters } from "@/data/offices";

/**
 * Single source of truth for site-wide identity: used by root metadata, the
 * sitemap, robots.txt, JSON-LD and the footer. Nothing here should be
 * duplicated as a string literal in a component.
 */

export const siteConfig = {
  name: "Ubique Systems",
  legalName: "Ubique Systems Pvt. Ltd.",
  shortName: "Ubique",

  /**
   * Canonical origin. Set NEXT_PUBLIC_SITE_URL in the deploy environment;
   * the fallback keeps local builds and previews working.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.ubique-systems.com",

  tagline: "Global Talent. Local Expertise.",

  /**
   * The logo files.
   *
   * Both start null, which renders the existing "UBIQUE." wordmark as text —
   * so nothing is broken while the artwork is being prepared. Drop the files
   * into public/images/brand/ and set the paths here; every header, footer and
   * menu picks them up at once.
   *
   * Two variants are needed because the header sits over a dark hero at the
   * top of the page and turns white once scrolled — a single colour would
   * disappear against one of them.
   */
  brand: {
    /** Dark logo. Used in the header and mobile menu, both on a light ground. */
    logo: "/images/brand/logo.png" as string | null,
    /** White logo, for the navy footer. Null falls back to the text wordmark. */
    logoWhite: "/images/brand/logo-white.png" as string | null,
    /** Rendered height in pixels. Width scales automatically. */
    logoHeight: 30,
    /**
     * Natural width ÷ height of each file — 360×120 and 378×98 respectively.
     *
     * Only used to reserve the right space before the image loads. A wrong
     * value never distorts the logo, but the header visibly jumps as it
     * settles, which counts against Core Web Vitals. Kept per variant because
     * the two files are not the same shape.
     */
    logoAspect: 3,
    logoWhiteAspect: 3.86,
  },

  description:
    "Established in 2000, Ubique Systems is an ISO 27001-certified IT recruitment and consulting partner with 500+ consultants worldwide. We build specialist technology teams across SAP, Oracle, Salesforce, Dynamics 365, cloud and data — in 15+ countries.",

  /** Short version for OG cards and meta descriptions with a tight budget. */
  descriptionShort:
    "25+ years and 500+ consultants. ISO 27001-certified IT recruitment and consulting across 15+ countries.",

  email: "info@ubique-systems.com",
  phone: headquarters.phoneDisplay,
  phoneHref: headquarters.phone,

  /** The year Ubique Systems was established. */
  foundedYear: 2000,

  /**
   * Consultants worldwide. Sourced from Ubique's own "Who We Are" page, which
   * states "more than 500 consultants worldwide". Stated as a floor so it
   * stays true as the number grows — raise it when there's a firmer figure.
   */
  consultantCount: 500,

  certifications: [
    {
      name: "ISO/IEC 27001",
      description:
        "Certified information security management — covering how we handle candidate and client data.",
    },
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/ubique-systems",
    twitter: "https://twitter.com/ubiquesystems",
    facebook: "https://www.facebook.com/ubiquesystems",
  },

  /**
   * External systems that live outside this Next.js app. Override per
   * environment if the URLs change.
   */
  external: {
    timesheets:
      process.env.NEXT_PUBLIC_TIMESHEET_URL ??
      "https://timespan.ubique-systems.com",
  },
} as const;

/**
 * Years in business, derived so it never goes stale — no hardcoded "25 years"
 * to update every January.
 */
export const yearsInBusiness =
  new Date().getFullYear() - siteConfig.foundedYear;

/**
 * The same figure rounded down to the nearest five, for the "25+ years" style
 * claim. Reads as a deliberate round number rather than an oddly precise one,
 * and stays correct until the next five-year mark.
 */
export const yearsInBusinessRounded = Math.floor(yearsInBusiness / 5) * 5;

/** Build an absolute URL for canonicals, OG tags and the sitemap. */
export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
