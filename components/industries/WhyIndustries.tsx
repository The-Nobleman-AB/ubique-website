import { Search, Lightbulb, Settings2, Handshake } from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Understand",
    description:
      "We begin by understanding your industry, business goals, operational challenges and technology landscape.",
  },
  {
    icon: Lightbulb,
    title: "Design",
    description:
      "Our experts recommend the right combination of consulting, enterprise platforms and specialist talent.",
  },
  {
    icon: Settings2,
    title: "Deliver",
    description:
      "We execute through experienced consultants, proven delivery models and modern enterprise technologies.",
  },
  {
    icon: Handshake,
    title: "Support",
    description:
      "Beyond implementation, we continue supporting optimisation, growth and long-term transformation.",
  },
];

export default function WhyIndustries() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-brand">Our Approach</p>

          <h2 className="display-2 text-navy mt-4 font-bold">
            How We Support
            <br />
            Every Industry
          </h2>

          <p className="text-muted mt-8 text-lg leading-relaxed">
            Every engagement follows a structured approach that combines
            industry understanding, technology expertise and collaborative
            delivery to achieve long-term business value.
          </p>
        </div>

        <div className="relative mt-24">
          {/* Desktop connecting line */}

          <div className="bg-line absolute top-10 right-0 left-0 hidden h-[2px] lg:block" />

          <div className="relative grid gap-12 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="text-center">
                  <div className="bg-brand mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg">
                    <Icon size={34} />
                  </div>

                  <div className="bg-brand-tint text-brand mt-6 inline-flex rounded-full px-4 py-1 text-sm font-bold">
                    Step {index + 1}
                  </div>

                  <h3 className="text-navy mt-6 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="text-muted mt-5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
