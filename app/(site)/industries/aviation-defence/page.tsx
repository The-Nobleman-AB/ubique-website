import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Aviation & Defence",
  description:
    "Cleared and specialist technology talent for aviation and defence programmes — MRO systems, avionics software, secure infrastructure and compliance-heavy delivery.",
  alternates: { canonical: absoluteUrl("/industries/aviation-defence") },
  openGraph: {
    title: "Aviation & Defence | Ubique Systems",
    description:
      "Cleared and specialist technology talent for aviation and defence programmes — MRO systems, avionics software, secure infrastructure and compliance-heavy delivery.",
    url: absoluteUrl("/industries/aviation-defence"),
  },
};

export default function AviationDefencePage() {
  return (
    <IndustryPageTemplate
      title="Aviation & Defence"
      subtitle="Aviation and defence programmes run to standards, clearances and audit trails that most sectors never encounter. We resource and advise on the technology work inside them, with people who already understand why the process looks the way it does."
      priorities={[
        {
          title: "Security clearance and vetting",
          description:
            "Roles that require SC, DV or national equivalents narrow the pool dramatically. We track clearance status so a shortlist is actually deployable.",
        },
        {
          title: "MRO and fleet systems",
          description:
            "Maintenance, repair and overhaul platforms carry decades of accumulated process. Modernising them without disrupting airworthiness is the hard part.",
        },
        {
          title: "Avionics and embedded software",
          description:
            "Safety-critical development under DO-178C and similar standards, where the verification effort outweighs the code.",
        },
        {
          title: "Secure infrastructure",
          description:
            "Air-gapped and accredited environments, with cloud adoption constrained by sovereignty and classification requirements.",
        },
        {
          title: "Supply chain traceability",
          description:
            "Part provenance, counterfeit prevention and compliance reporting across a deep multi-tier supplier base.",
        },
        {
          title: "Digital engineering",
          description:
            "Model-based systems engineering and digital twins across long programme lifecycles measured in decades, not quarters.",
        },
      ]}
      solutions={[
        "Cleared Technology Resourcing",
        "MRO & Fleet Systems Modernisation",
        "Safety-Critical Software Engineering",
        "Secure & Accredited Infrastructure",
        "Supply Chain Systems",
        "Programme Assurance",
      ]}
      technologies={[
        "SAP S/4HANA",
        "IFS",
        "AMOS",
        "DO-178C",
        "MBSE",
        "Embedded C/C++",
        "Secure Cloud",
        "PLM",
        "Digital Twin",
        "Cyber Security",
        "Data Analytics",
        "Systems Integration",
      ]}
    />
  );
}
