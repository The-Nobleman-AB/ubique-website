"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Loader2,
  Send,
  UploadCloud,
  X,
} from "lucide-react";

import type { Job } from "@/lib/job-types";
import { cn } from "@/lib/cn";
import {
  ACCEPTED_CV_EXTENSIONS,
  MAX_CV_BYTES,
  validateCv,
} from "@/lib/validation-constants";

/**
 * One-page application.
 *
 * Replaces the four-step wizard. Candidates apply on a phone between other
 * things — the fewer screens between "I'm interested" and "sent", the more
 * applications actually arrive. Everything optional was cut; what remains is
 * who you are, how to reach you, and your CV.
 */

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  coverNote: "",
  consent: false,
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm({ job }: { job: Job }) {
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;

  const [values, setValues] = useState(initial);
  const [cv, setCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const fileInput = useRef<HTMLInputElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  const update = (name: keyof typeof initial, value: string | boolean) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  function handleFile(file: File | null) {
    if (!file) return;

    const problem = validateCv(file);

    if (problem) {
      setErrors((current) => ({ ...current, cv: problem }));
      setCv(null);
      if (fileInput.current) fileInput.current.value = "";
      return;
    }

    setErrors((current) => {
      const next = { ...current };
      delete next.cv;
      return next;
    });
    setCv(file);
  }

  /* Start fetching the validation chunk the moment someone engages with the
     form. Filling it in takes seconds; the chunk takes a fraction of one, so
     it is invariably ready by the time they press submit. Fires once. */
  const warmedValidation = useRef(false);

  const warmValidation = () => {
    if (warmedValidation.current) return;
    warmedValidation.current = true;
    void import("@/lib/validation");
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    /* See the note in GetInTouch — zod arrives on submit, not on page load. */
    const { applicationSchema, fieldErrors } = await import("@/lib/validation");

    const parsed = applicationSchema.safeParse({ ...values, jobId: job.id });
    const next: Record<string, string> = parsed.success
      ? {}
      : fieldErrors(parsed.error);

    const cvProblem = validateCv(cv);
    if (cvProblem) next.cv = cvProblem;

    if (Object.keys(next).length > 0) {
      setErrors(next);
      setStatus("error");
      setFormError("Please check the highlighted fields.");

      const first = Object.keys(next)[0];
      document.getElementById(fieldId(first))?.focus();
      return;
    }

    setStatus("submitting");
    setErrors({});

    const body = new FormData();
    body.append("jobId", job.id);
    for (const [key, value] of Object.entries(values)) {
      body.append(key, String(value));
    }
    if (cv) body.append("cv", cv);

    try {
      const response = await fetch("/api/apply", { method: "POST", body });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrors(result.fields ?? {});
        setFormError(
          result.error ?? "We couldn't submit that. Please try again.",
        );
        setStatus("error");
        alertRef.current?.focus();
        return;
      }

      setReference(result.reference ?? null);
      setStatus("success");
    } catch {
      setFormError(
        "We couldn't reach the server. Check your connection and try again.",
      );
      setStatus("error");
      alertRef.current?.focus();
    }
  }

  /* ------------------------------------------------------------ success */

  if (status === "success") {
    return (
      <section id="application-form" className="section-y bg-surface">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="bg-accent-tint mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <CheckCircle2
              size={32}
              aria-hidden="true"
              className="text-accent"
            />
          </div>

          <h2
            tabIndex={-1}
            ref={(node) => node?.focus()}
            className="display-3 text-navy mt-8 font-bold"
          >
            Application sent
          </h2>

          <p className="text-muted mt-5 text-lg leading-relaxed">
            Thanks — we&rsquo;ve got your CV and emailed you a confirmation.
            We&rsquo;ll come back to you within five working days.
          </p>

          {reference && (
            <p className="rounded-card border-line mt-8 inline-block border bg-white px-5 py-3">
              <span className="text-muted text-sm">Your reference</span>
              <br />
              <code className="text-navy text-lg font-semibold">
                {reference}
              </code>
            </p>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/careers"
              className="rounded-control bg-navy hover:bg-brand inline-flex items-center px-6 py-3.5 font-semibold text-white transition-colors"
            >
              Browse other roles
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* --------------------------------------------------------------- form */

  const busy = status === "submitting";

  return (
    <section id="application-form" className="section-y bg-surface">
      <div className="mx-auto max-w-3xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand">Apply</p>
          <h2 className="display-2 text-navy mt-4 font-bold">
            Apply for {job.title}
          </h2>
          <p className="text-muted mt-5 text-lg leading-relaxed">
            One page, about two minutes. We only ask for what we actually need
            to have a first conversation.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          onFocusCapture={warmValidation}
          className="rounded-panel border-line mt-10 border bg-white p-6 md:p-10"
        >
          {formError && (
            <div
              ref={alertRef}
              role="alert"
              tabIndex={-1}
              className="rounded-card border-danger/30 bg-danger/5 mb-8 flex items-start gap-3 border p-5"
            >
              <AlertCircle
                size={20}
                aria-hidden="true"
                className="text-danger mt-0.5 shrink-0"
              />
              <p className="text-danger text-sm leading-relaxed">{formError}</p>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id={fieldId("firstName")}
              label="First name"
              required
              error={errors.firstName}
            >
              <input
                id={fieldId("firstName")}
                type="text"
                autoComplete="given-name"
                value={values.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className={input(errors.firstName)}
              />
            </Field>

            <Field
              id={fieldId("lastName")}
              label="Last name"
              required
              error={errors.lastName}
            >
              <input
                id={fieldId("lastName")}
                type="text"
                autoComplete="family-name"
                value={values.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className={input(errors.lastName)}
              />
            </Field>

            <Field
              id={fieldId("email")}
              label="Email"
              required
              error={errors.email}
            >
              <input
                id={fieldId("email")}
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                className={input(errors.email)}
                placeholder="you@example.com"
              />
            </Field>

            <Field
              id={fieldId("phone")}
              label="Phone"
              required
              error={errors.phone}
            >
              <input
                id={fieldId("phone")}
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={input(errors.phone)}
                placeholder="+44 20 0000 0000"
              />
            </Field>

            <Field
              id={fieldId("location")}
              label="Where you're based"
              required
              error={errors.location}
              className="sm:col-span-2"
            >
              <input
                id={fieldId("location")}
                type="text"
                autoComplete="address-level2"
                value={values.location}
                onChange={(e) => update("location", e.target.value)}
                className={input(errors.location)}
                placeholder="Munich, Germany"
              />
            </Field>

            <Field
              id={fieldId("linkedin")}
              label="LinkedIn"
              error={errors.linkedin}
              className="sm:col-span-2"
            >
              <input
                id={fieldId("linkedin")}
                type="url"
                value={values.linkedin}
                onChange={(e) => update("linkedin", e.target.value)}
                className={input(errors.linkedin)}
                placeholder="https://linkedin.com/in/…"
              />
            </Field>
          </div>

          {/* ------------------------------------------------ CV */}

          <div className="mt-8">
            <p className="text-navy mb-2 block text-sm font-semibold">
              Your CV
              <span className="text-danger ml-1" aria-hidden="true">
                *
              </span>
            </p>

            {cv ? (
              <div className="rounded-control border-accent/40 bg-accent-tint flex items-center gap-4 border p-4">
                <FileText
                  size={22}
                  aria-hidden="true"
                  className="text-accent-dark shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-navy truncate font-medium">{cv.name}</p>
                  <p className="text-muted text-sm">
                    {(cv.size / 1024).toFixed(0)} KB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCv(null);
                    if (fileInput.current) fileInput.current.value = "";
                  }}
                  className="rounded-control text-muted hover:text-navy p-2 transition-colors hover:bg-white"
                  aria-label="Remove CV"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <label
                htmlFor={fieldId("cv")}
                className={cn(
                  "rounded-control flex cursor-pointer flex-col items-center gap-2 border border-dashed p-8 text-center transition-colors",
                  errors.cv
                    ? "border-danger bg-danger/5"
                    : "border-line hover:border-brand hover:bg-brand-tint/40",
                )}
              >
                <UploadCloud
                  size={26}
                  aria-hidden="true"
                  className="text-brand"
                />
                <span className="text-navy font-medium">
                  Choose a file or drop it here
                </span>
                <span className="text-muted text-sm">
                  PDF or Word, up to {MAX_CV_BYTES / 1024 / 1024} MB
                </span>
              </label>
            )}

            <input
              ref={fileInput}
              id={fieldId("cv")}
              type="file"
              accept={ACCEPTED_CV_EXTENSIONS}
              className="sr-only"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />

            {errors.cv && (
              <p className="text-danger mt-2 text-sm font-medium" role="alert">
                {errors.cv}
              </p>
            )}
          </div>

          {/* ------------------------------------------------ optional note */}

          <div className="mt-6">
            <Field
              id={fieldId("coverNote")}
              label="Anything you'd like to add"
              error={errors.coverNote}
              hint="Optional. A line or two is plenty."
            >
              <textarea
                id={fieldId("coverNote")}
                rows={4}
                value={values.coverNote}
                onChange={(e) => update("coverNote", e.target.value)}
                className={cn(input(errors.coverNote), "resize-y")}
                placeholder="Available from October, happy to relocate…"
              />
            </Field>
          </div>

          {/* Honeypot */}
          <div aria-hidden="true" className="absolute left-[-9999px]">
            <label htmlFor={fieldId("website")}>Website</label>
            <input
              id={fieldId("website")}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>

          <div className="mt-8">
            <label
              htmlFor={fieldId("consent")}
              className="flex cursor-pointer items-start gap-3"
            >
              <input
                id={fieldId("consent")}
                type="checkbox"
                checked={values.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="border-line text-brand accent-brand mt-1 h-5 w-5 shrink-0 cursor-pointer rounded"
              />
              <span className="text-muted text-sm leading-relaxed">
                I&rsquo;m happy for Ubique Systems to process my details and CV
                for this and comparable roles, as described in the{" "}
                <Link
                  href="/legal/privacy"
                  className="text-brand font-medium underline underline-offset-2"
                >
                  privacy policy
                </Link>
                .
              </span>
            </label>

            {errors.consent && (
              <p className="text-danger mt-2 text-sm font-medium">
                {errors.consent}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={busy}
            className="rounded-control bg-accent hover:bg-accent-dark mt-8 inline-flex w-full items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {busy ? (
              <>
                <Loader2
                  size={18}
                  aria-hidden="true"
                  className="animate-spin"
                />
                Sending…
              </>
            ) : (
              <>
                <Send size={17} aria-hidden="true" />
                Submit application
              </>
            )}
          </button>

          <p aria-live="polite" className="sr-only">
            {busy ? "Submitting your application" : ""}
          </p>
        </form>
      </div>
    </section>
  );
}

/* ==================================================================== */

function input(error?: string): string {
  return cn(
    "rounded-control text-navy w-full border bg-white px-4 py-3.5 transition-colors",
    "placeholder:text-muted/60",
    error
      ? "border-danger"
      : "border-line hover:border-muted/50 focus:border-brand",
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-navy mb-2 block text-sm font-semibold"
      >
        {label}
        {required ? (
          <span className="text-danger ml-1" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="text-muted ml-2 text-xs font-normal">Optional</span>
        )}
      </label>

      {children}

      {hint && !error && <p className="text-muted mt-2 text-sm">{hint}</p>}
      {error && <p className="text-danger mt-2 text-sm font-medium">{error}</p>}
    </div>
  );
}
