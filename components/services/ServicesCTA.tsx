import CTABand from "@/components/ui/CTABand";

export default function ServicesCTA() {
  return (
    <CTABand
      title={"Ready to build your team?"}
      body={
        "Describe the programme, the skills and the timeline. We'll come back with a resourcing plan and an honest read on the market."
      }
      actions={[
        { label: "Start a conversation", href: "/contact" },
        {
          label: "See our practices",
          href: "/services/technology-practices",
          variant: "ghost",
        },
      ]}
    />
  );
}
