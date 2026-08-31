import Image from "next/image";

const cities = [
  {
    city: "Hyderabad",
    focus: "SAP • Enterprise Technology",
  },
  {
    city: "Pune",
    focus: "Automotive • Manufacturing",
  },
  {
    city: "Chennai",
    focus: "Engineering • Embedded Systems",
  },
  {
    city: "Mumbai",
    focus: "FinTech • Banking Technology",
  },
  {
    city: "Gurugram",
    focus: "Consulting • Digital Transformation",
  },
];

export default function IndiaTalentClusters() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Talent ecosystem</p>

        <h2 className="display-2 mt-4 font-bold">
          India's Leading Technology Hubs
        </h2>

        {/* Featured Bangalore */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="rounded-card overflow-hidden shadow-xl">
              <Image
                src="/images/countries/bangalore.jpg"
                alt="Bangalore Technology Hub"
                width={1200}
                height={800}
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="bg-brand/10 text-brand inline-flex rounded-full px-4 py-2 font-semibold">
              Featured Hub
            </div>

            <h3 className="display-2 mt-6 font-bold">Bangalore</h3>

            <p className="text-muted mt-8 text-xl leading-relaxed">
              Often referred to as India's Silicon Valley, Bangalore is home to
              global technology firms, AI startups, cloud engineering teams and
              some of the country's strongest software engineering talent pools.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-brand text-3xl font-bold">Very High</div>

                <div className="text-muted mt-2">Talent Availability</div>
              </div>

              <div>
                <div className="text-accent text-3xl font-bold">High</div>

                <div className="text-muted mt-2">Global Demand</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="bg-surface rounded-full px-4 py-2">AI</span>

              <span className="bg-surface rounded-full px-4 py-2">Cloud</span>

              <span className="bg-surface rounded-full px-4 py-2">
                Product Engineering
              </span>

              <span className="bg-surface rounded-full px-4 py-2">SaaS</span>
            </div>
          </div>
        </div>

        {/* Secondary Cities */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {cities.map((city) => (
            <div
              key={city.city}
              className="rounded-card border-line hover:shadow-lift border p-6 transition"
            >
              <h4 className="text-2xl font-bold">{city.city}</h4>

              <p className="text-muted mt-3">{city.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
