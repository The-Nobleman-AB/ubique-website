"use client";

import Link from "next/link";
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
      "Deliver digital transformation through SAP, Cloud, AI, Data, Microsoft technologies and enterprise consulting services.",
    icon: Cpu,
  },
  {
    title: "HR Consulting",
    description:
      "Enable organisational growth through workforce strategy, HR transformation, compliance and people advisory services.",
    icon: Users,
  },
  {
    title: "Staffing Solutions",
    description:
      "Access specialist professionals through permanent, contract and project-based workforce solutions across global markets.",
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-40">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p
            className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
            "
          >
            SERVICES
          </p>

          <h2
            className="
              mt-4
              text-5xl
              font-black
              lg:text-6xl
            "
          >
            Solutions Built
            <br />
            For Growth
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-xl
              leading-8
              text-gray-500
            "
          >
            Delivering technology consulting, HR consulting and
            workforce solutions that help organisations transform,
            grow and scale globally.
          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-3
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
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                {/* Background Glow */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-44
                    w-44
                    rounded-full
                    bg-[#155EEF]/20
                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                      transition-all
                      duration-300
                      group-hover:bg-white/15
                    "
                  >

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h3
                    className="
                      mt-8
                      text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      leading-8
                      text-white/75
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

        {/* Explore Services */}

        <div className="mt-16 flex justify-center">

          <Link
            href="/services#services-overview"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-lg
              font-semibold
              text-[#155EEF]
              transition-all
              duration-300
              hover:gap-4
            "
          >

            Explore All Services

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </Link>

        </div>

      </div>

    </section>
  );
}