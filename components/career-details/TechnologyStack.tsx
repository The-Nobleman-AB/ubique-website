import type { Job } from "@/lib/job-types";

interface TechnologyStackProps {
  job: Job;
}

export default function TechnologyStack({ job }: TechnologyStackProps) {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left */}

          <div className="lg:col-span-4">
            <p className="eyebrow text-accent">Technology stack</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Tools & Technologies.
            </h2>

            <p className="text-muted mt-8 text-xl leading-relaxed">
              The platforms and technologies you'll use to build modern,
              enterprise-grade solutions.
            </p>
          </div>

          {/* Right */}

          <div className="lg:col-span-8">
            {job.technologies.map((technology, index) => (
              <article
                key={technology}
                className={`group relative py-10 transition-all duration-500 ${
                  index !== job.technologies.length - 1
                    ? "border-line border-b"
                    : ""
                } `}
              >
                <div className="grid grid-cols-[90px_1fr_auto] items-center gap-8">
                  {/* Number */}

                  <span className="display-2 group-hover:text-brand text-muted/70 font-bold transition-all duration-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Technology */}

                  <div>
                    <h3 className="display-4 text-navy font-bold transition-all duration-200 group-hover:translate-x-2">
                      {technology}
                    </h3>

                    <p className="text-muted mt-3">
                      Technology used within this role.
                    </p>
                  </div>

                  {/* Badge */}

                  <div className="hidden md:flex">
                    <span className="border-brand/20 bg-brand-tint text-brand rounded-full border px-5 py-2 text-sm font-semibold">
                      Required
                    </span>
                  </div>
                </div>

                {/* Hover underline */}

                <div className="bg-brand absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
