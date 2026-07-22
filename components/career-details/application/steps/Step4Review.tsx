"use client";

import { Job } from "@/data/jobs";
import { ApplicationData } from "../ApplicationWizard";

interface Step4ReviewProps {
  job: Job;
  data: ApplicationData;
  setData: React.Dispatch<
    React.SetStateAction<ApplicationData>
  >;
}

export default function Step4Review({
  job,
  data,
  setData,
}: Step4ReviewProps) {

  return (

    <div>

      <div className="max-w-3xl">

        <p
          className="
          uppercase
          tracking-[0.32em]
          text-sm
          font-semibold
          text-[#12B76A]
          "
        >
          STEP 4
        </p>

        <h3
          className="
          mt-4
          text-4xl
          font-black
          tracking-[-0.03em]
          text-[#071B3A]
          "
        >
          Review Your Application
        </h3>

        <p
          className="
          mt-6
          text-lg
          leading-8
          text-gray-600
          "
        >
          Please review your information before
          submitting your application for the
          <strong className="text-[#071B3A]">
            {" "}
            {job.title}
          </strong>{" "}
          position.
        </p>

      </div>

      <div
        className="
        mt-14
        space-y-8
        "
      >

        {/* Personal */}

        <section
          className="
          rounded-[28px]
          border
          border-gray-200
          bg-white
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
            Personal Information
          </h4>

          <div
            className="
            mt-8
            grid
            md:grid-cols-2
            gap-8
            "
          >

            <div>

              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.firstName} {data.lastName}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.email}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.phone}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Location
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.location}
              </p>

            </div>

          </div>

        </section>

        {/* Professional */}

        <section
          className="
          rounded-[28px]
          border
          border-gray-200
          bg-white
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
            Professional Background
          </h4>

          <div
            className="
            mt-8
            grid
            md:grid-cols-2
            gap-8
            "
          >

            <div>

              <p className="text-sm text-gray-500">
                Company
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.company || "-"}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Designation
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.designation || "-"}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Experience
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.experience}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Qualification
              </p>

              <p className="mt-2 font-semibold text-[#071B3A]">
                {data.qualification}
              </p>

            </div>

          </div>

        </section>
        {/* Documents */}

        <section
          className="
          rounded-[28px]
          border
          border-gray-200
          bg-white
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
            Documents
          </h4>

          <div
            className="
            mt-8
            grid
            md:grid-cols-2
            gap-8
            "
          >

            <div>

              <p className="text-sm text-gray-500">
                Résumé
              </p>

              <p
                className="
                mt-2
                font-semibold
                text-[#071B3A]
                "
              >
                {data.resume
                  ? data.resume.name
                  : "Not Uploaded"}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Cover Letter
              </p>

              <p
                className="
                mt-2
                font-semibold
                text-[#071B3A]
                "
              >
                {data.coverLetter.trim() !== ""
                  ? "Provided"
                  : "Not Provided"}
              </p>

            </div>

          </div>

        </section>

        {/* Consent */}

        <section
          className="
          rounded-[28px]
          border
          border-gray-200
          bg-[#F8FAFC]
          p-8
          "
        >

          <label
            className="
            flex
            items-start
            gap-5
            cursor-pointer
            "
          >

            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e)=>
                setData({
                  ...data,
                  consent: e.target.checked,
                })
              }
              className="
              mt-1
              h-5
              w-5
              accent-[#155EEF]
              "
            />

            <div>

              <h4
                className="
                text-lg
                font-bold
                text-[#071B3A]
                "
              >
                Declaration & Consent
              </h4>

              <p
                className="
                mt-3
                leading-8
                text-gray-600
                "
              >
                I confirm that the information
                provided in this application is
                accurate to the best of my
                knowledge. I consent to Ubique
                Systems storing and processing
                my personal information for the
                purpose of evaluating my
                application and contacting me
                regarding recruitment
                opportunities.
              </p>

            </div>

          </label>

        </section>

        {/* Final Message */}

        <section
          className="
          rounded-[28px]
          border
          border-[#12B76A]/20
          bg-[#ECFDF3]
          p-8
          "
        >

          <p
            className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#12B76A]
            "
          >
            Ready to Submit
          </p>

          <h4
            className="
            mt-4
            text-2xl
            font-black
            text-[#071B3A]
            "
          >
            You're Almost Done
          </h4>

          <p
            className="
            mt-5
            text-lg
            leading-8
            text-gray-700
            "
          >
            Once submitted, your application
            will be securely received by our
            recruitment team. We'll review your
            profile carefully and contact you
            regarding the next steps if your
            experience aligns with the role.
          </p>

        </section>

      </div>

    </div>

  );

}