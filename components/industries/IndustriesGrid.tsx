"use client";

import Link from "next/link";
import {
  ArrowRight,
  Car,
  Cpu,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
} from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: Car,
    href: "/industries/automotive",
    challenges: [
      "Digital manufacturing",
      "Connected mobility",
      "Engineering talent",
    ],
  },
  {
    title: "Banking & Financial Services",
    icon: Landmark,
    href: "/industries/banking-financial-services",
    challenges: [
      "Digital banking",
      "Risk & compliance",
      "Cybersecurity",
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    icon: HeartPulse,
    href: "/industries/healthcare-life-sciences",
    challenges: [
      "Healthcare platforms",
      "Data privacy",
      "Clinical operations",
    ],
  },
  {
    title: "Retail & Consumer",
    icon: ShoppingBag,
    href: "/industries/retail-consumer",
    challenges: [
      "Customer experience",
      "E-Commerce",
      "Supply chain",
    ],
  },
  {
    title: "Manufacturing",
    icon: Factory,
    href: "/industries/manufacturing",
    challenges: [
      "Industry 4.0",
      "ERP Modernisation",
      "Smart factories",
    ],
  },
  {
    title: "Technology",
    icon: Cpu,
    href: "/industries/technology",
    challenges: [
      "Cloud",
      "AI",
      "Software Engineering",
    ],
  },
];

export default function IndustriesGrid() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#155EEF]">
            Industry Focus
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] text-[#071B3A]">
            Built Around
            <br />
            Industry Needs
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Every sector has different priorities, regulations and
            transformation goals. Explore how Ubique combines consulting,
            enterprise technology and specialist talent to support each
            industry's unique journey.
          </p>

        </div>

        <div className="space-y-8">

          {industries.map((industry) => {

            const Icon = industry.icon;

            return (

              <Link
                key={industry.title}
                href={industry.href}
                className="
                  group
                  flex
                  flex-col
                  gap-8
                  rounded-[30px]
                  border
                  border-gray-200
                  bg-white
                  p-10
                  transition-all
                  duration-300
                  hover:border-[#155EEF]
                  hover:shadow-xl
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >

                <div className="flex items-start gap-6">

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
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <div>

                    <h3 className="text-3xl font-bold text-[#071B3A]">
                      {industry.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-gray-600">
                      Delivering industry-aligned consulting,
                      enterprise technology solutions and
                      specialised professionals for sustainable
                      business growth.
                    </p>

                  </div>

                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">

                  {industry.challenges.map((item) => (

                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-[#EEF4FF]
                        px-5
                        py-2
                        text-sm
                        font-semibold
                        text-[#155EEF]
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    font-semibold
                    text-[#155EEF]
                  "
                >

                  Explore Industry

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      group-hover:translate-x-2
                    "
                  />

                </div>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}