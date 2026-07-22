"use client";

const differentiators = [
  {
    title: "Consulting Before Recruitment",
    description:
      "We begin by understanding business strategy, organisational goals and workforce challenges before recommending talent solutions.",
  },
  {
    title: "Technology Specialists",
    description:
      "Our expertise extends across enterprise applications, cloud, artificial intelligence, cybersecurity, engineering and digital transformation.",
  },
  {
    title: "International Perspective",
    description:
      "With roots in London and Global Headquarters in Kolkata, we combine international business understanding with access to exceptional technology talent.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We measure success by the long-term impact our people create, not by the number of positions we fill.",
  },
];

export default function UbiqueDifference() {
  return (
    <section
      className="
      py-40
      bg-[#F8FAFC]
      overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className="
          grid
          lg:grid-cols-12
          gap-20
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
              THE UBIQUE DIFFERENCE
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
              More Than
              A Recruitment
              Partner.
            </h2>

          </div>

          <div className="lg:col-span-7">

            <p
              className="
              text-2xl
              text-gray-700
              leading-relaxed
              "
            >
              Organisations don't partner with Ubique simply
              because we find exceptional people.
              They partner with us because we understand
              business transformation, workforce strategy
              and the technologies shaping tomorrow's
              enterprises.
            </p>

          </div>

        </div>

        {/* Editorial Cards */}

        <div
          className="
          mt-24
          space-y-8
          "
        >

          {differentiators.map((item, index) => (
          <div
            key={item.title}
            className={`
              grid
              lg:grid-cols-12
              gap-12
              items-center
              rounded-[40px]
              overflow-hidden
              ${
                index % 2 === 0
                  ? "bg-white border border-gray-200"
                  : "bg-[#071B3A]"
              }
            `}
          >

            {/* Left */}

            <div
              className={`
                lg:col-span-5
                p-12
                lg:p-16
                ${
                  index % 2 !== 0
                    ? "lg:order-2"
                    : ""
                }
              `}
            >

              <div
                className={`
                  text-8xl
                  font-black
                  leading-none
                  ${
                    index % 2 === 0
                      ? "text-[#155EEF]/15"
                      : "text-white/10"
                  }
                `}
              >
                0{index + 1}
              </div>

            </div>

            {/* Right */}

            <div
              className={`
                lg:col-span-7
                p-12
                lg:p-16
                ${
                  index % 2 !== 0
                    ? "lg:order-1"
                    : ""
                }
              `}
            >

              <p
                className={`
                  uppercase
                  tracking-[0.35em]
                  text-sm
                  font-semibold
                  ${
                    index % 2 === 0
                      ? "text-[#12B76A]"
                      : "text-[#12B76A]"
                  }
                `}
              >
                WHY IT MATTERS
              </p>

              <h3
                className={`
                  mt-6
                  text-4xl
                  lg:text-5xl
                  font-black
                  leading-tight
                  ${
                    index % 2 === 0
                      ? "text-[#071B3A]"
                      : "text-white"
                  }
                `}
              >
                {item.title}
              </h3>

              <p
                className={`
                  mt-8
                  text-xl
                  leading-relaxed
                  max-w-3xl
                  ${
                    index % 2 === 0
                      ? "text-gray-600"
                      : "text-white/75"
                  }
                `}
              >
                {item.description}
              </p>

            </div>

          </div>

          ))}

        </div>

        {/* Closing Statement */}

        <div
          className="
          mt-32
          text-center
          max-w-5xl
          mx-auto
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
            OUR APPROACH
          </p>

          <h3
            className="
            mt-8
            text-5xl
            lg:text-7xl
            font-black
            text-[#071B3A]
            leading-[0.95]
            "
          >
            We Don't
            Fill Roles.
            <br />
            We Build
            Capabilities.
          </h3>

          <p
            className="
            mt-10
            text-xl
            text-gray-600
            leading-relaxed
            max-w-4xl
            mx-auto
            "
          >
            Every organisation has unique ambitions, cultures and
            challenges. Our role is to understand those ambitions,
            identify exceptional people and build workforce
            partnerships that continue creating value long after
            a placement has been made.
          </p>

        </div>

      </div>

    </section>
  );
}