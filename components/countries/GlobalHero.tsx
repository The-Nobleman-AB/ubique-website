import PageHero from "@/components/ui/PageHero";
import {
  additionalPresence,
  countryCount,
  offices,
  regionLabels,
} from "@/data/offices";

export default function GlobalHero() {
  return (
    <PageHero
      eyebrow="Global presence"
      title="Delivering excellence worldwide"
      intro="We combine local market knowledge with global delivery capability — so a programme can be led where the client is and delivered where the talent is."
      actions={[
        { label: "Find your nearest office", href: "/contact#offices" },
        { label: "Talk to us", href: "/contact", variant: "ghost" },
      ]}
      stats={[
        { value: `${countryCount}+`, label: "Countries" },
        { value: `${offices.length}`, label: "Offices & delivery centres" },
        {
          value: `${Object.keys(regionLabels).length}`,
          label: "Regions covered",
        },
        {
          value: `${additionalPresence.length + offices.length}`,
          label: "Locations we operate from",
        },
      ]}
    />
  );
}
