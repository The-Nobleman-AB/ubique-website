"use client";

import { useActionState } from "react";
import { AlertCircle, KeyRound, Loader2 } from "lucide-react";

import { acceptInvite } from "@/app/admin/invite/actions";
import type { ActionState } from "@/lib/action-state";
import { cn } from "@/lib/cn";

export default function AcceptInviteForm({ token }: { token: string }) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    acceptInvite,
    {},
  );

  const err = (name: string) => state.fieldErrors?.[name];

  return (
    <form
      action={formAction}
      className="rounded-panel border-line shadow-card mt-10 border bg-white p-8"
    >
      <input type="hidden" name="token" value={token} />

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
        <div>
          <label
            htmlFor="password"
            className="text-navy mb-2 block text-sm font-semibold"
          >
            Choose a password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={12}
            className={inputClass(err("password"))}
          />
          {err("password") ? (
            <p className="text-danger mt-1.5 text-sm font-medium">
              {err("password")}
            </p>
          ) : (
            <p className="text-muted mt-1.5 text-sm">
              At least 12 characters. This guards candidate CVs — use your
              password manager.
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirm"
            className="text-navy mb-2 block text-sm font-semibold"
          >
            Confirm password
          </label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            autoComplete="new-password"
            required
            className={inputClass(err("confirm"))}
          />
          {err("confirm") && (
            <p className="text-danger mt-1.5 text-sm font-medium">
              {err("confirm")}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-control bg-navy hover:bg-brand mt-8 flex w-full items-center justify-center gap-2 py-3.5 font-semibold text-white transition-colors disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 size={17} aria-hidden="true" className="animate-spin" />
            Setting up…
          </>
        ) : (
          <>
            <KeyRound size={17} aria-hidden="true" />
            Set password and sign in
          </>
        )}
      </button>
    </form>
  );
}

function inputClass(error?: string): string {
  return cn(
    "rounded-control text-navy w-full border bg-white px-4 py-3 transition-colors",
    error ? "border-danger" : "border-line focus:border-brand",
  );
}
