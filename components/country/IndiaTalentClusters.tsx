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
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#155EEF]
          "
        >
          TALENT ECOSYSTEM
        </p>

        <h2
          className="
          text-5xl
          lg:text-6xl
          font-black
          mt-6
          "
        >
          India's Leading
          Technology Hubs
        </h2>

        {/* Featured Bangalore */}

        <div
          className="
          mt-20
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >

          <div>

            <div
              className="
              rounded-[32px]
              overflow-hidden
              shadow-xl
              "
            >
              <Image
                src="/images/countries/bangalore.jpg"
                alt="Bangalore Technology Hub"
                width={1200}
                height={800}
                className="
                w-full
                h-[500px]
                object-cover
                "
              />
            </div>

          </div>

          <div>

            <div
              className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-[#155EEF]/10
              text-[#155EEF]
              font-semibold
              "
            >
              Featured Hub
            </div>

            <h3
              className="
              text-5xl
              font-black
              mt-6
              "
            >
              Bangalore
            </h3>

            <p
              className="
              text-xl
              text-gray-600
              mt-8
              leading-relaxed
              "
            >
              Often referred to as India's Silicon Valley,
              Bangalore is home to global technology firms,
              AI startups, cloud engineering teams and
              some of the country's strongest software
              engineering talent pools.
            </p>

            <div
              className="
              grid
              grid-cols-2
              gap-8
              mt-10
              "
            >

              <div>

                <div
                  className="
                  text-3xl
                  font-black
                  text-[#155EEF]
                  "
                >
                  Very High
                </div>

                <div className="text-gray-500 mt-2">
                  Talent Availability
                </div>

              </div>

              <div>

                <div
                  className="
                  text-3xl
                  font-black
                  text-[#12B76A]
                  "
                >
                  High
                </div>

                <div className="text-gray-500 mt-2">
                  Global Demand
                </div>

              </div>

            </div>

            <div
              className="
              flex
              flex-wrap
              gap-3
              mt-10
              "
            >

              <span className="px-4 py-2 rounded-full bg-gray-100">
                AI
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-100">
                Cloud
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-100">
                Product Engineering
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-100">
                SaaS
              </span>

            </div>

          </div>

        </div>

        {/* Secondary Cities */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-5
          gap-6
          mt-20
          "
        >
          {cities.map((city) => (
            <div
              key={city.city}
              className="
              border
              border-gray-200
              rounded-[24px]
              p-6
              hover:shadow-lg
              transition
              "
            >
              <h4
                className="
                text-2xl
                font-bold
                "
              >
                {city.city}
              </h4>

              <p
                className="
                text-gray-500
                mt-3
                "
              >
                {city.focus}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}