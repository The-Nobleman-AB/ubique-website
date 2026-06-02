"use client";

import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="py-40 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#155EEF]
            font-semibold
            "
          >
            SUCCESS STORIES
          </p>

          <h2
            className="
            text-6xl
            font-black
            mt-4
            "
          >
            Proven Results
            <br />
            Across Global Markets
          </h2>

        </div>

        {/* FEATURE CASE STUDY */}

        <div
          className="
          mt-20
          bg-[#071B3A]
          rounded-[40px]
          overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-14">

              <p
                className="
                text-[#12B76A]
                uppercase
                tracking-[0.2em]
                "
              >
                Automotive Industry
              </p>

              <h3
                className="
                text-white
                text-5xl
                font-black
                mt-6
                "
              >
                Scaling SAP Talent
                Across Germany
              </h3>

              <p
                className="
                text-white/70
                mt-8
                text-lg
                leading-relaxed
                "
              >
                A leading automotive client required
                rapid access to highly specialized SAP
                consultants to support a critical
                transformation initiative.
              </p>

              <button
                className="
                mt-10
                flex
                items-center
                gap-2
                text-[#12B76A]
                font-semibold
                "
              >
                Read Full Story

                <ArrowRight size={18} />
              </button>

            </div>

            {/* RIGHT */}

            <div
              className="
              bg-gradient-to-br
              from-[#155EEF]
              to-[#12B76A]
              p-14
              "
            >

              <div className="grid grid-cols-2 gap-8">

                <div>

                  <div
                    className="
                    text-white
                    text-6xl
                    font-black
                    "
                  >
                    15
                  </div>

                  <div className="text-white/80">
                    SAP Consultants Placed
                  </div>

                </div>

                <div>

                  <div
                    className="
                    text-white
                    text-6xl
                    font-black
                    "
                  >
                    8
                  </div>

                  <div className="text-white/80">
                    Weeks Delivery
                  </div>

                </div>

                <div>

                  <div
                    className="
                    text-white
                    text-6xl
                    font-black
                    "
                  >
                    98%
                  </div>

                  <div className="text-white/80">
                    Retention Rate
                  </div>

                </div>

                <div>

                  <div
                    className="
                    text-white
                    text-6xl
                    font-black
                    "
                  >
                    40%
                  </div>

                  <div className="text-white/80">
                    Faster Hiring
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CARDS */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mt-10
          "
        >

          <div
            className="
            border
            border-gray-200
            rounded-[32px]
            p-10
            "
          >
            <h4
              className="
              text-3xl
              font-black
              "
            >
              Cloud Engineering
            </h4>

            <p
              className="
              mt-4
              text-gray-500
              "
            >
              Enabled rapid scaling of cloud teams
              across multiple regions.
            </p>
          </div>

          <div
            className="
            border
            border-gray-200
            rounded-[32px]
            p-10
            "
          >
            <h4
              className="
              text-3xl
              font-black
              "
            >
              Global Workforce
            </h4>

            <p
              className="
              mt-4
              text-gray-500
              "
            >
              Supported international hiring across
              multiple countries and disciplines.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}