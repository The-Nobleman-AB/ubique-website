import {
  Globe2,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const western = [
  "United Kingdom",
  "France",
  "Netherlands",
];

const central = [
  "Germany",
  "Czech Republic",
  "Slovakia",
];

export default function EuropeanMarkets() {
  return (
    <section className="bg-[#F8FAFC] py-36">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#155EEF]">
            EUROPEAN PRESENCE
          </p>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-[#071B3A] leading-tight">
            Established Across
            Europe's Key Markets
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Our regional footprint enables organisations to access
            consulting expertise and workforce solutions across
            established European business centres.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {[
            {
              number: "6",
              label: "European Markets",
            },
            {
              number: "3",
              label: "Core Service Areas",
            },
            {
              number: "EU",
              label: "Regional Coverage",
            },
          ].map((stat) => (

            <div
              key={stat.label}
              className="
                rounded-[28px]
                bg-white
                border
                border-gray-200
                p-8
                text-center
                shadow-sm
              "
            >
              <h3 className="text-5xl font-black text-[#155EEF]">
                {stat.number}
              </h3>

              <p className="mt-4 text-gray-600">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

        {/* Regions */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* WEST */}

          <div className="rounded-[36px] bg-white border border-gray-200 p-10 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="uppercase tracking-[0.25em] text-sm text-[#155EEF] font-semibold">
                  REGION
                </p>

                <h3 className="mt-2 text-3xl font-black text-[#071B3A]">
                  Western Europe
                </h3>

              </div>

              <Globe2 className="text-[#155EEF]" size={34} />

            </div>

            <div className="mt-10 space-y-5">

              {western.map((country) => (

                <div
                  key={country}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-200
                    pb-4
                  "
                >
                  <span className="font-medium text-[#071B3A]">
                    {country}
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-[#155EEF]"
                  />

                </div>

              ))}

            </div>

          </div>

          {/* CENTRAL */}

          <div className="rounded-[36px] bg-white border border-gray-200 p-10 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="uppercase tracking-[0.25em] text-sm text-[#155EEF] font-semibold">
                  REGION
                </p>

                <h3 className="mt-2 text-3xl font-black text-[#071B3A]">
                  Central Europe
                </h3>

              </div>

              <MapPinned className="text-[#155EEF]" size={34} />

            </div>

            <div className="mt-10 space-y-5">

              {central.map((country) => (

                <div
                  key={country}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-200
                    pb-4
                  "
                >
                  <span className="font-medium text-[#071B3A]">
                    {country}
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-[#155EEF]"
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Banner */}

        <div
          className="
            mt-20
            rounded-[36px]
            bg-[#071B3A]
            px-12
            py-10
            text-center
          "
        >

          <p className="text-sm uppercase tracking-[0.3em] text-[#8FD8FF] font-semibold">
            REGIONAL DELIVERY NETWORK
          </p>

          <h3 className="mt-5 text-4xl font-black text-white">
            One European Presence.
            Multiple Markets.
            Shared Standards.
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-8">
            Our teams work across established European markets,
            combining local understanding with globally aligned
            consulting and workforce solutions.
          </p>

        </div>

      </div>

    </section>
  );
}