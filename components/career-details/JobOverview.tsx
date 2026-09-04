import type { Job } from "@/lib/job-types";

interface JobOverviewProps {
  job: Job;
}

export default function JobOverview({ job }: JobOverviewProps) {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left */}

          <div className="lg:col-span-4">
            <p className="eyebrow text-accent">Role overview</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Why This Role Matters.
            </h2>
          </div>

          {/* Right */}

          <div className="lg:col-span-8">
            <p className="display-3 text-navy font-light">{job.description}</p>

            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <div className="border-line border-t pt-8">
                <p className="eyebrow text-accent">Your Impact</p>

                <h3 className="text-navy mt-4 text-2xl font-bold">
                  Deliver Enterprise Value
                </h3>

                <p className="text-muted mt-5 leading-relaxed">
                  Help organisations solve complex business problems through
                  modern technology, consulting expertise and measurable
                  outcomes.
                </p>
              </div>

              <div className="border-line border-t pt-8">
                <p className="eyebrow text-accent">Collaboration</p>

                <h3 className="text-navy mt-4 text-2xl font-bold">
                  Work Across Teams
                </h3>

                <p className="text-muted mt-5 leading-relaxed">
                  Collaborate with consultants, architects, engineers and client
                  stakeholders throughout the project lifecycle.
                </p>
              </div>

              <div className="border-line border-t pt-8">
                <p className="eyebrow text-accent">Growth</p>

                <h3 className="text-navy mt-4 text-2xl font-bold">
                  Learn Continuously
                </h3>

                <p className="text-muted mt-5 leading-relaxed">
                  Gain exposure to enterprise technologies, certifications,
                  mentoring and real-world project experience.
                </p>
              </div>

              <div className="border-line border-t pt-8">
                <p className="eyebrow text-accent">Career Path</p>

                <h3 className="text-navy mt-4 text-2xl font-bold">
                  Grow With Ubique
                </h3>

                <p className="text-muted mt-5 leading-relaxed">
                  Build a long-term consulting career with opportunities to take
                  on greater responsibility and leadership over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
