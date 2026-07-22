import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import HowWeThink from "@/components/about/HowWeThink";
import EnterpriseExpertise from "@/components/about/EnterpriseExpertise";
import GlobalWorkforceNetwork from "@/components/about/GlobalWorkforceNetwork";
import WhyClientsStay from "@/components/about/WhyClientsStay";
import LifeAtUbique from "@/components/about/LifeAtUbique";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>

        <AboutHero />

        <OurStory />

        <HowWeThink />

        <EnterpriseExpertise />

        <GlobalWorkforceNetwork />

        <WhyClientsStay />

        <LifeAtUbique />

        <AboutCTA />

      </main>

      <Footer />
    </>
  );
}