"use client";

const metrics = [
  {
    value: "25+",
    label: "Years of International Experience",
    description:
      "Supporting organisations through changing technology landscapes since 2000.",
    size: "large",
  },
  {
    value: "15+",
    label: "Countries Served",
    description:
      "Global workforce solutions spanning multiple international markets.",
    size: "small",
  },
  {
    value: "Global",
    label: "Headquarters",
    description:
      "Strategically led from Kolkata with an international outlook.",
    size: "small",
  },
  {
    value: "Enterprise",
    label: "Technology Expertise",
    description:
      "Cloud, SAP, AI, Engineering, Cybersecurity and Digital Transformation.",
    size: "large",
  },
];

export default function AboutMetrics() {
  return (
    <section
      className="
      py-40
      bg-white
      "
    >
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
            BY THE NUMBERS
          </p>

          <h2
            className="
            mt-6
            text-6xl
            lg:text-7xl
            font-black
            text-[#071B3A]
            leading-[0.95]
            "
          >
            Measuring Success
            Beyond Numbers.
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
            Every metric reflects years of trusted partnerships,
            international growth and enterprise workforce expertise.
          </p>

        </div>

        {/* Metrics */}

        <div
          className="
          mt-24
          grid
          lg:grid-cols-12
          gap-8
          "
        >

          {metrics.map((metric) => (
          <div
            key={metric.label}
            className={`
              ${
                metric.size === "large"
                  ? "lg:col-span-7"
                  : "lg:col-span-5"
              }
            `}
          >

            <div
              className="
              h-full
              rounded-[40px]
              border
              border-gray-200
              bg-[#F8FAFC]
              p-10
              hover:bg-white
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div
                className="
                text-6xl
                lg:text-8xl
                font-black
                text-[#071B3A]
                leading-none
                "
              >
                {metric.value}
              </div>

              <div
                className="
                mt-6
                w-20
                h-1
                rounded-full
                bg-[#12B76A]
                "
              />

              <h3
                className="
                mt-8
                text-3xl
                font-black
                text-[#071B3A]
                leading-tight
                "
              >
                {metric.label}
              </h3>

              <p
                className="
                mt-6
                text-lg
                text-gray-600
                leading-relaxed
                max-w-2xl
                "
              >
                {metric.description}
              </p>

            </div>

          </div>

          ))}

        </div>

        {/* Editorial Closing */}

        <div
          className="
          mt-32
          rounded-[42px]
          overflow-hidden
          bg-[#071B3A]
          relative
          "
        >

          {/* Glow */}

          <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-[#155EEF]/15
            blur-[180px]
            "
          />

          <div
            className="
            relative
            z-10
            px-12
            py-20
            lg:px-20
            lg:py-24
            text-center
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
              EVERY NUMBER HAS A STORY
            </p>

            <h3
              className="
              mt-8
              text-5xl
              lg:text-7xl
              font-black
              text-white
              leading-[0.95]
              "
            >
              Growth Is Measured
              <br />
              By The Success Of
              <br />
              Our Clients.
            </h3>

            <p
              className="
              mt-10
              max-w-4xl
              mx-auto
              text-xl
              leading-relaxed
              text-white/75
              "
            >
              Behind every project, every placement and every partnership
              is a commitment to helping organisations build stronger,
              future-ready teams. That's the metric that matters most to us.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}