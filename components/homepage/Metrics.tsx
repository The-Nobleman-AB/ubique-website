"use client";

import CountUp from "react-countup";

export default function Metrics() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#155EEF]
            text-sm
            font-semibold
            "
          >
            TRUSTED GLOBALLY
          </p>

        </div>

        <div
          className="
          mt-16
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-12
          "
        >

          {/* Countries */}

          <div className="text-center">

            <div
              className="
              text-6xl
              lg:text-7xl
              font-black
              text-[#155EEF]
              "
            >
              <CountUp end={15} />+
            </div>

            <div
              className="
              mt-3
              text-gray-500
              "
            >
              Countries
            </div>

          </div>

          {/* Placements */}

          <div className="text-center">

            <div
              className="
              text-6xl
              lg:text-7xl
              font-black
              text-[#155EEF]
              "
            >
              <CountUp end={500} />+
            </div>

            <div
              className="
              mt-3
              text-gray-500
              "
            >
              Placements
            </div>

          </div>

          {/* Retention */}

          <div className="text-center">

            <div
              className="
              text-6xl
              lg:text-7xl
              font-black
              text-[#12B76A]
              "
            >
              <CountUp end={98} />%
            </div>

            <div
              className="
              mt-3
              text-gray-500
              "
            >
              Retention
            </div>

          </div>

          {/* Rating */}

          <div className="text-center">

            <div
              className="
              text-6xl
              lg:text-7xl
              font-black
              text-[#12B76A]
              "
            >
              4.8
            </div>

            <div
              className="
              mt-3
              text-gray-500
              "
            >
              Candidate Rating
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}