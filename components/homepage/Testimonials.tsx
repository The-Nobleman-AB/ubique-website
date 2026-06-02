"use client";

export default function Testimonials() {
  return (
    <section
      className="
      py-40
      bg-[#F8FAFC]
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#155EEF]
            font-semibold
            "
          >
            CLIENT TESTIMONIALS
          </p>

          <h2
            className="
            text-6xl
            font-black
            mt-4
            "
          >
            Trusted By Teams
            <br />
            Around The World
          </h2>

        </div>

        {/* Featured Quote */}

        <div
          className="
          mt-24
          max-w-5xl
          mx-auto
          text-center
          "
        >

          <div
            className="
            text-[120px]
            leading-none
            text-[#155EEF]/20
            font-black
            "
          >
            "
          </div>

          <blockquote
            className="
            text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            -mt-12
            "
          >
            Ubique helped us scale our SAP delivery
            capabilities across Germany and India
            significantly faster than expected.
          </blockquote>

          <div className="mt-12">

            <div
              className="
              font-bold
              text-xl
              "
            >
              Head of Talent Acquisition
            </div>

            <div
              className="
              text-gray-500
              mt-2
              "
            >
              Global Automotive Organization
            </div>

          </div>

        </div>

        {/* Secondary Testimonials */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          mt-24
          "
        >

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-sm
            border
            border-gray-100
            "
          >

            <p
              className="
              text-gray-600
              leading-relaxed
              "
            >
              The quality of candidates and the
              responsiveness of the team exceeded
              expectations throughout the project.
            </p>

            <div className="mt-8">

              <div className="font-bold">
                HR Director
              </div>

              <div className="text-gray-500">
                Technology Sector
              </div>

            </div>

          </div>

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-sm
            border
            border-gray-100
            "
          >

            <p
              className="
              text-gray-600
              leading-relaxed
              "
            >
              Their understanding of local and
              international hiring markets made
              a significant difference.
            </p>

            <div className="mt-8">

              <div className="font-bold">
                Talent Manager
              </div>

              <div className="text-gray-500">
                Manufacturing Sector
              </div>

            </div>

          </div>

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            shadow-sm
            border
            border-gray-100
            "
          >

            <p
              className="
              text-gray-600
              leading-relaxed
              "
            >
              A trusted partner who consistently
              delivers high-quality talent across
              multiple regions.
            </p>

            <div className="mt-8">

              <div className="font-bold">
                Recruitment Lead
              </div>

              <div className="text-gray-500">
                Global Consulting Firm
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}