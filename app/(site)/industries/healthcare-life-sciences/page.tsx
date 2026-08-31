import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Healthcare & Life Sciences",
  description:
    "Supporting healthcare providers and life sciences organisations through digital transformation, enterprise technology, SAP solutions and specialist consulting expertise.",
  alternates: {
    canonical: absoluteUrl("/industries/healthcare-life-sciences"),
  },
  openGraph: {
    title: "Healthcare & Life Sciences | Ubique Systems",
    description:
      "Supporting healthcare providers and life sciences organisations through digital transformation, enterprise technology, SAP solutions and specialist consulting expertise.",
    url: absoluteUrl("/industries/healthcare-life-sciences"),
  },
};

export default function HealthcareLifeSciencesPage() {
  return (
    <>
      <IndustryPageTemplate
        title="Healthcare & Life Sciences"
        subtitle="Healthcare organisations are balancing patient outcomes, operational efficiency and regulatory compliance while embracing digital innovation. Ubique Systems helps providers and life sciences organisations modernise technology, optimise operations and build resilient healthcare ecosystems."

        priorities={[
          {
            title: "Digital Healthcare",
            description:
              "Modernise healthcare services through connected digital platforms that improve patient and clinician experiences.",
          },
          {
            title: "Data Security & Compliance",
            description:
              "Protect sensitive healthcare information while meeting evolving regulatory and privacy requirements.",
          },
          {
            title: "Operational Excellence",
            description:
              "Improve clinical and administrative processes through automation, analytics and intelligent workflows.",
          },
          {
            title: "Healthcare Analytics",
            description:
              "Use trusted data and business intelligence to support informed clinical and operational decisions.",
          },
          {
            title: "Cloud Transformation",
            description:
              "Build scalable, secure healthcare platforms that support collaboration, resilience and innovation.",
          },
          {
            title: "Specialist Talent",
            description:
              "Access experienced consultants and technology professionals to support healthcare transformation programmes.",
          },
        ]}

        solutions={[
          "Healthcare Digital Transformation",
          "SAP Healthcare Solutions",
          "Cloud & Infrastructure Services",
          "Data Analytics & Business Intelligence",
          "Technology Consulting",
          "Healthcare Workforce Solutions",
        ]}

        technologies={[
          "SAP",
          "Microsoft Azure",
          "Microsoft Power Platform",
          "Power BI",
          "AWS",
          "SQL Server",
          "Artificial Intelligence",
          "Cloud Computing",
          "Cybersecurity",
          "Data Analytics",
          "Integration Services",
          "Automation",
        ]}
      />
    </>
  );
}
