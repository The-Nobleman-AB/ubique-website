import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Transport & Logistics",
  description:
    "Enterprise technology and specialist talent for transport, freight and logistics operators — TMS and WMS platforms, fleet telematics, and real-time visibility.",
  alternates: { canonical: absoluteUrl("/industries/transport-logistics") },
  openGraph: {
    title: "Transport & Logistics | Ubique Systems",
    description:
      "Enterprise technology and specialist talent for transport, freight and logistics operators — TMS and WMS platforms, fleet telematics, and real-time visibility.",
    url: absoluteUrl("/industries/transport-logistics"),
  },
};

export default function TransportLogisticsPage() {
  return (
    <IndustryPageTemplate
      title="Transport & Logistics"
      subtitle="Logistics runs on systems that cannot go down: a warehouse without a WMS stops, and a fleet without telematics is invisible. We supply the ERP, integration and data people who keep those platforms moving and modernise them without stopping the operation."
      priorities={[
        {
          title: "Warehouse and transport management",
          description:
            "WMS and TMS implementations and upgrades, planned around peak season rather than the project plan.",
        },
        {
          title: "Real-time visibility",
          description:
            "Track-and-trace across carriers and modes, so a customer question can be answered without three phone calls.",
        },
        {
          title: "Fleet telematics and IoT",
          description:
            "Vehicle data, driver behaviour and predictive maintenance turned into decisions rather than dashboards.",
        },
        {
          title: "Route and network optimisation",
          description:
            "Planning systems that account for cost, emissions, driver hours and service commitments at the same time.",
        },
        {
          title: "Automation in the warehouse",
          description:
            "Integrating robotics and automated handling with the systems of record, which is usually where these programmes stall.",
        },
        {
          title: "Customs and compliance",
          description:
            "Cross-border declarations, duty management and the documentation trail that follows every shipment.",
        },
      ]}
      solutions={[
        "WMS & TMS Implementation",
        "Supply Chain Visibility Platforms",
        "Fleet Telematics & IoT",
        "Network Optimisation",
        "Warehouse Automation Integration",
        "Customs & Trade Compliance Systems",
      ]}
      technologies={[
        "SAP EWM",
        "SAP TM",
        "Blue Yonder",
        "Manhattan Associates",
        "Oracle SCM",
        "IoT",
        "Azure",
        "Kafka",
        "Power BI",
        "API Integration",
        "Machine Learning",
        "RFID",
      ]}
    />
  );
}
