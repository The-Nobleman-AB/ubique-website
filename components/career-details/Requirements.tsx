import { Check } from "lucide-react";

import type { Job } from "@/lib/job-types";

interface RequirementsProps {
  job: Job;
}

export default function Requirements({ job }: RequirementsProps) {
  const midpoint = Math.ceil(job.requirements.length / 2);

  const required = job.requirements.slice(0, midpoint);

  const preferred = job.requirements.slice(midpoint);

  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left */}

          <div className="lg:col-span-4">
            <p className="eyebrow text-accent">Requirements</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Skills & Experience.
            </h2>

            <p className="text-muted mt-8 text-xl leading-relaxed">
              We value curiosity, collaboration and continuous learning. If you
              don't meet every requirement but believe you can make an impact,
              we'd still love to hear from you.
            </p>
          </div>

          {/* Right */}

          <div className="grid gap-12 md:grid-cols-2 lg:col-span-8">
            {/* Required */}

            <div>
              <p className="eyebrow text-brand">Essential</p>

              <h3 className="text-navy display-4 mt-4 font-bold">
                Required Qualifications
              </h3>

              <div className="mt-10 space-y-6">
                {required.map((item) => (
                  <div
                    key={item}
                    className="group border-line flex items-start gap-5 border-b pb-6"
                  >
                    <div className="bg-brand-tint group-hover:bg-brand mt-1 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200">
                      <Check
                        size={16}
                        className="text-brand group-hover:text-white"
                      />
                    </div>

                    <p className="text-navy flex-1 text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferred */}

            <div>
              <p className="eyebrow text-muted">Preferred</p>

              <h3 className="text-navy display-4 mt-4 font-bold">
                Nice to Have
              </h3>

              <div className="mt-10 space-y-6">
                {preferred.length > 0 ? (
                  preferred.map((item) => (
                    <div
                      key={item}
                      className="group border-line flex items-start gap-5 border-b pb-6"
                    >
                      <div className="group-hover:border-brand border-line mt-1 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200">
                        <Check
                          size={16}
                          className="group-hover:text-brand text-muted"
                        />
                      </div>

                      <p className="text-muted flex-1 text-lg leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted text-lg leading-relaxed">
                    There are no additional preferred qualifications for this
                    position. If you meet the essential requirements, we
                    encourage you to apply.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
