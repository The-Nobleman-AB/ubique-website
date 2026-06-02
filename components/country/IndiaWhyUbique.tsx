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
    <section className="py-32 bg-[#071B3A]">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#12B76A]
          "
        >
          WHY UBIQUE
        </p>

        <h2
          className="
          text-6xl
          font-black
          text-white
          mt-6
          "
        >
          Why Organizations Partner
          With Ubique India
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mt-20
          "
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="
              bg-white/5
              border
              border-white/10
              rounded-[32px]
              p-10
              "
            >
              <h3
                className="
                text-3xl
                font-bold
                text-white
                "
              >
                {pillar.title}
              </h3>

              <p
                className="
                text-white/70
                mt-6
                leading-relaxed
                "
              >
                {pillar.description}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}