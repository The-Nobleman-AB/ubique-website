import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Retail & Consumer",
  description:
    "Helping retail and consumer businesses accelerate digital commerce, optimise supply chains, improve customer experiences and modernise enterprise technology.",
  alternates: { canonical: absoluteUrl("/industries/retail-consumer") },
  openGraph: {
    title: "Retail & Consumer | Ubique Systems",
    description:
      "Helping retail and consumer businesses accelerate digital commerce, optimise supply chains, improve customer experiences and modernise enterprise technology.",
    url: absoluteUrl("/industries/retail-consumer"),
  },
};

export default function RetailConsumerPage() {
  return (
    <>
      <IndustryPageTemplate
        title="Retail & Consumer"
        subtitle="Retail and consumer businesses are continuously adapting to changing customer expectations, omnichannel commerce and evolving supply chain demands. Ubique Systems delivers consulting, enterprise technology and specialist talent to help organisations create connected, customer-centric retail experiences."

        priorities={[
          {
            title: "Omnichannel Commerce",
            description:
              "Create seamless shopping experiences across physical stores, online platforms and mobile channels.",
          },
          {
            title: "Customer Experience",
            description:
              "Use technology and data to deliver personalised customer journeys and strengthen brand loyalty.",
          },
          {
            title: "Supply Chain Visibility",
            description:
              "Improve inventory management, logistics and demand planning through connected enterprise solutions.",
          },
          {
            title: "Retail Analytics",
            description:
              "Transform business data into insights that support merchandising, sales and operational decisions.",
          },
          {
            title: "Digital Transformation",
            description:
              "Modernise retail platforms with cloud technologies, automation and scalable enterprise systems.",
          },
          {
            title: "Retail Talent",
            description:
              "Strengthen transformation programmes with experienced consultants, technology specialists and project teams.",
          },
        ]}

        solutions={[
          "Digital Commerce Transformation",
          "SAP Retail Solutions",
          "Customer Experience Platforms",
          "Supply Chain & Inventory Optimisation",
          "Cloud & Data Analytics",
          "Technology & Consulting Talent Solutions",
        ]}

        technologies={[
          "SAP",
          "Microsoft Azure",
          "Power BI",
          "Microsoft Power Platform",
          "Cloud Computing",
          "Artificial Intelligence",
          "Data Analytics",
          "CRM",
          "E-Commerce Platforms",
          "Automation",
          "API Integration",
          "Business Intelligence",
        ]}
      />
    </>
  );
}
