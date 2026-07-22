"use client";

import { ApplicationData } from "../ApplicationWizard";

interface Step1PersonalProps {
  data: ApplicationData;
  setData: React.Dispatch<
    React.SetStateAction<ApplicationData>
  >;
}

export default function Step1Personal({
  data,
  setData,
}: Step1PersonalProps) {
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
          STEP 1
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
          Personal Information
        </h3>

        <p
          className="
          mt-6
          text-lg
          leading-8
          text-gray-600
          "
        >
          Tell us a little about yourself.
          This information helps our
          recruitment team contact you
          throughout the hiring process.
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

        {/* First Name */}

        <div>

          <label
            className="
            mb-3
            block
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            First Name *
          </label>

          <input
            type="text"
            required
            value={data.firstName}
            onChange={(e)=>
              setData({
                ...data,
                firstName:e.target.value,
              })
            }
            placeholder="John"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            text-[#071B3A]
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

        {/* Last Name */}

        <div>

          <label
            className="
            mb-3
            block
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Last Name *
          </label>

          <input
            type="text"
            required
            value={data.lastName}
            onChange={(e)=>
              setData({
                ...data,
                lastName:e.target.value,
              })
            }
            placeholder="Doe"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            text-[#071B3A]
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

        {/* Email */}

        <div>

          <label
            className="
            mb-3
            block
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Email Address *
          </label>

          <input
            type="email"
            required
            value={data.email}
            onChange={(e)=>
              setData({
                ...data,
                email:e.target.value,
              })
            }
            placeholder="john@company.com"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            text-[#071B3A]
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>

        {/* Phone */}

        <div>

          <label
            className="
            mb-3
            block
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Phone Number *
          </label>

          <input
            type="tel"
            required
            value={data.phone}
            onChange={(e)=>
              setData({
                ...data,
                phone:e.target.value,
              })
            }
            placeholder="+91 XXXXX XXXXX"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            text-[#071B3A]
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          />

        </div>
        {/* Country */}

        <div>

          <label
            className="
            mb-3
            block
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Country *
          </label>

          <select
            required
            value={data.country}
            onChange={(e) =>
              setData({
                ...data,
                country: e.target.value,
              })
            }
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            text-[#071B3A]
            outline-none
            transition-all
            duration-300
            focus:border-[#155EEF]
            focus:ring-4
            focus:ring-blue-100
            "
          >
            <option value="">
              Select Country
            </option>

            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Germany</option>
            <option>Australia</option>
            <option>Singapore</option>
            <option>United Arab Emirates</option>

          </select>

        </div>

        {/* Current Location */}

        <div>

          <label
            className="
            mb-3
            block
            text-sm
            font-semibold
            text-[#071B3A]
            "
          >
            Current Location *
          </label>

          <input
            type="text"
            required
            value={data.location}
            onChange={(e)=>
              setData({
                ...data,
                location:e.target.value,
              })
            }
            placeholder="Kolkata, India"
            className="
            h-16
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            text-[#071B3A]
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

      {/* Information Banner */}

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
          Why we ask for this
        </p>

        <p
          className="
          mt-5
          text-lg
          leading-8
          text-gray-700
          "
        >
          Your contact information is used only
          for recruitment purposes. We'll use it
          to communicate application updates,
          schedule interviews and share the next
          steps throughout the hiring process.
        </p>

      </div>

    </div>
  );
}