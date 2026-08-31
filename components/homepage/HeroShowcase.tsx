import Image from "next/image";

import { countryCount, offices } from "@/data/offices";
import { practices } from "@/data/practices";

/**
 * Hero image with floating stat cards.
 *
 * The figures are derived from the office and practice data rather than the
 * previous hardcoded "500+ Placements / 98% Retention", which nothing in the
 * repo could evidence. Cards are inset rather than negatively offset, so they
 * can't push the page into horizontal scroll on narrow viewports.
 */

const cards = [
  {
    value: `${countryCount}+`,
    label: "Countries",
    tone: "text-brand",
    position: "top-6 left-4 md:top-10 md:-left-5 lg:-left-8",
  },
  {
    value: `${offices.length}`,
    label: "Offices & delivery centres",
    tone: "text-accent",
    position: "top-28 right-4 md:top-32 md:-right-4 lg:top-40 lg:-right-6",
  },
  {
    value: `${practices.length}`,
    label: "Technology practices",
    tone: "text-accent",
    position:
      "-bottom-4 right-4 md:-bottom-5 md:right-8 lg:-bottom-6 lg:right-10",
  },
];

export default function HeroShowcase() {
  return (
    <div className="relative z-0 mx-auto w-full max-w-[650px]">
      <div className="rounded-card shadow-panel relative overflow-hidden">
        <Image
          src="/images/hero/workforce-team.jpeg"
          alt="Ubique Systems consultants collaborating in an office"
          width={900}
          height={700}
          priority
          sizes="(max-width: 1024px) 100vw, 650px"
          className="h-[420px] w-full object-cover md:h-[500px] lg:h-[550px]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />

        <div className="absolute bottom-16 left-6 z-20 max-w-[62%] text-white md:bottom-20 md:left-8">
          <p className="eyebrow text-white/80">Global workforce network</p>

          <p className="mt-2 text-2xl leading-tight font-bold md:text-3xl">
            Connecting talent across continents
          </p>
        </div>
      </div>

      {cards.map((card) => (
        <div
          key={card.label}
          className={`rounded-control shadow-lift absolute z-10 max-w-[10rem] bg-white p-3 md:p-4 lg:p-5 ${card.position}`}
        >
          <div className={`text-2xl font-bold md:text-3xl ${card.tone}`}>
            {card.value}
          </div>

          <div className="text-muted mt-0.5 text-xs leading-snug md:text-sm">
            {card.label}
          </div>
        </div>
      ))}
    </div>
  );
}
