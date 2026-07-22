"use client";

import Link from "next/link";

import {
  CheckCircle2,
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Mail,
} from "lucide-react";

import { Job } from "@/data/jobs";

interface SuccessScreenProps {
  job: Job;
  applicationId: string;
}

export default function SuccessScreen({
  job,
  applicationId,
}: SuccessScreenProps) {

  return (

    <div
      className="
      max-w-5xl
      mx-auto
      px-6
      "
    >

      <div
        className="
        overflow-hidden
        rounded-[40px]
        border
        border-gray-200
        bg-white
        shadow-[0_30px_100px_rgba(15,23,42,0.08)]
        "
      >

        {/* Header */}

        <div
          className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#071B3A]
          to-[#155EEF]
          px-10
          py-16
          text-center
          text-white
          "
        >

          <div
            className="
            mx-auto
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-white/10
            backdrop-blur
            "
          >

            <CheckCircle2
              size={64}
              className="text-[#12B76A]"
            />

          </div>

          <h1
            className="
            mt-8
            text-5xl
            font-black
            tracking-[-0.04em]
            "
          >
            Application Submitted
          </h1>

          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-xl
            leading-9
            text-blue-100
            "
          >
            Thank you for your interest in
            joining Ubique Systems. Your
            application has been received
            successfully.
          </p>

        </div>

        {/* Body */}

        <div
          className="
          p-10
          lg:p-14
          "
        >

          <div
            className="
            grid
            gap-8
            lg:grid-cols-3
            "
          >

            {/* Job */}

            <div
              className="
              rounded-3xl
              border
              border-gray-200
              p-8
              "
            >

              <BriefcaseBusiness
                size={28}
                className="text-[#155EEF]"
              />

              <p
                className="
                mt-6
                text-sm
                uppercase
                tracking-[0.28em]
                text-gray-500
                "
              >
                Position
              </p>

              <h3
                className="
                mt-3
                text-2xl
                font-black
                text-[#071B3A]
                "
              >
                {job.title}
              </h3>

            </div>

            {/* Reference */}

            <div
              className="
              rounded-3xl
              border
              border-gray-200
              p-8
              "
            >

              <Mail
                size={28}
                className="text-[#155EEF]"
              />

              <p
                className="
                mt-6
                text-sm
                uppercase
                tracking-[0.28em]
                text-gray-500
                "
              >
                Reference ID
              </p>

              <h3
                className="
                mt-3
                text-2xl
                font-black
                text-[#071B3A]
                break-all
                "
              >
                {applicationId}
              </h3>

            </div>

            {/* Timeline */}

            <div
              className="
              rounded-3xl
              border
              border-gray-200
              p-8
              "
            >

              <Clock3
                size={28}
                className="text-[#155EEF]"
              />

              <p
                className="
                mt-6
                text-sm
                uppercase
                tracking-[0.28em]
                text-gray-500
                "
              >
                Expected Response
              </p>

              <h3
                className="
                mt-3
                text-2xl
                font-black
                text-[#071B3A]
                "
              >
                5–7 Business Days
              </h3>

            </div>

          </div>
          {/* Next Steps */}

          <div
            className="
            mt-14
            rounded-[32px]
            border
            border-[#155EEF]/10
            bg-[#F8FAFC]
            p-10
            "
          >

            <p
              className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
              "
            >
              WHAT HAPPENS NEXT?
            </p>

            <div
              className="
              mt-10
              grid
              gap-8
              md:grid-cols-3
              "
            >

              <div>

                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#155EEF]
                  text-lg
                  font-bold
                  text-white
                  "
                >
                  1
                </div>

                <h4
                  className="
                  mt-5
                  text-xl
                  font-bold
                  text-[#071B3A]
                  "
                >
                  Application Review
                </h4>

                <p
                  className="
                  mt-3
                  leading-8
                  text-gray-600
                  "
                >
                  Our recruitment specialists will
                  carefully review your profile,
                  experience and submitted résumé.
                </p>

              </div>

              <div>

                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#155EEF]
                  text-lg
                  font-bold
                  text-white
                  "
                >
                  2
                </div>

                <h4
                  className="
                  mt-5
                  text-xl
                  font-bold
                  text-[#071B3A]
                  "
                >
                  Shortlisting
                </h4>

                <p
                  className="
                  mt-3
                  leading-8
                  text-gray-600
                  "
                >
                  If your profile matches the role,
                  we'll contact you to arrange the
                  next stages of the recruitment
                  process.
                </p>

              </div>

              <div>

                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#155EEF]
                  text-lg
                  font-bold
                  text-white
                  "
                >
                  3
                </div>

                <h4
                  className="
                  mt-5
                  text-xl
                  font-bold
                  text-[#071B3A]
                  "
                >
                  Stay Connected
                </h4>

                <p
                  className="
                  mt-3
                  leading-8
                  text-gray-600
                  "
                >
                  We'll keep you informed throughout
                  the recruitment journey. Please
                  monitor your email for updates.
                </p>

              </div>

            </div>

          </div>

          {/* Helpful Note */}

          <div
            className="
            mt-12
            rounded-[32px]
            border
            border-green-200
            bg-[#ECFDF3]
            p-8
            "
          >

            <h3
              className="
              text-2xl
              font-black
              text-[#071B3A]
              "
            >
              Thank You
            </h3>

            <p
              className="
              mt-5
              text-lg
              leading-8
              text-gray-700
              "
            >
              We genuinely appreciate the time
              you've taken to apply. Every
              application is reviewed individually,
              and we strive to provide a transparent
              and respectful recruitment experience
              for every candidate.
            </p>

          </div>

          {/* CTA */}

          <div
            className="
            mt-14
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:justify-center
            "
          >

            <Link
              href="/careers"
              className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#071B3A]
              px-8
              py-5
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#155EEF]
              "
            >
              Explore More Roles

              <ArrowRight
                size={20}
              />

            </Link>

            <Link
              href="/"
              className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-gray-300
              px-8
              py-5
              text-lg
              font-semibold
              text-[#071B3A]
              transition-all
              duration-300
              hover:border-[#155EEF]
              hover:text-[#155EEF]
              "
            >
              Return Home
            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}