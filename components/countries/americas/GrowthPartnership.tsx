import {
  TrendingUp,
  Users,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    title: "Strategic Partnerships",
    description:
      "Building long-term relationships that align consulting expertise, technology capabilities and workforce solutions with evolving business priorities.",
    icon: Users,
  },
  {
    title: "Scalable Delivery",
    description:
      "Supporting organisations with flexible delivery models that adapt to changing project requirements, business growth and enterprise transformation.",
    icon: TrendingUp,
  },
  {
    title: "Future-Ready Solutions",
    description:
      "Helping organisations embrace innovation through specialist talent, modern technologies and consulting expertise designed for long-term success.",
    icon: Rocket,
  },
];

export default function GrowthPartnership() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-4xl mx-auto">

          <p
            className="
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#155EEF]
            "
          >
            GROWTH PARTNERSHIP
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
            Supporting Long-Term
            Business Growth
          </h2>

          <p
            className="
              mt-8
              text-xl
              leading-9
              text-gray-600
            "
          >
            Our approach combines consulting,
            technology expertise and workforce
            solutions to help organisations
            innovate, scale and succeed in
            rapidly changing business environments.
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
                  rounded-[36px]
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
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  />

                </div>

                <div className="mt-8 flex items-start justify-between gap-4">

                  <h3
                    className="
                      text-3xl
                      font-black
                      leading-tight
                      text-[#071B3A]
                    "
                  >
                    {pillar.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="
                      text-[#155EEF]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />

                </div>

                <p
                  className="
                    mt-6
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