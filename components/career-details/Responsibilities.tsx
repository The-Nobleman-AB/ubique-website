"use client";

import { Job } from "@/data/jobs";

interface ResponsibilitiesProps {
  job: Job;
}

export default function Responsibilities({
  job,
}: ResponsibilitiesProps) {
  return (
    <section
      className="
      py-28
      bg-white
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
              RESPONSIBILITIES
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
              What You'll
              Be Doing.
            </h2>

            <p
              className="
              mt-8
              text-xl
              leading-9
              text-gray-600
              "
            >
              Every role at Ubique contributes
              directly to solving meaningful
              business challenges for our clients.
            </p>
          </div>

          {/* Right */}

          <div
            className="
            lg:col-span-8
            "
          >
            {job.responsibilities.map(
              (responsibility, index) => (

                <article
                  key={responsibility}
                  className={`
                    group
                    relative
                    py-10
                    transition-all
                    duration-500

                    ${
                      index !==
                      job.responsibilities.length - 1
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

                    </div>

                    {/* Content */}

                    <div>

                      <h3
                        className="
                        text-3xl
                        font-black
                        tracking-[-0.03em]
                        text-[#071B3A]
                        transition-all
                        duration-300
                        group-hover:translate-x-2
                        "
                      >
                        {responsibility}
                      </h3>

                      <p
                        className="
                        mt-5
                        max-w-3xl
                        text-lg
                        leading-8
                        text-gray-600
                        "
                      >
                        This responsibility plays an
                        key role in delivering
                        high-quality outcomes,
                        collaborating across teams
                        and creating measurable value
                        for our clients.
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

              )
            )}

          </div>

        </div>

      </div>

    </section>

  );

}