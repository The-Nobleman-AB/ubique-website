"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  BriefcaseBusiness,
  Clock3,
} from "lucide-react";

import { Job } from "@/data/jobs";

interface JobHeroProps {
  job: Job;
}

export default function JobHero({
  job,
}: JobHeroProps) {

  return (

    <section
      className="
      pt-44
      pb-28
      bg-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >

        <Link
          href="/careers"
          className="
          group
          inline-flex
          items-center
          gap-3
          text-gray-500
          hover:text-[#155EEF]
          transition-all
          "
        >

          <ArrowLeft
            size={18}
            className="
            transition-transform
            duration-300
            group-hover:-translate-x-1
            "
          />

          Back to Careers

        </Link>

        <div
          className="
          mt-12
          grid
          lg:grid-cols-12
          gap-16
          items-start
          "
        >

          {/* LEFT */}

          <div
            className="
            lg:col-span-8
            "
          >

            <p
              className="
              uppercase
              tracking-[0.35em]
              font-semibold
              text-[#12B76A]
              "
            >
              {job.department}
            </p>

            <h1
              className="
              mt-6
              text-6xl
              lg:text-[82px]
              leading-[0.92]
              tracking-[-0.05em]
              font-black
              text-[#071B3A]
              "
            >
              {job.title}
            </h1>

            <div
              className="
              mt-10
              flex
              flex-wrap
              gap-x-8
              gap-y-4
              text-gray-500
              "
            >

              <div
                className="
                flex
                items-center
                gap-2
                "
              >

                <MapPin size={18} />

                {job.location}

              </div>

              <div
                className="
                flex
                items-center
                gap-2
                "
              >

                <BriefcaseBusiness
                  size={18}
                />

                {job.workplace}

              </div>

              <div
                className="
                flex
                items-center
                gap-2
                "
              >

                <Clock3 size={18} />

                {job.employmentType}

              </div>

              <div>

                {job.experience}

              </div>

            </div>

            <p
              className="
              mt-12
              max-w-4xl
              text-xl
              leading-9
              text-gray-600
              "
            >
              {job.description}
            </p>

          </div>

          {/* RIGHT */}

          <div
            className="
            lg:col-span-4
            lg:sticky
            lg:top-32
            "
          >
            <div
              className="
              rounded-[32px]
              border
              border-gray-200
              bg-white
              p-8
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >

              <p
                className="
                text-sm
                uppercase
                tracking-[0.28em]
                font-semibold
                text-[#12B76A]
                "
              >
                Position Summary
              </p>

              <div className="mt-8 space-y-7">

                <div>

                  <p
                    className="
                    text-sm
                    text-gray-500
                    "
                  >
                    Employment
                  </p>

                  <h3
                    className="
                    mt-1
                    text-xl
                    font-bold
                    text-[#071B3A]
                    "
                  >
                    {job.employmentType}
                  </h3>

                </div>

                <div>

                  <p
                    className="
                    text-sm
                    text-gray-500
                    "
                  >
                    Workplace
                  </p>

                  <h3
                    className="
                    mt-1
                    text-xl
                    font-bold
                    text-[#071B3A]
                    "
                  >
                    {job.workplace}
                  </h3>

                </div>

                <div>

                  <p
                    className="
                    text-sm
                    text-gray-500
                    "
                  >
                    Experience
                  </p>

                  <h3
                    className="
                    mt-1
                    text-xl
                    font-bold
                    text-[#071B3A]
                    "
                  >
                    {job.experience}
                  </h3>

                </div>

                <div>

                  <p
                    className="
                    text-sm
                    text-gray-500
                    "
                  >
                    Location
                  </p>

                  <h3
                    className="
                    mt-1
                    text-xl
                    font-bold
                    text-[#071B3A]
                    "
                  >
                    {job.location}
                  </h3>

                </div>

              </div>

              <div
                className="
                my-8
                h-px
                bg-gray-200
                "
              />

              <button
		type="button"
  		onClick={() => {
    		document
      		  .getElementById("application-form")
      		  ?.scrollIntoView({
        	    behavior: "smooth",
        	    block: "start",
      		  });
  		}}
                className="
                group
                flex
                w-full
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
                Apply for this Role

                <ArrowRight
                  size={20}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  "
                />

              </button>

              <p
                className="
                mt-6
                text-center
                text-sm
                leading-7
                text-gray-500
                "
              >
                The application takes approximately
                <strong className="text-[#071B3A]">
                  {" "}5 minutes
                </strong>
                . You can upload your résumé and supporting
                documents in the final step.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}