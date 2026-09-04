import {
  Globe2,
  GraduationCap,
  Laptop,
  TrendingUp,
  HeartHandshake,
  BriefcaseBusiness,
} from "lucide-react";

import type { Job } from "@/lib/job-types";

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

export default function WhatYouGain({ job }: WhatYouGainProps) {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left */}

          <div className="lg:col-span-4">
            <p className="eyebrow text-accent">What you'll gain</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              More Than Just A Job.
            </h2>

            <p className="text-muted mt-8 text-xl leading-relaxed">
              We're committed to helping every team member grow professionally,
              personally and technically while working on meaningful projects.
            </p>
          </div>

          {/* Right */}

          <div className="grid gap-8 md:grid-cols-2 lg:col-span-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-card hover:border-brand/30 border-line relative overflow-hidden border bg-white p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="rounded-control bg-brand-tint group-hover:bg-brand flex h-14 w-14 items-center justify-center transition-all duration-200">
                    <Icon
                      size={28}
                      className="text-brand transition-colors duration-200 group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-navy mt-8 text-2xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="text-muted mt-5 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="bg-brand absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
