"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#071B3A]
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
        blur-[200px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        "
      >

        <div
          className="
          rounded-[44px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          overflow-hidden
          "
        >

          <div
            className="
            grid
            lg:grid-cols-12
            gap-16
            items-center
            p-12
            lg:p-20
            "
          >

            {/* Left */}

            <div className="lg:col-span-7">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                LET'S BUILD WHAT'S NEXT
              </p>

              <h2
                className="
                mt-8
                text-5xl
                lg:text-7xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                "
              >
                The Right
                People Can
                Transform
                A Business.
              </h2>

              <p
                className="
                mt-10
                max-w-3xl
                text-xl
                leading-9
                text-white/70
                "
              >
                Whether you're expanding your technology
                teams, driving digital transformation or
                looking for specialist workforce expertise,
                we're ready to help you build capabilities
                that create long-term business value.
              </p>

            </div>

            {/* Right */}

            <div
              className="
              lg:col-span-5
              flex
              justify-center
              lg:justify-end
              "
            >

              <div
                className="
                flex
                flex-col
                gap-6
                w-full
                max-w-sm
                "
              >

                <Link
                  href="/contact"
                  className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-[#12B76A]
                  px-8
                  py-6
                  text-lg
                  font-bold
                  text-[#071B3A]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  "
                >

                  Contact Our Team

                  <ArrowRight
                    size={22}
                    className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                    "
                  />

                </Link>

                <Link
                  href="/services"
                  className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/5
                  px-8
                  py-6
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                  "
                >

                  Explore Our Services

                  <ArrowRight
                    size={22}
                    className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                    "
                  />

                </Link>

                <div
                  className="
                  rounded-2xl
                  border
                  border-white/10
                  p-8
                  "
                >

                  <p
                    className="
                    uppercase
                    tracking-[0.3em]
                    text-[#12B76A]
                    text-sm
                    font-semibold
                    "
                  >
                    PARTNERSHIP
                  </p>

                  <p
                    className="
                    mt-4
                    text-lg
                    leading-8
                    text-white/70
                    "
                  >
                    We're committed to building
                    relationships that continue
                    creating value long after
                    the first conversation.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Signature */}

        <div
          className="
          mt-20
          flex
          flex-col
          lg:flex-row
          items-start
          lg:items-center
          justify-between
          gap-8
          border-t
          border-white/10
          pt-10
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

          <p
            className="
            max-w-xl
            text-lg
            leading-8
            text-white/60
            lg:text-right
            "
          >
            Helping organisations build stronger technology
            teams since 2000 through expertise, trust and
            lasting partnerships.
          </p>

        </div>

      </div>

    </section>
  );
}