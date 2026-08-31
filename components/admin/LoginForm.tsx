"use client";

import { useActionState } from "react";
import Link from "next/link";
import { AlertCircle, Loader2, LogIn } from "lucide-react";

import { signIn } from "@/app/admin/actions";
import type { ActionState } from "@/lib/action-state";

export default function LoginForm({ needsSetup }: { needsSetup: boolean }) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    signIn,
    {},
  );

  return (
    <>
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
              <Loader2 size={17} aria-hidden="true" className="animate-spin" />
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

      {needsSetup ? (
        <p className="text-muted mt-6 text-center text-sm">
          No administrator exists yet.{" "}
          <Link
            href="/admin/setup"
            className="text-brand font-semibold underline underline-offset-2"
          >
            Create the first one
          </Link>
          .
        </p>
      ) : (
        <p className="text-muted mt-6 text-center text-sm">
          Forgotten your password? Reset it with{" "}
          <code className="bg-surface border-line rounded border px-1.5 py-0.5 text-xs">
            npm run admin:create
          </code>
        </p>
      )}
    </>
  );
}
