import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { getPublishedJobs } from "@/lib/jobs";

/**
 * Current openings on the homepage.
 *
 * The live ubique-systems.com leads with "Current Openings" and "Recent Job
 * Postings" — for a recruitment business, live roles are the most compelling
 * thing on the page, and the rebuild had buried them two clicks deep.
 *
 * Renders nothing when there are no open roles, so the homepage never shows an
 * empty careers section.
 */
export default async function OpenRoles() {
  const jobs = (await getPublishedJobs()).slice(0, 4);

  if (jobs.length === 0) return null;

  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Current openings"
          title="Roles we're hiring for right now"
          lead="Applying takes about two minutes — one page, your CV, done."
          action={{ label: "All open roles", href: "/careers" }}
        />

        <ul className="mt-12 flex flex-col gap-3">
          {jobs.map((job) => (
            <li key={job.id}>
              <Link
                href={`/careers/${job.slug}`}
                className="group rounded-card border-line hover:border-brand/40 hover:shadow-card flex flex-wrap items-center gap-x-8 gap-y-3 border bg-white p-6 transition-all"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-navy group-hover:text-brand text-lg font-semibold">
                    {job.title}
                  </h3>

                  <p className="text-muted mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} aria-hidden="true" />
                      {job.location}
                    </span>
                    <span>{job.workplace}</span>
                    <span>{job.experience}</span>
                  </p>
                </div>

                <ul className="hidden flex-wrap gap-1.5 lg:flex">
                  {job.technologies.slice(0, 3).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-pill bg-brand-tint text-brand px-2.5 py-1 text-xs font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <span className="text-brand inline-flex shrink-0 items-center gap-2 text-sm font-semibold">
                  View role
                  <ArrowRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
