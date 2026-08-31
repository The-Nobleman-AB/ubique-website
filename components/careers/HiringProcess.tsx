"use client";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Submit your application through our careers portal. Include your résumé and any relevant supporting information to help us understand your experience.",
  },

  {
    number: "02",
    title: "Initial Conversation",
    description:
      "Our recruitment team reviews every application carefully before scheduling an introductory conversation to learn more about your background and aspirations.",
  },

  {
    number: "03",
    title: "Assessment",
    description:
      "Depending on the role, you may complete a technical, functional or case-based assessment designed to reflect the type of work you'll be doing.",
  },

  {
    number: "04",
    title: "Final Discussion",
    description:
      "Meet the hiring manager and future teammates to discuss expectations, collaboration and how you'll contribute to our clients and organisation.",
  },

  {
    number: "05",
    title: "Offer & Onboarding",
    description:
      "Successful candidates receive an offer followed by a structured onboarding experience that helps them integrate quickly into their team.",
  },
];

export default function HiringProcess() {
  return (
    <section className="section-y-lg bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="eyebrow text-accent">Hiring journey</p>

          <h2 className="display-2 text-navy mt-4 font-bold">
            A Transparent Hiring Process.
          </h2>

          <p className="text-muted mt-8 max-w-3xl text-xl leading-relaxed">
            We believe great recruitment should be clear, respectful and
            transparent. Here's what you can expect from the moment you apply to
            the day you join Ubique.
          </p>
        </div>

        {/* Process */}

        <div className="relative mt-24">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`group relative py-14 transition-all duration-500 ${
                index !== steps.length - 1 ? "border-line border-b" : ""
              } `}
            >
              <div className="grid items-start gap-10 lg:grid-cols-12">
                {/* Number */}

                <div className="lg:col-span-2">
                  <span className="display-2 group-hover:text-brand text-muted/70 font-bold transition-all duration-200">
                    {step.number}
                  </span>
                </div>

                {/* Content */}

                <div className="lg:col-span-8">
                  <h3 className="display-4 text-navy font-bold transition-all duration-200 group-hover:translate-x-2">
                    {step.title}
                  </h3>

                  <p className="text-muted group-hover:text-navy mt-6 max-w-3xl text-lg leading-relaxed transition-colors duration-200">
                    {step.description}
                  </p>
                </div>

                {/* Time */}

                <div className="lg:col-span-2 lg:text-right">
                  <span className="border-line text-muted inline-flex rounded-full border px-4 py-2 text-sm font-semibold">
                    Step {step.number}
                  </span>
                </div>
              </div>

              {/* Hover Underline */}

              <div className="bg-brand absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
