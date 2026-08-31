import PageHero from "@/components/ui/PageHero";
import { officesByCountry } from "@/data/offices";

export default function IndiaHero() {
  const indian = officesByCountry("IN");

  return (
    <PageHero
      eyebrow="India"
      title="The global engine for technology talent"
      intro="Access one of the world's largest pools of software engineers, SAP consultants, cloud specialists and AI professionals — through the country where our headquarters and delivery centres already sit."
      breadcrumbs={[
        { name: "Global Presence", href: "/countries" },
        { name: "Asia-Pacific", href: "/countries/asia-pacific" },
        { name: "India" },
      ]}
      actions={[
        { label: "Talk to the India team", href: "/contact" },
        {
          label: "Read the talent report",
          href: "/countries/india/talent-report",
          variant: "ghost",
        },
      ]}
      stats={[
        { value: `${indian.length}`, label: "Offices & delivery centres" },
        { value: "Kolkata", label: "Global headquarters" },
        { value: "Bangalore", label: "Largest engineering hub" },
        { value: "Pune", label: "Enterprise delivery centre" },
      ]}
    />
  );
}
