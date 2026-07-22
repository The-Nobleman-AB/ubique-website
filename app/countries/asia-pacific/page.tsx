import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ApacHero from "@/components/countries/apac/ApacHero";
import ApacOverview from "@/components/countries/apac/ApacOverview";
import IndiaHeadquarters from "@/components/countries/apac/IndiaHeadquarters";
import RegionalCoverage from "@/components/countries/apac/RegionalCoverage";
import ApacCapabilities from "@/components/countries/apac/ApacCapabilities";
import ApacCTA from "@/components/countries/apac/ApacCTA";

export default function AsiaPacificPage() {
  return (
    <>
      <Header />

      <main>
        <ApacHero />

        <ApacOverview />

        <IndiaHeadquarters />

        <RegionalCoverage />

        <ApacCapabilities />

        <ApacCTA />
      </main>

      <Footer />
    </>
  );
}