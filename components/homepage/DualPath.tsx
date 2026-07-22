"use client";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function DualPath() {
  return (
    <section className="py-40 bg-[#F8FAFC]">

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
            WHO WE HELP
          </p>

          <h2
            className="
            text-6xl
            font-black
            mt-4
            "
          >
            Built For Both Sides
            <br />
            Of The Talent Equation
          </h2>

        </div>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
          mt-20
          "
        >

          {/* Employers */}

          <div
            className="
            bg-[#071B3A]
            rounded-[32px]
            p-12
            relative
            overflow-hidden
            "
          >

            <div
              className="
              absolute
              top-0
              right-0
              w-60
              h-60
              bg-blue-500/20
              blur-[100px]
              "
            />

            <div className="relative z-10">

              <p className="text-[#12B76A] font-semibold">
                FOR EMPLOYERS
              </p>

              <h3
                className="
                text-white
                text-5xl
                font-black
                mt-6
                "
              >
                Build
                <br />
                World-Class
                <br />
                Teams
              </h3>

              <p
                className="
                text-white/70
                mt-8
                text-lg
                max-w-md
                "
              >
                Access highly skilled professionals
                across technology, engineering,
                consulting and business functions.
              </p>

          <Link
            href="/contact"
            className="
            group
            mt-10
            inline-flex
            items-center
            gap-2
            font-semibold
            text-[#12B76A]
            transition-all
            duration-300
            hover:gap-3
            "
          >
            Hire Talent

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

          {/* Candidates */}

          <div
            className="
            bg-white
            border
            border-gray-200
            rounded-[32px]
            p-12
            relative
            overflow-hidden
            "
          >

            <div
              className="
              absolute
              top-0
              right-0
              w-60
              h-60
              bg-green-500/10
              blur-[100px]
              "
            />

            <div className="relative z-10">

              <p className="text-[#155EEF] font-semibold">
                FOR CANDIDATES
              </p>

              <h3
                className="
                text-5xl
                font-black
                mt-6
                "
              >
                Build
                <br />
                Global
                <br />
                Careers
              </h3>

              <p
                className="
                text-gray-500
                mt-8
                text-lg
                max-w-md
                "
              >
                Discover international opportunities,
                career guidance and access to leading
                employers worldwide.
              </p>

          <Link
            href="/careers"
            className="
            group
            mt-10
            inline-flex
            items-center
            gap-2
            font-semibold
            text-[#155EEF]
            transition-all
            duration-300
            hover:gap-3
            "
          >
            Explore Opportunities

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

        </div>

      </div>

    </section>
  );
}
