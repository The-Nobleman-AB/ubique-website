"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const countries = [
  {
    country: "India",
    flag: "🇮🇳",
    headline: "5M+ Technology Professionals",
    tags: ["Cloud", "SAP", "AI"],
    href: "/countries/india",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    headline: "SAP & Automotive Hub",
    tags: ["SAP", "Industry 4.0", "Engineering"],
    href: "/countries/germany",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    headline: "Digital Transformation Talent",
    tags: ["Cloud", "Product", "AI"],
    href: "/countries/usa",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    headline: "Finance & Technology Hub",
    tags: ["FinTech", "Cybersecurity", "Consulting"],
    href: "/countries/uk",
  },
];

export default function GlobalPresence() {
  return (
    <section
      className="
      py-40
      bg-[#071B3A]
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[700px]
        h-[700px]
        bg-blue-600/10
        rounded-full
        blur-[180px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT */}

          <div className="lg:col-span-4">

            <p
              className="
              uppercase
              tracking-[0.3em]
              text-[#12B76A]
              font-semibold
              "
            >
              GLOBAL TALENT MARKETS
            </p>

            <h2
              className="
              text-6xl
              lg:text-7xl
              font-black
              text-white
              mt-6
              leading-[0.95]
              "
            >
              Explore
              Global Talent
              Markets
            </h2>

            <p
              className="
              text-white/70
              text-xl
              mt-8
              leading-relaxed
              "
            >
              Access specialized talent ecosystems
              across India, Germany, the United Kingdom
              and the United States through Ubique's
              global network.
            </p>

            <Link
              href="/countries/india"
              className="
              mt-10
              inline-flex
              items-center
              gap-3
              text-[#12B76A]
              font-semibold
              hover:gap-4
              transition-all
              "
            >
              Explore Talent Markets

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* RIGHT */}

          <div
            className="
            lg:col-span-8
            grid
            md:grid-cols-2
            gap-6
            "
          >

            {countries.map((item) => (
              <Link
                key={item.country}
                href={item.href}
                className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-[32px]
                p-8
                hover:bg-white/10
                hover:border-white/20
                transition-all
                duration-500
                "
              >

                <div
                  className="
                  text-4xl
                  mb-5
                  "
                >
                  {item.flag}
                </div>

                <h3
                  className="
                  text-white
                  text-3xl
                  font-bold
                  "
                >
                  {item.country}
                </h3>

                <p
                  className="
                  text-white/80
                  text-lg
                  mt-4
                  "
                >
                  {item.headline}
                </p>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                  "
                >
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/10
                      text-white/80
                      text-sm
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
                  text-[#12B76A]
                  font-semibold
                  group-hover:gap-3
                  transition-all
                  "
                >
                  Explore Market

                  <ArrowRight size={18} />
                </div>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}