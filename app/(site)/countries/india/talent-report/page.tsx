import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ReportNav, { type ReportSection } from "@/components/country/ReportNav";
import ReportProvenance from "@/components/country/ReportProvenance";

import IndiaReportCover from "@/components/country/IndiaReportCover";
import IndiaTalentDistribution from "@/components/country/IndiaTalentDistribution";
import IndiaDemandIndex from "@/components/country/IndiaDemandIndex";
import IndiaSalaryBenchmark from "@/components/country/IndiaSalaryBenchmark";
import IndiaCostAdvantage from "@/components/country/IndiaCostAdvantage";
import IndiaHiringTimeline from "@/components/country/IndiaHiringTimeline";
import IndiaSnapshot from "@/components/country/IndiaSnapshot";
import IndiaDashboard from "@/components/country/IndiaDashboard";
import IndiaGuide from "@/components/country/IndiaGuide";
import IndiaReportCTA from "@/components/country/IndiaReportCTA";

import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "India Talent & Salary Benchmark Report",
  description:
    "Demand indices, salary benchmarks, cost comparisons and hiring timelines across India's technology talent clusters — Bangalore, Kolkata, Pune, Hyderabad and beyond.",
  alternates: { canonical: absoluteUrl("/countries/india/talent-report") },
  openGraph: {
    title: "India Talent & Salary Benchmark | Ubique Systems",
    description:
      "What it costs and how long it takes to hire technology talent in India, by city and by skill.",
    url: absoluteUrl("/countries/india/talent-report"),
  },
};

/**
 * The India market report.
 *
 * This content used to sit as ten extra sections at the bottom of
 * /countries/india, making that page 19 sections long with no way to navigate
 * it. It is a report, so it gets to be one — with its own URL, its own
 * contents nav, and its own metadata for the queries it can actually win.
 */

const sections: ReportSection[] = [
  { id: "overview", label: "Overview" },
  { id: "talent-distribution", label: "Talent distribution" },
  { id: "demand-index", label: "Demand index" },
  { id: "salary-benchmark", label: "Salary benchmark" },
  { id: "cost-advantage", label: "Cost advantage" },
  { id: "hiring-timeline", label: "Hiring timelines" },
  { id: "market-snapshot", label: "Market snapshot" },
  { id: "dashboard", label: "At a glance" },
  { id: "hiring-guide", label: "Hiring guide" },
];

export default function IndiaTalentReportPage() {
  return (
    <>
      <div id="overview">
        <IndiaReportCover />
      </div>

      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link
            href="/countries/india"
            className="text-muted hover:text-brand inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to India
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="py-16">
              <ReportNav sections={sections} />
            </div>
          </aside>

          <div className="lg:col-span-9">
            <ReportProvenance />

            <div id="talent-distribution">
              <IndiaTalentDistribution />
            </div>

            <div id="demand-index">
              <IndiaDemandIndex />
            </div>

            <div id="salary-benchmark">
              <IndiaSalaryBenchmark />
            </div>

            <div id="cost-advantage">
              <IndiaCostAdvantage />
            </div>

            <div id="hiring-timeline">
              <IndiaHiringTimeline />
            </div>

            <div id="market-snapshot">
              <IndiaSnapshot />
            </div>

            <div id="dashboard">
              <IndiaDashboard />
            </div>

            <div id="hiring-guide">
              <IndiaGuide />
            </div>
          </div>
        </div>
      </div>

      <IndiaReportCTA />
    </>
  );
}
