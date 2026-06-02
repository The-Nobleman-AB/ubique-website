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
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#155EEF]
          "
        >
          DEMAND INDEX
        </p>

        <h2
          className="
          text-6xl
          font-black
          mt-6
          "
        >
          Most In-Demand Skills
        </h2>

        <div className="mt-20 space-y-8">

          {skills.map((item) => (
            <div key={item.skill}>

              <div
                className="
                flex
                justify-between
                mb-3
                "
              >
                <span
                  className="
                  font-semibold
                  text-lg
                  "
                >
                  {item.skill}
                </span>

                <span>
                  {item.score}
                </span>

              </div>

              <div
                className="
                h-5
                bg-gray-100
                rounded-full
                overflow-hidden
                "
              >
                <div
                  style={{
                    width: `${item.score}%`,
                  }}
                  className="
                  h-full
                  bg-gradient-to-r
                  from-[#155EEF]
                  to-[#12B76A]
                  "
                />
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}