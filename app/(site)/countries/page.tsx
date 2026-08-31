import GlobalHero from "@/components/countries/GlobalHero";
import GlobalNetwork from "@/components/countries/GlobalNetwork";
import RegionalPresence from "@/components/countries/RegionalPresence";
import CTABand from "@/components/ui/CTABand";

import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Global Presence — Offices Across 15+ Countries",
  description:
    "Ubique Systems operates across Asia-Pacific, Europe and the Americas, with offices in India, the UK, Germany, the US, Denmark, Vietnam, the Czech Republic and more.",
  alternates: { canonical: absoluteUrl("/countries") },
};

export default function GlobalPresencePage() {
  return (
    <>
      <GlobalHero />

      <GlobalNetwork />

      <RegionalPresence />

      <CTABand
        title="Hiring in more than one country?"
        body="Tell us where the work is and we'll tell you what each market will take — notice periods, compliance, cost and realistic timelines."
        actions={[
          { label: "Start a conversation", href: "/contact" },
          { label: "Every office", href: "/contact#offices", variant: "ghost" },
        ]}
      />
    </>
  );
}
