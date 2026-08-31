import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import WhyIndustries from "@/components/industries/WhyIndustries";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Enterprise technology and workforce expertise across automotive, banking and financial services, healthcare and life sciences, manufacturing, retail and consumer, and technology.",
  alternates: { canonical: absoluteUrl("/industries") },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />

      <IndustriesGrid />

      <WhyIndustries />

      <IndustriesCTA />
    </>
  );
}
