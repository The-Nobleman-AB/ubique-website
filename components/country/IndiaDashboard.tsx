export default function IndiaDashboard() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Talent intelligence</p>

        <h2 className="display-2 mt-4 font-bold">India Market Dashboard</h2>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Demand */}

          <div className="rounded-card bg-white p-10">
            <h3 className="mb-8 text-3xl font-bold">Demand Index</h3>

            {[
              ["Cloud", "95%"],
              ["SAP", "92%"],
              ["AI", "90%"],
              ["Cybersecurity", "85%"],
            ].map(([name, score]) => (
              <div key={name} className="mb-6">
                <div className="mb-2 flex justify-between">
                  <span>{name}</span>

                  <span>{score}</span>
                </div>

                <div className="bg-surface h-3 rounded-full">
                  <div
                    style={{
                      width: score,
                    }}
                    className="from-brand to-accent h-full rounded-full bg-gradient-to-r"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Hiring Timeline */}

          <div className="rounded-card bg-white p-10">
            <h3 className="mb-8 text-3xl font-bold">Hiring Timeline</h3>

            <div className="space-y-5">
              <div>Week 1 — Discovery</div>

              <div>Week 2 — Sourcing</div>

              <div>Week 3 — Interviews</div>

              <div>Week 4–6 — Offer & Onboarding</div>
            </div>
          </div>

          {/* Salary */}

          <div className="rounded-card bg-white p-10">
            <h3 className="mb-8 text-3xl font-bold">Salary Benchmark</h3>

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

          <div className="bg-navy rounded-card p-10 text-white">
            <h3 className="mb-8 text-3xl font-bold">Talent Snapshot</h3>

            <div className="space-y-6">
              <div>5M+ Technology Professionals</div>

              <div>1.5M+ Engineering Graduates</div>

              <div>#1 IT Services Hub</div>

              <div>High Global Mobility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
