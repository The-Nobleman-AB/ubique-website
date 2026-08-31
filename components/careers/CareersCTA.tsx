import CTABand from "@/components/ui/CTABand";

export default function CareersCTA() {
  return (
    <CTABand
      title={"Don't see the right role?"}
      body={
        "Send us your CV anyway. A lot of our placements start before the role is advertised."
      }
      actions={[
        { label: "Send us your CV", href: "/contact" },
        { label: "Browse open roles", href: "/careers", variant: "ghost" },
      ]}
    />
  );
}
