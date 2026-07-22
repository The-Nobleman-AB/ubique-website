import {
  Globe2,
  Cpu,
  Users,
} from "lucide-react";

const pillars = [
  {
    title: "Regional Expertise",
    description:
      "Deep understanding of Asia-Pacific markets enables us to deliver consulting and workforce solutions tailored to local business environments.",
    icon: Globe2,
  },
  {
    title: "Technology Excellence",
    description:
      "Supporting enterprise transformation through SAP, Cloud, AI, Microsoft technologies and digital consulting capabilities.",
    icon: Cpu,
  },
  {
    title: "People & Workforce",
    description:
      "Connecting organisations with specialist professionals through permanent, contract and project-based workforce solutions.",
    icon: Users,
  },
];

export default function ApacOverview() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <p
            className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
            "
          >
            ASIA-PACIFIC OVERVIEW
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
              text-[#071B3A]
              lg:text-6xl
            "
          >
            A Strategic Hub For
            <br />
            Global Delivery
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
            Asia-Pacific plays a central role in Ubique's global
            operations. From our headquarters in India, we deliver
            enterprise consulting, technology expertise and
            workforce solutions that help organisations innovate,
            transform and scale across international markets.
          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
                className="
                  rounded-[32px]
                  border
                  border-gray-200
                  bg-[#F8FAFC]
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
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