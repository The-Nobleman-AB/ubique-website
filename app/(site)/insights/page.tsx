import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedMessage from "@/components/insights/FeaturedMessage";
import LatestUpdates from "@/components/insights/LatestUpdates";
import TopicsWeFollow from "@/components/insights/TopicsWeFollow";
import InsightsCTA from "@/components/insights/InsightsCTA";

import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Company news, hiring market commentary and technology updates from the Ubique Systems team.",
  alternates: { canonical: absoluteUrl("/insights") },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <FeaturedMessage />
      <LatestUpdates />
      <TopicsWeFollow />
      <InsightsCTA />
    </>
  );
}
