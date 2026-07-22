"use client";

import Image from "next/image";

export default function LifeAtUbique() {
  return (
    <section
      className="
      py-36
      bg-white
      overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className="
          grid
          lg:grid-cols-12
          gap-16
          items-end
          "
        >

          <div className="lg:col-span-5">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#12B76A]
              font-semibold
              "
            >
              LIFE AT UBIQUE
            </p>

            <h2
              className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              leading-[0.95]
              tracking-[-0.03em]
              text-[#071B3A]
              "
            >
              Great Teams
              Build Great
              Companies.
            </h2>

          </div>

          <div className="lg:col-span-7">

            <p
              className="
              text-xl
              leading-9
              text-gray-600
              "
            >
              Behind every successful partnership is a
              passionate team of consultants, recruiters
              and technology specialists committed to
              helping organisations and professionals
              succeed together.
            </p>

          </div>

        </div>

        {/* Image Composition */}

        <div
          className="
          mt-24
          grid
          lg:grid-cols-12
          gap-8
          "
        >

          {/* Large Image */}

          <div className="lg:col-span-7">

            <div
              className="
              overflow-hidden
              rounded-[40px]
              "
            >

              <Image
                src="/images/about/team-1.jpg"
                alt="Ubique Team"
                width={900}
                height={900}
                className="
                w-full
                h-[720px]
                object-cover
                transition-transform
                duration-700
                hover:scale-105
                "
              />

            </div>

          </div>

          {/* Right Column */}

          <div
            className="
            lg:col-span-5
            flex
            flex-col
            gap-8
            "
          >

            <div
              className="
              overflow-hidden
              rounded-[36px]
              "
            >

              <Image
                src="/images/about/team-2.jpg"
                alt="Collaboration"
                width={700}
                height={420}
                className="
                w-full
                h-[340px]
                object-cover
                transition-transform
                duration-700
                hover:scale-105
                "
              />

            </div>

            <div
              className="
              rounded-[36px]
              bg-[#071B3A]
              p-10
              flex-1
              relative
              overflow-hidden
              "
            >

              <div
                className="
                absolute
                right-[-120px]
                top-[-120px]
                w-[320px]
                h-[320px]
                rounded-full
                bg-[#155EEF]/20
                blur-[120px]
                "
              />

              <div className="relative z-10">

                <p
                  className="
                  uppercase
                  tracking-[0.35em]
                  text-[#12B76A]
                  font-semibold
                  "
                >
                  OUR CULTURE
                </p>

                <h3
                  className="
                  mt-6
                  text-4xl
                  lg:text-5xl
                  font-black
                  leading-tight
                  text-white
                  "
                >
                  Curious.
                  Collaborative.
                  Committed.
                </h3>

                <p
                  className="
                  mt-8
                  text-lg
                  leading-8
                  text-white/70
                  "
                >
                  We believe the strongest ideas emerge
                  when diverse perspectives come together
                  with a shared commitment to excellence.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Content */}

        <div
          className="
          mt-28
          grid
          lg:grid-cols-12
          gap-16
          "
        >

          <div className="lg:col-span-5">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#12B76A]
              font-semibold
              "
            >
              WHAT DEFINES US
            </p>

            <h3
              className="
              mt-6
              text-5xl
              lg:text-[58px]
              font-black
              leading-[0.98]
              text-[#071B3A]
              "
            >
              People
              Are Our
              Greatest
              Strength.
            </h3>

          </div>

          <div className="lg:col-span-7">

            <p
              className="
              text-xl
              leading-9
              text-gray-600
              "
            >
              At Ubique, learning never stops.
              We encourage curiosity, celebrate
              collaboration and create an environment
              where our people continuously develop
              alongside the industries and technologies
              they support.
            </p>

            <div
              className="
              mt-10
              grid
              md:grid-cols-2
              gap-6
              "
            >

              <div
                className="
                rounded-3xl
                border
                border-gray-200
                p-8
                "
              >

                <h4
                  className="
                  text-2xl
                  font-black
                  text-[#071B3A]
                  "
                >
                  Continuous Learning
                </h4>

                <p
                  className="
                  mt-4
                  text-gray-600
                  leading-8
                  "
                >
                  We invest in developing expertise,
                  encouraging our teams to stay ahead
                  of changing technologies and evolving
                  client expectations.
                </p>

              </div>

              <div
                className="
                rounded-3xl
                border
                border-gray-200
                p-8
                "
              >

                <h4
                  className="
                  text-2xl
                  font-black
                  text-[#071B3A]
                  "
                >
                  Shared Success
                </h4>

                <p
                  className="
                  mt-4
                  text-gray-600
                  leading-8
                  "
                >
                  Our culture is built around teamwork,
                  accountability and a shared commitment
                  to delivering exceptional outcomes for
                  both clients and candidates.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Closing Statement */}

        <div
          className="
          mt-32
          pt-20
          border-t
          border-gray-200
          "
        >

          <div className="max-w-5xl">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#12B76A]
              font-semibold
              "
            >
              OUR PEOPLE
            </p>

            <h3
              className="
              mt-6
              text-5xl
              lg:text-[58px]
              font-black
              leading-[1]
              tracking-[-0.03em]
              text-[#071B3A]
              "
            >
              Every successful client
              partnership begins with
              an exceptional team.
            </h3>

            <p
              className="
              mt-8
              max-w-4xl
              text-xl
              leading-9
              text-gray-600
              "
            >
              The relationships we build with our clients
              are a direct reflection of the people who
              represent Ubique every day. Their expertise,
              integrity and commitment continue to shape
              our reputation across global markets.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}