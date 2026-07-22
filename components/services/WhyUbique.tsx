"use client";

import {
  Globe2,
  Users,
  Award,
  BriefcaseBusiness,
  Building2,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const reasons = [
  {
    icon: Building2,
    title: "Global Headquarters",
    value: "Kolkata, India",
    description:
      "Strategically positioned to serve global organisations while accessing one of the world's largest technology talent ecosystems.",
  },
  {
    icon: Globe2,
    title: "International Presence",
    value: "15+ Countries",
    description:
      "Supporting organisations across Europe, the UK, North America and APAC through a globally connected workforce network.",
  },
  {
    icon: Users,
    title: "Enterprise Talent",
    value: "Technology Specialists",
    description:
      "Deep expertise across enterprise applications, cloud, AI, cybersecurity and digital engineering.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Flexible Engagement",
    value: "Built Around You",
    description:
      "Permanent hiring, contract staffing, managed teams and consulting designed around business objectives.",
  },
  {
    icon: Award,
    title: "Quality First",
    value: "Long-Term Partnerships",
    description:
      "Every engagement is built on transparency, quality and sustainable workforce growth rather than transactional hiring.",
  },
];

export default function WhyUbique() {
  return (
    <section className="py-40 bg-[#071B3A] overflow-hidden relative">

      <div
        className="
        absolute
        left-0
        top-0
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#155EEF]/10
        blur-[180px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#12B76A]
            font-semibold
            "
          >
            WHY UBIQUE
          </p>

          <h2
            className="
            mt-6
            text-6xl
            lg:text-7xl
            font-black
            text-white
            leading-[0.95]
            "
          >
            More Than
            A Recruitment
            Partner.
          </h2>

          <p
            className="
            mt-10
            text-xl
            text-white/70
            leading-relaxed
            max-w-3xl
            "
          >
            Organisations choose Ubique because we combine
            workforce consulting, technology expertise and
            long-term partnership into one integrated global
            delivery model.
          </p>

        </div>

        <div
          className="
          mt-24
          grid
          lg:grid-cols-2
          gap-8
          "
        >

          {reasons.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                group
                rounded-[34px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-10
                hover:bg-white/10
                hover:border-white/20
                transition-all
                duration-500
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
                    bg-[#155EEF]/20
                    flex
                    items-center
                    justify-center
                    shrink-0
                    "
                  >

                    <Icon
                      size={30}
                      className="text-[#12B76A]"
                    />

                  </div>

                  <div>

                    <div
                      className="
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-[#12B76A]
                      "
                    >
                      {item.title}
                    </div>

                    <h3
                      className="
                      mt-3
                      text-3xl
                      font-black
                      text-white
                      "
                    >
                      {item.value}
                    </h3>

                    <p
                      className="
                      mt-5
                      text-white/65
                      leading-relaxed
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

        {/* Bottom Banner */}

        <div
          className="
          mt-32
          rounded-[40px]
          overflow-hidden
          border
          border-white/10
          bg-gradient-to-r
          from-[#155EEF]
          via-[#0D3F99]
          to-[#071B3A]
          "
        >

          <div
            className="
            grid
            lg:grid-cols-12
            gap-12
            items-center
            p-12
            lg:p-16
            "
          >

            {/* Left */}

            <div className="lg:col-span-8">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                OUR PROMISE
              </p>

              <h3
                className="
                mt-6
                text-5xl
                lg:text-6xl
                font-black
                text-white
                leading-[1]
                "
              >
                Building Workforce
                Partnerships That
                Last.
              </h3>

              <p
                className="
                mt-8
                text-xl
                text-white/75
                leading-relaxed
                max-w-3xl
                "
              >
                We believe successful workforce solutions are built
                on trust, transparency and long-term collaboration.
                Every engagement is designed to create sustainable
                business value—not simply fill vacancies.
              </p>

            </div>

            {/* Right */}

            <div
              className="
              lg:col-span-4
              flex
              justify-center
              lg:justify-end
              "
            >

              <Link
                href="/countries/india"
                className="
                group
                w-64
                h-64
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-500
                hover:bg-white/15
                hover:scale-105
                "
              >

                <span
                  className="
                  text-white
                  text-2xl
                  font-black
                  leading-snug
                  "
                >
                  Explore
                  <br />
                  Global
                  <br />
                  Talent
                </span>

                <ArrowRight
                  className="
                  mt-6
                  text-[#12B76A]
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  "
                  size={30}
                />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}