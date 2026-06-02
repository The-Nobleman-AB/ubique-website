export default function IndiaSnapshot() {
  return (
    <section className="py-32 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#155EEF]
          "
        >
          MARKET SNAPSHOT
        </p>

        <h2
          className="
          text-6xl
          font-black
          mt-6
          "
        >
          India Talent Market
          At A Glance
        </h2>

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          mt-20
          "
        >

          {/* Card 1 */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-sm
            "
          >
            <div className="text-gray-500">
              Average Hiring Timeline
            </div>

            <div
              className="
              text-6xl
              font-black
              mt-6
              text-[#155EEF]
              "
            >
              2–6
            </div>

            <div className="font-semibold mt-2">
              Weeks
            </div>

          </div>

          {/* Card 2 */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-sm
            "
          >
            <div className="text-gray-500">
              Typical Notice Period
            </div>

            <div
              className="
              text-6xl
              font-black
              mt-6
              text-[#12B76A]
              "
            >
              30–90
            </div>

            <div className="font-semibold mt-2">
              Days
            </div>

          </div>

          {/* Card 3 */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-sm
            "
          >
            <div className="text-gray-500">
              Global Mobility
            </div>

            <div
              className="
              text-6xl
              font-black
              mt-6
              text-[#155EEF]
              "
            >
              High
            </div>

            <div className="font-semibold mt-2">
              Availability
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}