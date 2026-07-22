"use client";

import Link from "next/link";
import {
  Globe2,
  Building2,
  Zap,
  Handshake,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Supporting organisations across Asia-Pacific, Europe and the Americas through our international delivery network.",
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    description:
      "Deep consulting and workforce experience across technology, manufacturing, banking, healthcare, retail and automotive.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description:
      "Rapid access to specialist consultants and talent, enabling organisations to scale with confidence.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Building trusted relationships focused on sustainable growth, quality delivery and measurable business outcomes.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-40">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <p
            className="
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#155EEF]
            "
          >
            WHY UBIQUE
          </p>

          <h2
            className="
            mt-4
            text-5xl
            font-black
            lg:text-6xl
            "
          >
            Why Leading Organisations
            <br />
            Choose Ubique
          </h2>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-gray-500
            "
          >
            Combining technology consulting, workforce expertise
            and regional delivery capabilities to help businesses
            transform, scale and succeed.
          </p>

        </div>

        {/* Pillars */}

        <div
          className="
          mt-20
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-4
          "
        >

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
                className="
                group
                rounded-[32px]
                border
                border-gray-200
                bg-white
                p-10
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#155EEF]/20
                hover:shadow-2xl
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
                  bg-[#EEF4FF]
                  text-[#155EEF]
                  transition-all
                  duration-300
                  group-hover:bg-[#155EEF]
                  group-hover:text-white
                  "
                >

                  <Icon size={30} />

                </div>

                <h3
                  className="
                  mt-8
                  text-2xl
                  font-bold
                  "
                >
                  {pillar.title}
                </h3>

                <p
                  className="
                  mt-5
                  leading-8
                  text-gray-500
                  "
                >
                  {pillar.description}
                </p>

              </div>

            );

          })}

        </div>

        {/* CTA Banner */}

        <div
          className="
          mt-20
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-[#071B3A]
          via-[#0C2F63]
          to-[#155EEF]
          p-14
          lg:flex
          lg:items-center
          lg:justify-between
          "
        >

          <div>

            <p
              className="
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#12B76A]
              "
            >
              READY TO GROW?
            </p>

            <h3
              className="
              mt-4
              max-w-2xl
              text-4xl
              font-black
              leading-tight
              text-white
              lg:text-5xl
              "
            >
              Let's Build Your
              Next Success Story
            </h3>

            <p
              className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-blue-100
              "
            >
              Whether you're expanding your technology teams,
              delivering transformation programmes or looking
              for specialist consulting expertise, we're ready
              to help.
            </p>

          </div>

          <div className="mt-10 lg:mt-0">

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
              hover:scale-[1.03]
              "
            >
              Talk To Our Experts

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

      </div>

    </section>
  );
}