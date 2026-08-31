import {
  Search,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "Understanding your organization, culture, technology landscape and workforce objectives.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Talent Strategy",
    description:
      "Defining the hiring approach, engagement model and delivery roadmap aligned with business priorities.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Global Talent Search",
    description:
      "Leveraging Ubique's international network to identify highly qualified professionals across multiple markets.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Technical Assessment",
    description:
      "Comprehensive screening, technical validation and cultural alignment before every recommendation.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deployment",
    description:
      "Supporting hiring, onboarding and workforce integration to accelerate business outcomes.",
  },
  {
    icon: Handshake,
    number: "06",
    title: "Long-Term Partnership",
    description:
      "Continuous workforce support, scaling strategies and strategic consulting beyond the initial engagement.",
  },
];

export default function DeliveryModel() {
  return (
    <section id="delivery" className="section-y-lg bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <p className="eyebrow text-accent">Global delivery model</p>

          <h2 className="display-2 mt-4 font-bold">
            A Structured Process Built Around Successful Hiring
          </h2>

          <p className="text-muted mt-8 text-xl leading-relaxed">
            Every engagement follows a consistent methodology that balances
            speed, quality and long-term business value.
          </p>
        </div>

        <div className="mt-24">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="border-line grid items-start gap-8 border-t py-10 lg:grid-cols-12"
              >
                {/* Number */}

                <div className="lg:col-span-2">
                  <div className="display-2 text-brand font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}

                <div className="lg:col-span-2">
                  <div className="rounded-control bg-brand-tint flex h-16 w-16 items-center justify-center">
                    <Icon className="text-brand" size={30} />
                  </div>
                </div>

                {/* Content */}

                <div className="lg:col-span-8">
                  <h3 className="text-3xl font-bold">{step.title}</h3>

                  <p className="text-muted mt-4 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="border-line border-t"></div>
        </div>
      </div>
    </section>
  );
}
