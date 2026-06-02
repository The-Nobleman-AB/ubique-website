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
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#12B76A]
            font-semibold
            "
          >
            ENGAGEMENT MODELS
          </p>

          <h2
            className="
            text-5xl
            lg:text-6xl
            font-black
            mt-6
            "
          >
            Choose The Right
            Hiring Strategy
          </h2>

          <p
            className="
            text-xl
            text-gray-600
            mt-8
            "
          >
            Flexible engagement models designed
            to support organizations at different
            stages of growth and transformation.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-24">

          {models.map((model, index) => (
            <div
              key={model.number}
              className="
              border-t
              border-gray-200
              py-12
              "
            >
              <div
                className="
                grid
                lg:grid-cols-12
                gap-8
                items-start
                "
              >

                <div className="lg:col-span-2">

                  <div
                    className="
                    text-5xl
                    font-black
                    text-[#155EEF]
                    "
                  >
                    {model.number}
                  </div>

                </div>

                <div className="lg:col-span-4">

                  <h3
                    className="
                    text-3xl
                    font-black
                    "
                  >
                    {model.title}
                  </h3>

                </div>

                <div className="lg:col-span-6">

                  <p
                    className="
                    text-lg
                    text-gray-600
                    leading-relaxed
                    "
                  >
                    {model.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

          <div className="border-t border-gray-200"></div>

        </div>

      </div>

    </section>
  );
}