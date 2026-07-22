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
    <section className="py-36 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#12B76A]
            font-semibold
            "
          >
            GLOBAL DELIVERY MODEL
          </p>

          <h2
            className="
            text-5xl
            lg:text-6xl
            font-black
            mt-6
            "
          >
            A Structured Process
            Built Around
            Successful Hiring
          </h2>

          <p
            className="
            mt-8
            text-xl
            text-gray-600
            leading-relaxed
            "
          >
            Every engagement follows a consistent
            methodology that balances speed,
            quality and long-term business value.
          </p>

        </div>

        <div className="mt-24">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.number}
                className="
                grid
                lg:grid-cols-12
                gap-8
                py-10
                border-t
                border-gray-200
                items-start
                "
              >

                {/* Number */}

                <div className="lg:col-span-2">

                  <div
                    className="
                    text-5xl
                    font-black
                    text-[#155EEF]
                    "
                  >
                    {step.number}
                  </div>

                </div>

                {/* Icon */}

                <div className="lg:col-span-2">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#F2F6FF]
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <Icon
                      className="text-[#155EEF]"
                      size={30}
                    />

                  </div>

                </div>

                {/* Content */}

                <div className="lg:col-span-8">

                  <h3
                    className="
                    text-3xl
                    font-black
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-gray-600
                    leading-relaxed
                    text-lg
                    "
                  >
                    {step.description}
                  </p>

                </div>

              </div>

            );

          })}

          <div className="border-t border-gray-200"></div>

        </div>

      </div>

    </section>
  );
}