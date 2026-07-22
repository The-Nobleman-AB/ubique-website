"use client";

import { Check } from "lucide-react";

import { Job } from "@/data/jobs";

interface RequirementsProps {
  job: Job;
}

export default function Requirements({
  job,
}: RequirementsProps) {

  const midpoint = Math.ceil(
    job.requirements.length / 2
  );

  const required = job.requirements.slice(
    0,
    midpoint
  );

  const preferred = job.requirements.slice(
    midpoint
  );

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
              REQUIREMENTS
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
              Skills &
              Experience.
            </h2>

            <p
              className="
              mt-8
              text-xl
              leading-9
              text-gray-600
              "
            >
              We value curiosity, collaboration
              and continuous learning. If you
              don't meet every requirement but
              believe you can make an impact,
              we'd still love to hear from you.
            </p>

          </div>

          {/* Right */}

          <div
            className="
            lg:col-span-8
            grid
            md:grid-cols-2
            gap-12
            "
          >
            {/* Required */}

            <div>

              <p
                className="
                uppercase
                tracking-[0.28em]
                text-sm
                font-semibold
                text-[#155EEF]
                "
              >
                Essential
              </p>

              <h3
                className="
                mt-4
                text-3xl
                font-black
                tracking-[-0.03em]
                text-[#071B3A]
                "
              >
                Required Qualifications
              </h3>

              <div
                className="
                mt-10
                space-y-6
                "
              >

                {required.map((item) => (

                  <div
                    key={item}
                    className="
                    group
                    flex
                    items-start
                    gap-5
                    pb-6
                    border-b
                    border-gray-200
                    "
                  >

                    <div
                      className="
                      mt-1
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EEF4FF]
                      transition-all
                      duration-300
                      group-hover:bg-[#155EEF]
                      "
                    >

                      <Check
                        size={16}
                        className="
                        text-[#155EEF]
                        group-hover:text-white
                        "
                      />

                    </div>

                    <p
                      className="
                      flex-1
                      text-lg
                      leading-8
                      text-gray-700
                      "
                    >
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Preferred */}

            <div>

              <p
                className="
                uppercase
                tracking-[0.28em]
                text-sm
                font-semibold
                text-gray-500
                "
              >
                Preferred
              </p>

              <h3
                className="
                mt-4
                text-3xl
                font-black
                tracking-[-0.03em]
                text-[#071B3A]
                "
              >
                Nice to Have
              </h3>

              <div
                className="
                mt-10
                space-y-6
                "
              >

                {preferred.length > 0 ? (

                  preferred.map((item) => (

                    <div
                      key={item}
                      className="
                      group
                      flex
                      items-start
                      gap-5
                      pb-6
                      border-b
                      border-gray-200
                      "
                    >

                      <div
                        className="
                        mt-1
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-300
                        transition-all
                        duration-300
                        group-hover:border-[#155EEF]
                        "
                      >

                        <Check
                          size={16}
                          className="
                          text-gray-500
                          group-hover:text-[#155EEF]
                          "
                        />

                      </div>

                      <p
                        className="
                        flex-1
                        text-lg
                        leading-8
                        text-gray-600
                        "
                      >
                        {item}
                      </p>

                    </div>

                  ))

                ) : (

                  <p
                    className="
                    text-lg
                    leading-8
                    text-gray-500
                    "
                  >
                    There are no additional preferred
                    qualifications for this position.
                    If you meet the essential
                    requirements, we encourage you to
                    apply.
                  </p>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}