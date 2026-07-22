"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section
      className="
      py-40
      bg-white
      overflow-hidden
      relative
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        pointer-events-none
        "
      >
        <div
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-[#155EEF]/5
          blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div
          className="
          rounded-[48px]
          overflow-hidden
          bg-[#071B3A]
          relative
          "
        >

          {/* Decorative Glow */}

          <div
            className="
            absolute
            -top-40
            -right-40
            w-[600px]
            h-[600px]
            rounded-full
            bg-[#155EEF]/20
            blur-[180px]
            "
          />

          <div
            className="
            relative
            z-10
            px-10
            py-20
            lg:px-20
            lg:py-24
            "
          >

            <div className="max-w-5xl">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                READY TO BUILD YOUR TEAM?
              </p>

              <h2
                className="
                mt-6
                text-6xl
                lg:text-7xl
                font-black
                text-white
                leading-[0.95]
                "
              >
                Let's Build
                <br />
                What's Next.
              </h2>

              <p
                className="
                mt-8
                text-xl
                text-white/70
                leading-relaxed
                max-w-3xl
                "
              >
                Whether you're hiring one specialist,
                building an offshore capability centre
                or scaling global delivery teams,
                Ubique is ready to become your workforce
                partner.
              </p>

            </div>

            {/* Stats */}

            <div
              className="
              mt-16
              grid
              md:grid-cols-3
              gap-6
              "
            >

              <div
                className="
                rounded-[28px]
                bg-white/5
                border
                border-white/10
                p-8
                "
              >

                <div
                  className="
                  text-5xl
                  font-black
                  text-white
                  "
                >
                  15+
                </div>

                <p
                  className="
                  mt-3
                  text-white/60
                  "
                >
                  Countries Supported
                </p>

              </div>

              <div
                className="
                rounded-[28px]
                bg-white/5
                border
                border-white/10
                p-8
                "
              >

                <div
                  className="
                  text-5xl
                  font-black
                  text-white
                  "
                >
                  Enterprise
                </div>

                <p
                  className="
                  mt-3
                  text-white/60
                  "
                >
                  Technology Specialists
                </p>

              </div>

              <div
                className="
                rounded-[28px]
                bg-white/5
                border
                border-white/10
                p-8
                "
              >

                <div
                  className="
                  text-5xl
                  font-black
                  text-white
                  "
                >
                  Global
                </div>

                <p
                  className="
                  mt-3
                  text-white/60
                  "
                >
                  Workforce Partner
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div
              className="
              mt-16
              flex
              flex-wrap
              gap-5
              "
            >

              <Link
                href="/contact"
                className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-[#12B76A]
                px-8
                py-4
                text-white
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Speak To Our Experts
              </Link>

              <Link
                href="/countries/india"
                className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/20
                px-8
                py-4
                text-white
                font-semibold
                hover:bg-white/10
                transition-all
                duration-300
                "
              >
                Explore Talent Markets

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}