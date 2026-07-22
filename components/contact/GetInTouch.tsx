"use client";

import {
  BriefcaseBusiness,
  Building2,
  Handshake,
  Send,
  UserRound,
} from "lucide-react";

export default function GetInTouch() {
  return (
    <section
      id="contact-form"
      className="
      py-36
      bg-white
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
              GET IN TOUCH
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
              Tell Us
              About Your
              Business.
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
              Every conversation begins with understanding
              your goals. Complete the enquiry form and our
              team will connect you with the most appropriate
              workforce specialist.
            </p>

          </div>

        </div>

        {/* Form */}

        <div
          className="
          mt-24
          grid
          lg:grid-cols-12
          gap-16
          "
        >

          {/* Left */}

          <div className="lg:col-span-8">

            <form
              className="
              rounded-[40px]
              border
              border-gray-200
              bg-white
              p-10
              shadow-sm
              "
            >

              <div
                className="
                grid
                md:grid-cols-2
                gap-8
                "
              >

                <div>

                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#155EEF]
                    "
                  />

                </div>

                <div>

                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em]">
                    Business Email
                  </label>

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#155EEF]
                    "
                  />

                </div>

                <div>

                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em]">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#155EEF]
                    "
                  />

                </div>

                <div>

                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em]">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="+91 ..."
                    className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#155EEF]
                    "
                  />

                </div>

              </div>

              <div className="mt-8">

                <label className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em]">
                  Enquiry Type
                </label>

                <select
                  className="
                  mt-3
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#155EEF]
                  bg-white
                  "
                >

                  <option>Technology Recruitment</option>
                  <option>Workforce Consulting</option>
                  <option>Contract Staffing</option>
                  <option>Managed Teams</option>
                  <option>General Enquiry</option>

                </select>

              </div>

              <div className="mt-8">

                <label className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em]">
                  Message
                </label>

                <textarea
                  rows={7}
                  placeholder="Tell us about your hiring requirements..."
                  className="
                  mt-3
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-5
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#155EEF]
                  "
                />

              </div>

              <button
                type="submit"
                className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#071B3A]
                px-8
                py-5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#155EEF]
                "
              >

                Send Enquiry

                <Send
                  size={18}
                />

              </button>

            </form>

          </div>

          {/* Right */}

          <div className="lg:col-span-4">

            <div
              className="
              sticky
              top-28
              rounded-[40px]
              bg-[#071B3A]
              p-10
              overflow-hidden
              relative
              "
            >

              <div
                className="
                absolute
                right-[-100px]
                top-[-100px]
                w-[260px]
                h-[260px]
                rounded-full
                bg-[#155EEF]/20
                blur-[100px]
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
                  HOW CAN WE HELP?
                </p>

                <div className="mt-10 space-y-8">

                  <div className="flex gap-5">

                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#155EEF]/20
                      flex
                      items-center
                      justify-center
                      shrink-0
                      "
                    >
                      <BriefcaseBusiness
                        className="text-[#12B76A]"
                        size={24}
                      />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        Recruitment
                      </h3>

                      <p className="mt-2 leading-7 text-white/65">
                        Permanent hiring,
                        executive search and
                        specialist technology recruitment.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#155EEF]/20
                      flex
                      items-center
                      justify-center
                      shrink-0
                      "
                    >
                      <Handshake
                        className="text-[#12B76A]"
                        size={24}
                      />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        Workforce Consulting
                      </h3>

                      <p className="mt-2 leading-7 text-white/65">
                        Build scalable workforce
                        strategies aligned with
                        business growth.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#155EEF]/20
                      flex
                      items-center
                      justify-center
                      shrink-0
                      "
                    >
                      <Building2
                        className="text-[#12B76A]"
                        size={24}
                      />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        Enterprise Solutions
                      </h3>

                      <p className="mt-2 leading-7 text-white/65">
                        Dedicated teams,
                        managed services and
                        long-term partnerships.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#155EEF]/20
                      flex
                      items-center
                      justify-center
                      shrink-0
                      "
                    >
                      <UserRound
                        className="text-[#12B76A]"
                        size={24}
                      />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        Careers
                      </h3>

                      <p className="mt-2 leading-7 text-white/65">
                        Looking for your next
                        opportunity? We'd love
                        to hear from you.
                      </p>

                    </div>

                  </div>

                </div>

                <div
                  className="
                  mt-12
                  pt-8
                  border-t
                  border-white/10
                  "
                >

                  <p
                    className="
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    text-[#12B76A]
                    font-semibold
                    "
                  >
                    BUSINESS HOURS
                  </p>

                  <p className="mt-4 text-white/75 leading-8">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}