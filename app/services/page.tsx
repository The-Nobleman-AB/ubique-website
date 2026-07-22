import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import CoreServices from "@/components/services/CoreServices";
import WorkforceJourney from "@/components/services/WorkforceJourney";
import TechnologyEcosystem from "@/components/services/TechnologyEcosystem";
import IndustriesExpertise from "@/components/services/IndustriesExpertise";
import WhyUbique from "@/components/services/WhyUbique";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>

        <ServicesHero />

        <ServicesOverview />

        <CoreServices />

        <WorkforceJourney />

        <TechnologyEcosystem />

        <IndustriesExpertise />

        <WhyUbique />

        <ServicesCTA />

      </main>

      <Footer />
    </>
  );
}