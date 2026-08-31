import CTABand from "@/components/ui/CTABand";

export default function IndustriesCTA() {
  return (
    <CTABand
      title={"Let's discuss your sector"}
      body={
        "Every industry has its own constraints. Tell us yours and we'll bring people who have worked inside them before."
      }
      actions={[
        { label: "Talk to our experts", href: "/contact" },
        { label: "View services", href: "/services", variant: "ghost" },
      ]}
    />
  );
}
