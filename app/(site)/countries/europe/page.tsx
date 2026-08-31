import type { Metadata } from "next";

import RegionPageTemplate from "@/components/countries/RegionPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Europe — IT Recruitment & Consulting",
  description:
    "Offices in London, Eching, Copenhagen, Prague and Bratislava, plus coverage across the Netherlands, France, Poland, Romania, Belgium, Austria and Portugal.",
  alternates: { canonical: absoluteUrl("/countries/europe") },
};

export const revalidate = 300;

export default function EuropePage() {
  return (
    <RegionPageTemplate
      region="europe"
      name="Europe"
      eyebrow="Europe"
      headline="Twelve markets that only look like one"
      intro="Employment law, notice periods, contractor status and language requirements change at every border in Europe. We work market by market — with offices in five of them and coverage across seven more."
      stats={[
        { value: "5", label: "Offices with a full address" },
        { value: "12", label: "European markets covered" },
        { value: "IR35", label: "UK contract compliance" },
        { value: "GDPR", label: "Data handling across the EU" },
      ]}
      countries={[
        {
          name: "United Kingdom",
          href: "/countries/uk",
          note: "Canary Wharf office serving financial services and enterprise clients. IR35 status assessed before any contract role goes to market.",
        },
        {
          name: "Germany",
          href: "/countries/germany",
          note: "Our Eching office near Munich, and where the SAP practice does its heaviest work. Manufacturing and automotive dominate.",
        },
        {
          name: "Denmark & the Nordics",
          note: "Copenhagen office covering Nordic clients, where English-language delivery is widely accepted and hiring moves faster than in DACH.",
        },
        {
          name: "Czech Republic & Slovakia",
          note: "Prague and Bratislava — our nearshore centres for European clients who want same-timezone delivery without Western European cost.",
        },
        {
          name: "Netherlands, Belgium & France",
          note: "Active placement without a local office. Contract markets here are mature and rate-sensitive; we work through established networks.",
        },
        {
          name: "Poland, Romania, Austria & Portugal",
          note: "Growing nearshore markets, particularly for engineering and data. Strong English, competitive cost, and deep university pipelines.",
        },
      ]}
      capabilities={[
        {
          title: "Contract & interim resourcing",
          description:
            "Day-rate specialists across every market, with local employment and status rules handled before anyone is put forward.",
        },
        {
          title: "Permanent search",
          description:
            "Retained and contingent search for senior technology roles, run in the local language where the role requires it.",
        },
        {
          title: "Nearshore delivery teams",
          description:
            "Blended teams spanning a Western European lead and Central European delivery, in the same working day.",
        },
        {
          title: "S/4HANA programmes",
          description:
            "The 2027 ECC deadline is driving the largest single source of demand we see across DACH and the Nordics.",
        },
        {
          title: "Compliance & payroll",
          description:
            "Right-to-work, AÜG, IR35 and local payroll arrangements, with audit-ready records for every placement.",
        },
        {
          title: "Multi-country programmes",
          description:
            "One point of contact for a rollout touching five countries, rather than five local agencies and five contracts.",
        },
      ]}
      practiceSlugs={[
        "sap",
        "oracle",
        "salesforce",
        "microsoft-dynamics",
        "cloud-infrastructure",
        "data-ai",
      ]}
      marketNotes={[
        {
          title: "Language is a real filter",
          body: "Client-facing SAP roles in Germany and France usually need working German or French. English-only briefs narrow the field far more than clients expect, and the gap shows up as time-to-hire rather than a flat 'no'.",
        },
        {
          title: "Contractor status rules differ everywhere",
          body: "IR35 in the UK, AÜG in Germany, and separate regimes in the Netherlands and Nordics. Getting this wrong is expensive for the client, not just the contractor — we assess before advertising.",
        },
        {
          title: "Nearshore has become the default",
          body: "Prague, Bratislava, Warsaw and Bucharest now absorb work that would once have gone to India, because same-timezone collaboration is worth the cost difference for change-heavy programmes.",
        },
        {
          title: "Hybrid settled at two or three days",
          body: "Most European enterprise clients have landed on the same pattern. Fully on-site briefs narrow the field sharply, particularly in Germany and the Nordics.",
        },
      ]}
    />
  );
}
