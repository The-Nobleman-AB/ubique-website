import {
  Search,
  Lightbulb,
  Globe2,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";

const journey = [
  {
    id: "01",
    title: "Understand",
    headline: "Business Before Recruitment",
    description:
      "Every successful engagement starts with understanding your organisation—not resumes. We immerse ourselves in your business objectives, culture, leadership expectations and technology ecosystem before recommending a single candidate.",
    points: [
      "Business Objectives",
      "Technology Landscape",
      "Organisation Culture",
    ],
    icon: Search,
    accent: "#155EEF",
  },
  {
    id: "02",
    title: "Design",
    headline: "A Workforce Strategy Built Around You",
    description:
      "Rather than applying a standard recruitment process, we design a hiring roadmap aligned to your timelines, budget, workforce model and long-term growth ambitions.",
    points: ["Hiring Strategy", "Delivery Model", "Growth Roadmap"],
    icon: Lightbulb,
    accent: "#12B76A",
  },
  {
    id: "03",
    title: "Source",
    headline: "Access Global Talent Markets",
    description:
      "Our international recruitment network connects organisations with highly skilled professionals across enterprise technologies, engineering and digital transformation disciplines.",
    points: [
      "Global Talent Network",
      "Specialist Recruiters",
      "Passive Talent",
    ],
    icon: Globe2,
    accent: "#155EEF",
  },
  {
    id: "04",
    title: "Validate",
    headline: "Quality Is Never Compromised",
    description:
      "Every professional undergoes structured technical evaluation, behavioural screening and cultural assessment before entering your recruitment process.",
    points: [
      "Technical Screening",
      "Behaviour Assessment",
      "Quality Assurance",
    ],
    icon: ShieldCheck,
    accent: "#12B76A",
  },
  {
    id: "05",
    title: "Deploy",
    headline: "Seamless Hiring & Onboarding",
    description:
      "From interview scheduling to onboarding coordination, we manage every stage with transparency and speed so your teams remain focused on delivery.",
    points: ["Interview Management", "Offer Support", "Onboarding"],
    icon: Rocket,
    accent: "#155EEF",
  },
  {
    id: "06",
    title: "Grow",
    headline: "Long-Term Workforce Partnership",
    description:
      "Our relationship extends well beyond placement, supporting workforce expansion, retention strategies and future hiring initiatives as your organisation evolves.",
    points: ["Workforce Scaling", "Retention", "Strategic Partnership"],
    icon: Handshake,
    accent: "#12B76A",
  },
];

export default function WorkforceJourney() {
  return (
    <section className="section-y-lg bg-navy relative overflow-hidden">
      <div className="bg-brand/10 absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <p className="eyebrow text-accent">Our methodology</p>

          <h2 className="display-2 mt-4 font-bold text-white">
            One Proven Process.
            <br />
            Infinite Workforce Possibilities.
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/70">
            Successful workforce transformation isn't driven by recruitment
            alone. It's driven by a structured, repeatable methodology that
            aligns people, technology and business objectives from day one.
          </p>
        </div>

        <div className="mt-28 space-y-32">
          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="grid items-start gap-12 lg:grid-cols-12"
              >
                {/* Left */}

                <div className="lg:col-span-3">
                  <div className="sticky top-32">
                    <div className="watermark font-bold text-white/5">
                      {step.id}
                    </div>

                    <div className="-mt-16">
                      <div
                        className="eyebrow"
                        style={{
                          color: step.accent,
                        }}
                      >
                        Step {step.id}
                      </div>

                      <h3 className="display-2 mt-4 font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Right */}

                <div className="lg:col-span-9">
                  <div className="border-l-2 border-white/10 pl-10">
                    <div
                      className="rounded-card mb-10 flex h-20 w-20 items-center justify-center"
                      style={{
                        background: `${step.accent}20`,
                      }}
                    >
                      <Icon
                        size={36}
                        style={{
                          color: step.accent,
                        }}
                      />
                    </div>

                    <h4 className="display-2 max-w-3xl font-bold text-white">
                      {step.headline}
                    </h4>

                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
                      {step.description}
                    </p>

                    <div className="rounded-card mt-14 grid gap-0 overflow-hidden border border-white/10 md:grid-cols-3">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="border-r border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 last:border-r-0 hover:bg-white/10"
                        >
                          <div
                            className="mb-6 h-3 w-3 rounded-full"
                            style={{
                              backgroundColor: step.accent,
                            }}
                          />

                          <p className="text-lg leading-relaxed font-semibold text-white">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}

        <div className="rounded-panel mt-40 overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          <div className="grid lg:grid-cols-12">
            {/* Left */}

            <div className="p-12 lg:col-span-7 lg:p-16">
              <p className="eyebrow text-accent">The UBIQUE difference</p>

              <h3 className="display-2 mt-4 font-bold text-white">
                Recruitment Is
                <br />
                Only One Step.
              </h3>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
                We don't simply fill vacancies. We help organisations design
                workforce strategies, access global talent, reduce hiring risk
                and build teams capable of driving long-term business
                transformation.
              </p>
            </div>

            {/* Right */}

            <div className="from-brand to-accent flex items-center justify-center bg-gradient-to-br p-12 lg:col-span-5 lg:p-16">
              <div className="text-center">
                <div className="display-1 font-bold text-white">15+</div>

                <p className="mt-3 text-xl text-white/90">
                  Countries Supported
                </p>

                <div className="mx-auto my-8 h-[2px] w-16 bg-white/40" />

                <div className="display-2 font-bold text-white">Global</div>

                <p className="mt-2 text-white/80">Workforce Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
