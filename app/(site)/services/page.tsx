import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import CoreServices from "@/components/services/CoreServices";
import WorkforceJourney from "@/components/services/WorkforceJourney";
import DeliveryModel from "@/components/services/DeliveryModel";
import TechnologyEcosystem from "@/components/services/TechnologyEcosystem";
import IndustriesExpertise from "@/components/services/IndustriesExpertise";
import WhyUbique from "@/components/services/WhyUbique";
import ServicesCTA from "@/components/services/ServicesCTA";

import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Resourcing, Consulting & Global Delivery Services",
  description:
    "Contract and permanent IT resourcing, enterprise consulting and managed global delivery — across SAP, Oracle, Salesforce, Dynamics 365, cloud, data and integration.",
  alternates: { canonical: absoluteUrl("/services") },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServicesOverview />

      <CoreServices />

      <WorkforceJourney />

      <DeliveryModel />

      <TechnologyEcosystem />

      <IndustriesExpertise />

      <WhyUbique />

      <ServicesCTA />
    </>
  );
}
