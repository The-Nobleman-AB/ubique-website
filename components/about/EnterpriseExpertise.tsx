"use client";

const expertise = [
  {
    number: "01",
    title: "Enterprise Applications",
    description:
      "Supporting organisations with specialist talent across SAP, Oracle, Microsoft Dynamics and other enterprise platforms that power business operations.",
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    description:
      "Helping businesses build secure, scalable cloud environments with expertise spanning AWS, Azure, Google Cloud and modern infrastructure technologies.",
  },
  {
    number: "03",
    title: "Data, AI & Analytics",
    description:
      "Connecting organisations with specialists in artificial intelligence, machine learning, business intelligence and advanced analytics.",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Building resilient organisations through professionals specialising in cyber defence, governance, risk, compliance and information security.",
  },
  {
    number: "05",
    title: "Engineering & Product",
    description:
      "Supporting digital product development through software engineering, architecture, DevOps, QA and modern development practices.",
  },
  {
    number: "06",
    title: "Digital Transformation",
    description:
      "Helping organisations assemble multidisciplinary teams capable of delivering complex digital transformation initiatives.",
  },
];

export default function EnterpriseExpertise() {
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
              ENTERPRISE EXPERTISE
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
              Expertise
              Built Around
              Technology.
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
              Technology continues to evolve.
              Our expertise evolves with it.
              We partner with organisations to
              identify specialists across the
              technologies shaping modern business.
            </p>

          </div>

        </div>

        {/* Expertise Grid */}

        <div className="mt-24">

          {expertise.map((item) => (

            <div
              key={item.number}
              className="
              grid
              lg:grid-cols-12
              gap-10
              items-center
              py-14
              border-b
              border-gray-200
              group
              "
            >

              {/* Number */}

              <div className="lg:col-span-2">

                <div
                  className="
                  text-[72px]
                  lg:text-[92px]
                  font-black
                  leading-none
                  text-[#155EEF]/10
                  transition-all
                  duration-500
                  group-hover:text-[#155EEF]/25
                  "
                >
                  {item.number}
                </div>

              </div>

              {/* Title */}

              <div className="lg:col-span-4">

                <h3
                  className="
                  text-3xl
                  lg:text-4xl
                  font-black
                  leading-tight
                  text-[#071B3A]
                  "
                >
                  {item.title}
                </h3>

              </div>

              {/* Description */}

              <div className="lg:col-span-6">

                <p
                  className="
                  text-lg
                  leading-9
                  text-gray-600
                  "
                >
                  {item.description}
                </p>
              </div>

            </div>

          ))}

        </div>

        {/* Capability Statement */}

        <div
          className="
          mt-32
          rounded-[40px]
          overflow-hidden
          border
          border-[#E4E7EC]
          bg-white
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
              lg:col-span-4
              bg-[#071B3A]
              p-12
              lg:p-16
              flex
              items-center
              "
            >

              <div>

                <p
                  className="
                  uppercase
                  tracking-[0.35em]
                  text-[#12B76A]
                  font-semibold
                  "
                >
                  OUR CAPABILITY
                </p>

                <h3
                  className="
                  mt-6
                  text-5xl
                  lg:text-[52px]
                  font-black
                  leading-[0.98]
		  tracking-[-0.02em]
                  text-white
                  "
                >
                  Technology
                  Never
                  Stands Still.
                </h3>

              </div>

            </div>

            {/* Right */}

            <div
              className="
              lg:col-span-8
              p-12
              lg:p-16
              flex
              flex-col
              justify-center
              "
            >

              <p
                className="
                text-2xl
                leading-relaxed
                text-[#071B3A]
                "
              >
                Neither do we.
              </p>

              <p
                className="
                mt-8
                text-xl
                leading-9
                text-gray-600
                max-w-4xl
                "
              >
                As technology continues to evolve, so do the
                skills organisations require. Our teams stay
                closely connected with emerging technologies,
                evolving workforce trends and changing business
                priorities, enabling us to connect clients with
                specialists who create lasting impact rather than
                simply filling immediate hiring needs.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}