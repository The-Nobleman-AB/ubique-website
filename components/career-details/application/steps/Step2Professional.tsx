"use client";

import { ApplicationData } from "../ApplicationWizard";

interface Step2ProfessionalProps {
  data: ApplicationData;
  setData: React.Dispatch<
    React.SetStateAction<ApplicationData>
  >;
}

export default function Step2Professional({
  data,
  setData,
}: Step2ProfessionalProps) {
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
          STEP 2
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
          Professional Background
        </h3>

        <p
          className="
          mt-6
          text-lg
          leading-8
          text-gray-600
          "
        >
          Help us understand your professional
          experience and where you are in your
          career journey.
        </p>

      </div>

      <div
        className="
        mt-14
        grid
        md:grid-cols-2
        gap-7
        "
      >

        {/* Current Company */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Current Company
          </label>

          <input
            type="text"
            value={data.company}
            onChange={(e)=>
              setData({
                ...data,
                company:e.target.value,
              })
            }
            placeholder="Example Pvt Ltd"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

        {/* Current Designation */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Current Designation
          </label>

          <input
            type="text"
            value={data.designation}
            onChange={(e)=>
              setData({
                ...data,
                designation:e.target.value,
              })
            }
            placeholder="Senior Consultant"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

        {/* Experience */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Years of Experience *
          </label>

          <select
            required
            value={data.experience}
            onChange={(e)=>
              setData({
                ...data,
                experience:e.target.value,
              })
            }
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          >

            <option value="">
              Select Experience
            </option>

            <option>Fresher</option>
            <option>0–2 Years</option>
            <option>2–5 Years</option>
            <option>5–8 Years</option>
            <option>8–12 Years</option>
            <option>12+ Years</option>

          </select>

        </div>

        {/* Qualification */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Highest Qualification *
          </label>

          <select
            required
            value={data.qualification}
            onChange={(e)=>
              setData({
                ...data,
                qualification:e.target.value,
              })
            }
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          >

            <option value="">
              Select Qualification
            </option>

            <option>High School</option>
            <option>Diploma</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>MBA</option>
            <option>Doctorate (PhD)</option>

          </select>

        </div>
        {/* Notice Period */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Notice Period
          </label>

          <select
            value={data.noticePeriod}
            onChange={(e)=>
              setData({
                ...data,
                noticePeriod:e.target.value,
              })
            }
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          >

            <option value="">
              Select Notice Period
            </option>

            <option>Immediate</option>

            <option>15 Days</option>

            <option>30 Days</option>

            <option>45 Days</option>

            <option>60 Days</option>

            <option>90 Days</option>

          </select>

        </div>

        {/* LinkedIn */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            LinkedIn Profile
          </label>

          <input
            type="url"
            value={data.linkedin}
            onChange={(e)=>
              setData({
                ...data,
                linkedin:e.target.value,
              })
            }
            placeholder="https://linkedin.com/in/username"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

        {/* GitHub */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            GitHub Profile
          </label>

          <input
            type="url"
            value={data.github}
            onChange={(e)=>
              setData({
                ...data,
                github:e.target.value,
              })
            }
            placeholder="https://github.com/username"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

        {/* Portfolio */}

        <div>

          <label
            className="
            block
            mb-3
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Portfolio / Website
          </label>

          <input
            type="url"
            value={data.portfolio}
            onChange={(e)=>
              setData({
                ...data,
                portfolio:e.target.value,
              })
            }
            placeholder="https://yourportfolio.com"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

      </div>

      {/* Information Panel */}

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
          Professional Profile
        </p>

        <p
          className="
          mt-5
          text-lg
          leading-8
          text-gray-700
          "
        >
          We review every application holistically.
          Even if you don't meet every preferred
          qualification, we encourage you to apply.
          Your experience, potential and ability to
          learn matter just as much as your résumé.
        </p>

      </div>

    </div>

  );

}