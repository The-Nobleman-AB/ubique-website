"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersCTA() {
  return (
    <section
      className="
      py-40
      bg-[#071B3A]
      text-white
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        text-center
        "
      >

        <p
          className="
          uppercase
          tracking-[0.35em]
          text-[#4ADE80]
          font-semibold
          "
        >
          YOUR FUTURE STARTS HERE
        </p>

        <h2
          className="
          mt-8
          text-6xl
          lg:text-8xl
          font-black
          tracking-[-0.05em]
          leading-[0.9]
          "
        >
          Your Next
          Chapter
          Could Begin
          Here.
        </h2>

        <p
          className="
          mt-10
          max-w-3xl
          mx-auto
          text-xl
          leading-9
          text-blue-100
          "
        >
          If you're excited by meaningful work,
          continuous learning and solving
          complex business challenges alongside
          exceptional people, we'd love to hear
          your story.
        </p>

        <div
          className="
          mt-14
          flex
          justify-center
          "
        >
          <Link
            href="#job-explorer"
            scroll
            className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            bg-white
            px-10
            py-5
            text-lg
            font-semibold
            text-[#071B3A]
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-[#155EEF]
            hover:text-white
            "
          >

            Explore Open Roles

            <ArrowRight
              size={22}
              className="
              transition-transform
              duration-300
              group-hover:translate-x-2
              "
            />

          </Link>

        </div>

        <div
          className="
          mt-20
          flex
          justify-center
          "
        >

          <div
            className="
            h-px
            w-32
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            "
          />

        </div>

      </div>

    </section>
  );
}