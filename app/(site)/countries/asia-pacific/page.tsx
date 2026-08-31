import type { Metadata } from "next";

import RegionPageTemplate from "@/components/countries/RegionPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Asia-Pacific — Delivery Centres & Technology Talent",
  description:
    "Our largest delivery footprint: headquarters in Kolkata, centres in Bangalore and Pune, and an office in Ho Chi Minh City serving clients across Asia-Pacific.",
  alternates: { canonical: absoluteUrl("/countries/asia-pacific") },
};

export const revalidate = 300;

export default function AsiaPacificPage() {
  return (
    <RegionPageTemplate
      region="asia-pacific"
      name="Asia-Pacific"
      eyebrow="Asia-Pacific"
      headline="Where most of our delivery capacity actually sits"
      intro="Asia-Pacific is home to our global headquarters and the engineering depth behind programmes running anywhere in the world. Four offices, two countries, and the bench that most of our European and US work draws on."
      stats={[
        { value: "Kolkata", label: "Global headquarters" },
        { value: "4", label: "Offices in the region" },
        { value: "24/5", label: "Follow-the-sun coverage" },
        { value: "ISO 27001", label: "Certified data handling" },
      ]}
      countries={[
        {
          name: "India",
          href: "/countries/india",
          note: "Global headquarters in Kolkata, with delivery centres in Bangalore and Pune. The deepest talent pool we work with, and where most blended teams are staffed.",
        },
        {
          name: "Vietnam",
          note: "Our Ho Chi Minh City office serves South-East Asian clients and adds engineering capacity at a different cost point to India.",
        },
        {
          name: "Wider region",
          note: "We place into Singapore, Australia and the Gulf from these offices, usually as part of a programme led elsewhere in the region.",
        },
      ]}
      capabilities={[
        {
          title: "Offshore delivery centres",
          description:
            "Standing teams working to a client's process and tooling, managed by us rather than coordinated by you across time zones.",
        },
        {
          title: "Follow-the-sun support",
          description:
            "Overlapping cover with European and US working hours, so a handover happens at the end of a shift rather than the start of a delay.",
        },
        {
          title: "SAP and ERP delivery",
          description:
            "Functional and technical consultants supporting S/4HANA and Oracle programmes for clients in Europe and North America.",
        },
        {
          title: "Engineering at scale",
          description:
            "Full-stack, QA and platform engineers for teams that need to add ten people, not one.",
        },
        {
          title: "Data and AI capability",
          description:
            "The fastest-growing demand we see here — data engineers and ML specialists, often at a fraction of onshore cost.",
        },
        {
          title: "Local market hiring",
          description:
            "Permanent recruitment for organisations building their own presence in India or Vietnam rather than buying delivery from us.",
        },
      ]}
      practiceSlugs={[
        "sap",
        "oracle",
        "cloud-infrastructure",
        "data-ai",
        "development-integration",
        "salesforce",
      ]}
      marketNotes={[
        {
          title: "Notice periods are the constraint",
          body: "Three months is standard in India, and counter-offers at resignation are routine. A start date that assumes four weeks will slip. We plan backwards from the notice period rather than the offer date.",
        },
        {
          title: "The cities behave differently",
          body: "Bangalore is deepest for product engineering and pays accordingly. Pune and Hyderabad are strong on enterprise applications. Kolkata offers better retention at lower cost. Treating India as one market is the most common planning error we see.",
        },
        {
          title: "Retention beats acquisition",
          body: "Attrition in Indian technology services runs high enough that a cheap hire who leaves in eight months costs more than a well-paid one who stays. We benchmark against retention, not just rate.",
        },
        {
          title: "Return-to-office is uneven",
          body: "Most large employers have settled on hybrid. Fully remote briefs still attract strong candidates here, which is less true in Europe.",
        },
      ]}
    />
  );
}
