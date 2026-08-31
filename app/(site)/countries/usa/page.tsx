import type { Metadata } from "next";

import CountryPageTemplate from "@/components/countries/CountryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Recruitment & Consulting in the United States",
  description:
    "Ubique Systems in Norwalk, Connecticut — enterprise technology recruitment and consulting for US organisations across SAP, Oracle, Salesforce, cloud and data.",
  alternates: { canonical: absoluteUrl("/countries/usa") },
  openGraph: {
    title: "United States | Ubique Systems",
    description:
      "Enterprise technology recruitment and consulting from our Connecticut office, with global delivery capacity behind it.",
    url: absoluteUrl("/countries/usa"),
  },
};

export default function UnitedStatesPage() {
  return (
    <CountryPageTemplate
      countryCode="US"
      country="United States"
      region={{ name: "Americas", href: "/countries/americas" }}
      eyebrow="Norwalk, Connecticut"
      headline="Enterprise technology talent across the United States"
      intro="Our US office serves clients along the East Coast and nationally, backed by delivery capacity in India and Europe. That combination lets us cover roles that need someone in the room, and roles where a follow-the-sun team is the better answer."
      stats={[
        { value: "Connecticut", label: "US office" },
        { value: "Nationwide", label: "Placement coverage" },
        { value: "W2 & C2C", label: "Engagement models" },
        { value: "ISO 27001", label: "Certified data handling" },
      ]}
      capabilities={[
        {
          title: "Contract & contract-to-hire",
          description:
            "W2, 1099 and corp-to-corp arrangements for specialist consultants, with compliance handled end to end.",
        },
        {
          title: "Direct hire search",
          description:
            "Permanent placement for senior technology roles, from platform leads to enterprise architects.",
        },
        {
          title: "Offshore-backed delivery",
          description:
            "A US-based lead paired with engineering capacity from our Indian centres, where budget or scale calls for it.",
        },
        {
          title: "ERP programme staffing",
          description:
            "SAP and Oracle transformation programmes are our deepest US bench — functional, technical and programme leadership.",
        },
        {
          title: "Cloud & data build-out",
          description:
            "Platform engineers, data engineers and ML specialists for organisations modernising off legacy infrastructure.",
        },
        {
          title: "Visa & mobility support",
          description:
            "Guidance on sponsorship and mobility where the right person for a role is not already in the country.",
        },
      ]}
      practiceSlugs={[
        "sap",
        "oracle",
        "salesforce",
        "cloud-infrastructure",
        "data-ai",
        "microsoft-dynamics",
      ]}
      marketNotes={[
        {
          title: "Rates vary more than titles suggest",
          body: "The same job title can carry a 40% rate spread between metro markets. We benchmark against the market you are actually hiring in, not a national average that fits nowhere.",
        },
        {
          title: "ERP modernisation is the steady demand",
          body: "A large share of US enterprise hiring we see is driven by SAP and Oracle programme deadlines. Those programmes book specialist capacity months ahead, and late starts are expensive.",
        },
        {
          title: "Speed of process decides outcomes",
          body: "In the current market, strong candidates hold multiple offers. Clients who compress interview loops win; clients who run four rounds over five weeks usually restart the search.",
        },
        {
          title: "Nearshore is increasingly the default",
          body: "For scale roles, blended teams spanning US leadership and offshore delivery have become normal rather than a cost-cutting exception.",
        },
      ]}
    />
  );
}
