export default function IndiaCaseStudy() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#155EEF]
            font-semibold
            "
          >
            FEATURED SUCCESS STORY
          </p>

          <h2
            className="
            text-5xl
            lg:text-6xl
            font-black
            mt-6
            leading-tight
            "
          >
            Delivering SAP Talent For A Global
            Automotive Transformation Programme
          </h2>

        </div>

        {/* Main Card */}

        <div
          className="
          mt-20
          rounded-[40px]
          overflow-hidden
          border
          border-gray-200
          "
        >

          <div className="grid lg:grid-cols-5">

            {/* Story Side */}

            <div className="lg:col-span-3 p-12 lg:p-16">

              {/* Client */}

              <div
                className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-[#155EEF]/10
                text-[#155EEF]
                text-sm
                font-semibold
                "
              >
                German Automotive Client
              </div>

              {/* Challenge */}

              <div className="mt-12">

                <h3
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Challenge
                </h3>

                <p
                  className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                  "
                >
                  A leading automotive organisation
                  required specialist SAP consultants
                  to support a large-scale digital
                  transformation initiative across
                  multiple workstreams and locations.
                </p>

              </div>

              {/* Approach */}

              <div className="mt-10">

                <h3
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Approach
                </h3>

                <p
                  className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                  "
                >
                  Ubique leveraged its India talent
                  network, conducted targeted sourcing,
                  technical screening and coordinated
                  accelerated interview processes with
                  stakeholders across multiple regions.
                </p>

              </div>

              {/* Outcome */}

              <div className="mt-10">

                <h3
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Outcome
                </h3>

                <p
                  className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                  "
                >
                  The project team was fully staffed
                  within eight weeks, enabling the
                  client to accelerate programme
                  delivery while maintaining strong
                  consultant retention and quality.
                </p>

              </div>

            </div>

            {/* Metrics Side */}

            <div
              className="
              lg:col-span-2
              bg-[#071B3A]
              p-12
              lg:p-16
              text-white
              "
            >

              <div>

                <div
                  className="
                  text-6xl
                  font-black
                  text-[#12B76A]
                  "
                >
                  15
                </div>

                <div className="mt-2 text-white/70">
                  SAP Consultants Delivered
                </div>

              </div>

              <div className="mt-12">

                <div
                  className="
                  text-6xl
                  font-black
                  text-[#155EEF]
                  "
                >
                  8
                </div>

                <div className="mt-2 text-white/70">
                  Weeks To Deployment
                </div>

              </div>

              <div className="mt-12">

                <div
                  className="
                  text-6xl
                  font-black
                  text-[#12B76A]
                  "
                >
                  98%
                </div>

                <div className="mt-2 text-white/70">
                  Consultant Retention
                </div>

              </div>

              <div className="mt-12">

                <div
                  className="
                  text-6xl
                  font-black
                  text-[#155EEF]
                  "
                >
                  40%
                </div>

                <div className="mt-2 text-white/70">
                  Faster Hiring Timeline
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}