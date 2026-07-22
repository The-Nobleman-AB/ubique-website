"use client";

import {
  Search,
  Lightbulb,
  Settings2,
  Handshake,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Understand",
    description:
      "We begin by understanding your industry, business goals, operational challenges and technology landscape.",
  },
  {
    icon: Lightbulb,
    title: "Design",
    description:
      "Our experts recommend the right combination of consulting, enterprise platforms and specialist talent.",
  },
  {
    icon: Settings2,
    title: "Deliver",
    description:
      "We execute through experienced consultants, proven delivery models and modern enterprise technologies.",
  },
  {
    icon: Handshake,
    title: "Support",
    description:
      "Beyond implementation, we continue supporting optimisation, growth and long-term transformation.",
  },
];

export default function WhyIndustries() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#155EEF]">
            Our Approach
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] text-[#071B3A]">
            How We Support
            <br />
            Every Industry
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Every engagement follows a structured approach that combines
            industry understanding, technology expertise and collaborative
            delivery to achieve long-term business value.
          </p>

        </div>

        <div className="relative mt-24">

          {/* Desktop connecting line */}

          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-[#E4E7EC] lg:block" />

          <div className="relative grid gap-12 lg:grid-cols-4">

            {process.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.title}
                  className="text-center"
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-[#155EEF]
                      text-white
                      shadow-lg
                    "
                  >

                    <Icon size={34} />

                  </div>

                  <div
                    className="
                      mt-6
                      inline-flex
                      rounded-full
                      bg-[#EEF4FF]
                      px-4
                      py-1
                      text-sm
                      font-bold
                      text-[#155EEF]
                    "
                  >
                    Step {index + 1}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#071B3A]">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {step.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}