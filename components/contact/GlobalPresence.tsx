"use client";

import {
  Globe2,
  Building2,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: "Global Workforce Reach",
    description:
      "Supporting organisations across international markets with specialist technology recruitment and workforce consulting solutions.",
  },
  {
    icon: Building2,
    title: "Enterprise Partnerships",
    description:
      "Working alongside businesses ranging from growing technology companies to global enterprises across multiple industries.",
  },
  {
    icon: Users,
    title: "Specialist Consultants",
    description:
      "Experienced recruitment and workforce professionals focused on understanding business challenges before recommending solutions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Flexible Delivery",
    description:
      "Supporting permanent recruitment, contract staffing, managed teams and workforce consulting engagements.",
  },
];

export default function GlobalPresence() {
  return (
    <section
      className="
      py-36
      bg-[#071B3A]
      relative
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        left-[-200px]
        bottom-[-200px]
        w-[650px]
        h-[650px]
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
              GLOBAL PRESENCE
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
              Built To
              Support
              Businesses
              Worldwide.
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
              Wherever your organisation operates,
              Ubique combines international workforce
              expertise with a collaborative approach
              to deliver recruitment and consulting
              solutions that scale with your business.
            </p>

          </div>

        </div>

        {/* Main Panel */}

        <div
          className="
          mt-24
          rounded-[40px]
          bg-white
          overflow-hidden
          "
        >

          <div
            className="
            grid
            lg:grid-cols-12
            "
          >

            {/* Left */}

            <div
              className="
              lg:col-span-5
              bg-[#071B3A]
              p-12
              lg:p-16
              "
            >

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                OUR REACH
              </p>

              <h3
                className="
                mt-6
                text-5xl
                lg:text-[56px]
                font-black
                leading-[0.98]
                text-white
                "
              >
                One
                Trusted
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
                We work with organisations across
                international markets while maintaining
                a personalised, consultative approach
                for every engagement.
              </p>

            </div>

            {/* Right */}

            <div
              className="
              lg:col-span-7
              p-12
              lg:p-16
              "
            >

              <div
                className="
                grid
                md:grid-cols-2
                gap-10
                "
              >

                {highlights.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                      group
                      rounded-[28px]
                      border
                      border-gray-200
                      p-8
                      transition-all
                      duration-300
                      hover:border-[#155EEF]
                      hover:shadow-lg
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
                        "
                      >

                        <Icon
                          size={28}
                          className="text-[#155EEF]"
                        />

                      </div>

                      <h4
                        className="
                        mt-8
                        text-2xl
                        font-black
                        text-[#071B3A]
                        leading-tight
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                        mt-5
                        text-lg
                        leading-8
                        text-gray-600
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Statement */}

        <div
          className="
          mt-28
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
                WORKING TOGETHER
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
                Every Great
                Partnership
                Starts With
                Trust.
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
                Whether you're growing a specialist team,
                expanding into new markets or seeking a
                long-term workforce partner, our focus
                remains the same: understanding your goals,
                responding with agility and delivering
                solutions that create lasting value.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}