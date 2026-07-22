"use client";

import { Job } from "@/data/jobs";

interface TechnologyStackProps {
  job: Job;
}

export default function TechnologyStack({
  job,
}: TechnologyStackProps) {

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
              TECHNOLOGY STACK
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
              Tools &
              Technologies.
            </h2>

            <p
              className="
              mt-8
              text-xl
              leading-9
              text-gray-600
              "
            >
              The platforms and technologies
              you'll use to build modern,
              enterprise-grade solutions.
            </p>

          </div>

          {/* Right */}

          <div
            className="
            lg:col-span-8
            "
          >
            {job.technologies.map((technology, index) => (

              <article
                key={technology}
                className={`
                  group
                  relative
                  py-10
                  transition-all
                  duration-500

                  ${
                    index !== job.technologies.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }
                `}
              >

                <div
                  className="
                  grid
                  grid-cols-[90px_1fr_auto]
                  gap-8
                  items-center
                  "
                >

                  {/* Number */}

                  <span
                    className="
                    text-5xl
                    font-black
                    tracking-[-0.04em]
                    text-gray-300
                    transition-all
                    duration-300
                    group-hover:text-[#155EEF]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Technology */}

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
                      {technology}
                    </h3>

                    <p
                      className="
                      mt-3
                      text-gray-500
                      "
                    >
                      Technology used within this role.
                    </p>

                  </div>

                  {/* Badge */}

                  <div
                    className="
                    hidden
                    md:flex
                    "
                  >

                    <span
                      className="
                      rounded-full
                      border
                      border-[#155EEF]/20
                      bg-[#EEF4FF]
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-[#155EEF]
                      "
                    >
                      Required
                    </span>

                  </div>

                </div>

                {/* Hover underline */}

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