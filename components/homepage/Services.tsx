"use client";

import {
  Cpu,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "IT Consulting",
    description:
      "Build high-performance technology teams across SAP, Cloud, AI and Engineering.",
    icon: Cpu,
  },
  {
    title: "HR Consulting",
    description:
      "Optimize workforce strategy, compliance and organizational growth.",
    icon: Users,
  },
  {
    title: "Staffing Solutions",
    description:
      "Access specialized talent quickly with flexible hiring models.",
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <section className="py-40 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#155EEF]
            font-semibold
            "
          >
            SERVICES
          </p>

          <h2
            className="
            text-6xl
            font-black
            mt-4
            "
          >
            Solutions Built For Growth
          </h2>

          <p
            className="
            text-xl
            text-gray-500
            mt-6
            max-w-3xl
            mx-auto
            "
          >
            End-to-end workforce solutions helping
            organizations scale globally.
          </p>

        </div>

        <div
          className="
          mt-20
          grid
          lg:grid-cols-3
          gap-8
          "
        >

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-[#071B3A]
                p-10
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >
                {/* Glow */}

                <div
                  className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-blue-500/20
                  blur-3xl
                  "
                />

                <div
                  className="
                  relative
                  z-10
                  "
                >
                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon
                      size={32}
                      className="text-white"
                    />
                  </div>

                  <h3
                    className="
                    text-white
                    text-3xl
                    font-bold
                    mt-8
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                    text-white/70
                    mt-5
                    leading-relaxed
                    "
                  >
                    {service.description}
                  </p>

                  <button
                    className="
                    flex
                    items-center
                    gap-2
                    text-[#12B76A]
                    font-semibold
                    mt-8
                    "
                  >
                    Learn More

                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}