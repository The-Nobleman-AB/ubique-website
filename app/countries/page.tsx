import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import GlobalHero from "@/components/countries/GlobalHero";
import GlobalNetwork from "@/components/countries/GlobalNetwork";
import RegionalPresence from "@/components/countries/RegionalPresence";

export default function GlobalPresencePage() {
  return (
    <>
      <Header />

      <main>

        <GlobalHero />

        <GlobalNetwork />

        <RegionalPresence />

      </main>

      <Footer />
    </>
  );
}