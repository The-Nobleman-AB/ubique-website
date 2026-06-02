const salaries = [
  {
    role: "SAP S/4HANA Consultant",
    salary: "₹18L - ₹45L",
    width: "w-full",
  },
  {
    role: "Cloud Engineer",
    salary: "₹12L - ₹35L",
    width: "w-4/5",
  },
  {
    role: "AI / ML Engineer",
    salary: "₹15L - ₹40L",
    width: "w-[90%]",
  },
  {
    role: "Data Engineer",
    salary: "₹10L - ₹30L",
    width: "w-3/4",
  },
  {
    role: "Software Engineer",
    salary: "₹8L - ₹25L",
    width: "w-2/3",
  },
];

export default function IndiaSalaryBenchmark() {
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
          SALARY BENCHMARKS
        </p>

        <h2
          className="
          text-6xl
          font-black
          mt-6
          "
        >
          Technology Talent
          Compensation Snapshot
        </h2>

        <div className="mt-20 space-y-8">

          {salaries.map((item) => (
            <div key={item.role}>

              <div
                className="
                flex
                justify-between
                mb-3
                "
              >
                <span className="font-semibold">
                  {item.role}
                </span>

                <span className="text-[#155EEF] font-bold">
                  {item.salary}
                </span>

              </div>

              <div
                className="
                h-5
                rounded-full
                bg-white
                overflow-hidden
                "
              >
                <div
                  className={`
                  ${item.width}
                  h-full
                  bg-gradient-to-r
                  from-[#155EEF]
                  to-[#12B76A]
                  `}
                />
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}