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
    <section className="py-32 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#155EEF]
          "
        >
          HIRING TIMELINE
        </p>

        <h2
          className="
          text-6xl
          font-black
          mt-6
          "
        >
          Typical Hiring Journey
        </h2>

        <div
          className="
          grid
          md:grid-cols-4
          gap-8
          mt-20
          "
        >
          {phases.map((phase) => (
            <div
              key={phase.week}
              className="
              bg-white
              rounded-[32px]
              p-8
              shadow-sm
              "
            >
              <div
                className="
                text-[#155EEF]
                font-bold
                "
              >
                {phase.week}
              </div>

              <div
                className="
                text-2xl
                font-bold
                mt-4
                "
              >
                {phase.title}
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}