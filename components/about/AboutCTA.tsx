import CTABand from "@/components/ui/CTABand";

export default function AboutCTA() {
  return (
    <CTABand
      title={"Let's build your next team"}
      body={
        "Tell us what you're trying to achieve and we'll put you with the specialist who knows your market — not a general enquiries queue."
      }
      actions={[
        { label: "Talk to us", href: "/contact" },
        { label: "See open roles", href: "/careers", variant: "ghost" },
      ]}
    />
  );
}
