import Link from "next/link";
import {
  ArrowRight,
  Car,
  Clapperboard,
  Cpu,
  Factory,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingBag,
  Truck,
  Zap,
} from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: Car,
    href: "/industries/automotive",
    challenges: [
      "Digital manufacturing",
      "Connected mobility",
      "Engineering talent",
    ],
  },
  {
    title: "Aviation & Defence",
    icon: Plane,
    href: "/industries/aviation-defence",
    challenges: ["Cleared talent", "MRO systems", "Safety-critical software"],
  },
  {
    title: "Banking & Financial Services",
    icon: Landmark,
    href: "/industries/banking-financial-services",
    challenges: ["Digital banking", "Risk & compliance", "Cybersecurity"],
  },
  {
    title: "Energy & Utilities",
    icon: Zap,
    href: "/industries/energy-utilities",
    challenges: ["Grid systems", "Asset management", "Energy transition"],
  },
  {
    title: "Healthcare & Life Sciences",
    icon: HeartPulse,
    href: "/industries/healthcare-life-sciences",
    challenges: ["Healthcare platforms", "Data privacy", "Clinical operations"],
  },
  {
    title: "Media & Entertainment",
    icon: Clapperboard,
    href: "/industries/media-entertainment",
    challenges: [
      "Streaming delivery",
      "Content supply chain",
      "Rights & royalties",
    ],
  },
  {
    title: "Retail & Consumer",
    icon: ShoppingBag,
    href: "/industries/retail-consumer",
    challenges: ["Customer experience", "E-Commerce", "Supply chain"],
  },
  {
    title: "Manufacturing",
    icon: Factory,
    href: "/industries/manufacturing",
    challenges: ["Industry 4.0", "ERP Modernisation", "Smart factories"],
  },
  {
    title: "Technology",
    icon: Cpu,
    href: "/industries/technology",
    challenges: ["Cloud", "AI", "Software Engineering"],
  },
  {
    title: "Transport & Logistics",
    icon: Truck,
    href: "/industries/transport-logistics",
    challenges: ["WMS & TMS", "Fleet telematics", "Real-time visibility"],
  },
];

export default function IndustriesGrid() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow text-brand">Industry Focus</p>

          <h2 className="display-2 text-navy mt-4 font-bold">
            Built Around
            <br />
            Industry Needs
          </h2>

          <p className="text-muted mt-8 text-lg leading-relaxed">
            Every sector has different priorities, regulations and
            transformation goals. Explore how Ubique combines consulting,
            enterprise technology and specialist talent to support each
            industry's unique journey.
          </p>
        </div>

        <div className="space-y-8">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.title}
                href={industry.href}
                className="group rounded-card hover:border-brand border-line hover:shadow-lift flex flex-col gap-8 border bg-white p-10 transition-all duration-200 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex items-start gap-6">
                  <div className="rounded-control bg-brand-tint text-brand flex h-16 w-16 items-center justify-center">
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="text-navy text-3xl font-bold">
                      {industry.title}
                    </h3>

                    <p className="text-muted mt-4 max-w-2xl leading-relaxed">
                      Delivering industry-aligned consulting, enterprise
                      technology solutions and specialised professionals for
                      sustainable business growth.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {industry.challenges.map((item) => (
                    <span
                      key={item}
                      className="bg-brand-tint text-brand rounded-full px-5 py-2 text-sm font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="text-brand flex items-center gap-3 font-semibold">
                  Explore Industry
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
