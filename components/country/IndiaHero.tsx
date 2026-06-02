export default function IndiaHero() {
  return (
    <section
      className="
      pt-40
      pb-24
      bg-[#071B3A]
      relative
      overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        right-0
        top-0
        w-[600px]
        h-[600px]
        rounded-full
        bg-blue-500/20
        blur-[180px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}

          <div>

            <div
              className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-white/10
              text-white/80
              text-sm
              mb-8
              "
            >
              India Talent Intelligence Report
            </div>

            <p
              className="
              uppercase
              tracking-[0.3em]
              text-[#12B76A]
              "
            >
              INDIA
            </p>

            <h1
              className="
              text-6xl
              lg:text-8xl
              font-black
              text-white
              mt-6
              leading-[0.95]
              "
            >
              The Global
              Engine For
              Technology
              Talent
            </h1>

            <p
              className="
              mt-8
              text-xl
              text-white/70
              max-w-2xl
              "
            >
              Access one of the world's largest pools
              of software engineers, SAP consultants,
              cloud specialists, AI professionals and
              digital transformation experts.
            </p>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-10
              "
            >

              <div className="grid grid-cols-2 gap-10">

                <div>
                  <div className="text-5xl font-black text-[#155EEF]">
                    5M+
                  </div>

                  <div className="text-white/60 mt-2">
                    Technology Professionals
                  </div>
                </div>

                <div>
                  <div className="text-5xl font-black text-[#12B76A]">
                    1.5M+
                  </div>

                  <div className="text-white/60 mt-2">
                    Engineering Graduates
                  </div>
                </div>

                <div>
                  <div className="text-5xl font-black text-[#155EEF]">
                    #1
                  </div>

                  <div className="text-white/60 mt-2">
                    Global IT Services Hub
                  </div>
                </div>

                <div>
                  <div className="text-5xl font-black text-[#12B76A]">
                    24/7
                  </div>

                  <div className="text-white/60 mt-2">
                    Delivery Capability
                  </div>
                </div>

              </div>

              <div
                className="
                mt-10
                pt-10
                border-t
                border-white/10
                "
              >
                <div className="text-white font-semibold">
                  Key Strength Areas
                </div>

                <div className="flex flex-wrap gap-3 mt-5">

                  <span className="px-4 py-2 rounded-full bg-white/10 text-white">
                    SAP
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 text-white">
                    Cloud
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 text-white">
                    AI / ML
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 text-white">
                    Cybersecurity
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 text-white">
                    Data Engineering
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}