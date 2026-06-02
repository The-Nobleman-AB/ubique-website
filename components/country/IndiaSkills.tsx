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
    <section className="py-32 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#155EEF]
          "
        >
          SKILLS LANDSCAPE
        </p>

        <h2
          className="
          text-6xl
          font-black
          mt-6
          "
        >
          High-Demand Skill Areas
        </h2>

        <p
          className="
          text-xl
          text-gray-600
          mt-6
          max-w-4xl
          "
        >
          India's talent ecosystem continues to evolve,
          with strong demand across enterprise technology,
          cloud, AI and software engineering disciplines.
        </p>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
          mt-20
          "
        >
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
              bg-white
              rounded-[32px]
              p-8
              border
              border-gray-200
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              <div className="flex justify-between items-start">

                <h3
                  className="
                  text-3xl
                  font-bold
                  "
                >
                  {skill.title}
                </h3>

                <span
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#155EEF]/10
                  text-[#155EEF]
                  text-sm
                  font-semibold
                  "
                >
                  {skill.demand}
                </span>

              </div>

              <p
                className="
                text-gray-600
                mt-6
                leading-relaxed
                "
              >
                {skill.description}
              </p>

              <div
                className="
                mt-8
                pt-6
                border-t
                border-gray-100
                "
              >
                <div className="text-sm text-gray-500">
                  Typical Experience Range
                </div>

                <div className="font-semibold mt-2">
                  {skill.experience}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}