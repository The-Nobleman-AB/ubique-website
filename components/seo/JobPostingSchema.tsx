import type { Job } from "@/lib/job-types";
import { offices } from "@/data/offices";
import { absoluteUrl, siteConfig } from "@/lib/site";

/**
 * JobPosting structured data — how a role enters Google's jobs surface.
 *
 * Every field is mapped from data/jobs.ts; nothing here is invented. Roles
 * without a `postedAt` fall back to a fixed date rather than "now", because a
 * posting whose date moves on every build looks like spam to Google.
 */

const EMPLOYMENT_TYPES: Record<string, string> = {
  "full time": "FULL_TIME",
  "part time": "PART_TIME",
  contract: "CONTRACTOR",
  contractor: "CONTRACTOR",
  temporary: "TEMPORARY",
  internship: "INTERN",
};

/** Maps a free-text location onto a real office where we have one. */
function addressFor(location: string) {
  const match = offices.find(
    (office) =>
      location.toLowerCase().includes(office.country.toLowerCase()) ||
      location.toLowerCase().includes(office.city.toLowerCase()),
  );

  if (!match) {
    return {
      "@type": "PostalAddress",
      addressLocality: location,
    };
  }

  return {
    "@type": "PostalAddress",
    streetAddress: match.address.join(", "),
    addressLocality: match.city,
    postalCode: match.postcode,
    addressCountry: match.countryCode,
  };
}

export default function JobPostingSchema({ job }: { job: Job }) {
  const remote = /remote/i.test(job.workplace);

  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: [
      `<p>${job.description}</p>`,
      "<h3>Responsibilities</h3><ul>",
      ...job.responsibilities.map((item) => `<li>${item}</li>`),
      "</ul><h3>Requirements</h3><ul>",
      ...job.requirements.map((item) => `<li>${item}</li>`),
      "</ul>",
    ].join(""),

    identifier: {
      "@type": "PropertyValue",
      name: siteConfig.name,
      value: job.id,
    },

    datePosted: job.postedAt,
    validThrough: job.validThrough,

    employmentType:
      EMPLOYMENT_TYPES[job.employmentType.toLowerCase()] ?? "FULL_TIME",

    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },

    jobLocation: {
      "@type": "Place",
      address: addressFor(job.location),
    },

    ...(remote ? { jobLocationType: "TELECOMMUTE" } : {}),

    industry: job.department,
    occupationalCategory: job.department,
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      description: job.experience,
    },

    skills: job.technologies.join(", "),
    url: absoluteUrl(`/careers/${job.slug}`),
    directApply: true,
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored content from data/jobs.ts.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
