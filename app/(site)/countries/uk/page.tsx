import type { Metadata } from "next";

import CountryPageTemplate from "@/components/countries/CountryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Recruitment & Consulting in the United Kingdom",
  description:
    "Ubique Systems in London — SAP, Oracle, Salesforce, cloud and data specialists for UK enterprises. Canary Wharf office, IR35-compliant contract and permanent hiring.",
  alternates: { canonical: absoluteUrl("/countries/uk") },
  openGraph: {
    title: "United Kingdom | Ubique Systems",
    description:
      "Specialist technology recruitment and consulting from our Canary Wharf office, serving UK enterprises since our first European operation.",
    url: absoluteUrl("/countries/uk"),
  },
};

export default function UnitedKingdomPage() {
  return (
    <CountryPageTemplate
      countryCode="GB"
      country="United Kingdom"
      region={{ name: "Europe", href: "/countries/europe" }}
      eyebrow="London · Canary Wharf"
      headline="Specialist technology talent for the UK market"
      intro="Our London office sits in Canary Wharf, alongside the financial services and enterprise clients that make up much of our UK work. We supply contract, permanent and managed teams — and we take IR35 status seriously, because getting it wrong is expensive for everyone involved."
      stats={[
        { value: "Canary Wharf", label: "London office" },
        { value: "IR35", label: "Status-assessed contracts" },
        { value: "ISO 27001", label: "Certified data handling" },
        { value: "24h", label: "Typical shortlist turnaround" },
      ]}
      capabilities={[
        {
          title: "Contract & interim resourcing",
          description:
            "Day-rate specialists for programme peaks, with IR35 status determined before we put anyone forward — not after the contract is signed.",
        },
        {
          title: "Permanent search",
          description:
            "Retained and contingent search for senior technology roles, from solution architects to practice leads.",
        },
        {
          title: "Managed delivery teams",
          description:
            "Blended onshore and offshore teams where cost or scale makes a fully UK-based team impractical.",
        },
        {
          title: "Financial services expertise",
          description:
            "Deep experience with the regulatory, risk and core-modernisation programmes that dominate hiring in the City and Canary Wharf.",
        },
        {
          title: "Statement of work engagements",
          description:
            "Outcome-based contracts where you want deliverables and accountability rather than day-rate headcount.",
        },
        {
          title: "Payroll & compliance",
          description:
            "Right-to-work checks, umbrella and PAYE arrangements, and audit-ready records for every placement.",
        },
      ]}
      practiceSlugs={[
        "sap",
        "oracle",
        "salesforce",
        "cloud-infrastructure",
        "data-ai",
        "development-integration",
      ]}
      marketNotes={[
        {
          title: "IR35 shapes everything",
          body: "Since the off-payroll reforms, UK contractor supply lives or dies on status determination. We assess every role before advertising it, and we tell clients when a role they have described as outside scope probably is not.",
        },
        {
          title: "Financial services sets the pace",
          body: "London hiring is dominated by core banking modernisation, regulatory reporting and risk platform work. Those programmes compete for the same small pool of people, and speed of process matters more than headline rate.",
        },
        {
          title: "Hybrid is the settled norm",
          body: "Most UK enterprise roles now run two or three days on site. Fully remote briefs narrow the field less than clients expect, but fully on-site briefs narrow it dramatically.",
        },
        {
          title: "Nearshore blends are common",
          body: "UK clients increasingly pair a small onshore core with delivery capacity from our European and Indian centres. We structure and manage that blend rather than leaving you to coordinate it.",
        },
      ]}
    />
  );
}
