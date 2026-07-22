import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedMessage from "@/components/insights/FeaturedMessage";
import LatestUpdates from "@/components/insights/LatestUpdates";
import TopicsWeFollow from "@/components/insights/TopicsWeFollow";
import InsightsCTA from "@/components/insights/InsightsCTA";

export default function InsightsPage() {
  return (
    <>
      <Header />

      <main>
        <InsightsHero />
        <FeaturedMessage />
        <LatestUpdates />
        <TopicsWeFollow />
        <InsightsCTA />
      </main>

      <Footer />
    </>
  );
}