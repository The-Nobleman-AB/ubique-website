"use client";

const story = [
  {
    number: "01",
    title: "The Beginning",
    description:
      "Ubique was founded on a simple belief: organisations deserve workforce partners who understand technology, business objectives and long-term growth—not simply recruitment.",
  },
  {
    number: "02",
    title: "The Evolution",
    description:
      "As technology transformed industries, our expertise expanded alongside it. We evolved from specialist recruitment into a trusted workforce consulting partner supporting organisations across multiple markets and technology domains.",
  },
  {
    number: "03",
    title: "Today",
    description:
      "Today, Ubique partners with organisations worldwide to build exceptional technology teams through workforce consulting, specialist recruitment and long-term talent solutions designed for sustainable business growth.",
  },
];

export default function OurStory() {
  return (
    <section
      className="
      bg-white
      py-40
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >

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
              OUR JOURNEY
            </p>

            <h2
              className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-[#071B3A]
              "
            >
              Growing With
              Technology.
              <br />
              Growing With
              Our Clients.
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
              Every chapter of our journey has been shaped
              by the organisations we support, the industries
              we serve and the belief that exceptional teams
              create exceptional businesses.
            </p>

          </div>

        </div>

        {/* Story */}

        <div className="mt-28">

          {story.map((item, index) => (

            <div
              key={item.number}
              className={`
                py-20
                ${
                  index !== story.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }
              `}
            >

              <div
                className="
                grid
                lg:grid-cols-12
                gap-12
                items-start
                "
              >

                {/* Number */}

                <div className="lg:col-span-3">

                  <div
                    className="
                    text-[82px]
                    lg:text-[120px]
                    font-black
                    tracking-[-0.08em]
                    leading-none
                    text-[#155EEF]/10
                    "
                  >
                    {item.number}
                  </div>

                </div>

                {/* Content */}

                <div className="lg:col-span-9">

                  <p
                    className="
                    uppercase
                    tracking-[0.35em]
                    text-[#12B76A]
                    font-semibold
                    "
                  >
                    Chapter {item.number}
                  </p>

                  <h3
                    className="
                    mt-5
                    text-4xl
                    lg:text-5xl
                    font-black
                    leading-tight
                    text-[#071B3A]
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                    mt-8
                    w-20
                    h-1
                    rounded-full
                    bg-[#155EEF]
                    "
                  />

                  <p
                    className="
                    mt-8
                    max-w-4xl
                    text-xl
                    leading-9
                    text-gray-600
                    "
                  >
                    {item.description}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Closing Statement */}

        <div
          className="
          mt-28
          pt-20
          border-t
          border-gray-200
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
                LOOKING FORWARD
              </p>

              <h3
                className="
                mt-6
                text-5xl
                lg:text-[58px]
                font-black
                leading-[0.98]
                tracking-[-0.03em]
                text-[#071B3A]
                "
              >
                Still
                Growing.
                <br />
                Still
                Learning.
              </h3>

            </div>

            <div className="lg:col-span-7">

              <p
                className="
                text-xl
                leading-9
                text-gray-600
                "
              >
                Our journey continues to evolve alongside the
                organisations we support. Every new partnership,
                every successful team and every business challenge
                strengthens our experience and reinforces our
                commitment to helping clients build the workforce
                capabilities they need for the future.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}