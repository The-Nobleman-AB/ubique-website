import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import AmericasHero from "@/components/countries/americas/AmericasHero";
import AmericasOverview from "@/components/countries/americas/AmericasOverview";
import UnitedStatesPresence from "@/components/countries/americas/UnitedStatesPresence";
import GrowthPartnership from "@/components/countries/americas/GrowthPartnership";
import AmericasCTA from "@/components/countries/americas/AmericasCTA";

export default function AmericasPage() {
  return (
    <>
      <Header />

      <main>
        <AmericasHero />
        <AmericasOverview />
        <UnitedStatesPresence />
        <GrowthPartnership />
        <AmericasCTA />
      </main>

      <Footer />
    </>
  );
}