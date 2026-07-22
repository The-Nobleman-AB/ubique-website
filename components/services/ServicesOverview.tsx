import {
  Building2,
  Globe2,
  BriefcaseBusiness,
} from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Enterprise Organisations",
    description:
      "Helping global enterprises scale specialist technology teams across multiple regions and business units.",
  },
  {
    icon: Globe2,
    title: "Global Capability Centres",
    description:
      "Supporting GCCs with high-quality talent acquisition, workforce planning and long-term delivery capability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "High-Growth Businesses",
    description:
      "Partnering with rapidly growing companies that need agile, scalable recruitment and consulting support.",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#155EEF]
            font-semibold
            "
          >
            WHO WE HELP
          </p>

          <h2
            className="
            text-5xl
            lg:text-6xl
            font-black
            mt-6
            "
          >
            Workforce Solutions
            Built Around
            Your Business
          </h2>

          <p
            className="
            mt-8
            text-xl
            text-gray-600
            leading-relaxed
            "
          >
            Every organization faces unique hiring
            challenges. Our approach combines deep
            industry knowledge with global talent
            access to deliver solutions tailored to
            your business objectives.
          </p>

        </div>

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          mt-20
          "
        >

          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                bg-[#F8FAFC]
                rounded-[32px]
                p-10
                border
                border-gray-200
                hover:shadow-xl
                transition-all
                duration-500
                "
              >

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#155EEF]
                  flex
                  items-center
                  justify-center
                  text-white
                  "
                >
                  <Icon size={30} />
                </div>

                <h3
                  className="
                  text-2xl
                  font-black
                  mt-8
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-gray-600
                  leading-relaxed
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