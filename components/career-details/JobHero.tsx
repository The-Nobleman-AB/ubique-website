import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Clock3, MapPin } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import type { Job } from "@/lib/job-types";

interface JobHeroProps {
  job: Job;
}

export default function JobHero({ job }: JobHeroProps) {
  return (
    <PageHero
      eyebrow={job.department}
      title={job.title}
      intro={job.description}
      breadcrumbs={[{ name: "Careers", href: "/careers" }, { name: job.title }]}
      actions={[
        { label: "Apply for this role", href: "#application-form" },
        { label: "See all roles", href: "/careers", variant: "ghost" },
      ]}
      aside={
        <div className="rounded-panel border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="eyebrow text-white/50">Position summary</p>

          <dl className="mt-6 flex flex-col gap-5">
            {[
              { label: "Location", value: job.location, icon: MapPin },
              {
                label: "Workplace",
                value: job.workplace,
                icon: BriefcaseBusiness,
              },
              { label: "Employment", value: job.employmentType, icon: Clock3 },
              { label: "Experience", value: job.experience, icon: null },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                {row.icon ? (
                  <row.icon
                    size={18}
                    aria-hidden="true"
                    className="text-accent mt-1 shrink-0"
                  />
                ) : (
                  <span className="w-[18px] shrink-0" aria-hidden="true" />
                )}
                <div>
                  <dt className="text-xs tracking-wider text-white/50 uppercase">
                    {row.label}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-white">
                    {row.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <Link
            href="#application-form"
            className="rounded-control bg-accent hover:bg-accent-dark mt-8 flex items-center justify-center gap-2 py-3.5 font-semibold text-white transition-colors"
          >
            Apply now
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      }
    />
  );
}
