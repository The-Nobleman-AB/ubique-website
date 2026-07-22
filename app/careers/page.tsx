import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import CareersHero from "@/components/careers/CareersHero";
import JobExplorer from "@/components/careers/JobExplorer";
import WhyJoinUbique from "@/components/careers/WhyJoinUbique";
import HiringProcess from "@/components/careers/HiringProcess";
import CareersCTA from "@/components/careers/CareersCTA";

export default function CareersPage() {
  return (
    <>
      <Header />

      <main>

        <CareersHero />

        <JobExplorer />

        <WhyJoinUbique />

        <HiringProcess />

        <CareersCTA />

      </main>

      <Footer />
    </>
  );
}