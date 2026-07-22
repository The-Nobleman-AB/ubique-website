"use client";

import { Job } from "@/data/jobs";

interface JobOverviewProps {
  job: Job;
}

export default function JobOverview({
  job,
}: JobOverviewProps) {
  return (
    <section
      className="
      py-28
      bg-[#F8FAFC]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >
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
              ROLE OVERVIEW
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
              Why This
              Role
              Matters.
            </h2>

          </div>

          {/* Right */}

          <div
            className="
            lg:col-span-8
            "
          >

            <p
              className="
              text-[30px]
              lg:text-[38px]
              leading-[1.4]
              tracking-[-0.03em]
              font-light
              text-[#071B3A]
              "
            >
              {job.description}
            </p>

            <div
              className="
              mt-16
              grid
              md:grid-cols-2
              gap-10
              "
            >
              <div
                className="
                border-t
                border-gray-300
                pt-8
                "
              >

                <p
                  className="
                  text-sm
                  uppercase
                  tracking-[0.28em]
                  font-semibold
                  text-[#12B76A]
                  "
                >
                  Your Impact
                </p>

                <h3
                  className="
                  mt-4
                  text-2xl
                  font-black
                  tracking-[-0.03em]
                  text-[#071B3A]
                  "
                >
                  Deliver Enterprise Value
                </h3>

                <p
                  className="
                  mt-5
                  leading-8
                  text-gray-600
                  "
                >
                  Help organisations solve complex
                  business problems through modern
                  technology, consulting expertise
                  and measurable outcomes.
                </p>

              </div>

              <div
                className="
                border-t
                border-gray-300
                pt-8
                "
              >

                <p
                  className="
                  text-sm
                  uppercase
                  tracking-[0.28em]
                  font-semibold
                  text-[#12B76A]
                  "
                >
                  Collaboration
                </p>

                <h3
                  className="
                  mt-4
                  text-2xl
                  font-black
                  tracking-[-0.03em]
                  text-[#071B3A]
                  "
                >
                  Work Across Teams
                </h3>

                <p
                  className="
                  mt-5
                  leading-8
                  text-gray-600
                  "
                >
                  Collaborate with consultants,
                  architects, engineers and client
                  stakeholders throughout the
                  project lifecycle.
                </p>

              </div>

              <div
                className="
                border-t
                border-gray-300
                pt-8
                "
              >

                <p
                  className="
                  text-sm
                  uppercase
                  tracking-[0.28em]
                  font-semibold
                  text-[#12B76A]
                  "
                >
                  Growth
                </p>

                <h3
                  className="
                  mt-4
                  text-2xl
                  font-black
                  tracking-[-0.03em]
                  text-[#071B3A]
                  "
                >
                  Learn Continuously
                </h3>

                <p
                  className="
                  mt-5
                  leading-8
                  text-gray-600
                  "
                >
                  Gain exposure to enterprise
                  technologies, certifications,
                  mentoring and real-world project
                  experience.
                </p>

              </div>

              <div
                className="
                border-t
                border-gray-300
                pt-8
                "
              >

                <p
                  className="
                  text-sm
                  uppercase
                  tracking-[0.28em]
                  font-semibold
                  text-[#12B76A]
                  "
                >
                  Career Path
                </p>

                <h3
                  className="
                  mt-4
                  text-2xl
                  font-black
                  tracking-[-0.03em]
                  text-[#071B3A]
                  "
                >
                  Grow With Ubique
                </h3>

                <p
                  className="
                  mt-5
                  leading-8
                  text-gray-600
                  "
                >
                  Build a long-term consulting
                  career with opportunities to take
                  on greater responsibility and
                  leadership over time.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}