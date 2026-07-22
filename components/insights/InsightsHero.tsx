"use client";

import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  Building2,
  Cpu,
  Users,
} from "lucide-react";

const topics = [
  "Company News",
  "Technology",
  "Industry Updates",
  "Careers",
];

export default function InsightsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B3A] via-[#0C2F63] to-[#155EEF] pt-40 pb-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-[#2E90FA]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#12B76A]/15 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/10
                px-5
                py-2
                backdrop-blur-xl
              "
            >

              <Newspaper
                size={18}
                className="text-[#8FD8FF]"
              />

              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-white
                "
              >
                News & Insights
              </span>

            </div>

            <h1
              className="
                mt-8
                text-5xl
                lg:text-7xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-white
              "
            >
              News,
              Insights &
              Updates
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-blue-100
              "
            >
              Stay informed with company announcements,
              industry developments and perspectives from
              Ubique Systems as we continue supporting
              organisations across global markets.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

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
                  hover:scale-105
                "
              >

                Contact Us

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

          {/* RIGHT */}

          <div>

            <div
              className="
                rounded-[36px]
                border
                border-white/15
                bg-white/10
                p-10
                backdrop-blur-xl
              "
            >

              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-sm
                  font-semibold
                  text-[#8FD8FF]
                "
              >
                Focus Areas
              </p>

              <div className="mt-10 space-y-6">

                {[
                  {
                    icon: Building2,
                    title: "Company News",
                  },
                  {
                    icon: Cpu,
                    title: "Technology",
                  },
                  {
                    icon: Users,
                    title: "Careers",
                  },
                  {
                    icon: Newspaper,
                    title: "Industry Updates",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-4
                      "
                    >

                      <Icon
                        size={22}
                        className="text-[#8FD8FF]"
                      />

                      <span className="font-medium text-white">
                        {item.title}
                      </span>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}