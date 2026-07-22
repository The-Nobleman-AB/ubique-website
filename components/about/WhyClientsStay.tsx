"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Handshake,
    title: "Partnership Before Placement",
    description:
      "We invest time in understanding each organisation's culture, strategy and long-term goals before recommending talent.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Built Through Delivery",
    description:
      "Long-term client relationships are earned through consistency, transparency and dependable execution across every engagement.",
  },
  {
    icon: TrendingUp,
    title: "Growth That Scales",
    description:
      "Whether building a single specialist team or supporting enterprise-wide transformation, our approach scales with our clients.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business-First Thinking",
    description:
      "Every hiring recommendation is guided by business impact—not simply filling positions as quickly as possible.",
  },
];

export default function WhyClientsStay() {
  return (
    <section
      className="
      py-36
      bg-[#F8FAFC]
      "
    >
      <div className="max-w-7xl mx-auto px-6">

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
              WHY CLIENTS STAY
            </p>

            <h2
              className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              leading-[0.95]
              tracking-[-0.03em]
              text-[#071B3A]
              "
            >
              Built On
              Trust.
              <br />
              Sustained By
              Results.
            </h2>

          </div>

          <div className="lg:col-span-7">

            <p
              className="
              text-xl
              leading-9
              text-gray-600
              "
            >
              Successful partnerships aren't measured by
              individual placements. They're measured by
              the confidence clients place in us to support
              their workforce strategy year after year.
            </p>

          </div>

        </div>

        {/* Content */}

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
              rounded-[40px]
              bg-[#071B3A]
              overflow-hidden
              relative
              p-10
              "
            >

              <div
                className="
                absolute
                -right-24
                -top-24
                w-[320px]
                h-[320px]
                rounded-full
                bg-[#155EEF]/20
                blur-[120px]
                "
              />

              <div className="relative z-10">

                <p
                  className="
                  uppercase
                  tracking-[0.35em]
                  text-[#12B76A]
                  font-semibold
                  "
                >
                  OUR COMMITMENT
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
                  Relationships
                  That Grow
                  Stronger
                  Over Time.
                </h3>

                <p
                  className="
                  mt-8
                  text-lg
                  leading-8
                  text-white/70
                  "
                >
                  We see every engagement as the beginning
                  of a partnership rather than the end of a
                  recruitment process.
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-7 space-y-8">

            {reasons.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                  group
                  rounded-[32px]
                  border
                  border-gray-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:border-[#155EEF]
                  hover:shadow-xl
                  "
                >

                  <div
                    className="
                    flex
                    items-start
                    gap-6
                    "
                  >

                    <div
                      className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#EEF4FF]
                      flex
                      items-center
                      justify-center
                      shrink-0
                      "
                    >

                      <Icon
                        size={28}
                        className="text-[#155EEF]"
                      />

                    </div>

                    <div>

                      <div
                        className="
                        flex
                        items-center
                        justify-between
                        gap-6
                        "
                      >

                        <h3
                          className="
                          text-3xl
                          font-black
                          text-[#071B3A]
                          "
                        >
                          {item.title}
                        </h3>

                        <ArrowRight
                          size={22}
                          className="
                          text-[#155EEF]
                          transition-transform
                          duration-300
                          group-hover:translate-x-2
                          "
                        />

                      </div>

                      <p
                        className="
                        mt-6
                        text-lg
                        leading-8
                        text-gray-600
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

        {/* Closing Editorial */}

        <div
          className="
          mt-32
          rounded-[40px]
          overflow-hidden
          bg-gradient-to-r
          from-[#071B3A]
          via-[#0B2452]
          to-[#155EEF]
          relative
          "
        >

          {/* Glow */}

          <div
            className="
            absolute
            right-[-180px]
            bottom-[-180px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#12B76A]/20
            blur-[160px]
            "
          />

          <div
            className="
            relative
            z-10
            grid
            lg:grid-cols-12
            gap-16
            items-center
            px-12
            py-16
            lg:px-16
            lg:py-20
            "
          >

            {/* Left */}

            <div className="lg:col-span-5">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                LONG-TERM VALUE
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
                One Partner.
                <br />
                Every Stage
                Of Growth.
              </h3>

            </div>

            {/* Right */}

            <div className="lg:col-span-7">

              <p
                className="
                text-xl
                leading-9
                text-white/75
                "
              >
                Whether supporting a strategic hire,
                scaling an engineering function or
                enabling enterprise-wide transformation,
                we remain committed to delivering talent,
                insight and workforce solutions that
                continue creating value long after the
                initial engagement.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}