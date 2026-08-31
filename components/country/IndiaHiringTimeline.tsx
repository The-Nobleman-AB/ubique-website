const phases = [
  {
    week: "Week 1",
    title: "Requirements Discovery",
  },
  {
    week: "Week 2",
    title: "Candidate Identification",
  },
  {
    week: "Week 3",
    title: "Interview Process",
  },
  {
    week: "Week 4-6",
    title: "Offer & Onboarding",
  },
];

export default function IndiaHiringTimeline() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Hiring timeline</p>

        <h2 className="display-2 mt-4 font-bold">Typical Hiring Journey</h2>

        <div className="mt-20 grid gap-8 md:grid-cols-4">
          {phases.map((phase) => (
            <div
              key={phase.week}
              className="rounded-card bg-white p-8 shadow-sm"
            >
              <div className="text-brand font-bold">{phase.week}</div>

              <div className="mt-4 text-2xl font-bold">{phase.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
