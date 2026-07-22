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

export default function ApacCapabilities() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-4xl">

          <p
            className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
            "
          >
            REGIONAL EXPERTISE
          </p>

          <h2
            className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              leading-tight
              text-[#071B3A]
            "
          >
            Enterprise Solutions
            <br />
            Built Around Your
            <br />
            Business Needs
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-xl
              leading-9
              text-gray-600
            "
          >
            Across Asia-Pacific, Ubique combines consulting
            expertise, technology capabilities and specialist
            workforce solutions to help organisations transform,
            scale and deliver long-term business value.
          </p>

        </div>

        {/* Capability Cards */}

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {capabilities.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  group
                  rounded-[32px]
                  border
                  border-gray-200
                  bg-[#F8FAFC]
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#155EEF]
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#155EEF]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >

                  <Icon size={30} />

                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-black
                    text-[#071B3A]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-8
                    text-gray-600
                  "
                >
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}