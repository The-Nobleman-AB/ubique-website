"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import { regionalInboxes } from "@/data/offices";
import { cn } from "@/lib/cn";
import { enquiryTypeLabels, enquiryTypes } from "@/lib/validation-constants";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  enquiryType: "",
  message: "",
  consent: false,
  website: "",
};

export default function GetInTouch() {
  const formId = useId();
  const fieldId = (name: string) => `${formId}-${name}`;

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const alertRef = useRef<HTMLDivElement>(null);

  const update = (
    name: keyof typeof initialValues,
    value: string | boolean,
  ) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

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

    /* Loaded here rather than imported at the top: zod is ~70 KB gzipped and
       nobody needs it until they submit. By this point the fetch is warm —
       see the prefetch on first interaction below. */
    const { contactSchema, fieldErrors } = await import("@/lib/validation");

    // Validate with the same schema the API uses, so the messages match.
    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const next = fieldErrors(parsed.error);
      setErrors(next);
      setStatus("error");
      setFormError("Please check the highlighted fields.");

      const firstField = Object.keys(next)[0];
      document.getElementById(fieldId(firstField))?.focus();
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrors(result.fields ?? {});
        setFormError(
          result.error ?? "We couldn't send that message. Please try again.",
        );
        setStatus("error");
        alertRef.current?.focus();
        return;
      }

      setValues(initialValues);
      setStatus("success");
    } catch {
      setFormError(
        "We couldn't reach the server. Check your connection and try again.",
      );
      setStatus("error");
      alertRef.current?.focus();
    }
  }

  /* ---------------------------------------------------------- success */

  if (status === "success") {
    return (
      <section id="contact-form" className="section-y-lg bg-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="bg-accent-tint mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <CheckCircle2
              size={32}
              aria-hidden="true"
              className="text-accent"
            />
          </div>

          <h2
            className="display-3 text-navy mt-8 font-bold"
            tabIndex={-1}
            ref={(node) => node?.focus()}
          >
            Thanks — that&rsquo;s with us
          </h2>

          <p className="text-muted mt-5 text-lg leading-relaxed">
            We&rsquo;ve sent your enquiry to the right team and copied you in.
            You&rsquo;ll hear from a specialist within one working day.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="rounded-control bg-navy hover:bg-brand inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors"
            >
              Explore our services
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="rounded-control border-line text-navy hover:bg-surface inline-flex items-center border px-6 py-3.5 font-semibold transition-colors"
            >
              Send another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ------------------------------------------------------------- form */

  const busy = status === "submitting";

  return (
    <section id="contact-form" className="section-y-lg bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">Get in touch</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Tell us about your business
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-muted text-lg leading-relaxed">
              Every conversation starts with understanding what you&rsquo;re
              trying to achieve. Fill this in and we&rsquo;ll put you with the
              specialist who knows your market — not a general enquiries queue.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* ------------------------------------------------ form */}

          <div className="lg:col-span-8">
            <form
              noValidate
              onSubmit={handleSubmit}
              onFocusCapture={warmValidation}
              className="rounded-panel border-line bg-surface border p-7 md:p-10"
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
                  <p className="text-danger text-sm leading-relaxed">
                    {formError}
                  </p>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  id={fieldId("name")}
                  label="Full name"
                  required
                  error={errors.name}
                >
                  <input
                    id={fieldId("name")}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => update("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? `${fieldId("name")}-error` : undefined
                    }
                    className={inputClass(Boolean(errors.name))}
                    placeholder="Your name"
                  />
                </Field>

                <Field
                  id={fieldId("email")}
                  label="Work email"
                  required
                  error={errors.email}
                >
                  <input
                    id={fieldId("email")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(event) => update("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? `${fieldId("email")}-error` : undefined
                    }
                    className={inputClass(Boolean(errors.email))}
                    placeholder="you@company.com"
                  />
                </Field>

                <Field
                  id={fieldId("company")}
                  label="Company"
                  error={errors.company}
                >
                  <input
                    id={fieldId("company")}
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={values.company}
                    onChange={(event) => update("company", event.target.value)}
                    className={inputClass(Boolean(errors.company))}
                    placeholder="Company name"
                  />
                </Field>

                <Field id={fieldId("phone")} label="Phone" error={errors.phone}>
                  <input
                    id={fieldId("phone")}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? `${fieldId("phone")}-error` : undefined
                    }
                    className={inputClass(Boolean(errors.phone))}
                    placeholder="+44 20 0000 0000"
                  />
                </Field>
              </div>

              <div className="mt-6">
                <Field
                  id={fieldId("enquiryType")}
                  label="What's this about?"
                  required
                  error={errors.enquiryType}
                >
                  <select
                    id={fieldId("enquiryType")}
                    name="enquiryType"
                    value={values.enquiryType}
                    onChange={(event) =>
                      update("enquiryType", event.target.value)
                    }
                    aria-invalid={Boolean(errors.enquiryType)}
                    aria-describedby={
                      errors.enquiryType
                        ? `${fieldId("enquiryType")}-error`
                        : undefined
                    }
                    className={cn(
                      inputClass(Boolean(errors.enquiryType)),
                      "cursor-pointer",
                    )}
                  >
                    <option value="">Please choose…</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {enquiryTypeLabels[type]}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-6">
                <Field
                  id={fieldId("message")}
                  label="How can we help?"
                  required
                  error={errors.message}
                  hint="The more specific you are about the role, skills or programme, the more useful our first reply will be."
                >
                  <textarea
                    id={fieldId("message")}
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={(event) => update("message", event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={cn(
                      `${fieldId("message")}-hint`,
                      errors.message && `${fieldId("message")}-error`,
                    )}
                    className={cn(
                      inputClass(Boolean(errors.message)),
                      "resize-y",
                    )}
                    placeholder="Tell us about the role, the programme or the problem…"
                  />
                </Field>
              </div>

              {/* Honeypot — hidden from people, irresistible to bots. */}
              <div aria-hidden="true" className="absolute left-[-9999px]">
                <label htmlFor={fieldId("website")}>Website</label>
                <input
                  id={fieldId("website")}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={(event) => update("website", event.target.value)}
                />
              </div>

              <div className="mt-8">
                <label
                  htmlFor={fieldId("consent")}
                  className="flex cursor-pointer items-start gap-3"
                >
                  <input
                    id={fieldId("consent")}
                    name="consent"
                    type="checkbox"
                    checked={values.consent}
                    onChange={(event) =>
                      update("consent", event.target.checked)
                    }
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? `${fieldId("consent")}-error` : undefined
                    }
                    className="border-line text-brand accent-brand mt-1 h-5 w-5 shrink-0 cursor-pointer rounded"
                  />

                  <span className="text-muted text-sm leading-relaxed">
                    I&rsquo;m happy for Ubique Systems to use these details to
                    respond to my enquiry, as described in the{" "}
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
                  <p
                    id={`${fieldId("consent")}-error`}
                    className="text-danger mt-2 text-sm font-medium"
                  >
                    {errors.consent}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={busy}
                className="rounded-control bg-navy hover:bg-brand mt-8 inline-flex w-full items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
                    Send enquiry
                  </>
                )}
              </button>

              <p aria-live="polite" className="sr-only">
                {busy ? "Sending your enquiry" : ""}
              </p>
            </form>
          </div>

          {/* ------------------------------------------------ aside */}

          <aside className="lg:col-span-4">
            <div
              className="rounded-panel bg-navy p-8 text-white"
              data-surface="dark"
            >
              <h3 className="text-lg font-semibold">
                Prefer to email a team directly?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Every region has its own inbox and its own consultants.
              </p>

              <ul className="mt-7 flex flex-col gap-4">
                {regionalInboxes.map((inbox) => (
                  <li key={inbox.email}>
                    <p className="text-xs font-medium tracking-wider text-white/50 uppercase">
                      {inbox.label}
                    </p>
                    <a
                      href={`mailto:${inbox.email}`}
                      className="text-sm text-white underline-offset-4 hover:underline"
                    >
                      {inbox.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border-line bg-surface mt-6 border p-7">
              <h3 className="text-navy font-semibold">Looking for a job?</h3>
              <p className="text-muted mt-2.5 text-sm leading-relaxed">
                Applications go through our careers page so they reach the right
                consultant with your CV attached.
              </p>
              <Link
                href="/careers"
                className="text-brand mt-4 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
              >
                Browse open roles
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================== */

function inputClass(hasError: boolean): string {
  return cn(
    "w-full rounded-control border bg-white px-4 py-3.5 text-navy transition-colors",
    "placeholder:text-muted/60",
    hasError
      ? "border-danger focus:border-danger"
      : "border-line hover:border-muted/50 focus:border-brand",
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-navy mb-2 block text-sm font-semibold"
      >
        {label}
        {required && (
          <span className="text-danger ml-1" aria-hidden="true">
            *
          </span>
        )}
        {!required && (
          <span className="text-muted ml-2 text-xs font-normal">Optional</span>
        )}
      </label>

      {children}

      {hint && (
        <p id={`${id}-hint`} className="text-muted mt-2 text-sm">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="text-danger mt-2 text-sm font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
