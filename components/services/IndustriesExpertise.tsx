"use client";

import {
  Building2,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  Cpu,
  Plane,
  Car,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description:
      "Technology talent supporting digital banking, fintech, payments and enterprise transformation.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description:
      "Specialists driving healthcare innovation, digital platforms and regulated technology delivery.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Engineering, ERP and Industry 4.0 expertise enabling modern manufacturing operations.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Cloud, AI, software engineering and enterprise platforms powering digital businesses.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Helping retailers modernise customer experiences, commerce platforms and supply chains.",
  },
  {
    icon: Plane,
    title: "Travel & Logistics",
    description:
      "Building resilient workforce solutions across aviation, logistics and global mobility.",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Supporting automotive leaders with SAP, engineering and digital manufacturing talent.",
  },
  {
    icon: Building2,
    title: "Global Capability Centres",
    description:
      "Scaling GCCs with specialist technology professionals across enterprise domains.",
  },
];

export default function IndustriesExpertise() {
  return (
    <section className="py-40 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#12B76A]
            font-semibold
            "
          >
            INDUSTRY EXPERTISE
          </p>

          <h2
            className="
            mt-6
            text-6xl
            lg:text-7xl
            font-black
            leading-[0.95]
            "
          >
            Industry Knowledge
            Meets Technology
            Expertise
          </h2>

          <p
            className="
            mt-10
            text-xl
            text-gray-600
            leading-relaxed
            max-w-3xl
            "
          >
            Every industry has unique workforce challenges.
            Our consultants combine deep sector understanding
            with technology expertise to deliver talent that
            creates measurable business impact.
          </p>

        </div>

        <div
          className="
          mt-24
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          "
        >

          {industries.map((industry) => {

            const Icon = industry.icon;

            return (

              <div
                key={industry.title}
                className="
                group
                rounded-[32px]
                border
                border-gray-200
                p-8
                hover:border-[#155EEF]
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
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
                  group-hover:bg-[#155EEF]
                  transition-all
                  duration-500
                  "
                >

                  <Icon
                    size={30}
                    className="
                    text-[#155EEF]
                    group-hover:text-white
                    transition-all
                    duration-500
                    "
                  />

                </div>

                <h3
                  className="
                  mt-8
                  text-2xl
                  font-black
                  leading-snug
                  "
                >
                  {industry.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-gray-600
                  leading-relaxed
                  "
                >
                  {industry.description}
                </p>

                <div
                  className="
                  mt-8
                  h-[2px]
                  w-0
                  bg-[#12B76A]
                  group-hover:w-full
                  transition-all
                  duration-500
                  "
                />
              </div>

            );

          })}

        </div>

        {/* Bottom Feature */}

        <div
          className="
          mt-32
          rounded-[40px]
          overflow-hidden
          bg-[#071B3A]
          relative
          "
        >

          {/* Background Glow */}

          <div
            className="
            absolute
            -right-32
            top-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#155EEF]/20
            blur-[160px]
            "
          />

          <div
            className="
            relative
            z-10
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
                CROSS-INDUSTRY EXPERIENCE
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
                Different Industries.
                <br />
                One Consistent Standard
                <br />
                Of Excellence.
              </h3>

              <p
                className="
                mt-8
                text-xl
                text-white/70
                leading-relaxed
                max-w-3xl
                "
              >
                Whether supporting a global financial institution,
                a healthcare innovator, a manufacturing leader or a
                high-growth technology company, our approach remains
                the same—deep industry understanding combined with
                exceptional technology talent.
              </p>

            </div>

            {/* Right */}

            <div
              className="
              lg:col-span-4
              flex
              justify-center
              "
            >

              <div
                className="
                w-72
                h-72
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                flex-col
                items-center
                justify-center
                "
              >

                <div
                  className="
                  text-7xl
                  font-black
                  text-white
                  "
                >
                  8+
                </div>

                <p
                  className="
                  mt-3
                  text-center
                  text-white/70
                  text-lg
                  "
                >
                  Core Industries
                  <br />
                  Supported
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}