"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Search,
  MapPin,
  BriefcaseBusiness,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import {
  jobs,
  departments,
  locations,
  Job,
} from "@/data/jobs";

const JOBS_PER_PAGE = 10;

export default function JobExplorer() {

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("All");

  const [location, setLocation] =
    useState("All");

  const [sort, setSort] =
    useState("Newest");

  const [page, setPage] =
    useState(1);

  const filteredJobs = useMemo(() => {

    let result = [...jobs];

    // Search

    if (search.trim()) {

      const q = search.toLowerCase();

      result = result.filter((job) =>

        job.title.toLowerCase().includes(q) ||

        job.department
          .toLowerCase()
          .includes(q) ||

        job.location
          .toLowerCase()
          .includes(q) ||

        job.description
          .toLowerCase()
          .includes(q) ||

        job.technologies.some((tech) =>
          tech.toLowerCase().includes(q)
        )

      );

    }

    // Department

    if (department !== "All") {

      result = result.filter(
        (job) =>
          job.department === department
      );

    }

    // Location

    if (location !== "All") {

      result = result.filter(
        (job) =>
          job.location === location
      );

    }

    // Sort

    switch (sort) {

      case "Title":

        result.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        break;

      default:

        break;

    }

    return result;

  }, [
    search,
    department,
    location,
    sort,
  ]);

  const totalJobs =
    filteredJobs.length;

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        totalJobs / JOBS_PER_PAGE
      )
    );

  const paginatedJobs =
    filteredJobs.slice(
      (page - 1) * JOBS_PER_PAGE,
      page * JOBS_PER_PAGE
    );

  return (

    <section
      className="
      py-24
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

        {/* Heading */}

        <div
          className="
          max-w-4xl
          "
        >

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#12B76A]
            font-semibold
            "
          >
            EXPLORE OPPORTUNITIES
          </p>

          <h2
            className="
            mt-5
            text-5xl
            lg:text-6xl
            font-black
            tracking-[-0.04em]
            leading-[0.95]
            text-[#071B3A]
            "
          >
            Find Your
            Next Opportunity.
          </h2>

          <p
            className="
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-gray-600
            "
          >
            Search by keyword,
            department or location to
            discover opportunities
            across Ubique.
          </p>

        </div>

        {/* Search Controls */}

        <div
          className="
          mt-14
          grid
          lg:grid-cols-12
          gap-4
          "
        >

          {/* Search */}

          <div
            className="
            lg:col-span-6
            "
          >

            <div
              className="
              h-16
              rounded-2xl
              border
              border-gray-200
              flex
              items-center
              px-5
              transition-all
              focus-within:border-[#155EEF]
              "
            >

              <Search
                size={20}
                className="
                text-gray-400
                "
              />

              <input
                value={search}
                onChange={(e) => {

                  setSearch(
                    e.target.value
                  );

                  setPage(1);

                }}
                placeholder="Search by role, skill or technology..."
                className="
                ml-4
                w-full
                outline-none
                bg-transparent
                placeholder:text-gray-400
                "
              />

            </div>

          </div>

          {/* Department */}

          <div
            className="
            lg:col-span-3
            "
          >

            <div
              className="
              relative
              "
            >

              <BriefcaseBusiness
                size={18}
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-[#155EEF]
                pointer-events-none
                "
              />

              <select
                value={department}
                onChange={(e) => {

                  setDepartment(
                    e.target.value
                  );

                  setPage(1);

                }}
                className="
                h-16
                w-full
                appearance-none
                rounded-2xl
                border
                border-gray-200
                bg-white
                pl-12
                pr-12
                outline-none
                transition-all
                focus:border-[#155EEF]
                "
              >

                

                {departments.map(
                  (department) => (
                    <option
                      key={department}
                    >
                      {department}
                    </option>
                  )
                )}

              </select>

              <ChevronDown
                size={18}
                className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                pointer-events-none
                text-gray-400
                "
              />

            </div>

          </div>
          {/* Location */}

          <div
            className="
            lg:col-span-3
            "
          >

            <div
              className="
              relative
              "
            >

              <MapPin
                size={18}
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-[#155EEF]
                pointer-events-none
                "
              />

              <select
                value={location}
                onChange={(e) => {

                  setLocation(
                    e.target.value
                  );

                  setPage(1);

                }}
                className="
                h-16
                w-full
                appearance-none
                rounded-2xl
                border
                border-gray-200
                bg-white
                pl-12
                pr-12
                outline-none
                transition-all
                focus:border-[#155EEF]
                "
              >


                {locations.map(
                  (location) => (
                    <option
                      key={location}
                    >
                      {location}
                    </option>
                  )
                )}

              </select>

              <ChevronDown
                size={18}
                className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                pointer-events-none
                "
              />

            </div>

          </div>

        </div>

        {/* Results Header */}

        <div
          className="
          mt-14
          pt-8
          border-t
          border-gray-200
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          "
        >

          <div>

            <h3
              className="
              text-3xl
              font-black
              tracking-[-0.03em]
              text-[#071B3A]
              "
            >
              {totalJobs} Open Position
              {totalJobs !== 1 ? "s" : ""}
            </h3>

            <p
              className="
              mt-2
              text-gray-500
              "
            >
              {totalJobs === 0
                ? "No roles match your search."
                : `Showing ${Math.min(
                    (page - 1) * JOBS_PER_PAGE + 1,
                    totalJobs
                  )}–${Math.min(
                    page * JOBS_PER_PAGE,
                    totalJobs
                  )} of ${totalJobs}`}
            </p>

          </div>

          <div
            className="
            relative
            w-full
            lg:w-60
            "
          >

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="
              h-14
              w-full
              appearance-none
              rounded-xl
              border
              border-gray-200
              bg-white
              px-5
              pr-12
              outline-none
              transition-all
              focus:border-[#155EEF]
              "
            >

              <option>
                Newest
              </option>

              <option>
                Title
              </option>

            </select>

            <ChevronDown
              size={18}
              className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              pointer-events-none
              text-gray-400
              "
            />

          </div>

        </div>

        {/* Job List */}

        <div
          className="
          mt-10
          "
        >

          {paginatedJobs.length === 0 && (

            <div
              className="
              py-24
              text-center
              border-t
              border-gray-200
              "
            >

              <h3
                className="
                text-3xl
                font-black
                text-[#071B3A]
                "
              >
                No Positions Found
              </h3>

              <p
                className="
                mt-4
                text-lg
                text-gray-600
                "
              >
                Try changing your search
                or filter selection.
              </p>

            </div>

          )}

          {paginatedJobs.map((job: Job, index) => (
            <article
              key={job.id}
              className={`
                group
                relative
                transition-all
                duration-300
                py-10

                ${
                  index !== paginatedJobs.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }
              `}
            >

              <div
                className="
                grid
                lg:grid-cols-12
                gap-8
                items-center
                "
              >

                {/* Left */}

                <div
                  className="
                  lg:col-span-9
                  "
                >

                  <p
                    className="
                    text-sm
                    uppercase
                    tracking-[0.28em]
                    font-semibold
                    text-[#155EEF]
                    "
                  >
                    {job.department}
                  </p>

                  <h2
                    className="
                    mt-4
                    text-4xl
                    lg:text-5xl
                    font-black
                    tracking-[-0.04em]
                    text-[#071B3A]
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    "
                  >
                    {job.title}
                  </h2>

                  <div
                    className="
                    mt-6
                    flex
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-2
                    text-gray-500
                    text-[15px]
                    "
                  >

                    <span>{job.location}</span>

                    <span>•</span>

                    <span>{job.workplace}</span>

                    <span>•</span>

                    <span>{job.employmentType}</span>

                    <span>•</span>

                    <span>{job.experience}</span>

                  </div>

                </div>

                {/* Right */}

                <div
                  className="
                  lg:col-span-3
                  flex
                  lg:justify-end
                  "
                >

                  <Link
                    href={`/careers/${job.id}`}
                    className="
                    inline-flex
                    items-center
                    gap-3
                    text-lg
                    font-semibold
                    text-[#071B3A]
                    transition-all
                    duration-300
                    group-hover:text-[#155EEF]
                    "
                  >

                    View Role

                    <ArrowRight
                      size={20}
                      className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                      "
                    />

                  </Link>

                </div>

              </div>

              {/* Hover underline */}

              <div
                className="
                absolute
                left-0
                bottom-0
                h-[2px]
                w-0
                bg-[#155EEF]
                transition-all
                duration-500
                group-hover:w-full
                "
              />

            </article>

          ))}
        </div>

        {/* Pagination */}

        {totalPages > 1 && (

          <div
            className="
            mt-16
            flex
            items-center
            justify-center
            gap-3
            "
          >

            <button
              onClick={() =>
                setPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              disabled={page === 1}
              className="
              h-11
              w-11
              rounded-full
              border
              border-gray-300
              text-gray-600
              transition-all
              duration-300
              hover:border-[#155EEF]
              hover:text-[#155EEF]
              disabled:opacity-40
              disabled:cursor-not-allowed
              "
            >
              ←
            </button>

            {Array.from(
              { length: totalPages },
              (_, i) => i + 1
            ).map((pageNumber) => (

              <button
                key={pageNumber}
                onClick={() =>
                  setPage(pageNumber)
                }
                className={`
                  h-11
                  w-11
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    page === pageNumber
                      ? "bg-[#071B3A] text-white"
                      : "border border-gray-300 text-gray-600 hover:border-[#155EEF] hover:text-[#155EEF]"
                  }
                `}
              >
                {pageNumber}
              </button>

            ))}

            <button
              onClick={() =>
                setPage((prev) =>
                  Math.min(
                    prev + 1,
                    totalPages
                  )
                )
              }
              disabled={page === totalPages}
              className="
              h-11
              w-11
              rounded-full
              border
              border-gray-300
              text-gray-600
              transition-all
              duration-300
              hover:border-[#155EEF]
              hover:text-[#155EEF]
              disabled:opacity-40
              disabled:cursor-not-allowed
              "
            >
              →
            </button>

          </div>

        )}

      </div>

    </section>

  );

}