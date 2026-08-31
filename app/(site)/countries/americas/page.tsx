import type { Metadata } from "next";

import RegionPageTemplate from "@/components/countries/RegionPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Americas — Enterprise Technology Talent",
  description:
    "US operations from Norwalk, Connecticut, backed by global delivery capacity for organisations hiring enterprise technology specialists across North America.",
  alternates: { canonical: absoluteUrl("/countries/americas") },
};

export const revalidate = 300;

export default function AmericasPage() {
  return (
    <RegionPageTemplate
      region="americas"
      name="the Americas"
      eyebrow="Americas"
      headline="US-led programmes with global delivery behind them"
      intro="Our Connecticut office serves clients along the East Coast and nationally. What makes it work is what sits behind it — engineering capacity in India and Europe that turns a US-priced team into a US-led one."
      stats={[
        { value: "Norwalk", label: "Connecticut office" },
        { value: "Nationwide", label: "Placement coverage" },
        { value: "W2 & C2C", label: "Engagement models" },
        { value: "ISO 27001", label: "Certified data handling" },
      ]}
      countries={[
        {
          name: "United States",
          href: "/countries/usa",
          note: "Our Norwalk office, placing nationally. ERP programme staffing and cloud build-out are the steadiest sources of demand.",
        },
        {
          name: "Canada",
          note: "Placement into Toronto, Vancouver and Montreal, usually as an extension of a US programme rather than standalone.",
        },
        {
          name: "Latin America",
          note: "Nearshore engineering capacity in the US timezone — increasingly the first option we're asked about before offshore.",
        },
      ]}
      capabilities={[
        {
          title: "Contract & contract-to-hire",
          description:
            "W2, 1099 and corp-to-corp arrangements, with classification and compliance handled end to end.",
        },
        {
          title: "Direct hire search",
          description:
            "Permanent placement for senior technology roles, from platform leads to enterprise architects.",
        },
        {
          title: "Offshore-backed delivery",
          description:
            "A US-based lead paired with engineering capacity from our Indian and European centres, where budget or scale calls for it.",
        },
        {
          title: "ERP programme staffing",
          description:
            "SAP and Oracle transformation programmes are our deepest US bench — functional, technical and programme leadership.",
        },
        {
          title: "Cloud & data build-out",
          description:
            "Platform, data and ML engineers for organisations modernising off legacy infrastructure.",
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
        "microsoft-dynamics",
        "cloud-infrastructure",
        "data-ai",
      ]}
      marketNotes={[
        {
          title: "Rates vary more than titles suggest",
          body: "The same job title can carry a 40% rate spread between metro markets. We benchmark against the market you're hiring in, not a national average that fits nowhere.",
        },
        {
          title: "ERP deadlines drive the demand",
          body: "A large share of US enterprise hiring we see is set by SAP and Oracle programme dates. Those programmes book specialist capacity months ahead, and late starts are expensive.",
        },
        {
          title: "Speed of process decides outcomes",
          body: "Strong candidates hold multiple offers. Clients who compress interview loops win; clients who run four rounds over five weeks usually restart the search.",
        },
        {
          title: "Blended teams are normal now",
          body: "For scale roles, US leadership with offshore or nearshore delivery has stopped being a cost-cutting exception and become the default shape.",
        },
      ]}
    />
  );
}
