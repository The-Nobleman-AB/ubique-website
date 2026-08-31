import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Manufacturing",
  description:
    "Helping manufacturers accelerate Industry 4.0, ERP modernisation, SAP transformation and digital engineering initiatives.",
  alternates: { canonical: absoluteUrl("/industries/manufacturing") },
  openGraph: {
    title: "Manufacturing | Ubique Systems",
    description:
      "Helping manufacturers accelerate Industry 4.0, ERP modernisation, SAP transformation and digital engineering initiatives.",
    url: absoluteUrl("/industries/manufacturing"),
  },
};

export default function ManufacturingPage() {
  return (
    <>
      <IndustryPageTemplate
        title="Manufacturing"
        subtitle="Manufacturers are embracing Industry 4.0, intelligent automation and connected operations to improve efficiency, resilience and customer value. Ubique Systems delivers consulting, enterprise technology solutions and specialist talent to support digital manufacturing transformation."

        priorities={[
          {
            title: "ERP Modernisation",
            description:
              "Modernise legacy ERP platforms through integrated SAP S/4HANA solutions that improve visibility, efficiency and business agility.",
          },
          {
            title: "Supply Chain Optimisation",
            description:
              "Increase supply chain resilience with connected planning, inventory visibility and intelligent logistics capabilities.",
          },
          {
            title: "Industry 4.0",
            description:
              "Adopt smart manufacturing technologies including IoT, automation and connected factory solutions to improve productivity.",
          },
          {
            title: "Engineering Talent",
            description:
              "Access experienced consultants, engineers and technology specialists to support manufacturing transformation programmes.",
          },
          {
            title: "Operational Intelligence",
            description:
              "Turn manufacturing data into actionable insights using dashboards, analytics and AI-driven decision support.",
          },
          {
            title: "Cloud Transformation",
            description:
              "Build secure, scalable cloud platforms that support future growth, innovation and operational resilience.",
          },
        ]}

        solutions={[
          "SAP S/4HANA Manufacturing Transformation",
          "Digital Factory & Industry 4.0 Consulting",
          "Supply Chain Optimisation",
          "Cloud ERP Modernisation",
          "Engineering & Technology Talent Solutions",
          "Data Analytics & Manufacturing Intelligence",
        ]}

        technologies={[
          "SAP S/4HANA",
          "SAP Digital Manufacturing",
          "SAP EWM",
          "SAP IBP",
          "Microsoft Azure",
          "Power BI",
          "IoT",
          "Artificial Intelligence",
          "Cloud Computing",
          "MES",
          "Automation",
          "Industry 4.0",
        ]}
      />
    </>
  );
}
