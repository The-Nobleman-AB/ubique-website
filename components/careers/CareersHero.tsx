import PageHero from "@/components/ui/PageHero";
import RotatingPhrase from "./RotatingPhrase";
import { countryCount } from "@/data/offices";
import { practices } from "@/data/practices";

export default function CareersHero({ openRoles }: { openRoles: number }) {
  return (
    <PageHero
      eyebrow="Explore careers"
      title="Work on programmes that actually matter"
      intro="Enterprise applications, cloud and infrastructure, data and AI, cybersecurity — across our offices and our clients' most demanding projects."
      actions={[
        { label: "See open roles", href: "#job-explorer" },
        { label: "Talk to a consultant", href: "/contact", variant: "ghost" },
      ]}
      stats={[
        { value: `${openRoles}`, label: "Roles open right now" },
        { value: `${countryCount}+`, label: "Countries you could work in" },
        { value: `${practices.length}`, label: "Technology practices" },
        { value: "5 days", label: "We reply within" },
      ]}
      aside={
        <div className="rounded-panel border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="eyebrow text-white/50">Here you could</p>

          <div className="mt-6">
            <RotatingPhrase />
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/60">
            People first. Technology driven. Globally connected.
          </p>
        </div>
      }
    />
  );
}
