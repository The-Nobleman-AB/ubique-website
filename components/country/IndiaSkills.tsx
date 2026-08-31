const skills = [
  {
    title: "SAP Consulting",
    demand: "Very High",
    experience: "5–15 Years",
    description:
      "SAP S/4HANA, FICO, MM, SD, PP, SuccessFactors and Ariba consultants remain among the most sought-after profiles.",
  },
  {
    title: "Cloud Engineering",
    demand: "Very High",
    experience: "3–12 Years",
    description:
      "AWS, Azure and Google Cloud professionals continue to drive global digital transformation projects.",
  },
  {
    title: "Artificial Intelligence",
    demand: "High Growth",
    experience: "2–10 Years",
    description:
      "Generative AI, LLM engineering, MLOps and AI architecture roles are growing rapidly.",
  },
  {
    title: "Cybersecurity",
    demand: "High",
    experience: "4–15 Years",
    description:
      "Security operations, IAM, cloud security and governance specialists remain in strong demand.",
  },
  {
    title: "Data Engineering",
    demand: "High",
    experience: "3–12 Years",
    description:
      "Modern data stack, analytics engineering and enterprise data platforms continue expanding.",
  },
  {
    title: "Software Engineering",
    demand: "Very High",
    experience: "2–15 Years",
    description:
      "Java, .NET, Python, React, Node.js and platform engineering talent remain critical globally.",
  },
];

export default function IndiaSkills() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Skills landscape</p>

        <h2 className="display-2 mt-4 font-bold">High-Demand Skill Areas</h2>

        <p className="text-muted mt-6 max-w-4xl text-xl">
          India's talent ecosystem continues to evolve, with strong demand
          across enterprise technology, cloud, AI and software engineering
          disciplines.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-card border-line hover:shadow-lift border bg-white p-8 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-bold">{skill.title}</h3>

                <span className="bg-brand/10 text-brand rounded-full px-4 py-2 text-sm font-semibold">
                  {skill.demand}
                </span>
              </div>

              <p className="text-muted mt-6 leading-relaxed">
                {skill.description}
              </p>

              <div className="border-line mt-8 border-t pt-6">
                <div className="text-muted text-sm">
                  Typical Experience Range
                </div>

                <div className="mt-2 font-semibold">{skill.experience}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
