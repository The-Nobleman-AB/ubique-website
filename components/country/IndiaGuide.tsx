"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Salary Expectations",
    content:
      "Compensation varies significantly by skill, location and experience. Enterprise technology, SAP and AI professionals generally command premium salary ranges compared to traditional technology roles.",
  },
  {
    title: "Notice Periods",
    content:
      "Technology professionals in India typically have notice periods ranging from 30 to 90 days. Senior consultants and niche specialists often have longer notice requirements.",
  },
  {
    title: "Remote & Hybrid Hiring",
    content:
      "Remote and hybrid hiring models continue to be widely adopted, enabling organizations to access talent beyond traditional technology hubs.",
  },
  {
    title: "Compliance & Employment",
    content:
      "Organizations should evaluate local employment regulations, contractor engagement models and payroll considerations when hiring in India.",
  },
  {
    title: "Competition For Talent",
    content:
      "Demand remains strong across SAP, Cloud, AI, Cybersecurity and Data Engineering. Employer branding and hiring speed are increasingly important factors.",
  },
];

export default function IndiaGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#155EEF]
          font-semibold
          "
        >
          EMPLOYER GUIDE
        </p>

        <h2
          className="
          text-5xl
          lg:text-6xl
          font-black
          mt-6
          "
        >
          Hiring In India:
          What Employers Need To Know
        </h2>

        <p
          className="
          text-xl
          text-gray-600
          mt-8
          "
        >
          Key considerations for organizations
          building technology teams in India.
        </p>

        <div className="mt-16 space-y-5">

          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="
                border
                border-gray-200
                rounded-[24px]
                overflow-hidden
                transition-all
                duration-300
                "
              >

                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-left
                  p-8
                  "
                >

                  <span
                    className="
                    text-2xl
                    font-bold
                    "
                  >
                    {item.title}
                  </span>

                  <ChevronDown
                    size={24}
                    className={`
                    transition-transform
                    duration-300
                    ${
                      isOpen
                        ? "rotate-180"
                        : ""
                    }
                    `}
                  />

                </button>

                {isOpen && (
                  <div
                    className="
                    px-8
                    pb-8
                    text-gray-600
                    leading-relaxed
                    text-lg
                    "
                  >
                    {item.content}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}