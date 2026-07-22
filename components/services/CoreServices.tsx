import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const pillars = [
  {
    id: "01",
    label: "BUILD",
    title: "Build High-Performing Teams",
    subtitle:
      "Permanent Recruitment • Executive Search • Leadership Hiring",
    description:
      "Building exceptional teams starts with finding exceptional people. Ubique partners with organizations to identify professionals who not only possess the right technical expertise but also align with your culture, long-term vision and business objectives.",
    image: "/images/services/build.jpg",
    reverse: false,
    highlights: [
      "Permanent Recruitment",
      "Executive Search",
      "Leadership Hiring",
      "Specialist Technology Recruitment",
      "Global Talent Acquisition",
    ],
    stat: "95%",
    statLabel: "Candidate Retention",
  },
  {
    id: "02",
    label: "SCALE",
    title: "Scale Teams At Speed",
    subtitle:
      "Contract Staffing • Managed Teams • Project Delivery",
    description:
      "Whether you're launching a new programme, expanding into new markets or accelerating delivery, Ubique provides flexible workforce solutions that allow organizations to scale confidently without compromising quality.",
    image: "/images/services/scale.jpg",
    reverse: true,
    highlights: [
      "Contract Staffing",
      "Managed Teams",
      "Project-Based Hiring",
      "Rapid Workforce Expansion",
      "Dedicated Delivery Teams",
    ],
    stat: "48 Hrs",
    statLabel: "Fast Candidate Delivery",
  },
  {
    id: "03",
    label: "TRANSFORM",
    title: "Transform Through Technology",
    subtitle:
      "Consulting • Workforce Strategy • Digital Transformation",
    description:
      "Technology transformation demands more than recruitment. Ubique combines consulting expertise, workforce planning and specialist hiring to help organizations navigate complex transformation programmes with confidence.",
    image: "/images/services/transform.jpg",
    reverse: false,
    highlights: [
      "Technology Consulting",
      "Digital Transformation",
      "Cloud Strategy",
      "SAP Consulting",
      "Workforce Advisory",
    ],
    stat: "15+",
    statLabel: "Countries Supported",
  },
];

export default function CoreServices() {
  return (
    <section className="bg-white py-40">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#155EEF]
            font-semibold
            "
          >
            HOW WE HELP
          </p>

          <h2
            className="
            text-6xl
            lg:text-7xl
            font-black
            leading-[0.95]
            mt-6
            "
          >
            Build.
            <br />
            Scale.
            <br />
            Transform.
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
            Every organisation is at a different stage of growth.
            Our workforce solutions are designed around three
            fundamental business needs — building exceptional
            teams, scaling capability and transforming through
            technology.
          </p>

        </div>

        {/* Pillars */}

        <div className="mt-28 space-y-40">

          {pillars.map((pillar) => (

            <section
              key={pillar.id}
              className={`
                grid
                lg:grid-cols-12
                gap-20
                items-center
                ${pillar.reverse ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* IMAGE */}

              <div className="lg:col-span-6">

                <div className="relative">

                  <div
                    className="
                    rounded-[40px]
                    overflow-hidden
                    shadow-[0_50px_120px_rgba(0,0,0,0.15)]
                    "
                  >

                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      width={1400}
                      height={900}
                      className="
                      w-full
                      h-[620px]
                      object-cover
                      "
                    />

                  </div>

                  {/* Floating Stat */}

                  <div
                    className="
                    absolute
                    -bottom-8
                    left-10
                    bg-white
                    rounded-[24px]
                    shadow-2xl
                    px-8
                    py-6
                    "
                  >

                    <div
                      className="
                      text-4xl
                      font-black
                      text-[#155EEF]
                      "
                    >
                      {pillar.stat}
                    </div>

                    <p
                      className="
                      text-gray-500
                      mt-2
                      "
                    >
                      {pillar.statLabel}
                    </p>

                  </div>

                </div>

              </div>

              {/* CONTENT */}

              <div className="lg:col-span-6">

                <div
                  className="
                  text-[#12B76A]
                  uppercase
                  tracking-[0.35em]
                  font-semibold
                  "
                >
                  {pillar.label}
                </div>

                <div
                  className="
                  text-[120px]
                  font-black
                  text-[#EEF4FF]
                  leading-none
                  mt-2
                  "
                >
                  {pillar.id}
                </div>

                <h3
                  className="
                  text-5xl
                  lg:text-6xl
                  font-black
                  leading-tight
                  -mt-6
                  "
                >
                  {pillar.title}
                </h3>

                <p
                  className="
                  text-[#155EEF]
                  text-xl
                  font-semibold
                  mt-6
                  "
                >
                  {pillar.subtitle}
                </p>

                <p
                  className="
                  mt-8
                  text-lg
                  text-gray-600
                  leading-relaxed
                  "
                >
                  {pillar.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-10">

                  {pillar.highlights.map((item) => (

                    <div
                      key={item}
                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      <div
                        className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#12B76A]/10
                        flex
                        items-center
                        justify-center
                        "
                      >
                        <Check
                          size={16}
                          className="text-[#12B76A]"
                        />
                      </div>

                      <span className="text-gray-700 font-medium">
                        {item}
                      </span>

                    </div>

                  ))}
                </div>

                <div
                  className="
                  mt-14
                  flex
                  flex-wrap
                  gap-6
                  items-center
                  "
                >

                  <Link
                    href="/contact"
                    className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#155EEF]
                    px-8
                    py-4
                    text-white
                    font-semibold
                    shadow-lg
                    hover:bg-[#0F4BD6]
                    transition-all
                    duration-300
                    "
                  >
                    Speak To Our Team
                  </Link>

                  <Link
                    href="/countries/india"
                    className="
                    inline-flex
                    items-center
                    gap-3
                    font-semibold
                    text-[#155EEF]
                    hover:gap-4
                    transition-all
                    duration-300
                    "
                  >
                    Explore Talent Markets

                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            </section>

          ))}

        </div>

      </div>

    </section>
  );
}