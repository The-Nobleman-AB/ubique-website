import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Media & Entertainment",
  description:
    "Technology talent and consulting for broadcasters, studios and streaming platforms — content supply chains, rights management, OTT delivery and audience data.",
  alternates: { canonical: absoluteUrl("/industries/media-entertainment") },
  openGraph: {
    title: "Media & Entertainment | Ubique Systems",
    description:
      "Technology talent and consulting for broadcasters, studios and streaming platforms — content supply chains, rights management, OTT delivery and audience data.",
    url: absoluteUrl("/industries/media-entertainment"),
  },
};

export default function MediaEntertainmentPage() {
  return (
    <IndustryPageTemplate
      title="Media & Entertainment"
      subtitle="Media businesses run engineering problems at consumer scale with broadcast-grade reliability expectations. We resource the platform, data and delivery work behind content that has to arrive on time, everywhere, every time."
      priorities={[
        {
          title: "OTT and streaming delivery",
          description:
            "Encoding, packaging and CDN strategy for services that have to hold up on launch night as well as on an average Tuesday.",
        },
        {
          title: "Content supply chain",
          description:
            "Moving assets from production through post, localisation and distribution without losing metadata or version control along the way.",
        },
        {
          title: "Rights and royalties",
          description:
            "Systems that track who owns what, where it can be shown, and who gets paid — usually the least modernised part of the estate.",
        },
        {
          title: "Audience data and personalisation",
          description:
            "Recommendation, segmentation and measurement built on first-party data as third-party signals disappear.",
        },
        {
          title: "Cloud production workflows",
          description:
            "Remote and hybrid production, with editorial teams working on media too large to move casually.",
        },
        {
          title: "Advertising technology",
          description:
            "Ad decisioning, dynamic insertion and yield systems that have to reconcile with finance at the end of the month.",
        },
      ]}
      solutions={[
        "Streaming Platform Engineering",
        "Content Supply Chain Systems",
        "Rights & Royalties Modernisation",
        "Audience Data Platforms",
        "Cloud Production Workflows",
        "Advertising Technology",
      ]}
      technologies={[
        "AWS Media Services",
        "Video Encoding",
        "CDN",
        "MAM/DAM",
        "Snowflake",
        "Kafka",
        "Kubernetes",
        "Salesforce",
        "SAP",
        "Machine Learning",
        "GraphQL",
        "Data Engineering",
      ]}
    />
  );
}
