import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Cpu,
  Users,
  Briefcase,
} from "lucide-react";

export default function IndiaHeadquarters() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-center
          "
        >

          {/* LEFT */}

          <div>

            <p
              className="
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#155EEF]
              "
            >
              GLOBAL HEADQUARTERS
            </p>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                leading-tight
                text-[#071B3A]
                lg:text-6xl
              "
            >
              Kolkata.
              <br />
              Powering Global
              <br />
              Delivery.
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-xl
                leading-9
                text-gray-600
              "
            >
              Located in Kolkata, India, Ubique's Global
              Headquarters brings together enterprise consulting,
              technology expertise and workforce solutions to
              support organisations across Asia-Pacific and
              international markets.
            </p>

            <div className="mt-12">

              <Link
                href="/countries/india"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#155EEF]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Explore India

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              rounded-[36px]
              border
              border-gray-200
              bg-[#F8FAFC]
              p-10
              shadow-xl
            "
          >

            {/* Location */}

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#155EEF]
                  text-white
                "
              >

                <Building2 size={26} />

              </div>

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#155EEF]
                  "
                >
                  Headquarters
                </p>

                <h3
                  className="
                    mt-1
                    text-3xl
                    font-black
                    text-[#071B3A]
                  "
                >
                  Kolkata
                </h3>

              </div>

            </div>

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-gray-600
              "
            >

              <MapPin
                size={18}
                className="text-[#155EEF]"
              />

              India

            </div>

            <div
              className="
                my-10
                h-px
                bg-gray-200
              "
            />

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <Cpu
                  size={22}
                  className="text-[#155EEF]"
                />

                <span className="text-lg">
                  Technology Consulting
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Users
                  size={22}
                  className="text-[#155EEF]"
                />

                <span className="text-lg">
                  HR Consulting
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Briefcase
                  size={22}
                  className="text-[#155EEF]"
                />

                <span className="text-lg">
                  Staffing Solutions
                </span>

              </div>

            </div>

            <div
              className="
                mt-10
                rounded-2xl
                bg-white
                p-6
              "
            >

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#155EEF]
                "
              >
                Regional Role
              </p>

              <p
                className="
                  mt-4
                  leading-8
                  text-gray-600
                "
              >
                Serving as the operational hub for consulting,
                enterprise technology and workforce delivery
                across the Asia-Pacific region.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}