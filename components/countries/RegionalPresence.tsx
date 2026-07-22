import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Building2,
  MapPin,
  Briefcase,
  Users,
  Cpu,
} from "lucide-react";

const europe = [
  "United Kingdom",
  "Germany",
  "Czech Republic",
  "Slovakia",
];

const americas = [
  "United States",
  "Canada",
];

export default function RegionalPresence() {
  return (
    <section className="bg-[#F8FAFC] py-36">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-4xl">

          <p
            className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
            "
          >
            OUR REGIONAL NETWORK
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
              text-[#071B3A]
              lg:text-6xl
            "
          >
            Delivering Expertise
            <br />
            Across Key Regions
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-xl
              leading-8
              text-gray-600
            "
          >
            Our global delivery model combines regional knowledge
            with enterprise consulting excellence, helping
            organisations access technology, HR consulting and
            workforce solutions wherever they operate.
          </p>

        </div>

        {/* =====================================================
            FEATURED APAC
        ====================================================== */}

        <Link
          href="/countries/asia-pacific"
          className="
            group
            relative
            mt-20
            block
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-[#071B3A]
            via-[#0B2B59]
            to-[#155EEF]
            p-14
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_35px_80px_rgba(21,94,239,0.30)]
          "
        >

          {/* Background */}

          <div
            className="
              absolute
              -left-24
              bottom-0
              h-80
              w-80
              rounded-full
              bg-[#155EEF]/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -right-24
              -top-24
              h-96
              w-96
              rounded-full
              bg-[#12B76A]/15
              blur-3xl
            "
          />

          {/* Decorative Globe */}

          <Globe2
            size={260}
            className="
              absolute
              right-8
              top-8
              text-white/5
            "
          />

          {/* Decorative Rings */}

          <div
            className="
              absolute
              right-28
              top-20
              h-64
              w-64
              rounded-full
              border
              border-white/5
            "
          />

          <div
            className="
              absolute
              right-20
              top-12
              h-80
              w-80
              rounded-full
              border
              border-white/[0.04]
            "
          />

          <div className="relative z-10">

            {/* Top */}

            <div className="max-w-3xl">

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#8FD8FF]
                "
              >
                PRIMARY DELIVERY REGION
              </p>

              <h3
                className="
                  mt-5
                  text-5xl
                  font-black
                  text-white
                  lg:text-6xl
                "
              >
                Asia-Pacific
              </h3>

              <p
                className="
                  mt-8
                  text-xl
                  leading-9
                  text-blue-100
                "
              >
                Delivering enterprise consulting,
                technology expertise and workforce
                solutions across Asia-Pacific,
                anchored by our Global Headquarters
                in Kolkata, India.
              </p>

            </div>

            {/* Bottom Grid */}

            <div
              className="
                mt-16
                grid
                gap-8
                lg:grid-cols-2
              "
            >

              {/* Headquarters */}

              <div
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-md
                "
              >

                <div className="flex items-center gap-3">

                  <Building2
                    size={22}
                    className="text-[#12B76A]"
                  />

                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-white/70
                    "
                  >
                    Global Headquarters
                  </p>

                </div>

                <div className="mt-8 flex items-center gap-4">

                  <MapPin
                    size={22}
                    className="text-[#12B76A]"
                  />

                  <div>

                    <h4
                      className="
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      Kolkata
                    </h4>

                    <p className="text-blue-100">
                      India
                    </p>

                  </div>

                </div>

                <div
                  className="
                    mt-10
                    space-y-5
                  "
                >

                  <div className="flex items-center gap-4">

                    <Cpu
                      size={20}
                      className="text-[#12B76A]"
                    />

                    <span className="text-white">
                      Technology Consulting
                    </span>

                  </div>

                  <div className="flex items-center gap-4">

                    <Users
                      size={20}
                      className="text-[#12B76A]"
                    />

                    <span className="text-white">
                      HR Consulting
                    </span>

                  </div>

                  <div className="flex items-center gap-4">

                    <Briefcase
                      size={20}
                      className="text-[#12B76A]"
                    />

                    <span className="text-white">
                      Staffing Solutions
                    </span>

                  </div>

                </div>

              </div>

              {/* Key Markets */}

              <div
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-md
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  Key Markets
                </p>

                <div
                  className="
                    mt-8
                    space-y-6
                  "
                >

                  {[
                    "India",
                    "Singapore",
                    "Australia",
                  ].map((market) => (

                    <div
                      key={market}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        pb-4
                      "
                    >

                      <span
                        className="
                          text-lg
                          text-white
                        "
                      >
                        {market}
                      </span>

                      <ArrowRight
                        size={18}
                        className="
                          text-[#12B76A]
                        "
                      />

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-14">

              <span
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-white
                  px-7
                  py-4
                  font-semibold
                  text-[#071B3A]
                  transition-all
                  duration-300
                  group-hover:gap-4
                "
              >

                Discover Asia-Pacific

                <ArrowRight size={20} />

              </span>

            </div>

          </div>

        </Link>
        {/* =====================================================
            EUROPE + AMERICAS
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            gap-8
            lg:grid-cols-2
          "
        >

          {/* Europe */}

          <Link
            href="/countries/europe"
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-gray-200
              bg-white
              p-10
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#155EEF]
              hover:shadow-2xl
            "
          >

            {/* Accent */}

            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-1.5
                bg-[#155EEF]
              "
            />

            <Globe2
              size={120}
              className="
                absolute
                -right-8
                -top-8
                text-[#155EEF]/5
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#155EEF]
                "
              >
                ESTABLISHED REGIONAL PRESENCE
              </p>

              <h3
                className="
                  mt-5
                  text-4xl
                  font-black
                  text-[#071B3A]
                "
              >
                Europe
              </h3>

              <p
                className="
                  mt-6
                  leading-8
                  text-gray-600
                "
              >
                Supporting organisations throughout Europe
                with enterprise consulting, digital
                transformation and specialist workforce
                solutions.
              </p>

              <div
                className="
                  mt-10
                  rounded-2xl
                  bg-[#F8FAFC]
                  p-6
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-gray-500
                  "
                >
                  Key Markets
                </p>

                <div
                  className="
                    mt-6
                    space-y-4
                  "
                >

                  {europe.map((country) => (

                    <div
                      key={country}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        pb-3
                      "
                    >

                      <span>{country}</span>

                      <ArrowRight
                        size={16}
                        className="
                          text-[#155EEF]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />

                    </div>

                  ))}

                </div>

              </div>

              <div
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  font-semibold
                  text-[#155EEF]
                "
              >

                Discover Europe

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </div>

            </div>

          </Link>

          {/* Americas */}

          <Link
            href="/countries/americas"
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-gray-200
              bg-white
              p-10
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#12B76A]
              hover:shadow-2xl
            "
          >

            {/* Accent */}

            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-1.5
                bg-[#12B76A]
              "
            />

            <Globe2
              size={120}
              className="
                absolute
                -right-8
                -top-8
                text-[#12B76A]/5
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#12B76A]
                "
              >
                GROWING CLIENT NETWORK
              </p>

              <h3
                className="
                  mt-5
                  text-4xl
                  font-black
                  text-[#071B3A]
                "
              >
                Americas
              </h3>

              <p
                className="
                  mt-6
                  leading-8
                  text-gray-600
                "
              >
                Supporting organisations across the
                Americas through technology consulting,
                enterprise solutions and specialist
                workforce delivery.
              </p>

              <div
                className="
                  mt-10
                  rounded-2xl
                  bg-[#F8FAFC]
                  p-6
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-gray-500
                  "
                >
                  Key Markets
                </p>

                <div
                  className="
                    mt-6
                    space-y-4
                  "
                >

                  {americas.map((country) => (

                    <div
                      key={country}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        pb-3
                      "
                    >

                      <span>{country}</span>

                      <ArrowRight
                        size={16}
                        className="
                          text-[#12B76A]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />

                    </div>

                  ))}

                </div>

              </div>

              <div
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  font-semibold
                  text-[#12B76A]
                "
              >

                Discover Americas

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </div>

            </div>

          </Link>

        </div>

      </div>

    </section>
  );
}