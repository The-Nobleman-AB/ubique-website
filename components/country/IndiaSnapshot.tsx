export default function IndiaSnapshot() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Market snapshot</p>

        <h2 className="display-2 mt-4 font-bold">
          India Talent Market At A Glance
        </h2>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Card 1 */}

          <div className="rounded-card bg-white p-10 shadow-sm">
            <div className="text-muted">Average Hiring Timeline</div>

            <div className="display-2 text-brand mt-6 font-bold">2–6</div>

            <div className="mt-2 font-semibold">Weeks</div>
          </div>

          {/* Card 2 */}

          <div className="rounded-card bg-white p-10 shadow-sm">
            <div className="text-muted">Typical Notice Period</div>

            <div className="display-2 text-accent mt-6 font-bold">30–90</div>

            <div className="mt-2 font-semibold">Days</div>
          </div>

          {/* Card 3 */}

          <div className="rounded-card bg-white p-10 shadow-sm">
            <div className="text-muted">Global Mobility</div>

            <div className="display-2 text-brand mt-6 font-bold">High</div>

            <div className="mt-2 font-semibold">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
