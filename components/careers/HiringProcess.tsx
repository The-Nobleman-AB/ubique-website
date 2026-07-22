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
    <section
      className="
      py-36
      bg-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className="
          max-w-4xl
          "
        >

          <p
            className="
            uppercase
            tracking-[0.35em]
            font-semibold
            text-[#12B76A]
            "
          >
            HIRING JOURNEY
          </p>

          <h2
            className="
            mt-6
            text-5xl
            lg:text-6xl
            font-black
            tracking-[-0.04em]
            leading-[0.95]
            text-[#071B3A]
            "
          >
            A Transparent
            Hiring Process.
          </h2>

          <p
            className="
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-gray-600
            "
          >
            We believe great recruitment should
            be clear, respectful and transparent.
            Here's what you can expect from the
            moment you apply to the day you join
            Ubique.
          </p>

        </div>

        {/* Process */}

        <div
          className="
          mt-24
          relative
          "
        >
          {steps.map((step, index) => (

            <article
              key={step.number}
              className={`
                group
                relative
                py-14
                transition-all
                duration-500

                ${
                  index !== steps.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }
              `}
            >

              <div
                className="
                grid
                lg:grid-cols-12
                gap-10
                items-start
                "
              >

                {/* Number */}

                <div
                  className="
                  lg:col-span-2
                  "
                >

                  <span
                    className="
                    text-5xl
                    lg:text-6xl
                    font-black
                    tracking-[-0.05em]
                    text-gray-300
                    transition-all
                    duration-300
                    group-hover:text-[#155EEF]
                    "
                  >
                    {step.number}
                  </span>

                </div>

                {/* Content */}

                <div
                  className="
                  lg:col-span-8
                  "
                >

                  <h3
                    className="
                    text-3xl
                    lg:text-4xl
                    font-black
                    tracking-[-0.03em]
                    text-[#071B3A]
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-gray-600
                    transition-colors
                    duration-300
                    group-hover:text-gray-800
                    "
                  >
                    {step.description}
                  </p>

                </div>

                {/* Time */}

                <div
                  className="
                  lg:col-span-2
                  lg:text-right
                  "
                >

                  <span
                    className="
                    inline-flex
                    rounded-full
                    border
                    border-gray-200
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-gray-500
                    "
                  >
                    Step {step.number}
                  </span>

                </div>

              </div>

              {/* Hover Underline */}

              <div
                className="
                absolute
                left-0
                bottom-0
                h-[2px]
                w-0
                bg-[#155EEF]
                transition-all
                duration-500
                group-hover:w-full
                "
              />

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}