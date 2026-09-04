import {
  Globe2,
  Users,
  Award,
  BriefcaseBusiness,
  Building2,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const reasons = [
  {
    icon: Building2,
    title: "Global Headquarters",
    value: "Kolkata, India",
    description:
      "Strategically positioned to serve global organisations while accessing one of the world's largest technology talent ecosystems.",
  },
  {
    icon: Globe2,
    title: "International Presence",
    value: "15+ Countries",
    description:
      "Supporting organisations across Europe, the UK, North America and APAC through a globally connected workforce network.",
  },
  {
    icon: Users,
    title: "Enterprise Talent",
    value: "Technology Specialists",
    description:
      "Deep expertise across enterprise applications, cloud, AI, cybersecurity and digital engineering.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Flexible Engagement",
    value: "Built Around You",
    description:
      "Permanent hiring, contract staffing, managed teams and consulting designed around business objectives.",
  },
  {
    icon: Award,
    title: "Quality First",
    value: "Long-Term Partnerships",
    description:
      "Every engagement is built on transparency, quality and sustainable workforce growth rather than transactional hiring.",
  },
];

export default function WhyUbique() {
  return (
    <section className="section-y-lg bg-navy relative overflow-hidden">
      <div className="bg-brand/10 absolute top-0 left-0 h-[700px] w-[700px] rounded-full blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <p className="eyebrow text-accent">Why UBIQUE</p>

          <h2 className="display-2 mt-4 font-bold text-white">
            More Than A Recruitment Partner.
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/70">
            Organisations choose Ubique because we combine workforce consulting,
            technology expertise and long-term partnership into one integrated
            global delivery model.
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-card border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex items-start gap-6">
                  <div className="rounded-control bg-brand/20 flex h-16 w-16 shrink-0 items-center justify-center">
                    <Icon size={30} className="text-accent" />
                  </div>

                  <div>
                    <div className="eyebrow text-accent">{item.title}</div>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className="mt-5 leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="rounded-panel from-brand via-navy-soft to-navy mt-32 overflow-hidden border border-white/10 bg-gradient-to-r">
          <div className="grid items-center gap-12 p-12 lg:grid-cols-12 lg:p-16">
            {/* Left */}

            <div className="lg:col-span-8">
              <p className="eyebrow text-accent">Our promise</p>

              <h3 className="display-2 mt-4 font-bold text-white">
                Building Workforce Partnerships That Last.
              </h3>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/75">
                We believe successful workforce solutions are built on trust,
                transparency and long-term collaboration. Every engagement is
                designed to create sustainable business value—not simply fill
                vacancies.
              </p>
            </div>

            {/* Right */}

            <div className="flex justify-center lg:col-span-4 lg:justify-end">
              <Link
                href="/countries/india"
                className="group flex h-64 w-64 flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 text-center backdrop-blur-xl transition-all duration-500 hover:bg-white/15"
              >
                <span className="text-2xl leading-snug font-bold text-white">
                  Explore
                  <br />
                  Global
                  <br />
                  Talent
                </span>

                <ArrowRight
                  className="text-accent mt-6 transition-transform duration-200 group-hover:translate-x-2"
                  size={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
