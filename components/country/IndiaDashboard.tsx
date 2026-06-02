export default function IndiaDashboard() {
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
          TALENT INTELLIGENCE
        </p>

        <h2
          className="
          text-6xl
          font-black
          mt-6
          "
        >
          India Market Dashboard
        </h2>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
          mt-20
          "
        >

          {/* Demand */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            "
          >

            <h3
              className="
              text-3xl
              font-bold
              mb-8
              "
            >
              Demand Index
            </h3>

            {[
              ["Cloud", "95%"],
              ["SAP", "92%"],
              ["AI", "90%"],
              ["Cybersecurity", "85%"],
            ].map(([name, score]) => (
              <div key={name} className="mb-6">

                <div className="flex justify-between mb-2">

                  <span>{name}</span>

                  <span>{score}</span>

                </div>

                <div className="h-3 bg-gray-100 rounded-full">

                  <div
                    style={{
                      width: score,
                    }}
                    className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#155EEF]
                    to-[#12B76A]
                    "
                  />

                </div>

              </div>
            ))}

          </div>

          {/* Hiring Timeline */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            "
          >

            <h3
              className="
              text-3xl
              font-bold
              mb-8
              "
            >
              Hiring Timeline
            </h3>

            <div className="space-y-5">

              <div>Week 1 — Discovery</div>

              <div>Week 2 — Sourcing</div>

              <div>Week 3 — Interviews</div>

              <div>Week 4–6 — Offer & Onboarding</div>

            </div>

          </div>

          {/* Salary */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            "
          >

            <h3
              className="
              text-3xl
              font-bold
              mb-8
              "
            >
              Salary Benchmark
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>SAP Consultant</span>
                <span>₹18L–45L</span>
              </div>

              <div className="flex justify-between">
                <span>Cloud Engineer</span>
                <span>₹12L–35L</span>
              </div>

              <div className="flex justify-between">
                <span>AI Engineer</span>
                <span>₹15L–40L</span>
              </div>

            </div>

          </div>

          {/* Snapshot */}

          <div
            className="
            bg-[#071B3A]
            rounded-[32px]
            p-10
            text-white
            "
          >

            <h3
              className="
              text-3xl
              font-bold
              mb-8
              "
            >
              Talent Snapshot
            </h3>

            <div className="space-y-6">

              <div>
                5M+ Technology Professionals
              </div>

              <div>
                1.5M+ Engineering Graduates
              </div>

              <div>
                #1 IT Services Hub
              </div>

              <div>
                High Global Mobility
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}