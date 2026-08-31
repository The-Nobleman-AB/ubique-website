import { Globe2, Users, Building2 } from "lucide-react";

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
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <p className="eyebrow text-brand">Global delivery network</p>

          <h2 className="display-2 mt-4 font-bold">
            One Global Network.
            <br />
            Local Understanding.
          </h2>

          <p className="text-muted mt-8 max-w-3xl text-xl leading-relaxed">
            Our international presence enables organisations to access
            specialist consulting expertise, enterprise technology capabilities
            and workforce solutions through a delivery model that combines
            global consistency with regional insight.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-card bg-surface border-line hover:shadow-lift border p-10 transition-all duration-200"
              >
                <div className="rounded-control bg-brand flex h-16 w-16 items-center justify-center text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-navy mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-muted mt-5 leading-relaxed">
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
