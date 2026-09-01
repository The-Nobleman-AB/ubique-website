"use client";

import { useActionState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Stethoscope } from "lucide-react";

import { runOAuthDiagnosis } from "@/app/admin/email/actions";
import type { ActionState } from "@/lib/action-state";

type State = ActionState & { ok?: string; detail?: string[] };

export default function OAuthDiagnostic() {
  const [state, formAction, pending] = useActionState<State, FormData>(
    runOAuthDiagnosis,
    {},
  );

  return (
    <div className="px-6 py-5">
      <p className="text-muted mb-4 text-sm leading-relaxed">
        Asks Microsoft for a token and reads what&rsquo;s inside it. This
        separates an Azure problem from an Exchange one — the two look identical
        from the send error alone.
      </p>

      <form action={formAction}>
        <button
          type="submit"
          disabled={pending}
          className="rounded-control border-line text-navy hover:bg-surface inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60"
        >
          {pending ? (
            <>
              <Loader2 size={15} aria-hidden="true" className="animate-spin" />
              Checking…
            </>
          ) : (
            <>
              <Stethoscope size={15} aria-hidden="true" />
              Check the OAuth token
            </>
          )}
        </button>
      </form>

      {state.ok && (
        <p
          role="status"
          className="text-accent-dark mt-4 flex items-start gap-2 text-sm leading-relaxed"
        >
          <CheckCircle2
            size={15}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />
          {state.ok}
        </p>
      )}

      {state.error && (
        <p
          role="alert"
          className="text-danger mt-4 flex items-start gap-2 text-sm leading-relaxed"
        >
          <AlertCircle
            size={15}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />
          {state.error}
        </p>
      )}

      {state.detail && (
        <dl className="border-line bg-surface mt-4 grid gap-1 rounded border p-4 font-mono text-xs">
          {state.detail.map((line) => (
            <div key={line} className="text-muted break-all">
              {line}
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
