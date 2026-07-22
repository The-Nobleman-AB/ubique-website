"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      className="
      bg-[#071B3A]
      relative
      overflow-hidden
      py-36
      "
    >

      {/* Background */}

      <div
        className="
        absolute
        left-[-220px]
        top-[-220px]
        w-[650px]
        h-[650px]
        rounded-full
        bg-[#155EEF]/15
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        right-[-220px]
        bottom-[-220px]
        w-[650px]
        h-[650px]
        rounded-full
        bg-[#12B76A]/10
        blur-[220px]
        "
      />

      <div
        className="
        relative
        z-10
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
          text-[#12B76A]
          font-semibold
          "
        >
          READY TO GET STARTED?
        </p>

        <h2
          className="
          mt-8
          text-[52px]
          lg:text-[76px]
          font-black
          leading-[0.92]
          tracking-[-0.04em]
          text-white
          "
        >
          Let's Build
          Something
          Exceptional
          Together.
        </h2>

        <p
          className="
          mt-10
          max-w-3xl
          mx-auto
          text-xl
          leading-9
          text-white/70
          "
        >
          Whether you're hiring exceptional talent,
          expanding your workforce or exploring your
          next career opportunity, we're ready to help
          you take the next step.
        </p>

        <div
          className="
          mt-16
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
          "
        >

          <Link
            href="#contact-form"
            className="
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#12B76A]
            px-9
            py-5
            font-semibold
            text-[#071B3A]
            transition-all
            duration-300
            hover:scale-105
            "
          >

            Discuss Your Hiring Needs

            <ArrowRight
              size={20}
              className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              "
            />

          </Link>

          <Link
            href="/careers"
            className="
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-white/15
            bg-white/5
            px-9
            py-5
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-white/10
            "
          >

            Explore Careers

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
        {/* Bottom Signature */}

        <div
          className="
          mt-24
          pt-12
          border-t
          border-white/10
          "
        >

          <div
            className="
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-8
            "
          >

            <div>

              <p
                className="
                text-3xl
                lg:text-4xl
                font-black
                text-white
                "
              >
                Ubique Systems
              </p>

              <p
                className="
                mt-3
                text-white/60
                text-lg
                "
              >
                Workforce Consulting • Technology Recruitment • Global Talent Solutions
              </p>

            </div>

            <div
              className="
              max-w-xl
              "
            >

              <p
                className="
                text-lg
                leading-8
                text-white/60
                lg:text-right
                "
              >
                Trusted by organisations seeking exceptional
                technology talent and workforce expertise.
                We look forward to starting the conversation.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}