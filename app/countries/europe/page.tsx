import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import EuropeHero from "@/components/countries/europe/EuropeHero";
import EuropeOverview from "@/components/countries/europe/EuropeOverview";
import EuropeanMarkets from "@/components/countries/europe/EuropeanMarkets";
import EuropeExpertise from "@/components/countries/europe/EuropeExpertise";
import EuropeCTA from "@/components/countries/europe/EuropeCTA";

export default function EuropePage() {
  return (
    <>
      <Header />

      <main>

        <EuropeHero />

        <EuropeOverview />

        <EuropeanMarkets />

        <EuropeExpertise />

        <EuropeCTA />

      </main>

      <Footer />
    </>
  );
}