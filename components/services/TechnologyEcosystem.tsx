"use client";

const ecosystems = [
  {
    title: "Enterprise Applications",
    description:
      "Business-critical enterprise platforms powering global organisations.",
    technologies: [
      "SAP S/4HANA",
      "SAP SuccessFactors",
      "Oracle",
      "Salesforce",
      "Microsoft Dynamics",
      "ServiceNow",
    ],
    accent: "from-[#155EEF] to-[#3B82F6]",
    span: "lg:col-span-7",
  },
  {
    title: "Cloud Platforms",
    description:
      "Modern cloud infrastructure and enterprise migration expertise.",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Cloud Migration",
      "Cloud Operations",
      "Containers",
    ],
    accent: "from-[#12B76A] to-[#22C55E]",
    span: "lg:col-span-5",
  },
  {
    title: "Data & Artificial Intelligence",
    description:
      "Helping organisations transform data into intelligent business decisions.",
    technologies: [
      "Machine Learning",
      "Generative AI",
      "Data Engineering",
      "Analytics",
      "Business Intelligence",
      "LLMs",
    ],
    accent: "from-[#7C3AED] to-[#A855F7]",
    span: "lg:col-span-5",
  },
  {
    title: "Digital Engineering",
    description:
      "Building modern applications, platforms and digital products.",
    technologies: [
      "Full Stack",
      "DevOps",
      "QA Automation",
      "Mobile",
      "Frontend",
      "Backend",
    ],
    accent: "from-[#F97316] to-[#FB923C]",
    span: "lg:col-span-7",
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting enterprise systems, infrastructure and digital assets.",
    technologies: [
      "IAM",
      "SOC",
      "Cloud Security",
      "Governance",
      "Risk",
      "Compliance",
    ],
    accent: "from-[#DC2626] to-[#EF4444]",
    span: "lg:col-span-6",
  },
  {
    title: "Infrastructure & Networks",
    description:
      "Reliable enterprise infrastructure supporting global operations.",
    technologies: [
      "Virtualization",
      "Networking",
      "Storage",
      "Windows",
      "Linux",
      "Monitoring",
    ],
    accent: "from-[#0F766E] to-[#14B8A6]",
    span: "lg:col-span-6",
  },
];

export default function TechnologyEcosystem() {
  return (
    <section className="py-40 bg-[#F8FAFC]">

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
            TECHNOLOGY ECOSYSTEM
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
            Enterprise
            Expertise Across
            Every Technology
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
            Our consultants and technology specialists support
            organisations across the complete enterprise technology
            landscape—from ERP and Cloud to AI, Cybersecurity
            and Digital Engineering.
          </p>

        </div>

        {/* Ecosystem Grid */}

        <div
          className="
          mt-24
          grid
          lg:grid-cols-12
          gap-8
          "
        >

          {ecosystems.map((item) => (

            <div
              key={item.title}
              className={`
                ${item.span}
                group
                rounded-[36px]
                bg-white
                border
                border-gray-200
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
              `}
            >

              {/* Accent */}

              <div
                className={`
                  h-2
                  w-full
                  bg-gradient-to-r
                  ${item.accent}
                `}
              />

              <div className="p-10">

                <h3
                  className="
                  text-4xl
                  font-black
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-gray-600
                  leading-relaxed
                  max-w-2xl
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                  mt-10
                  grid
                  sm:grid-cols-2
                  gap-4
                  "
                >

                  {item.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="
                      rounded-2xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-5
                      py-5
                      group-hover:bg-white
                      group-hover:border-gray-300
                      transition-all
                      duration-300
                      "
                    >
                      <div
                        className={`
                          w-3
                          h-3
                          rounded-full
                          bg-gradient-to-r
                          ${item.accent}
                          mb-4
                        `}
                      />

                      <p
                        className="
                        font-semibold
                        text-gray-800
                        leading-snug
                        "
                      >
                        {tech}
                      </p>
                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div
          className="
          mt-32
          rounded-[40px]
          overflow-hidden
          bg-[#071B3A]
          relative
          "
        >

          <div
            className="
            absolute
            top-0
            right-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#155EEF]/20
            blur-[140px]
            "
          />

          <div
            className="
            relative
            z-10
            grid
            lg:grid-cols-12
            gap-10
            items-center
            p-12
            lg:p-16
            "
          >

            <div className="lg:col-span-8">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                MULTI-DISCIPLINARY EXPERTISE
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
                Technology Doesn't
                <br />
                Exist In Silos.
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
                Enterprise transformation demands cross-functional
                expertise. Ubique connects professionals across
                platforms, cloud, engineering, data and cybersecurity
                to help organisations deliver complex programmes
                successfully.
              </p>

            </div>

            <div
              className="
              lg:col-span-4
              flex
              justify-center
              lg:justify-end
              "
            >

              <div
                className="
                w-64
                h-64
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
                  100+
                </div>

                <p
                  className="
                  mt-4
                  text-center
                  text-white/70
                  "
                >
                  Enterprise Technology
                  Skill Areas
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}