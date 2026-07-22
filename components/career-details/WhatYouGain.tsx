"use client";

import {
  Globe2,
  GraduationCap,
  Laptop,
  TrendingUp,
  HeartHandshake,
  BriefcaseBusiness,
} from "lucide-react";

import { Job } from "@/data/jobs";

interface WhatYouGainProps {
  job: Job;
}

const benefits = [
  {
    icon: Globe2,
    title: "Global Exposure",
    description:
      "Collaborate with international clients and multicultural teams on enterprise programmes.",
  },

  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Expand your expertise through mentoring, certifications and hands-on project experience.",
  },

  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Take ownership, develop leadership skills and grow your consulting career over time.",
  },

  {
    icon: Laptop,
    title: "Flexible Working",
    description:
      "Hybrid and remote collaboration designed around trust and delivering exceptional outcomes.",
  },

  {
    icon: HeartHandshake,
    title: "People First",
    description:
      "Join a supportive culture where collaboration, respect and long-term relationships come first.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Enterprise Projects",
    description:
      "Work on meaningful technology initiatives for leading organisations across industries.",
  },
];

export default function WhatYouGain({
  job,
}: WhatYouGainProps) {
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
              WHAT YOU'LL GAIN
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
              More Than
              Just A Job.
            </h2>

            <p
              className="
              mt-8
              text-xl
              leading-9
              text-gray-600
              "
            >
              We're committed to helping every
              team member grow professionally,
              personally and technically while
              working on meaningful projects.
            </p>
          </div>

          {/* Right */}

          <div
            className="
            lg:col-span-8
            grid
            md:grid-cols-2
            gap-8
            "
          >
            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (

                <article
                  key={benefit.title}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-gray-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#155EEF]/30
                  hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                  "
                >

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EEF4FF]
                    transition-all
                    duration-300
                    group-hover:bg-[#155EEF]
                    "
                  >

                    <Icon
                      size={28}
                      className="
                      text-[#155EEF]
                      transition-colors
                      duration-300
                      group-hover:text-white
                      "
                    />

                  </div>

                  <h3
                    className="
                    mt-8
                    text-2xl
                    font-black
                    tracking-[-0.03em]
                    text-[#071B3A]
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                    mt-5
                    leading-8
                    text-gray-600
                    "
                  >
                    {benefit.description}
                  </p>

                  <div
                    className="
                    absolute
                    left-0
                    bottom-0
                    h-1
                    w-0
                    bg-[#155EEF]
                    transition-all
                    duration-500
                    group-hover:w-full
                    "
                  />

                </article>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );

}