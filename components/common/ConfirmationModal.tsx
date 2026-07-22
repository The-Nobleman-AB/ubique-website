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
    <section
      className="
      py-36
      bg-[#F8FAFC]
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          grid
          lg:grid-cols-12
          gap-20
          "
        >

          {/* Left */}

          <div
            className="
            lg:col-span-4
            lg:sticky
            lg:top-28
            self-start
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
              WHY UBIQUE
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
              Build a
              Career,
              Not Just
              a Job.
            </h2>

            <p
              className="
              mt-10
              text-xl
              leading-9
              text-gray-600
              "
            >
              The strongest careers are built through
              meaningful work, continuous learning,
              supportive teams and the freedom to grow.
              That's the environment we're committed to
              creating every day.
            </p>

          </div>

          {/* Right */}

          <div
            className="
            lg:col-span-8
            "
          >
            {reasons.map((reason, index) => (

              <article
                key={reason.number}
                className={`
                  group
                  relative
                  py-12
                  transition-all
                  duration-500

                  ${
                    index !== reasons.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }
                `}
              >

                <div
                  className="
                  grid
                  grid-cols-[90px_1fr]
                  gap-8
                  items-start
                  "
                >

                  {/* Number */}

                  <div>

                    <span
                      className="
                      text-4xl
                      font-black
                      tracking-[-0.03em]
                      text-gray-300
                      transition-all
                      duration-300
                      group-hover:text-[#155EEF]
                      "
                    >
                      {reason.number}
                    </span>

                  </div>

                  {/* Content */}

                  <div>

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
                      {reason.title}
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
                      {reason.description}
                    </p>

                  </div>

                </div>

                {/* Hover Line */}

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

      </div>

    </section>
  );
}