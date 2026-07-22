import {
  Globe2,
  Users,
  Building2,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Supporting organisations across multiple international markets through a connected delivery network.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Combining regional market knowledge with global consulting standards to deliver practical business outcomes.",
  },
  {
    icon: Building2,
    title: "Enterprise Delivery",
    description:
      "Providing consulting, technology and workforce solutions that scale consistently across regions and business functions.",
  },
];

export default function GlobalNetwork() {
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
            GLOBAL DELIVERY NETWORK
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              lg:text-6xl
            "
          >
            One Global Network.
            <br />
            Local Understanding.
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-xl
              leading-8
              text-gray-600
            "
          >
            Our international presence enables organisations to
            access specialist consulting expertise, enterprise
            technology capabilities and workforce solutions through
            a delivery model that combines global consistency with
            regional insight.
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

          {highlights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
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