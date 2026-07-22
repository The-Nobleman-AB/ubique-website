import {
  ArrowUpRight,
  Building2,
 Handshake,
  ShieldCheck,
} from "lucide-react";

const strengths = [
  {
    title: "Enterprise Transformation",
    description:
      "Helping organisations modernise operations through enterprise technology, digital transformation and business consulting expertise.",
    icon: Building2,
  },
  {
    title: "Trusted Partnerships",
    description:
      "Working as a long-term consulting and workforce partner, supporting clients with consistency, transparency and regional knowledge.",
    icon: Handshake,
  },
  {
    title: "Reliable Delivery",
    description:
      "Combining specialist talent with structured delivery models to provide dependable outcomes across European markets.",
    icon: ShieldCheck,
  },
];

export default function EuropeExpertise() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <div className="lg:sticky lg:top-32 h-fit">

            <p className="font-semibold uppercase tracking-[0.3em] text-[#155EEF]">
              WHY CLIENTS CHOOSE UBIQUE
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
              A Partner
              <br />
              Built For
              <br />
              Enterprise.
            </h2>

            <p
              className="
                mt-8
                text-xl
                leading-9
                text-gray-600
              "
            >
              Beyond regional presence, Ubique focuses on building
              trusted relationships through consulting expertise,
              workforce excellence and dependable delivery.
            </p>

          </div>

          {/* Right */}

          <div className="space-y-8">

            {strengths.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    group
                    rounded-[36px]
                    border
                    border-gray-200
                    bg-[#F8FAFC]
                    p-10
                    transition-all
                    duration-300
                    hover:border-[#155EEF]
                    hover:shadow-xl
                  "
                >

                  <div className="flex gap-8">

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
                        size={30}
                        className="text-[#155EEF]"
                      />

                    </div>

                    <div className="flex-1">

                      <div className="flex items-start justify-between gap-6">

                        <h3
                          className="
                            text-3xl
                            font-black
                            text-[#071B3A]
                          "
                        >
                          {item.title}
                        </h3>

                        <ArrowUpRight
                          size={20}
                          className="
                            text-[#155EEF]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />

                      </div>

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