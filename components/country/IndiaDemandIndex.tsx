const skills = [
  {
    skill: "Cloud Engineering",
    score: 95,
  },
  {
    skill: "SAP S/4HANA",
    score: 92,
  },
  {
    skill: "Artificial Intelligence",
    score: 90,
  },
  {
    skill: "Cybersecurity",
    score: 85,
  },
  {
    skill: "Data Engineering",
    score: 82,
  },
  {
    skill: "Software Engineering",
    score: 80,
  },
];

export default function IndiaDemandIndex() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Demand index</p>

        <h2 className="display-2 mt-4 font-bold">Most In-Demand Skills</h2>

        <div className="mt-20 space-y-8">
          {skills.map((item) => (
            <div key={item.skill}>
              <div className="mb-3 flex justify-between">
                <span className="text-lg font-semibold">{item.skill}</span>

                <span>{item.score}</span>
              </div>

              <div className="bg-surface h-5 overflow-hidden rounded-full">
                <div
                  style={{
                    width: `${item.score}%`,
                  }}
                  className="from-brand to-accent h-full bg-gradient-to-r"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
