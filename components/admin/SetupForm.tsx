"use client";

import { useActionState } from "react";
import { AlertCircle, Loader2, UserPlus } from "lucide-react";

import { createFirstAdmin } from "@/app/admin/setup/actions";
import type { ActionState } from "@/lib/action-state";
import { cn } from "@/lib/cn";

export default function SetupForm() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    createFirstAdmin,
    {},
  );

  const err = (name: string) => state.fieldErrors?.[name];

  return (
    <form
      action={formAction}
      className="rounded-panel border-line shadow-card mt-10 border bg-white p-8"
    >
      {state.error && (
        <div
          role="alert"
          className="rounded-card border-danger/30 bg-danger/5 mb-6 flex items-start gap-3 border p-4"
        >
          <AlertCircle
            size={18}
            aria-hidden="true"
            className="text-danger mt-0.5 shrink-0"
          />
          <p className="text-danger text-sm leading-relaxed">{state.error}</p>
        </div>
      )}

      <div className="flex flex-col gap-5">
        <Field name="name" label="Your name" error={err("name")}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={input(err("name"))}
            placeholder="Anish Banerjee"
          />
        </Field>

        <Field name="email" label="Email" error={err("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            required
            className={input(err("email"))}
            placeholder="you@ubique-systems.com"
          />
        </Field>

        <Field
          name="password"
          label="Password"
          error={err("password")}
          hint="At least 12 characters. This guards candidate CVs — use your password manager."
        >
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={12}
            className={input(err("password"))}
          />
        </Field>

        <Field name="confirm" label="Confirm password" error={err("confirm")}>
          <input
            id="confirm"
            name="confirm"
            type="password"
            autoComplete="new-password"
            required
            className={input(err("confirm"))}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-control bg-navy hover:bg-brand mt-8 flex w-full items-center justify-center gap-2 py-3.5 font-semibold text-white transition-colors disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 size={17} aria-hidden="true" className="animate-spin" />
            Creating…
          </>
        ) : (
          <>
            <UserPlus size={17} aria-hidden="true" />
            Create administrator
          </>
        )}
      </button>
    </form>
  );
}

/* ==================================================================== */

function input(error?: string): string {
  return cn(
    "rounded-control text-navy w-full border bg-white px-4 py-3 transition-colors",
    error ? "border-danger" : "border-line focus:border-brand",
  );
}

function Field({
  name,
  label,
  hint,
  error,
  children,
}: {
  name: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-navy mb-2 block text-sm font-semibold"
      >
        {label}
      </label>

      {children}

      {hint && !error && <p className="text-muted mt-1.5 text-sm">{hint}</p>}
      {error && (
        <p className="text-danger mt-1.5 text-sm font-medium">{error}</p>
      )}
    </div>
  );
}
