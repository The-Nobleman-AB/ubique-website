import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";

import IndiaHero from "@/components/country/IndiaHero";
import IndiaHeadquarters from "@/components/country/IndiaHeadquarters";
import IndiaStats from "@/components/country/IndiaStats";
import IndiaAdvantages from "@/components/country/IndiaAdvantages";
import IndiaTalentClusters from "@/components/country/IndiaTalentClusters";
import IndiaSkills from "@/components/country/IndiaSkills";
import IndiaHiringModels from "@/components/country/IndiaHiringModels";
import IndiaWhyUbique from "@/components/country/IndiaWhyUbique";
import IndiaCTA from "@/components/country/IndiaCTA";

import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "India — Global Headquarters & Talent Network",
  description:
    "Our global headquarters in Kolkata, with delivery centres in Bangalore and Pune. India talent clusters, skills coverage and hiring models for global organisations.",
  alternates: { canonical: absoluteUrl("/countries/india") },
};

/**
 * India landing page.
 *
 * The ten market-data sections that used to follow these now live at
 * /countries/india/talent-report — this page links across to them rather than
 * stacking nineteen sections with no navigation.
 */
export default function IndiaPage() {
  return (
    <>
      <IndiaHero />

      <IndiaHeadquarters />

      <IndiaStats />

      <IndiaAdvantages />

      <IndiaTalentClusters />

      <IndiaSkills />

      {/* --- bridge to the report --- */}

      <section className="section-y bg-navy" data-surface="dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-accent flex items-center gap-2.5">
                <BarChart3 size={16} aria-hidden="true" />
                Market report
              </p>

              <h2 className="display-2 mt-4 font-bold text-white">
                What it costs, and how long it takes
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Salary benchmarks by city and skill, demand indices, cost
                comparisons against onshore hiring, and realistic hiring
                timelines — the numbers behind every India conversation we have.
              </p>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <Link
                href="/countries/india/talent-report"
                className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors"
              >
                Read the talent report
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IndiaHiringModels />

      <IndiaWhyUbique />

      <IndiaCTA />
    </>
  );
}
