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
    <section className="section-y bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow text-brand">Employer guide</p>

        <h2 className="display-2 mt-4 font-bold">
          Hiring In India: What Employers Need To Know
        </h2>

        <p className="text-muted mt-8 text-xl">
          Key considerations for organizations building technology teams in
          India.
        </p>

        <div className="mt-16 space-y-5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="rounded-card border-line overflow-hidden border transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <span className="text-2xl font-bold">{item.title}</span>

                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    } `}
                  />
                </button>

                {isOpen && (
                  <div className="text-muted px-8 pb-8 text-lg leading-relaxed">
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
