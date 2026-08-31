import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Automotive",
  description:
    "Helping automotive organisations accelerate digital manufacturing, connected mobility, SAP transformation and engineering excellence through enterprise technology and consulting.",
  alternates: { canonical: absoluteUrl("/industries/automotive") },
  openGraph: {
    title: "Automotive | Ubique Systems",
    description:
      "Helping automotive organisations accelerate digital manufacturing, connected mobility, SAP transformation and engineering excellence through enterprise technology and consulting.",
    url: absoluteUrl("/industries/automotive"),
  },
};

export default function AutomotivePage() {
  return (
    <>
      <IndustryPageTemplate
        title="Automotive"
        subtitle="The automotive industry is rapidly evolving through electrification, connected vehicles, intelligent manufacturing and digital transformation. Ubique Systems partners with automotive organisations to modernise operations, strengthen engineering capabilities and deliver future-ready enterprise technology solutions."

        priorities={[
          {
            title: "Connected Manufacturing",
            description:
              "Modernise manufacturing operations using connected systems, automation and real-time operational visibility.",
          },
          {
            title: "Engineering Excellence",
            description:
              "Strengthen engineering capabilities with specialist consultants and technology professionals supporting complex programmes.",
          },
          {
            title: "Digital Supply Chains",
            description:
              "Improve collaboration, planning and inventory visibility across suppliers, production and distribution networks.",
          },
          {
            title: "Electrification & Innovation",
            description:
              "Support next-generation mobility initiatives through scalable digital platforms and modern engineering practices.",
          },
          {
            title: "Enterprise Transformation",
            description:
              "Modernise legacy systems with integrated ERP, cloud technologies and intelligent business processes.",
          },
          {
            title: "Operational Analytics",
            description:
              "Leverage analytics and business intelligence to improve manufacturing performance, quality and decision-making.",
          },
        ]}

        solutions={[
          "SAP Automotive Solutions",
          "Digital Manufacturing Transformation",
          "Engineering & Product Development Support",
          "Supply Chain Optimisation",
          "Cloud & Enterprise Modernisation",
          "Technology & Consulting Talent Solutions",
        ]}

        technologies={[
          "SAP S/4HANA",
          "SAP Digital Manufacturing",
          "Microsoft Azure",
          "Power BI",
          "IoT",
          "Artificial Intelligence",
          "Cloud Computing",
          "Automation",
          "Industry 4.0",
          "Digital Twin",
          "MES",
          "Data Analytics",
        ]}
      />
    </>
  );
}
