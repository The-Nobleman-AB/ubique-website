import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import WhyIndustries from "@/components/industries/WhyIndustries";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <main>

        <IndustriesHero />

        <IndustriesGrid />

        <WhyIndustries />

        <IndustriesCTA />

      </main>

      <Footer />
    </>
  );
}