import type { Metadata } from "next";

import CountryPageTemplate from "@/components/countries/CountryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Recruitment & SAP Consulting in Germany",
  description:
    "Ubique Systems in Eching, Bavaria — SAP, cloud and data specialists for the German and wider DACH market. Contract and permanent enterprise technology hiring.",
  alternates: { canonical: absoluteUrl("/countries/germany") },
  openGraph: {
    title: "Germany | Ubique Systems",
    description:
      "SAP-led technology recruitment and consulting for the DACH market, from our office in Eching near Munich.",
    url: absoluteUrl("/countries/germany"),
  },
};

export default function GermanyPage() {
  return (
    <CountryPageTemplate
      countryCode="DE"
      country="Germany"
      region={{ name: "Europe", href: "/countries/europe" }}
      eyebrow="Eching · Bavaria"
      headline="SAP-led technology talent for the DACH market"
      intro="Germany is where our SAP practice does its heaviest work. Our office near Munich supports manufacturing, automotive and industrial clients through S/4HANA programmes — and the long tail of functional and technical roles those programmes depend on."
      stats={[
        { value: "Eching", label: "Office near Munich" },
        { value: "SAP", label: "Deepest practice" },
        { value: "DACH", label: "Region served" },
        { value: "ISO 27001", label: "Certified data handling" },
      ]}
      capabilities={[
        {
          title: "S/4HANA programme resourcing",
          description:
            "Functional consultants, developers and architects for migrations and greenfield implementations across the full module estate.",
        },
        {
          title: "Freelance & contract supply",
          description:
            "Germany's SAP market runs substantially on freelancers. We hold a standing network rather than starting each search cold.",
        },
        {
          title: "Permanent recruitment",
          description:
            "Direct hire for internal IT teams, from SAP process owners to platform and integration leads.",
        },
        {
          title: "Manufacturing & automotive depth",
          description:
            "Industry 4.0, digital manufacturing and connected mobility programmes — the sectors that define German enterprise IT.",
        },
        {
          title: "German-language delivery",
          description:
            "Client-facing roles filled with consultants who work in German where the programme requires it, not only in English.",
        },
        {
          title: "Nearshore & offshore blend",
          description:
            "Development and support capacity from our European and Indian centres, integrated into German-led programmes.",
        },
      ]}
      practiceSlugs={[
        "sap",
        "cloud-infrastructure",
        "data-ai",
        "development-integration",
        "microsoft-dynamics",
      ]}
      marketNotes={[
        {
          title: "S/4HANA deadlines drive demand",
          body: "Mainstream maintenance for SAP ECC ends in 2027, and the resulting migration wave has made experienced S/4HANA people the scarcest resource in the market. Programmes that start resourcing late pay significantly more for less experience.",
        },
        {
          title: "Freelancers are the norm, not the exception",
          body: "A large share of German SAP delivery runs on freelance consultants. Understanding AÜG and contractor status rules is part of the job, and we structure engagements accordingly.",
        },
        {
          title: "Language is a real constraint",
          body: "Many client-facing SAP roles genuinely require working German. That narrows the pool substantially, and briefs that assume English-only will take longer than clients expect.",
        },
        {
          title: "Manufacturing sets the agenda",
          body: "Automotive and industrial clients dominate. Their programmes tend to be long, standards-heavy and highly integrated — which rewards consultants who have worked in that context before.",
        },
      ]}
    />
  );
}
