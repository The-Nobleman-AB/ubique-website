"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const phrases = [
  "Build Enterprise Solutions.",
  "Lead Global Projects.",
  "Shape Digital Transformation.",
  "Grow With Great People.",
  "Create Meaningful Impact.",
];

export default function CareersHero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((current) => (current + 1) % phrases.length);
        setVisible(true);
      }, 300);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const scrollToJobs = () => {
    const section = document.getElementById("job-explorer");

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white
      pt-44
      pb-28
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        pointer-events-none
        "
      >
        <div
          className="
          absolute
          -top-32
          right-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#EEF4FF]
          blur-[140px]
          opacity-70
          "
        />

        <div
          className="
          absolute
          bottom-0
          left-[-120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#ECFDF3]
          blur-[120px]
          opacity-60
          "
        />
      </div>

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        "
      >
        <div
          className="
          grid
          lg:grid-cols-12
          gap-16
          items-center
          "
        >
          {/* LEFT */}

          <div
            className="
            lg:col-span-6
            "
          >
            <p
              className="
              uppercase
              tracking-[0.38em]
              font-semibold
              text-[#12B76A]
              "
            >
              EXPLORE CAREERS
            </p>

            <h1
              className="
              mt-6
              text-6xl
              lg:text-[88px]
              leading-[0.9]
              tracking-[-0.06em]
              font-black
              text-[#071B3A]
              "
            >
              Build
              <br />
              What's
              <br />
              Next.
            </h1>

            <p
              className="
              mt-10
              max-w-xl
              text-xl
              leading-9
              text-gray-600
              "
            >
              Join a team solving complex business
              challenges through technology,
              collaboration and continuous learning.
              Build solutions that matter while
              growing your career alongside talented
              people across global markets.
            </p>

            <button
              onClick={scrollToJobs}
              className="
              group
              mt-14
              inline-flex
              items-center
              gap-4
              text-lg
              font-semibold
              text-[#071B3A]
              transition-all
              hover:text-[#155EEF]
              "
            >
              Explore Opportunities

              <ChevronDown
                size={22}
                className="
                transition-transform
                duration-300
                group-hover:translate-y-1
                "
              />
            </button>
          </div>

          {/* RIGHT */}

          <div
            className="
            lg:col-span-6
            flex
            flex-col
            items-start
            lg:items-end
            "
          >
            <div
              className="
              min-h-[180px]
              flex
              items-center
              "
            >
              <h2
                className={`
                  text-[54px]
                  md:text-[72px]
                  xl:text-[96px]
                  leading-[0.95]
                  tracking-[-0.06em]
                  font-black
                  text-right
                  text-[#071B3A]
                  transition-all
                  duration-300
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                {phrases[index]}
              </h2>
            </div>

            {/* Supporting Text */}

            <div
              className="
              mt-10
              max-w-xl
              text-right
              "
            >

              <p
                className="
                text-sm
                uppercase
                tracking-[0.32em]
                font-semibold
                text-[#12B76A]
                "
              >
                Opportunities Across
              </p>

              <p
                className="
                mt-5
                text-xl
                leading-9
                text-gray-600
                "
              >
                Enterprise Applications • Cloud &
                Infrastructure • Artificial
                Intelligence • Cybersecurity •
                Digital Transformation
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Divider */}

        <div
          className="
          mt-24
          pt-8
          border-t
          border-gray-200
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          "
        >

          <p
            className="
            uppercase
            tracking-[0.30em]
            text-sm
            font-semibold
            text-gray-500
            "
          >
            People First.
            Technology Driven.
            Globally Connected.
          </p>

          <div
            className="
            flex
            items-center
            gap-8
            text-sm
            font-semibold
            text-gray-500
            "
          >

            <span>Enterprise</span>

            <span>Cloud</span>

            <span>AI</span>

            <span>Cybersecurity</span>

            <span>Data</span>

          </div>

        </div>

      </div>

    </section>

  );

}