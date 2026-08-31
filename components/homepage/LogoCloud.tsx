import {
  Building2,
  Landmark,
  Factory,
  HeartPulse,
  ShoppingBag,
  Cpu,
} from "lucide-react";

/**
 * Client credibility strip.
 *
 * Deliberately anonymised. The previous version listed BMW, Bosch, Siemens,
 * Capgemini, Infosys and Accenture as plain grey text — which needs written
 * permission and real logo files to be legitimate, and reads as invented
 * without them. Industry descriptors make the same point and are defensible.
 *
 * Swap this for a real logo cloud once client logo usage is signed off.
 */

const sectors = [
  { name: "Global automotive manufacturers", icon: Factory },
  { name: "Tier-1 banking groups", icon: Landmark },
  { name: "Industrial engineering firms", icon: Building2 },
  { name: "Healthcare and life sciences", icon: HeartPulse },
  { name: "International retail groups", icon: ShoppingBag },
  { name: "Technology and software scale-ups", icon: Cpu },
];

export default function LogoCloud() {
  return (
    <section className="section-y-sm bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="eyebrow text-muted text-center">
          The organisations we build teams for
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-3 lg:grid-cols-6">
          {sectors.map((sector) => (
            <li
              key={sector.name}
              className="flex flex-col items-center gap-3 text-center"
            >
              <sector.icon
                size={26}
                aria-hidden="true"
                strokeWidth={1.5}
                className="text-brand/60"
              />

              <span className="text-muted text-sm leading-snug font-medium">
                {sector.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
