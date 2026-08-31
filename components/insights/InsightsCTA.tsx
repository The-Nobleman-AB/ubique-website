import CTABand from "@/components/ui/CTABand";

export default function InsightsCTA() {
  return (
    <CTABand
      title={"Want to talk about what you're seeing?"}
      body={
        "Market commentary is more useful as a conversation. Tell us what you're planning and we'll tell you what we're seeing."
      }
      actions={[
        { label: "Get in touch", href: "/contact" },
        { label: "Explore services", href: "/services", variant: "ghost" },
      ]}
    />
  );
}
