"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#071B3A]
      pt-36
      pb-28
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        -left-40
        -top-40
        w-[650px]
        h-[650px]
        rounded-full
        bg-[#155EEF]/15
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        right-[-220px]
        bottom-[-220px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#12B76A]/10
        blur-[220px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        "
      >

        <div
          className="
          grid
          lg:grid-cols-12
          gap-16
          items-center
          "
        >

          {/* Left */}

          <div className="lg:col-span-7">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#12B76A]
              font-semibold
              "
            >
              CONTACT UBIQUE
            </p>

            <h1
              className="
              mt-8
              text-[58px]
              lg:text-[80px]
              font-black
              leading-[0.92]
              tracking-[-0.04em]
              text-white
              "
            >
              Let's Start
              A Meaningful
              Conversation.
            </h1>

            <div
              className="
              mt-8
              w-24
              h-1
              rounded-full
              bg-[#12B76A]
              "
            />

            <p
              className="
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-white/70
              "
            >
              Whether you're looking for specialist
              technology talent, workforce consulting
              or long-term recruitment partnerships,
              our team is ready to help you build
              what's next.
            </p>

            <div
              className="
              mt-14
              flex
              flex-wrap
              gap-5
              "
            >

              <Link
                href="#contact-form"
                className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#12B76A]
                px-8
                py-4
                font-semibold
                text-[#071B3A]
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Send an Enquiry

                <ArrowRight
                  size={20}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                />

              </Link>

              <Link
                href="mailto:info@ubique-systems.com"
                className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/5
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/10
                "
              >
                <Mail size={18} />

                Email Us

              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-5">

            <div
              className="
              rounded-[36px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              overflow-hidden
              "
            >

              <div className="p-10">

                <p
                  className="
                  uppercase
                  tracking-[0.35em]
                  text-[#12B76A]
                  font-semibold
                  "
                >
                  QUICK CONTACT
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

                      <Mail
                        size={24}
                        className="text-[#12B76A]"
                      />

                    </div>

                    <div>

                      <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                        Email
                      </p>

                      <p className="mt-2 text-xl font-semibold text-white">
                        info@ubique-systems.com
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

                      <Phone
                        size={24}
                        className="text-[#12B76A]"
                      />

                    </div>

                    <div>

                      <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                        Phone
                      </p>

                      <p className="mt-2 text-xl font-semibold text-white">
                        +91 • Available On Request
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

                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                  >

                    <div>

                      <p
                        className="
                        text-sm
                        uppercase
                        tracking-[0.25em]
                        text-white/50
                        "
                      >
                        RESPONSE TIME
                      </p>

                      <p
                        className="
                        mt-2
                        text-2xl
                        font-black
                        text-white
                        "
                      >
                        Within 1 Business Day
                      </p>

                    </div>

                    <div
                      className="
                      h-14
                      w-14
                      rounded-full
                      bg-[#12B76A]
                      flex
                      items-center
                      justify-center
                      "
                    >

                      <ArrowRight
                        className="text-[#071B3A]"
                        size={24}
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Editorial */}

        <div
          className="
          mt-24
          pt-16
          border-t
          border-white/10
          "
        >

          <div
            className="
            grid
            lg:grid-cols-12
            gap-16
            items-center
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
                START THE CONVERSATION
              </p>

            </div>

            <div className="lg:col-span-7">

              <p
                className="
                text-xl
                leading-9
                text-white/70
                "
              >
                Every successful partnership begins with a
                conversation. Tell us about your business,
                workforce challenges or hiring goals, and
                we'll connect you with the right specialist
                to explore how Ubique can help.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}