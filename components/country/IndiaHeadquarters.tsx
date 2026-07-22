import Image from "next/image";

export default function IndiaHeadquarters() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          rounded-[40px]
          overflow-hidden
          bg-gradient-to-br
          from-[#071B3A]
          via-[#0B2A57]
          to-[#155EEF]
          text-white
          "
        >

          <div
            className="
            grid
            lg:grid-cols-2
            items-center
            "
          >

            {/* LEFT */}

            <div className="p-12 lg:p-16">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                GLOBAL HEADQUARTERS
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
                Kolkata,
                <br />
                India
              </h2>

              <p
                className="
                mt-8
                text-xl
                text-white/80
                leading-relaxed
                "
              >
                Ubique Systems' Global Headquarters is
                strategically located in Kolkata, serving
                as the operational hub for international
                recruitment, workforce solutions and
                consulting engagements across Europe,
                North America and Asia-Pacific.
              </p>

              <div
                className="
                grid
                grid-cols-2
                gap-8
                mt-12
                "
              >

                <div>

                  <div
                    className="
                    text-4xl
                    font-black
                    text-[#12B76A]
                    "
                  >
                    Global
                  </div>

                  <div className="mt-2 text-white/70">
                    Headquarters
                  </div>

                </div>

                <div>

                  <div
                    className="
                    text-4xl
                    font-black
                    text-[#12B76A]
                    "
                  >
                    15+
                  </div>

                  <div className="mt-2 text-white/70">
                    Countries Served
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative h-full">

              <Image
                src="/images/countries/kolkata-hq.jpg"
                alt="Kolkata Global Headquarters"
                width={1200}
                height={900}
                className="
                w-full
                h-[500px]
                lg:h-full
                object-cover
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-l
                from-transparent
                via-transparent
                to-[#071B3A]/30
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}