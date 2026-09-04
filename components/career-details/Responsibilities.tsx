import type { Job } from "@/lib/job-types";

interface ResponsibilitiesProps {
  job: Job;
}

export default function Responsibilities({ job }: ResponsibilitiesProps) {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left */}

          <div className="lg:col-span-4">
            <p className="eyebrow text-accent">Responsibilities</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              What You'll Be Doing.
            </h2>

            <p className="text-muted mt-8 text-xl leading-relaxed">
              Every role at Ubique contributes directly to solving meaningful
              business challenges for our clients.
            </p>
          </div>

          {/* Right */}

          <div className="lg:col-span-8">
            {job.responsibilities.map((responsibility, index) => (
              <article
                key={responsibility}
                className={`group relative py-10 transition-all duration-500 ${
                  index !== job.responsibilities.length - 1
                    ? "border-line border-b"
                    : ""
                } `}
              >
                <div className="grid grid-cols-[90px_1fr] items-start gap-8">
                  {/* Number */}

                  <div>
                    <span className="display-2 group-hover:text-brand text-muted/70 font-bold transition-all duration-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="text-navy display-4 font-bold transition-all duration-200 group-hover:translate-x-2">
                      {responsibility}
                    </h3>

                    <p className="text-muted mt-5 max-w-3xl text-lg leading-relaxed">
                      This responsibility plays an key role in delivering
                      high-quality outcomes, collaborating across teams and
                      creating measurable value for our clients.
                    </p>
                  </div>
                </div>

                {/* Hover Line */}

                <div className="bg-brand absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
