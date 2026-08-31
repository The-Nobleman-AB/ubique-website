import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Energy & Utilities",
  description:
    "Technology consulting and specialist talent for energy and utilities — grid systems, asset management, smart metering, and the data behind the energy transition.",
  alternates: { canonical: absoluteUrl("/industries/energy-utilities") },
  openGraph: {
    title: "Energy & Utilities | Ubique Systems",
    description:
      "Technology consulting and specialist talent for energy and utilities — grid systems, asset management, smart metering, and the data behind the energy transition.",
    url: absoluteUrl("/industries/energy-utilities"),
  },
};

export default function EnergyUtilitiesPage() {
  return (
    <IndustryPageTemplate
      title="Energy & Utilities"
      subtitle="The energy transition is largely a systems problem: distributed generation, bidirectional flows and half-hourly settlement all land on platforms designed for a one-directional grid. We resource and advise on the work of catching those systems up."
      priorities={[
        {
          title: "Grid and network systems",
          description:
            "ADMS, SCADA and outage management for networks now absorbing distributed generation and storage they were never designed for.",
        },
        {
          title: "Asset management",
          description:
            "Condition-based maintenance across long-lived physical assets, where a failure is measured in outage minutes rather than tickets.",
        },
        {
          title: "Smart metering and settlement",
          description:
            "Meter data management at national scale, and the settlement processes that depend on it being right.",
        },
        {
          title: "Renewables and storage",
          description:
            "Forecasting, dispatch and trading systems for a generation mix that changes with the weather.",
        },
        {
          title: "Customer and billing platforms",
          description:
            "Billing systems handling tariff complexity, flexible pricing and export payments alongside standard consumption.",
        },
        {
          title: "Regulatory reporting",
          description:
            "Emissions, resilience and market reporting, with auditability built in rather than reconstructed each period.",
        },
      ]}
      solutions={[
        "Grid & Network Systems",
        "Enterprise Asset Management",
        "Meter Data & Settlement",
        "Renewables & Trading Platforms",
        "Billing Transformation",
        "Regulatory & Emissions Reporting",
      ]}
      technologies={[
        "SAP S/4HANA Utilities",
        "SAP EAM",
        "Oracle Utilities",
        "SCADA",
        "ADMS",
        "Azure",
        "Databricks",
        "IoT",
        "Time-Series Data",
        "Power BI",
        "Machine Learning",
        "GIS",
      ]}
    />
  );
}
