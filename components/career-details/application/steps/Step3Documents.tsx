"use client";

import { UploadCloud, FileText } from "lucide-react";

import { ApplicationData } from "../ApplicationWizard";

interface Step3DocumentsProps {
  data: ApplicationData;
  setData: React.Dispatch<
    React.SetStateAction<ApplicationData>
  >;
}

export default function Step3Documents({
  data,
  setData,
}: Step3DocumentsProps) {
  const handleResumeUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setData({
      ...data,
      resume: file,
    });
  };

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
          STEP 3
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
          Documents
        </h3>

        <p
          className="
          mt-6
          text-lg
          leading-8
          text-gray-600
          "
        >
          Upload your résumé and optionally
          include a cover letter to help us
          understand your background better.
        </p>

      </div>

      {/* Resume */}

      <div className="mt-14">

        <label
          className="
          group
          relative
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-[32px]
          border-2
          border-dashed
          border-gray-300
          bg-[#F8FAFC]
          px-10
          py-20
          transition-all
          duration-300
          hover:border-[#155EEF]
          hover:bg-[#EEF4FF]
          "
        >

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleResumeUpload}
          />

          <div
            className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
            transition-all
            duration-300
            group-hover:scale-110
            "
          >

            <UploadCloud
              size={42}
              className="text-[#155EEF]"
            />

          </div>

          <h4
            className="
            mt-8
            text-3xl
            font-black
            tracking-[-0.03em]
            text-[#071B3A]
            "
          >
            Upload Your Résumé
          </h4>

          <p
            className="
            mt-4
            max-w-xl
            text-center
            leading-8
            text-gray-500
            "
          >
            Drag & drop your résumé here or
            click anywhere in this area to
            browse your files.
          </p>

          <p
            className="
            mt-4
            text-sm
            font-medium
            text-gray-400
            "
          >
            PDF • DOC • DOCX

            &nbsp;&nbsp;•&nbsp;&nbsp;

            Maximum 10 MB
          </p>

        </label>
        {data.resume && (

          <div
            className="
            mt-8
            rounded-[28px]
            border
            border-green-200
            bg-green-50
            p-6
            "
          >

            <div
              className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
              "
            >

              <div
                className="
                flex
                items-center
                gap-5
                "
              >

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow
                  "
                >

                  <FileText
                    size={28}
                    className="
                    text-[#12B76A]
                    "
                  />

                </div>

                <div>

                  <h4
                    className="
                    text-lg
                    font-bold
                    text-[#071B3A]
                    "
                  >
                    {data.resume.name}
                  </h4>

                  <p
                    className="
                    mt-1
                    text-sm
                    text-gray-500
                    "
                  >
                    {(
                      data.resume.size /
                      1024 /
                      1024
                    ).toFixed(2)}
                    {" "}MB
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setData({
                    ...data,
                    resume: null,
                  })
                }
                className="
                rounded-full
                border
                border-red-200
                px-6
                py-3
                text-sm
                font-semibold
                text-red-600
                transition-all
                duration-300
                hover:bg-red-50
                "
              >
                Remove File
              </button>

            </div>

          </div>

        )}

      </div>

      {/* Cover Letter */}

      <div className="mt-16">

        <label
          className="
          mb-3
          block
          text-sm
          font-semibold
          text-[#071B3A]
          "
        >
          Cover Letter (Optional)
        </label>

        <textarea
          rows={8}
          value={data.coverLetter}
          onChange={(e)=>
            setData({
              ...data,
              coverLetter:
                e.target.value,
            })
          }
          placeholder="Tell us why you're interested in joining Ubique, what excites you about this role, and anything else you'd like our hiring team to know."
          className="
          w-full
          rounded-[28px]
          border
          border-gray-200
          bg-white
          p-6
          leading-8
          outline-none
          resize-none
          transition-all
          duration-300
          focus:border-[#155EEF]
          focus:ring-4
          focus:ring-blue-100
          "
        />

      </div>

      {/* Resume Tips */}

      <div
        className="
        mt-14
        rounded-[28px]
        border
        border-[#155EEF]/10
        bg-[#EEF4FF]
        p-8
        "
      >

        <p
          className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.28em]
          text-[#155EEF]
          "
        >
          Application Tips
        </p>

        <ul
          className="
          mt-6
          space-y-4
          text-gray-700
          leading-8
          "
        >

          <li>
            • Keep your résumé concise and
            focused on measurable impact.
          </li>

          <li>
            • Highlight technologies relevant
            to this position.
          </li>

          <li>
            • Include certifications or major
            enterprise implementations.
          </li>

          <li>
            • Tailor your cover letter to this
            specific role.
          </li>

        </ul>

      </div>

    </div>

  );

}