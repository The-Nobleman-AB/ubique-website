import { Building2, Globe2 } from "lucide-react";

const markets = [
  {
    title: "India",
    subtitle: "Global Headquarters",
    featured: true,
  },
  {
    title: "Singapore",
    subtitle: "Regional Market",
  },
  {
    title: "Australia",
    subtitle: "Regional Coverage",
  },
];

export default function RegionalCoverage() {
  return (
    <section className="bg-[#F8FAFC] py-36">

      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
              font-semibold
            "
          >
            REGIONAL COVERAGE
          </p>

          <h2
            className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              text-[#071B3A]
            "
          >
            Connected Across
            Asia-Pacific
          </h2>

          <p
            className="
              mt-8
              mx-auto
              max-w-3xl
              text-xl
              leading-9
              text-gray-600
            "
          >
            From our headquarters in India, Ubique supports
            organisations throughout Asia-Pacific through a
            connected regional delivery model.
          </p>

        </div>

        {/* Network */}

        <div className="relative mt-24">

          {/* Main connector */}

          <div
            className="
              absolute
              left-1/2
              top-28
              hidden
              h-28
              w-px
              -translate-x-1/2
              bg-[#155EEF]/30
              lg:block
            "
          />

          <div
            className="
              grid
              gap-10
              lg:grid-cols-3
              lg:items-start
            "
          >

            {/* Left */}

            <div className="order-2 lg:order-1">

              <div
                className="
                  rounded-[28px]
                  border
                  border-gray-200
                  bg-white
                  p-8
                  text-center
                "
              >

                <Globe2
                  size={34}
                  className="
                    mx-auto
                    text-[#155EEF]
                  "
                />

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    text-[#071B3A]
                  "
                >
                  Singapore
                </h3>

                <p className="mt-3 text-gray-600">
                  Regional Market
                </p>

              </div>

            </div>

            {/* Centre */}

            <div className="order-1 lg:order-2">

              <div
                className="
                  rounded-[36px]
                  bg-[#155EEF]
                  p-10
                  text-center
                  text-white
                  shadow-2xl
                "
              >

                <Building2
                  size={40}
                  className="mx-auto"
                />

                <p
                  className="
                    mt-6
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-blue-100
                  "
                >
                  Global Headquarters
                </p>

                <h3
                  className="
                    mt-4
                    text-4xl
                    font-black
                  "
                >
                  India
                </h3>

                <p className="mt-5 text-blue-100">
                  Regional leadership, enterprise consulting,
                  workforce delivery and technology expertise.
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="order-3">

              <div
                className="
                  rounded-[28px]
                  border
                  border-gray-200
                  bg-white
                  p-8
                  text-center
                "
              >

                <Globe2
                  size={34}
                  className="
                    mx-auto
                    text-[#155EEF]
                  "
                />

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    text-[#071B3A]
                  "
                >
                  Australia
                </h3>

                <p className="mt-3 text-gray-600">
                  Regional Coverage
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}