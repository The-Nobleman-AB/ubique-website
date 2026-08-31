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
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Salary benchmarks</p>

        <h2 className="display-2 mt-4 font-bold">
          Technology Talent Compensation Snapshot
        </h2>

        <div className="mt-20 space-y-8">
          {salaries.map((item) => (
            <div key={item.role}>
              <div className="mb-3 flex justify-between">
                <span className="font-semibold">{item.role}</span>

                <span className="text-brand font-bold">{item.salary}</span>
              </div>

              <div className="h-5 overflow-hidden rounded-full bg-white">
                <div
                  className={` ${item.width} from-brand to-accent h-full bg-gradient-to-r`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
