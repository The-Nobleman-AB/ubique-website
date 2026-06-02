import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import IndiaHero from "@/components/country/IndiaHero";
import IndiaStats from "@/components/country/IndiaStats";
import IndiaAdvantages from "@/components/country/IndiaAdvantages";
import IndiaTalentClusters from "@/components/country/IndiaTalentClusters";
import IndiaSkills from "@/components/country/IndiaSkills";
import IndiaHiringModels from "@/components/country/IndiaHiringModels";
import IndiaWhyUbique from "@/components/country/IndiaWhyUbique";
import IndiaCaseStudy from "@/components/country/IndiaCaseStudy";
import IndiaCTA from "@/components/country/IndiaCTA";
import IndiaSnapshot from "@/components/country/IndiaSnapshot";
import IndiaGuide from "@/components/country/IndiaGuide";
import IndiaTalentDistribution from "@/components/country/IndiaTalentDistribution";
import IndiaDemandIndex from "@/components/country/IndiaDemandIndex";
import IndiaSalaryBenchmark from "@/components/country/IndiaSalaryBenchmark";
import IndiaReportCTA from "@/components/country/IndiaReportCTA";
import IndiaCostAdvantage from "@/components/country/IndiaCostAdvantage";
import IndiaHiringTimeline from "@/components/country/IndiaHiringTimeline";
import IndiaReportCover from "@/components/country/IndiaReportCover";
import IndiaDashboard from "@/components/country/IndiaDashboard";

export default function IndiaPage() {
  return (
    <>
      <Header />

      <main>
        <IndiaHero />

	<IndiaReportCover />

        <IndiaStats />

        <IndiaAdvantages />

        <IndiaTalentClusters />

	<IndiaTalentDistribution />

	<IndiaSkills />

	<IndiaDemandIndex />

	<IndiaSalaryBenchmark />

	<IndiaCostAdvantage />

	<IndiaHiringTimeline />

	<IndiaHiringModels />

	<IndiaSnapshot />

	<IndiaWhyUbique />

	<IndiaCaseStudy />

	<IndiaGuide />

	<IndiaReportCTA />

	<IndiaCTA />
      </main>

      <Footer />
    </>
  );
}