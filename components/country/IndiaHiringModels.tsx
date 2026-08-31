const models = [
  {
    number: "01",
    title: "Permanent Hiring",
    description:
      "Build long-term teams with carefully selected professionals aligned to your strategic goals.",
  },
  {
    number: "02",
    title: "Contract Staffing",
    description:
      "Rapid access to specialist expertise for project-based or time-sensitive initiatives.",
  },
  {
    number: "03",
    title: "Managed Teams",
    description:
      "Dedicated technology teams designed around your delivery requirements and growth plans.",
  },
  {
    number: "04",
    title: "Consulting Engagements",
    description:
      "Access senior consultants and subject matter experts for transformation programmes.",
  },
];

export default function IndiaHiringModels() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="max-w-4xl">
          <p className="eyebrow text-accent">Engagement models</p>

          <h2 className="display-2 mt-4 font-bold">
            Choose The Right Hiring Strategy
          </h2>

          <p className="text-muted mt-8 text-xl">
            Flexible engagement models designed to support organizations at
            different stages of growth and transformation.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-24">
          {models.map((model, index) => (
            <div key={model.number} className="border-line border-t py-12">
              <div className="grid items-start gap-8 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <div className="display-2 text-brand font-bold">
                    {model.number}
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold">{model.title}</h3>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-muted text-lg leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="border-line border-t"></div>
        </div>
      </div>
    </section>
  );
}
