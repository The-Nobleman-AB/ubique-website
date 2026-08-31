import Hero from "@/components/homepage/Hero";
import LogoCloud from "@/components/homepage/LogoCloud";
import Metrics from "@/components/homepage/Metrics";
import DualPath from "@/components/homepage/DualPath";
import Services from "@/components/homepage/Services";
import Practices from "@/components/homepage/Practices";
import GlobalPresence from "@/components/homepage/GlobalPresence";
import Industries from "@/components/homepage/Industries";
import CaseStudies from "@/components/homepage/CaseStudies";
import OpenRoles from "@/components/homepage/OpenRoles";
import Testimonials from "@/components/homepage/Testimonials";
import FinalCTA from "@/components/homepage/FinalCTA";

import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Recruitment & Consulting Since 2000",
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
};

export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <Hero />

      <LogoCloud />

      <Metrics />

      <DualPath />

      <Services />

      <Practices />

      <GlobalPresence />

      <Industries />

      <OpenRoles />

      <CaseStudies />

      <Testimonials />

      <FinalCTA />
    </>
  );
}
