import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  MapPinned,
} from "lucide-react";

const markets = [
  "United Kingdom",
  "France",
  "Netherlands",
  "Germany",
  "Czech Republic",
  "Slovakia",
];

const services = [
  "Technology Consulting",
  "HR Consulting",
  "Staffing Solutions",
];

export default function EuropeHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-40 pb-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            -left-40
            -top-32
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#155EEF]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#0B2B59]/5
            blur-3xl
          "
        />

      </div>

      {/* Decorative Globe */}

      <Globe2
        size={460}
        className="
          absolute
          right-[-70px]
          top-24
          text-[#155EEF]/5
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}

          <div>

            <p
              className="
                inline-flex
                rounded-full
                border
                border-[#155EEF]/15
                bg-[#EEF4FF]
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#155EEF]
              "
            >
              Europe
            </p>

            <h1
              className="
                mt-8
                text-6xl
                font-black
                leading-[0.95]
                tracking-tight
                text-[#071B3A]
                lg:text-8xl
              "
            >
              Trusted Delivery
              <br />
              Across Europe
            </h1>

            <p
              className="
                mt-10
                max-w-3xl
                text-xl
                leading-9
                text-gray-600
              "
            >
              Supporting organisations across Europe's leading
              business markets through enterprise consulting,
              technology expertise and workforce solutions built
              around regional understanding and global standards.
            </p>

            {/* Capability Pills */}

            <div className="mt-10 flex flex-wrap gap-3">

              {services.map((service) => (

                <span
                  key={service}
                  className="
                    rounded-full
                    bg-[#F8FAFC]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#071B3A]
                    border
                    border-gray-200
                  "
                >
                  {service}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#155EEF]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Contact Our Team

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/services"
                className="
                  rounded-xl
                  border
                  border-gray-300
                  px-8
                  py-4
                  font-semibold
                  text-[#071B3A]
                  transition
                  hover:bg-[#F8FAFC]
                "
              >
                View Services
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            {/* Floating Stat Card */}

            <div
              className="
                rounded-[36px]
                border
                border-gray-200
                bg-white/90
                p-10
                shadow-[0_30px_80px_rgba(7,27,58,0.08)]
                backdrop-blur-md
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EEF4FF]
                  "
                >
                  <MapPinned
                    size={28}
                    className="text-[#155EEF]"
                  />
                </div>

                <div>

                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-gray-500
                    "
                  >
                    European Presence
                  </p>

                  <h3
                    className="
                      mt-2
                      text-5xl
                      font-black
                      text-[#071B3A]
                    "
                  >
                    6
                  </h3>

                  <p className="text-gray-600">
                    Active Markets
                  </p>

                </div>

              </div>

              <div className="my-10 h-px bg-gray-200" />

              <div className="space-y-4">

                {markets.map((market) => (

                  <div
                    key={market}
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span className="text-[#071B3A]">
                      {market}
                    </span>

                    <div
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#155EEF]
                      "
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}