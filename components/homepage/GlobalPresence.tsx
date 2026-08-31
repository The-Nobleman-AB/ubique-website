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
    <section className="bg-navy section-y-lg relative overflow-hidden">
      {/* Background Glow */}

      <div className="bg-brand/10 absolute top-0 right-0 h-[700px] w-[700px] rounded-full blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* LEFT */}

          <div className="lg:col-span-4">
            <p className="eyebrow text-accent">Global presence</p>

            <h2 className="display-2 mt-4 font-bold text-white">
              Our Global
              <br />
              Delivery
              <br />
              Network
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-white/70">
              With our Global Headquarters in India and regional expertise
              across Asia-Pacific, Europe and the Americas, Ubique delivers
              consulting, technology and workforce solutions wherever our
              clients operate.
            </p>

            <Link
              href="/countries"
              className="group text-accent mt-10 inline-flex items-center gap-3 font-semibold transition-all duration-200 hover:gap-4"
            >
              Explore Global Presence
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* RIGHT */}

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
            {regions.map((region) => (
              <Link
                key={region.title}
                href={region.href}
                className={`group rounded-card border p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 ${
                  region.featured
                    ? "border-accent/40 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                } `}
              >
                <div className="mb-5 text-4xl">{region.emoji}</div>

                {region.featured && (
                  <div className="eyebrow bg-accent/15 text-accent mb-4 inline-flex rounded-full px-3 py-1">
                    Global HQ
                  </div>
                )}

                <h3 className="text-3xl font-bold text-white">
                  {region.title}
                </h3>

                <div className="mt-4">
                  <p className="eyebrow text-accent">{region.headline}</p>

                  <p className="mt-2 text-lg text-white/80">
                    {region.subHeadline}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {region.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-accent mt-8 flex items-center gap-2 font-semibold transition-all duration-200 group-hover:gap-3">
                  Explore Region
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
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
