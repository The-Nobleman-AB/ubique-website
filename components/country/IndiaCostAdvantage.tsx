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
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#155EEF]
          "
        >
          COST ADVANTAGE
        </p>

        <h2
          className="
          text-6xl
          font-black
          mt-6
          "
        >
          Global Talent.
          Better Economics.
        </h2>

        <div
          className="
          mt-20
          rounded-[40px]
          overflow-hidden
          border
          border-gray-200
          "
        >

          <div
            className="
            grid
            grid-cols-3
            bg-[#071B3A]
            text-white
            p-6
            font-semibold
            "
          >
            <div>Role</div>
            <div>India</div>
            <div>Typical Western Europe</div>
          </div>

          {comparisons.map((item) => (
            <div
              key={item.role}
              className="
              grid
              grid-cols-3
              p-6
              border-t
              border-gray-100
              "
            >
              <div>{item.role}</div>

              <div className="text-[#12B76A] font-bold">
                {item.india}
              </div>

              <div>{item.europe}</div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}