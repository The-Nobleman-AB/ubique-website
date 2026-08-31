"use client";

const reasons = [
  {
    number: "01",
    title: "Meaningful Work",
    description:
      "Contribute to enterprise programmes that solve complex business challenges and create measurable impact for organisations across industries.",
  },

  {
    number: "02",
    title: "Global Exposure",
    description:
      "Work alongside international clients, multicultural teams and experienced professionals on projects that span markets and technologies.",
  },

  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Develop through certifications, mentoring, real project experience and continuous opportunities to expand your technical and consulting expertise.",
  },

  {
    number: "04",
    title: "Ownership & Trust",
    description:
      "We encourage initiative, value accountability and empower every team member to make meaningful contributions from day one.",
  },

  {
    number: "05",
    title: "Flexible Ways of Working",
    description:
      "Hybrid and remote-first collaboration built around trust, communication and delivering outstanding outcomes rather than measuring hours.",
  },

  {
    number: "06",
    title: "Long-Term Growth",
    description:
      "Whether you're beginning your career or leading enterprise engagements, you'll find clear opportunities to grow with Ubique.",
  },
];

export default function WhyJoinUbique() {
  return (
    <section className="section-y-lg bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left */}

          <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
            <p className="eyebrow text-accent">Why UBIQUE</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Build a Career, Not Just a Job.
            </h2>

            <p className="text-muted mt-10 text-xl leading-relaxed">
              The strongest careers are built through meaningful work,
              continuous learning, supportive teams and the freedom to grow.
              That's the environment we're committed to creating every day.
            </p>
          </div>

          {/* Right */}

          <div className="lg:col-span-8">
            {reasons.map((reason, index) => (
              <article
                key={reason.number}
                className={`group relative py-12 transition-all duration-500 ${
                  index !== reasons.length - 1 ? "border-line border-b" : ""
                } `}
              >
                <div className="grid grid-cols-[90px_1fr] items-start gap-8">
                  {/* Number */}

                  <div>
                    <span className="group-hover:text-brand display-3 text-muted/70 font-bold transition-all duration-200">
                      {reason.number}
                    </span>
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="display-4 text-navy font-bold transition-all duration-200 group-hover:translate-x-2">
                      {reason.title}
                    </h3>

                    <p className="text-muted group-hover:text-navy mt-6 max-w-3xl text-lg leading-relaxed transition-colors duration-200">
                      {reason.description}
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
