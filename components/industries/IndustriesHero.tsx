"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Cpu,
  Landmark,
  HeartPulse,
  Car,
  ShoppingBag,
} from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B3A] via-[#0C2F63] to-[#155EEF] pt-40 pb-28">

      {/* Background */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-[#2E90FA] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#12B76A] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-8">

        {/* Left */}

        <div className="flex-1">

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              bg-white/10
              px-5
              py-2
              text-white
              backdrop-blur-xl
            "
          >

            <Building2
              size={18}
              className="text-[#8FD8FF]"
            />

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Industry Expertise
            </span>

          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-[-0.04em] text-white lg:text-7xl">

            Technology Expertise
            <br />

            Tailored For
            <br />

            Every Industry

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-blue-100">

            Every industry has unique business challenges,
            regulatory requirements and technology priorities.
            Ubique Systems delivers consulting, enterprise
            technology solutions and specialist talent aligned
            to the needs of your sector.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                py-4
                font-semibold
                text-[#071B3A]
                transition-all
                duration-300
                hover:scale-105
              "
            >

              Talk To Our Experts

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

            <Link
              href="/services"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/20
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/10
              "
            >

              View Services

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1">

          <div className="grid grid-cols-2 gap-6">

            {[
              {
                icon: Factory,
                title: "Manufacturing",
              },
              {
                icon: Landmark,
                title: "Banking",
              },
              {
                icon: HeartPulse,
                title: "Healthcare",
              },
              {
                icon: ShoppingBag,
                title: "Retail",
              },
              {
                icon: Car,
                title: "Automotive",
              },
              {
                icon: Cpu,
                title: "Technology",
              },
            ].map((industry) => {

              const Icon = industry.icon;

              return (

                <div
                  key={industry.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/10
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-white/20
                    hover:bg-white/15
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/10
                    "
                  >

                    <Icon
                      size={30}
                      className="
                        text-[#8FD8FF]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">

                    {industry.title}

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-blue-100">

                    Industry-focused consulting and enterprise
                    technology expertise.

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