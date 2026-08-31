const pillars = [
  {
    title: "Technology-Focused Recruitment",
    description:
      "Deep specialization across SAP, Cloud, AI, Data, Cybersecurity and Software Engineering.",
  },
  {
    title: "Global Delivery Experience",
    description:
      "Supporting organizations across Europe, North America, the UK and Asia-Pacific.",
  },
  {
    title: "Pre-Qualified Talent Network",
    description:
      "Access to highly skilled professionals through established talent communities.",
  },
  {
    title: "Accelerated Hiring Timelines",
    description:
      "Efficient sourcing and screening processes designed to reduce time-to-hire.",
  },
];

export default function IndiaWhyUbique() {
  return (
    <section className="section-y bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-accent">Why UBIQUE</p>

        <h2 className="display-2 mt-4 font-bold text-white">
          Why Organizations Partner With Ubique India
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-card border border-white/10 bg-white/5 p-10"
            >
              <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>

              <p className="mt-6 leading-relaxed text-white/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
