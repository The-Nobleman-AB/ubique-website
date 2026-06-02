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
    <section className="py-32 bg-[#071B3A]">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#12B76A]
          "
        >
          TALENT DISTRIBUTION
        </p>

        <h2
          className="
          text-6xl
          font-black
          text-white
          mt-6
          "
        >
          Key Technology Talent Hubs
        </h2>

        <div className="mt-20 space-y-10">

          {cities.map((city) => (
            <div key={city.city}>

              <div
                className="
                flex
                justify-between
                text-white
                mb-3
                "
              >
                <span className="font-semibold">
                  {city.city}
                </span>

                <span>
                  {city.percentage}
                </span>
              </div>

              <div
                className="
                h-4
                bg-white/10
                rounded-full
                overflow-hidden
                "
              >
                <div
                  className={`
                  ${city.width}
                  h-full
                  bg-gradient-to-r
                  from-[#155EEF]
                  to-[#12B76A]
                  `}
                />
              </div>

              <div
                className="
                text-white/60
                mt-2
                text-sm
                "
              >
                {city.focus}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}