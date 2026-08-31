const cities = [
  {
    city: "Bangalore",
    percentage: "92%",
    width: "w-full",
    focus: "AI • Cloud • Product Engineering",
  },
  {
    city: "Hyderabad",
    percentage: "78%",
    width: "w-4/5",
    focus: "SAP • Enterprise Technology",
  },
  {
    city: "Pune",
    percentage: "65%",
    width: "w-3/4",
    focus: "Automotive • Manufacturing",
  },
  {
    city: "Chennai",
    percentage: "58%",
    width: "w-2/3",
    focus: "Engineering • Embedded Systems",
  },
  {
    city: "Mumbai",
    percentage: "55%",
    width: "w-3/5",
    focus: "FinTech • Banking",
  },
];

export default function IndiaTalentDistribution() {
  return (
    <section className="section-y bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-accent">Talent distribution</p>

        <h2 className="display-2 mt-4 font-bold text-white">
          Key Technology Talent Hubs
        </h2>

        <div className="mt-20 space-y-10">
          {cities.map((city) => (
            <div key={city.city}>
              <div className="mb-3 flex justify-between text-white">
                <span className="font-semibold">{city.city}</span>

                <span>{city.percentage}</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <div
                  className={` ${city.width} from-brand to-accent h-full bg-gradient-to-r`}
                />
              </div>

              <div className="mt-2 text-sm text-white/60">{city.focus}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
