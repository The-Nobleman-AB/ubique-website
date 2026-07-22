import {
  Cpu,
  Users,
  Briefcase,
} from "lucide-react";

const capabilities = [
  {
    title: "Technology Consulting",
    description:
      "Supporting enterprise transformation through SAP, Cloud, AI, Microsoft technologies and digital engineering programmes.",
    icon: Cpu,
  },
  {
    title: "HR Consulting",
    description:
      "Helping organisations strengthen workforce strategies, organisational capability and long-term talent planning.",
    icon: Users,
  },
  {
    title: "Staffing Solutions",
    description:
      "Providing permanent, contract and project-based professionals across technology and business functions.",
    icon: Briefcase,
  },
];

export default function EuropeOverview() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <div>

            <p className="font-semibold uppercase tracking-[0.3em] text-[#155EEF]">
              ENTERPRISE PRESENCE
            </p>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                leading-tight
                text-[#071B3A]
              "
            >
              Built Around
              Enterprise
              Needs
            </h2>

            <p
              className="
                mt-8
                text-xl
                leading-9
                text-gray-600
              "
            >
              Across Europe, Ubique combines consulting,
              technology and workforce expertise to help
              organisations transform, grow and build
              long-term capability.
            </p>

          </div>

          {/* Right */}

          <div className="space-y-10">

            {capabilities.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className={`
                    flex
                    gap-6
                    pb-10
                    ${
                      index !== capabilities.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }
                  `}
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EEF4FF]
                    "
                  >
                    <Icon
                      size={28}
                      className="text-[#155EEF]"
                    />
                  </div>

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-[#071B3A]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        leading-8
                        text-gray-600
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}