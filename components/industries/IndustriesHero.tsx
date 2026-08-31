import PageHero from "@/components/ui/PageHero";

export default function IndustriesHero() {
  return (
    <PageHero
      eyebrow="Industry expertise"
      title="Technology expertise tailored for every industry"
      intro="Every industry has its own regulatory pressure, technology priorities and talent scarcity. We bring consulting, enterprise technology and specialist people aligned to the sector you actually operate in."
      actions={[
        { label: "Talk to our experts", href: "/contact" },
        { label: "View services", href: "/services", variant: "ghost" },
      ]}
    />
  );
}
