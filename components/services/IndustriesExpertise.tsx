import {
  Building2,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  Cpu,
  Plane,
  Car,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description:
      "Technology talent supporting digital banking, fintech, payments and enterprise transformation.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description:
      "Specialists driving healthcare innovation, digital platforms and regulated technology delivery.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Engineering, ERP and Industry 4.0 expertise enabling modern manufacturing operations.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Cloud, AI, software engineering and enterprise platforms powering digital businesses.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Helping retailers modernise customer experiences, commerce platforms and supply chains.",
  },
  {
    icon: Plane,
    title: "Travel & Logistics",
    description:
      "Building resilient workforce solutions across aviation, logistics and global mobility.",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Supporting automotive leaders with SAP, engineering and digital manufacturing talent.",
  },
  {
    icon: Building2,
    title: "Global Capability Centres",
    description:
      "Scaling GCCs with specialist technology professionals across enterprise domains.",
  },
];

export default function IndustriesExpertise() {
  return (
    <section className="section-y-lg bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="eyebrow text-accent">Industry expertise</p>

          <h2 className="display-2 mt-4 font-bold">
            Industry Knowledge Meets Technology Expertise
          </h2>

          <p className="text-muted mt-10 max-w-3xl text-xl leading-relaxed">
            Every industry has unique workforce challenges. Our consultants
            combine deep sector understanding with technology expertise to
            deliver talent that creates measurable business impact.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-card hover:border-brand border-line hover:shadow-lift border p-8 transition-all duration-500"
              >
                <div className="rounded-control bg-brand-tint group-hover:bg-brand flex h-16 w-16 items-center justify-center transition-all duration-500">
                  <Icon
                    size={30}
                    className="text-brand transition-all duration-500 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl leading-snug font-bold">
                  {industry.title}
                </h3>

                <p className="text-muted mt-5 leading-relaxed">
                  {industry.description}
                </p>

                <div className="bg-accent mt-8 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Feature */}

        <div className="rounded-panel bg-navy relative mt-32 overflow-hidden">
          {/* Background Glow */}

          <div className="bg-brand/20 absolute top-1/2 -right-32 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[160px]" />

          <div className="relative z-10 grid items-center gap-12 p-12 lg:grid-cols-12 lg:p-16">
            {/* Left */}

            <div className="lg:col-span-8">
              <p className="eyebrow text-accent">Cross-industry experience</p>

              <h3 className="display-2 mt-4 font-bold text-white">
                Different Industries.
                <br />
                One Consistent Standard
                <br />
                Of Excellence.
              </h3>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
                Whether supporting a global financial institution, a healthcare
                innovator, a manufacturing leader or a high-growth technology
                company, our approach remains the same—deep industry
                understanding combined with exceptional technology talent.
              </p>
            </div>

            {/* Right */}

            <div className="flex justify-center lg:col-span-4">
              <div className="flex h-72 w-72 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="display-1 font-bold text-white">8+</div>

                <p className="mt-3 text-center text-lg text-white/70">
                  Core Industries
                  <br />
                  Supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
