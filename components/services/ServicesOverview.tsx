import { Building2, Globe2, BriefcaseBusiness } from "lucide-react";

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
    <section id="services-overview" className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <p className="eyebrow text-brand">Who we help</p>

          <h2 className="display-2 mt-4 font-bold">
            Workforce Solutions Built Around Your Business
          </h2>

          <p className="text-muted mt-8 text-xl leading-relaxed">
            Every organization faces unique hiring challenges. Our approach
            combines deep industry knowledge with global talent access to
            deliver solutions tailored to your business objectives.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-surface rounded-card border-line hover:shadow-lift border p-10 transition-all duration-500"
              >
                <div className="rounded-control bg-brand flex h-16 w-16 items-center justify-center text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

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
