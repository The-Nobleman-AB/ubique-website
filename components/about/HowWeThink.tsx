"use client";

const principles = [
  {
    number: "01",
    title: "Listen Before We Recommend",
    description:
      "Every engagement begins by understanding the organisation, its people, objectives and challenges before discussing talent.",
  },
  {
    number: "02",
    title: "Think Beyond The Vacancy",
    description:
      "Our role isn't simply to fill positions. It's to help businesses build teams capable of sustaining long-term growth.",
  },
  {
    number: "03",
    title: "Build Lasting Relationships",
    description:
      "Successful partnerships are built through trust, transparency and consistency rather than one-off transactions.",
  },
  {
    number: "04",
    title: "Stay Ahead Of Technology",
    description:
      "Technology changes rapidly. Continuous learning allows us to advise clients on emerging skills and future workforce needs.",
  },
];

export default function HowWeThink() {
  return (
    <section
      className="
      py-36
      bg-[#071B3A]
      overflow-hidden
      relative
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        top-0
        right-[-250px]
        w-[700px]
        h-[700px]
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
              HOW WE THINK
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
              Every Decision
              Starts With
              Understanding.
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
              Our approach has remained consistent throughout
              our journey. We listen first, think strategically
              and focus on building relationships that continue
              creating value long after a placement is made.
            </p>

          </div>

        </div>

        {/* Principles */}

        <div className="mt-24 space-y-14">

          {principles.map((item) => (

            <div
              key={item.number}
              className="
              grid
              lg:grid-cols-12
              gap-10
              items-start
              border-b
              border-white/10
              pb-14
              "
            >

              <div className="lg:col-span-2">

                <div
                  className="
                  text-[64px]
                  lg:text-[82px]
                  font-black
                  leading-none
                  text-white/10
                  "
                >
                  {item.number}
                </div>

              </div>

              <div className="lg:col-span-4">

                <h3
                  className="
                  text-3xl
                  lg:text-4xl
                  font-black
                  leading-tight
                  text-white
                  "
                >
                  {item.title}
                </h3>

              </div>

              <div className="lg:col-span-6">

                <p
                  className="
                  text-xl
                  leading-9
                  text-white/70
                  "
                >
                  {item.description}
                </p>
              </div>

            </div>

          ))}

        </div>

        {/* Closing Editorial */}

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
                OUR BELIEF
              </p>

              <h3
                className="
                mt-6
                text-5xl
                lg:text-6xl
                font-black
                leading-[0.95]
                text-white
                "
              >
                Great Teams
                Aren't Built
                By Chance.
              </h3>

            </div>

            {/* Right */}

            <div className="lg:col-span-7">

              <p
                className="
                text-xl
                leading-9
                text-white/70
                "
              >
                Every successful organisation is shaped by the
                quality of its people. Our responsibility is to
                understand where a business is today, where it
                wants to go tomorrow, and help build the teams
                that make that journey possible.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}