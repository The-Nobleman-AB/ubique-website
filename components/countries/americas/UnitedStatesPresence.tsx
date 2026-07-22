import {
  Building2,
  Globe2,
  Cpu,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const offerings = [
  "Enterprise Consulting",
  "Technology Solutions",
  "Staffing Solutions",
];

export default function UnitedStatesPresence() {
  return (
    <section className="bg-[#F8FAFC] py-36">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-4xl">

          <p
            className="
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#155EEF]
            "
          >
            NORTH AMERICAN PRESENCE
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
            A Strategic Presence
            Centered In
            The United States
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-xl
              leading-9
              text-gray-600
            "
          >
            Supporting organisations across North America
            through enterprise consulting, technology
            expertise and workforce solutions, with the
            United States serving as our primary regional
            market.
          </p>

        </div>

        {/* Dashboard */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT CARD */}

          <div
            className="
              rounded-[36px]
              bg-white
              border
              border-gray-200
              p-12
              shadow-[0_25px_70px_rgba(7,27,58,0.08)]
            "
          >

            <div className="flex items-center gap-5">

              <div
                className="
                  flex
                  h-18
                  w-18
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF4FF]
                "
              >
                <Building2
                  size={34}
                  className="text-[#155EEF]"
                />
              </div>

              <div>

                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    text-gray-500
                  "
                >
                  Primary Market
                </p>

                <h3
                  className="
                    mt-2
                    text-4xl
                    font-black
                    text-[#071B3A]
                  "
                >
                  United States
                </h3>

              </div>

            </div>

            <div className="my-10 h-px bg-gray-200" />

            <div className="space-y-6">

              {offerings.map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-lg
                      font-medium
                      text-[#071B3A]
                    "
                  >
                    {item}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#155EEF]"
                  />

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="space-y-8">

            {/* Card 1 */}

            <div
              className="
                rounded-[32px]
                bg-white
                border
                border-gray-200
                p-8
              "
            >

              <Globe2
                size={34}
                className="text-[#155EEF]"
              />

              <h3
                className="
                  mt-6
                  text-2xl
                  font-black
                  text-[#071B3A]
                "
              >
                Regional Focus
              </h3>

              <p
                className="
                  mt-4
                  leading-8
                  text-gray-600
                "
              >
                Delivering consulting and workforce
                solutions tailored to the needs of
                organisations operating across
                North America.
              </p>

            </div>

            {/* Card 2 */}

            <div
              className="
                rounded-[32px]
                bg-[#071B3A]
                p-8
              "
            >

              <Cpu
                size={34}
                className="text-[#8FD8FF]"
              />

              <h3
                className="
                  mt-6
                  text-2xl
                  font-black
                  text-white
                "
              >
                Technology-Driven Delivery
              </h3>

              <p
                className="
                  mt-4
                  leading-8
                  text-blue-100
                "
              >
                Combining enterprise technology,
                consulting expertise and specialist
                workforce solutions to help
                organisations scale confidently.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}