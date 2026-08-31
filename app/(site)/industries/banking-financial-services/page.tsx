import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Banking & Financial Services",
  description:
    "Helping banks and financial institutions modernise technology, strengthen cybersecurity, improve compliance and accelerate digital transformation.",
  alternates: {
    canonical: absoluteUrl("/industries/banking-financial-services"),
  },
  openGraph: {
    title: "Banking & Financial Services | Ubique Systems",
    description:
      "Helping banks and financial institutions modernise technology, strengthen cybersecurity, improve compliance and accelerate digital transformation.",
    url: absoluteUrl("/industries/banking-financial-services"),
  },
};

export default function BankingFinancialServicesPage() {
  return (
    <>
      <IndustryPageTemplate
        title="Banking & Financial Services"
        subtitle="Financial institutions are transforming to meet evolving customer expectations, regulatory requirements and digital innovation. Ubique Systems provides consulting, enterprise technology and specialist professionals to help banks and financial organisations build secure, resilient and future-ready operations."

        priorities={[
          {
            title: "Digital Banking",
            description:
              "Deliver seamless digital experiences across online and mobile banking platforms while improving operational efficiency.",
          },
          {
            title: "Cybersecurity",
            description:
              "Protect sensitive financial data and critical systems with robust security, governance and risk management practices.",
          },
          {
            title: "Regulatory Compliance",
            description:
              "Navigate evolving financial regulations with technology solutions that support governance, compliance and reporting.",
          },
          {
            title: "Data & Analytics",
            description:
              "Leverage enterprise data to improve customer insights, operational performance and strategic decision-making.",
          },
          {
            title: "Cloud Transformation",
            description:
              "Modernise legacy banking infrastructure using secure cloud technologies and scalable enterprise platforms.",
          },
          {
            title: "Technology Talent",
            description:
              "Strengthen delivery teams with experienced consultants, architects, engineers and financial technology specialists.",
          },
        ]}

        solutions={[
          "Digital Banking Transformation",
          "SAP Financial Solutions",
          "Cloud & Infrastructure Modernisation",
          "Cybersecurity & Risk Consulting",
          "Data Analytics & Business Intelligence",
          "Technology & Consulting Talent Solutions",
        ]}

        technologies={[
          "SAP",
          "Microsoft Azure",
          "Power BI",
          "Microsoft Power Platform",
          "AWS",
          "SQL Server",
          "Oracle",
          "Artificial Intelligence",
          "Cloud Computing",
          "Cybersecurity",
          "DevOps",
          "API Integration",
        ]}
      />
    </>
  );
}
