"use client";

import {
  Globe2,
  MapPinned,
  ArrowUpRight,
} from "lucide-react";

const regions = [
  {
    region: "Europe",
    text:
      "Supporting organisations across mature technology and engineering markets with specialist workforce solutions.",
  },
  {
    region: "United Kingdom",
    text:
      "Building on decades of consulting experience to support enterprises with technology talent and workforce expertise.",
  },
  {
    region: "North America",
    text:
      "Helping organisations scale digital initiatives through specialist technology recruitment and consulting.",
  },
  {
    region: "Middle East",
    text:
      "Supporting rapidly growing businesses with enterprise technology professionals across multiple industries.",
  },
  {
    region: "Asia-Pacific",
    text:
      "Delivering agile workforce solutions for organisations operating in dynamic and fast-growing technology markets.",
  },
];

export default function GlobalWorkforceNetwork() {
  return (
    <section
      className="
      py-36
      bg-[#071B3A]
      relative
      overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        right-[-180px]
        top-[-180px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#155EEF]/15
        blur-[180px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className="
          grid
          lg:grid-cols-12
          gap-16
          items-end
          "
        >

          <div className="lg:col-span-5">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#12B76A]
              font-semibold
              "
            >
              GLOBAL WORKFORCE NETWORK
            </p>

            <h2
              className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              leading-[0.95]
              text-white
              "
            >
              Supporting
              Organisations
              Across Global
              Markets.
            </h2>

          </div>

          <div className="lg:col-span-7">

            <p
              className="
              text-xl
              leading-9
              text-white/70
              "
            >
              Wherever our clients operate,
              our focus remains the same—
              understanding business challenges,
              identifying exceptional technology
              talent and building long-term
              workforce capability.
            </p>

          </div>

        </div>

        {/* Main Section */}

        <div
          className="
          mt-24
          grid
          lg:grid-cols-12
          gap-16
          "
        >

          {/* Left */}

          <div className="lg:col-span-5">

            <div
              className="
              sticky
              top-28
              rounded-[36px]
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              p-10
              "
            >

              <div
                className="
                w-20
                h-20
                rounded-3xl
                bg-[#155EEF]/20
                flex
                items-center
                justify-center
                "
              >

                <Globe2
                  size={38}
                  className="text-[#12B76A]"
                />

              </div>

              <h3
                className="
                mt-8
                text-4xl
                font-black
                text-white
                leading-tight
                "
              >
                One
                Workforce
                Partner.
              </h3>

              <p
                className="
                mt-8
                text-lg
                leading-8
                text-white/70
                "
              >
                We support organisations across
                international markets while adapting
                our workforce strategies to local
                business realities, technologies
                and talent ecosystems.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-7 space-y-8">

            {regions.map((item) => (
            <div
              key={item.region}
              className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              transition-all
              duration-500
              hover:bg-white/10
              hover:border-white/20
              "
            >

              <div
                className="
                flex
                items-start
                justify-between
                gap-8
                "
              >

                <div>

                  <div
                    className="
                    inline-flex
                    items-center
                    gap-3
                    "
                  >

                    <MapPinned
                      size={18}
                      className="text-[#12B76A]"
                    />

                    <span
                      className="
                      uppercase
                      tracking-[0.25em]
                      text-sm
                      font-semibold
                      text-[#12B76A]
                      "
                    >
                      {item.region}
                    </span>

                  </div>

                  <p
                    className="
                    mt-6
                    text-lg
                    leading-8
                    text-white/70
                    "
                  >
                    {item.text}
                  </p>

                </div>

                <ArrowUpRight
                  size={24}
                  className="
                  shrink-0
                  text-white/25
                  transition-transform
                  duration-300
                  group-hover:text-[#12B76A]
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                />

              </div>

            </div>

          ))}

          </div>

        </div>

        {/* Bottom Editorial */}

        <div
          className="
          mt-32
          pt-20
          border-t
          border-white/10
          "
        >

          <div
            className="
            grid
            lg:grid-cols-12
            gap-16
            items-center
            "
          >

            <div className="lg:col-span-5">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                GLOBAL OUTLOOK
              </p>

              <h3
                className="
                mt-6
                text-5xl
                lg:text-[58px]
                font-black
                leading-[0.98]
                text-white
                "
              >
                Local
                Understanding.
                <br />
                Global
                Perspective.
              </h3>

            </div>

            <div className="lg:col-span-7">

              <p
                className="
                text-xl
                leading-9
                text-white/70
                "
              >
                Every market has its own business landscape,
                talent ecosystem and technology priorities.
                Our role is to understand those differences and
                deliver workforce solutions that align with each
                client's strategy while maintaining the consistency,
                quality and partnership that define every Ubique
                engagement.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}