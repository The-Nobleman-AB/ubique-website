"use client";

import { useActionState } from "react";
import { AlertCircle, Loader2, LogIn } from "lucide-react";

import { signIn } from "../actions";
import type { ActionState } from "@/lib/action-state";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    signIn,
    {},
  );

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-navy text-2xl font-bold">
            UBIQUE<span className="text-accent">.</span>
          </p>
          <h1 className="display-4 text-navy mt-6 font-bold">
            Sign in to admin
          </h1>
          <p className="text-muted mt-3">
            Manage open roles and candidate applications.
          </p>
        </div>

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
              <p className="text-danger text-sm">{state.error}</p>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="email"
                className="text-navy mb-2 block text-sm font-semibold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                className="rounded-control border-line focus:border-brand text-navy w-full border bg-white px-4 py-3 transition-colors"
                placeholder="you@ubique-systems.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-navy mb-2 block text-sm font-semibold"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-control border-line focus:border-brand text-navy w-full border bg-white px-4 py-3 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={pending}
            className="rounded-control bg-navy hover:bg-brand mt-8 flex w-full items-center justify-center gap-2 py-3.5 font-semibold text-white transition-colors disabled:opacity-60"
          >
            {pending ? (
              <>
                <Loader2
                  size={17}
                  aria-hidden="true"
                  className="animate-spin"
                />
                Signing in…
              </>
            ) : (
              <>
                <LogIn size={17} aria-hidden="true" />
                Sign in
              </>
            )}
          </button>
        </form>

        <p className="text-muted mt-6 text-center text-sm">
          No account yet? Create one with{" "}
          <code className="bg-surface border-line rounded border px-1.5 py-0.5 text-xs">
            npm run admin:create
          </code>
        </p>
      </div>
    </div>
  );
}
