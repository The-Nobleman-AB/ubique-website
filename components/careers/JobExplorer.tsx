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

import type { Job } from "@/lib/job-types";

const JOBS_PER_PAGE = 10;

/**
 * Roles come from the database via the careers page — this component only
 * filters and paginates what it is given.
 */
export default function JobExplorer({ jobs }: { jobs: Job[] }) {
  /* Filter options are derived from the live data, so a new department or
     country appears in the dropdowns the moment a role is published. */
  const departments = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.department))].sort(),
    [jobs],
  );

  const locations = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.location))].sort(),
    [jobs],
  );

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("All");

  const [location, setLocation] = useState("All");

  const [sort, setSort] = useState("Newest");

  const [page, setPage] = useState(1);

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    // Search

    if (search.trim()) {
      const q = search.toLowerCase();

      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q) ||
          job.location.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q) ||
          job.technologies.some((tech) => tech.toLowerCase().includes(q)),
      );
    }

    // Department

    if (department !== "All") {
      result = result.filter((job) => job.department === department);
    }

    // Location

    if (location !== "All") {
      result = result.filter((job) => job.location === location);
    }

    // Sort

    switch (sort) {
      case "Title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        /* Newest first — postedAt is a real Date now that roles come from
           the database. */
        result.sort(
          (a, b) =>
            new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
        );
        break;
    }

    return result;
  }, [jobs, search, department, location, sort]);

  const totalJobs = filteredJobs.length;

  const totalPages = Math.max(1, Math.ceil(totalJobs / JOBS_PER_PAGE));

  const paginatedJobs = filteredJobs.slice(
    (page - 1) * JOBS_PER_PAGE,
    page * JOBS_PER_PAGE,
  );

  return (
    <section className="section-y-sm bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="eyebrow text-accent">Explore opportunities</p>

          <h2 className="display-2 text-navy mt-4 font-bold">
            Find Your Next Opportunity.
          </h2>

          <p className="text-muted mt-8 max-w-3xl text-xl leading-relaxed">
            Search by keyword, department or location to discover opportunities
            across Ubique.
          </p>
        </div>

        {/* Search Controls */}

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Search */}

          <div className="lg:col-span-6">
            <div className="rounded-control focus-within:border-brand border-line flex h-16 items-center border px-5 transition-all">
              <Search size={20} className="text-muted/70" />

              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);

                  setPage(1);
                }}
                placeholder="Search by role, skill or technology..."
                className="placeholder:text-muted/60 ml-4 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Department */}

          <div className="lg:col-span-3">
            <div className="relative">
              <BriefcaseBusiness
                size={18}
                className="text-brand pointer-events-none absolute top-1/2 left-5 -translate-y-1/2"
              />

              <select
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);

                  setPage(1);
                }}
                className="rounded-control focus:border-brand border-line h-16 w-full appearance-none border bg-white pr-12 pl-12 transition-all outline-none"
              >
                {departments.map((department) => (
                  <option key={department}>{department}</option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="text-muted/70 pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
              />
            </div>
          </div>
          {/* Location */}

          <div className="lg:col-span-3">
            <div className="relative">
              <MapPin
                size={18}
                className="text-brand pointer-events-none absolute top-1/2 left-5 -translate-y-1/2"
              />

              <select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);

                  setPage(1);
                }}
                className="rounded-control focus:border-brand border-line h-16 w-full appearance-none border bg-white pr-12 pl-12 transition-all outline-none"
              >
                {locations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="text-muted/70 pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        {/* Results Header */}

        <div className="border-line mt-14 flex flex-col gap-6 border-t pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-navy display-4 font-bold">
              {totalJobs} Open Position
              {totalJobs !== 1 ? "s" : ""}
            </h3>

            <p className="text-muted mt-2">
              {totalJobs === 0
                ? "No roles match your search."
                : `Showing ${Math.min(
                    (page - 1) * JOBS_PER_PAGE + 1,
                    totalJobs,
                  )}–${Math.min(
                    page * JOBS_PER_PAGE,
                    totalJobs,
                  )} of ${totalJobs}`}
            </p>
          </div>

          <div className="relative w-full lg:w-60">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-control focus:border-brand border-line h-14 w-full appearance-none border bg-white px-5 pr-12 transition-all outline-none"
            >
              <option>Newest</option>

              <option>Title</option>
            </select>

            <ChevronDown
              size={18}
              className="text-muted/70 pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Job List */}

        <div className="mt-10">
          {paginatedJobs.length === 0 && (
            <div className="section-y-sm border-line border-t text-center">
              <h3 className="text-navy text-3xl font-bold">
                No Positions Found
              </h3>

              <p className="text-muted mt-4 text-lg">
                Try changing your search or filter selection.
              </p>
            </div>
          )}

          {paginatedJobs.map((job: Job, index) => (
            <article
              key={job.id}
              className={`group relative py-10 transition-all duration-200 ${
                index !== paginatedJobs.length - 1 ? "border-line border-b" : ""
              } `}
            >
              <div className="grid items-center gap-8 lg:grid-cols-12">
                {/* Left */}

                <div className="lg:col-span-9">
                  <p className="eyebrow text-brand">{job.department}</p>

                  <h2 className="display-3 text-navy mt-4 font-bold transition-all duration-200 group-hover:translate-x-2">
                    {job.title}
                  </h2>

                  <div className="text-muted mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
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

                <div className="flex lg:col-span-3 lg:justify-end">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-navy group-hover:text-brand inline-flex items-center gap-3 text-lg font-semibold transition-all duration-200"
                  >
                    View Role
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-200 group-hover:translate-x-2"
                    />
                  </Link>
                </div>
              </div>

              {/* Hover underline */}

              <div className="bg-brand absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Pagination */}

        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="hover:border-brand hover:text-brand border-line text-muted h-11 w-11 rounded-full border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`h-11 w-11 rounded-full text-sm font-semibold transition-all duration-200 ${
                    page === pageNumber
                      ? "bg-navy text-white"
                      : "hover:border-brand hover:text-brand border-line text-muted border"
                  } `}
                >
                  {pageNumber}
                </button>
              ),
            )}

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="hover:border-brand hover:text-brand border-line text-muted h-11 w-11 rounded-full border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
