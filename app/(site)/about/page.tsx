import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import HowWeWork from "@/components/about/HowWeWork";
import EnterpriseExpertise from "@/components/about/EnterpriseExpertise";
import GlobalWorkforceNetwork from "@/components/about/GlobalWorkforceNetwork";
import LifeAtUbique from "@/components/about/LifeAtUbique";
import AboutCTA from "@/components/about/AboutCTA";

import { absoluteUrl, siteConfig, yearsInBusinessRounded } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ubique Systems",
  description: `An ISO 27001-certified IT recruitment and consulting firm, established in ${siteConfig.foundedYear} — ${yearsInBusinessRounded}+ years of enterprise delivery, headquartered in Kolkata with offices across Europe, Asia-Pacific and the Americas.`,
  alternates: { canonical: absoluteUrl("/about") },
};

/**
 * About.
 *
 * Was ten sections, three of which ("How We Think", "The Ubique Difference",
 * "Why Clients Stay") made the same four claims twelve times between them.
 * Now six, each doing a distinct job: who we are, where we came from, how we
 * work, what we cover, where we operate, and who works here.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <HowWeWork />
      <EnterpriseExpertise />
      <GlobalWorkforceNetwork />
      <LifeAtUbique />
      <AboutCTA />
    </>
  );
}
