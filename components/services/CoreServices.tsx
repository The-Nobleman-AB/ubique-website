import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const pillars = [
  {
    id: "01",
    label: "Build",
    title: "Build High-Performing Teams",
    subtitle: "Permanent Recruitment • Executive Search • Leadership Hiring",
    description:
      "Building exceptional teams starts with finding exceptional people. Ubique partners with organizations to identify professionals who not only possess the right technical expertise but also align with your culture, long-term vision and business objectives.",
    image: "/images/services/build.jpg",
    reverse: false,
    highlights: [
      "Permanent Recruitment",
      "Executive Search",
      "Leadership Hiring",
      "Specialist Technology Recruitment",
      "Global Talent Acquisition",
    ],
    stat: "7",
    statLabel: "Technology Practices",
  },
  {
    id: "02",
    label: "Scale",
    title: "Scale Teams At Speed",
    subtitle: "Contract Staffing • Managed Teams • Project Delivery",
    description:
      "Whether you're launching a new programme, expanding into new markets or accelerating delivery, Ubique provides flexible workforce solutions that allow organizations to scale confidently without compromising quality.",
    image: "/images/services/scale.jpg",
    reverse: true,
    highlights: [
      "Contract Staffing",
      "Managed Teams",
      "Project-Based Hiring",
      "Rapid Workforce Expansion",
      "Dedicated Delivery Teams",
    ],
    stat: "10",
    statLabel: "Offices & Delivery Centres",
  },
  {
    id: "03",
    label: "Transform",
    title: "Transform Through Technology",
    subtitle: "Consulting • Workforce Strategy • Digital Transformation",
    description:
      "Technology transformation demands more than recruitment. Ubique combines consulting expertise, workforce planning and specialist hiring to help organizations navigate complex transformation programmes with confidence.",
    image: "/images/services/transform.jpg",
    reverse: false,
    highlights: [
      "Technology Consulting",
      "Digital Transformation",
      "Cloud Strategy",
      "SAP Consulting",
      "Workforce Advisory",
    ],
    stat: "15+",
    statLabel: "Countries Supported",
  },
];

export default function CoreServices() {
  return (
    <section id="resourcing" className="section-y-lg bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="eyebrow text-brand">How we help</p>

          <h2 className="display-2 mt-4 font-bold">
            Build.
            <br />
            Scale.
            <br />
            Transform.
          </h2>

          <p className="text-muted mt-10 max-w-3xl text-xl leading-relaxed">
            Every organisation is at a different stage of growth. Our workforce
            solutions are designed around three fundamental business needs —
            building exceptional teams, scaling capability and transforming
            through technology.
          </p>
        </div>

        {/* Pillars */}

        <div className="mt-28 space-y-40">
          {pillars.map((pillar) => (
            <section
              key={pillar.id}
              className={`grid items-center gap-20 lg:grid-cols-12 ${pillar.reverse ? "lg:[&>*:first-child]:order-2" : ""} `}
            >
              {/* IMAGE */}

              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="rounded-panel shadow-panel overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      width={1400}
                      height={900}
                      className="h-[620px] w-full object-cover"
                    />
                  </div>

                  {/* Floating Stat */}

                  <div className="rounded-card absolute -bottom-8 left-10 bg-white px-8 py-6 shadow-2xl">
                    <div className="text-brand text-4xl font-bold">
                      {pillar.stat}
                    </div>

                    <p className="text-muted mt-2">{pillar.statLabel}</p>
                  </div>
                </div>
              </div>

              {/* CONTENT */}

              <div className="lg:col-span-6">
                <div className="eyebrow text-accent">{pillar.label}</div>

                <div className="watermark text-brand-tint mt-2 font-bold">
                  {pillar.id}
                </div>

                <h3 className="display-2 -mt-6 font-bold">{pillar.title}</h3>

                <p className="text-brand mt-6 text-xl font-semibold">
                  {pillar.subtitle}
                </p>

                <p className="text-muted mt-8 text-lg leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {pillar.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="bg-accent/10 flex h-8 w-8 items-center justify-center rounded-full">
                        <Check size={16} className="text-accent" />
                      </div>

                      <span className="text-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-14 flex flex-wrap items-center gap-6">
                  <Link
                    href="/contact"
                    className="rounded-control bg-brand hover:bg-brand-dark inline-flex items-center justify-center px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200"
                  >
                    Speak To Our Team
                  </Link>

                  <Link
                    href="/countries/india"
                    className="text-brand inline-flex items-center gap-3 font-semibold transition-all duration-200 hover:gap-4"
                  >
                    Explore Talent Markets
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
