const comparisons = [
  {
    role: "SAP Consultant",
    india: "₹25L",
    europe: "€90K",
  },
  {
    role: "Cloud Engineer",
    india: "₹22L",
    europe: "€85K",
  },
  {
    role: "Data Engineer",
    india: "₹20L",
    europe: "€80K",
  },
  {
    role: "AI Engineer",
    india: "₹28L",
    europe: "€100K",
  },
];

export default function IndiaCostAdvantage() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brand">Cost advantage</p>

        <h2 className="display-2 mt-4 font-bold">
          Global Talent. Better Economics.
        </h2>

        <div className="rounded-panel border-line mt-20 overflow-hidden border">
          <div className="bg-navy grid grid-cols-3 p-6 font-semibold text-white">
            <div>Role</div>
            <div>India</div>
            <div>Typical Western Europe</div>
          </div>

          {comparisons.map((item) => (
            <div
              key={item.role}
              className="border-line grid grid-cols-3 border-t p-6"
            >
              <div>{item.role}</div>

              <div className="text-accent font-bold">{item.india}</div>

              <div>{item.europe}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
