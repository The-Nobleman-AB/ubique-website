"use client";

export default function IndiaStickyNav() {
  const links = [
    "Overview",
    "Talent Hubs",
    "Skills",
    "Hiring Models",
    "Market Insights",
    "Case Study",
    "Guide",
  ];

  return (
    <section
      className="
      sticky
      top-24
      z-30
      hidden
      xl:block
      "
    >
      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-[24px]
        p-6
        shadow-sm
        "
      >

        <div
          className="
          text-sm
          uppercase
          tracking-[0.2em]
          text-gray-500
          mb-5
          "
        >
          Contents
        </div>

        <div className="space-y-4">

          {links.map((link) => (
            <div
              key={link}
              className="
              text-gray-700
              hover:text-[#155EEF]
              cursor-pointer
              transition
              "
            >
              {link}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}