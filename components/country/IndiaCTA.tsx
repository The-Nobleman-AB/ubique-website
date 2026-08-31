import CTABand from "@/components/ui/CTABand";

export default function IndiaCTA() {
  return (
    <CTABand
      title={"Ready to build your India team?"}
      body={
        "Whether it's three specialists or a standing delivery centre, we already operate where you want to hire."
      }
      actions={[
        { label: "Talk to the India team", href: "/contact" },
        {
          label: "Read the talent report",
          href: "/countries/india/talent-report",
          variant: "ghost",
        },
      ]}
    />
  );
}
