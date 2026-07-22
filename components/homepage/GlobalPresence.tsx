"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const regions = [
  {
    title: "India",
    emoji: "🇮🇳",
    headline: "Global Headquarters • Kolkata",
    subHeadline: "The heart of Ubique's global operations",
    tags: ["Technology", "Consulting", "Talent"],
    href: "/countries/india",
    featured: true,
  },
  {
    title: "Asia-Pacific",
    emoji: "🌏",
    headline: "Regional Delivery Network",
    subHeadline: "Supporting enterprises across APAC",
    tags: ["Enterprise", "Engineering", "Growth"],
    href: "/countries/asia-pacific",
  },
  {
    title: "Europe",
    emoji: "🇪🇺",
    headline: "Enterprise Solutions",
    subHeadline: "Digital transformation across Europe",
    tags: ["SAP", "Automotive", "Manufacturing"],
    href: "/countries/europe",
  },
  {
    title: "Americas",
    emoji: "🌎",
    headline: "Technology & Innovation",
    subHeadline: "Cloud, AI and digital talent solutions",
    tags: ["Cloud", "AI", "Digital"],
    href: "/countries/americas",
  },
];

export default function GlobalPresence() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#071B3A]
      py-40
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        right-0
        top-0
        h-[700px]
        w-[700px]
        rounded-full
        bg-blue-600/10
        blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-start gap-16 lg:grid-cols-12">

          {/* LEFT */}

          <div className="lg:col-span-4">

            <p
              className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#12B76A]
              "
            >
              GLOBAL PRESENCE
            </p>

            <h2
              className="
              mt-6
              text-6xl
              font-black
              leading-[0.95]
              text-white
              lg:text-7xl
              "
            >
              Our Global
              <br />
              Delivery
              <br />
              Network
            </h2>

            <p
              className="
              mt-8
              text-xl
              leading-relaxed
              text-white/70
              "
            >
              With our Global Headquarters in India and regional
              expertise across Asia-Pacific, Europe and the
              Americas, Ubique delivers consulting, technology
              and workforce solutions wherever our clients
              operate.
            </p>

            <Link
              href="/countries"
              className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              font-semibold
              text-[#12B76A]
              transition-all
              duration-300
              hover:gap-4
              "
            >
              Explore Global Presence

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

          {/* RIGHT */}

          <div
            className="
            grid
            gap-6
            md:grid-cols-2
            lg:col-span-8
            "
          >

            {regions.map((region) => (

              <Link
                key={region.title}
                href={region.href}
                className={`
                  group
                  rounded-[32px]
                  border
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-white/10
                  ${
                    region.featured
                      ? "border-[#12B76A]/40 bg-white/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }
                `}
              >

                <div className="mb-5 text-4xl">
                  {region.emoji}
                </div>

                {region.featured && (
                  <div
                    className="
                    mb-4
                    inline-flex
                    rounded-full
                    bg-[#12B76A]/15
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#12B76A]
                    "
                  >
                    Global HQ
                  </div>
                )}

                <h3
                  className="
                  text-3xl
                  font-bold
                  text-white
                  "
                >
                  {region.title}
                </h3>

                <div className="mt-4">

                  <p
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#12B76A]
                    "
                  >
                    {region.headline}
                  </p>

                  <p
                    className="
                    mt-2
                    text-lg
                    text-white/80
                    "
                  >
                    {region.subHeadline}
                  </p>

                </div>

                <div
                  className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                  "
                >
                  {region.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                      rounded-full
                      bg-white/10
                      px-3
                      py-1.5
                      text-sm
                      text-white/80
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-[#12B76A]
                  transition-all
                  duration-300
                  group-hover:gap-3
                  "
                >
                  Explore Region

                  <ArrowRight
                    size={18}
                    className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    "
                  />
                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
