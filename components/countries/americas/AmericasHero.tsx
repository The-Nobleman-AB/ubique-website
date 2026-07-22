"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Building2,
  Briefcase,
  Cpu,
} from "lucide-react";

const capabilities = [
  "Enterprise Consulting",
  "Technology Solutions",
  "Staffing Solutions",
];

export default function AmericasHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF4FF] pt-40 pb-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            -left-32
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#155EEF]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#12B76A]/10
            blur-3xl
          "
        />

      </div>

      <Globe2
        size={460}
        className="
          absolute
          right-[-60px]
          top-16
          text-[#155EEF]/5
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#155EEF]/15
                bg-white
                px-5
                py-2
                shadow-sm
              "
            >

              <Building2
                size={18}
                className="text-[#155EEF]"
              />

              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#155EEF]
                "
              >
                Americas
              </span>

            </div>

            <h1
              className="
                mt-8
                text-6xl
                font-black
                leading-[0.95]
                tracking-tight
                text-[#071B3A]
                lg:text-8xl
              "
            >
              Supporting
              Business Growth
              Across North America
            </h1>

            <p
              className="
                mt-10
                max-w-3xl
                text-xl
                leading-9
                text-gray-600
              "
            >
              Helping organisations across North America
              through enterprise consulting, technology
              expertise and workforce solutions designed
              for long-term business success.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {capabilities.map((item) => (

                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#071B3A]
                    shadow-sm
                  "
                >
                  {item}
                </span>

              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#155EEF]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Contact Our Team

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
                  rounded-xl
                  border
                  border-gray-300
                  px-8
                  py-4
                  font-semibold
                  text-[#071B3A]
                  transition
                  hover:bg-white
                "
              >
                View Services
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
                rounded-[36px]
                border
                border-gray-200
                bg-white/90
                p-10
                shadow-[0_30px_80px_rgba(7,27,58,0.08)]
                backdrop-blur-md
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EEF4FF]
                  "
                >
                  <Globe2
                    size={32}
                    className="text-[#155EEF]"
                  />
                </div>

                <div>

                  <p className="uppercase tracking-[0.25em] text-sm text-gray-500">
                    North America
                  </p>

                  <h3 className="mt-2 text-4xl font-black text-[#071B3A]">
                    United States
                  </h3>

                </div>

              </div>

              <div className="my-10 h-px bg-gray-200" />

              <div className="space-y-5">

                <div className="flex items-center gap-4">

                  <Briefcase
                    size={20}
                    className="text-[#155EEF]"
                  />

                  <span>Enterprise Consulting</span>

                </div>

                <div className="flex items-center gap-4">

                  <Cpu
                    size={20}
                    className="text-[#155EEF]"
                  />

                  <span>Technology Solutions</span>

                </div>

                <div className="flex items-center gap-4">

                  <Building2
                    size={20}
                    className="text-[#155EEF]"
                  />

                  <span>Staffing Solutions</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}