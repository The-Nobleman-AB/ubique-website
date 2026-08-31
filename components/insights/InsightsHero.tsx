import { Building2, Cpu, Newspaper, Users } from "lucide-react";

import PageHero from "@/components/ui/PageHero";

const focusAreas = [
  { icon: Building2, title: "Company news" },
  { icon: Cpu, title: "Technology" },
  { icon: Users, title: "Careers" },
  { icon: Newspaper, title: "Industry updates" },
];

export default function InsightsHero() {
  return (
    <PageHero
      eyebrow="News & insights"
      title="What we're seeing across the market"
      intro="Company announcements, hiring market commentary and perspectives from the Ubique Systems team as we support organisations across global markets."
      actions={[{ label: "Talk to us", href: "/contact" }]}
      aside={
        <div className="rounded-panel border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="eyebrow text-white/50">Focus areas</p>

          <ul className="mt-6 flex flex-col gap-3">
            {focusAreas.map((area) => (
              <li
                key={area.title}
                className="rounded-control flex items-center gap-4 border border-white/10 bg-white/5 px-5 py-4"
              >
                <area.icon
                  size={20}
                  aria-hidden="true"
                  className="text-accent shrink-0"
                />
                <span className="font-medium text-white">{area.title}</span>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}
