"use client";

import { useActionState } from "react";
import Link from "next/link";
import { AlertCircle, Loader2, Save } from "lucide-react";

import type { ActionState } from "@/lib/action-state";
import {
  EMPLOYMENT_TYPES,
  JOB_STATUSES,
  WORKPLACES,
  type Job,
} from "@/lib/job-types";
import { cn } from "@/lib/cn";

/**
 * Create/edit form for a role.
 *
 * The three list fields are plain textareas, one item per line — recruiters
 * paste from a job spec, and a repeater UI would only get in the way.
 */
export default function JobForm({
  job,
  action,
  submitLabel,
}: {
  job?: Job;
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    action,
    {},
  );

  const err = (name: string) => state.fieldErrors?.[name];

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-6">
      {state.error && (
        <div
          role="alert"
          className="rounded-card border-danger/30 bg-danger/5 flex items-start gap-3 border p-5"
        >
          <AlertCircle
            size={18}
            aria-hidden="true"
            className="text-danger mt-0.5 shrink-0"
          />
          <p className="text-danger text-sm">{state.error}</p>
        </div>
      )}

      {/* ------------------------------------------------ the basics */}

      <fieldset className="rounded-card border-line border bg-white p-6 md:p-8">
        <legend className="text-navy px-2 font-semibold">The role</legend>

        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <Field
            name="title"
            label="Job title"
            defaultValue={job?.title}
            error={err("title")}
            required
            className="md:col-span-2"
            placeholder="Senior SAP Consultant"
          />

          <Field
            name="department"
            label="Department / practice"
            defaultValue={job?.department}
            error={err("department")}
            required
            placeholder="Enterprise Applications"
          />

          <Field
            name="location"
            label="Location"
            defaultValue={job?.location}
            error={err("location")}
            required
            placeholder="Germany"
            hint="Country pages match roles on this, so use the country name."
          />

          <Select
            name="employmentType"
            label="Employment type"
            defaultValue={job?.employmentType ?? "Full Time"}
            options={[...EMPLOYMENT_TYPES]}
          />

          <Select
            name="workplace"
            label="Workplace"
            defaultValue={job?.workplace ?? "Hybrid"}
            options={[...WORKPLACES]}
          />

          <Field
            name="experience"
            label="Experience required"
            defaultValue={job?.experience}
            error={err("experience")}
            required
            placeholder="6+ Years"
          />

          <Field
            name="validThrough"
            label="Closes on"
            type="date"
            defaultValue={
              job?.validThrough
                ? new Date(job.validThrough).toISOString().slice(0, 10)
                : ""
            }
            hint="Google de-lists the role after this date."
          />
        </div>
      </fieldset>

      {/* ------------------------------------------------ the content */}

      <fieldset className="rounded-card border-line border bg-white p-6 md:p-8">
        <legend className="text-navy px-2 font-semibold">The detail</legend>

        <div className="mt-4 flex flex-col gap-5">
          <Area
            name="description"
            label="Summary"
            defaultValue={job?.description}
            error={err("description")}
            required
            rows={4}
            hint="The first thing a candidate reads, and what search engines show."
          />

          <Area
            name="responsibilities"
            label="Responsibilities"
            defaultValue={job?.responsibilities.join("\n")}
            rows={6}
            hint="One per line."
          />

          <Area
            name="requirements"
            label="Requirements"
            defaultValue={job?.requirements.join("\n")}
            rows={6}
            hint="One per line."
          />

          <Area
            name="technologies"
            label="Technologies"
            defaultValue={job?.technologies.join("\n")}
            rows={5}
            hint="One per line — shown as tags on the role page."
          />
        </div>
      </fieldset>

      {/* ------------------------------------------------ publishing */}

      <fieldset className="rounded-card border-line border bg-white p-6 md:p-8">
        <legend className="text-navy px-2 font-semibold">Publishing</legend>

        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <Select
            name="status"
            label="Status"
            defaultValue={job?.status ?? "DRAFT"}
            options={JOB_STATUSES}
            labels={{
              DRAFT: "Draft — not visible on the site",
              OPEN: "Open — live and accepting applications",
              CLOSED: "Closed — page stays up, applications off",
            }}
          />

          {job && (
            <div className="text-muted self-end text-sm">
              <p>
                URL:{" "}
                <code className="bg-surface border-line rounded border px-1.5 py-0.5 text-xs">
                  /careers/{job.slug}
                </code>
              </p>
              {job.status !== "DRAFT" && (
                <p className="mt-1.5 text-xs">
                  The URL stays fixed once published, so existing links keep
                  working.
                </p>
              )}
            </div>
          )}
        </div>
      </fieldset>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors disabled:opacity-60"
        >
          {pending ? (
            <>
              <Loader2 size={17} aria-hidden="true" className="animate-spin" />
              Saving…
            </>
          ) : (
            <>
              <Save size={17} aria-hidden="true" />
              {submitLabel}
            </>
          )}
        </button>

        <Link
          href="/admin/jobs"
          className="rounded-control border-line text-navy hover:bg-surface inline-flex items-center border px-6 py-3.5 font-semibold transition-colors"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

/* ==================================================================== */

const inputClass = (hasError?: string) =>
  cn(
    "rounded-control text-navy w-full border bg-white px-4 py-3 transition-colors",
    hasError ? "border-danger" : "border-line focus:border-brand",
  );

function Shell({
  name,
  label,
  hint,
  error,
  required,
  className,
  children,
}: {
  name: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-navy mb-2 block text-sm font-semibold"
      >
        {label}
        {required && (
          <span className="text-danger ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}

      {hint && !error && (
        <p id={`${name}-hint`} className="text-muted mt-1.5 text-sm">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${name}-error`}
          className="text-danger mt-1.5 text-sm font-medium"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  defaultValue,
  placeholder,
  hint,
  error,
  required,
  className,
}: {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <Shell {...{ name, label, hint, error, required, className }}>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : hint ? `${name}-hint` : undefined
        }
        className={inputClass(error)}
      />
    </Shell>
  );
}

function Area({
  name,
  label,
  defaultValue,
  rows = 4,
  hint,
  error,
  required,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  rows?: number;
  hint?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <Shell {...{ name, label, hint, error, required }}>
      <textarea
        id={name}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : hint ? `${name}-hint` : undefined
        }
        className={cn(inputClass(error), "resize-y")}
      />
    </Shell>
  );
}

function Select({
  name,
  label,
  defaultValue,
  options,
  labels,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  options: readonly string[];
  labels?: Record<string, string>;
}) {
  return (
    <Shell name={name} label={label}>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={cn(inputClass(), "cursor-pointer")}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {labels?.[option] ?? option}
          </option>
        ))}
      </select>
    </Shell>
  );
}
