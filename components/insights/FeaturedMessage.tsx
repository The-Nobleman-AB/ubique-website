import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function FeaturedMessage() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-gray-200
            bg-gradient-to-br
            from-[#F8FAFC]
            via-white
            to-[#EEF4FF]
            p-12
            shadow-[0_25px_80px_rgba(7,27,58,0.06)]
          "
        >

          <div className="grid gap-14 lg:grid-cols-[1fr_420px]">

            {/* LEFT */}

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#EEF4FF]
                  px-5
                  py-2
                "
              >

                <Sparkles
                  size={18}
                  className="text-[#155EEF]"
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#155EEF]
                  "
                >
                  Featured
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-5xl
                  lg:text-6xl
                  font-black
                  leading-tight
                  text-[#071B3A]
                "
              >
                Building A
                Knowledge Centre
                Worth Reading.
              </h2>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-xl
                  leading-9
                  text-gray-600
                "
              >
                As Ubique Systems continues to grow,
                this page will become the home for
                company announcements, technology
                updates, hiring news and industry
                perspectives that genuinely reflect
                our work and expertise.
              </p>

              <p
                className="
                  mt-6
                  max-w-3xl
                  leading-8
                  text-gray-500
                "
              >
                We believe meaningful updates are
                worth sharing when they provide real
                value—not simply to fill a page.
              </p>

            </div>

            {/* RIGHT */}

            <div
              className="
                flex
                flex-col
                justify-center
                rounded-[32px]
                bg-[#071B3A]
                p-10
              "
            >

              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-sm
                  font-semibold
                  text-[#8FD8FF]
                "
              >
                Coming Soon
              </p>

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  leading-tight
                  text-white
                "
              >
                Company News

                <br />

                Technology Updates

                <br />

                Career Announcements

              </h3>

              <div className="mt-10 h-px bg-white/10" />

              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                "
              >

                <span className="text-blue-100">
                  Stay connected
                </span>

                <ArrowUpRight
                  className="text-[#8FD8FF]"
                  size={22}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}