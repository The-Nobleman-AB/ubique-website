import {
  Cpu,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const pillars = [
  {
    title: "Enterprise Technology",
    description:
      "Supporting organisations with enterprise technology consulting, digital transformation initiatives and specialist expertise across modern business platforms.",
    icon: Cpu,
  },
  {
    title: "Workforce Solutions",
    description:
      "Providing skilled professionals through permanent, contract and project-based staffing models tailored to evolving business needs.",
    icon: Briefcase,
  },
  {
    title: "Business Growth",
    description:
      "Helping organisations scale with consulting partnerships designed to support sustainable growth and long-term operational success.",
    icon: TrendingUp,
  },
];

export default function AmericasOverview() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <p
            className="
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#155EEF]
            "
          >
            WHY NORTH AMERICA
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
            Supporting Modern
            Businesses With
            Regional Expertise
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
            Ubique combines enterprise consulting,
            technology expertise and workforce
            solutions to help organisations address
            changing business challenges with
            confidence and agility.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
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
                    bg-[#EEF4FF]
                  "
                >

                  <Icon
                    size={30}
                    className="
                      text-[#155EEF]
                      transition-colors
                      duration-300
                      group-hover:text-[#0B63F6]
                    "
                  />

                </div>

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-black
                    text-[#071B3A]
                  "
                >
                  {pillar.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-8
                    text-gray-600
                  "
                >
                  {pillar.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}