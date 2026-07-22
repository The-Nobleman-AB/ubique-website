"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesCTA() {
  return (
    <section className="border-t border-gray-200 bg-[#F8FAFC] py-28">

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#155EEF]">
          Let's Talk
        </p>

        <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-[#071B3A] lg:text-6xl">
          Let's Discuss Your
          <br />
          Industry Requirements
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
          Whether you're modernising enterprise platforms,
          expanding digital capabilities or strengthening your
          technology workforce, our specialists are ready to
          support your organisation with tailored solutions.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-[#155EEF]
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#0E4CD3]
            "
          >
            Contact Us

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/services"
            className="
              inline-flex
              items-center
              rounded-2xl
              border
              border-gray-300
              px-8
              py-4
              font-semibold
              text-[#071B3A]
              transition-all
              duration-300
              hover:border-[#155EEF]
              hover:text-[#155EEF]
            "
          >
            Explore Services
          </Link>

        </div>

      </div>

    </section>
  );
}