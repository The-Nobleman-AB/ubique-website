import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/homepage/Hero";
import LogoCloud from "@/components/homepage/LogoCloud";
import Metrics from "@/components/homepage/Metrics";
import DualPath from "@/components/homepage/DualPath";
import Services from "@/components/homepage/Services";
import GlobalPresence from "@/components/homepage/GlobalPresence";
import Industries from "@/components/homepage/Industries";
import CaseStudies from "@/components/homepage/CaseStudies";
import Testimonials from "@/components/homepage/Testimonials";
import FinalCTA from "@/components/homepage/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <LogoCloud />

        <Metrics />

        <DualPath />

        <Services />

        <GlobalPresence />

        <Industries />

        <CaseStudies />

	<Testimonials />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}