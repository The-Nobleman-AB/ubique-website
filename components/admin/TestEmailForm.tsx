"use client";

import { useActionState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { sendTestEmail } from "@/app/admin/email/actions";
import type { ActionState } from "@/lib/action-state";

type State = ActionState & { ok?: string };

export default function TestEmailForm() {
  const [state, formAction, pending] = useActionState<State, FormData>(
    sendTestEmail,
    {},
  );

  return (
    <form action={formAction} className="p-6">
      <label
        htmlFor="to"
        className="text-navy mb-2 block text-sm font-semibold"
      >
        Send a test message to
      </label>

      <input
        id="to"
        name="to"
        type="email"
        placeholder="you@ubique-systems.com"
        className="rounded-control border-line focus:border-brand text-navy w-full border bg-white px-4 py-3 transition-colors"
      />

      <p className="text-muted mt-2 text-sm">
        Leave blank to send to your own address.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="rounded-control bg-navy hover:bg-brand mt-4 inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition-colors disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 size={16} aria-hidden="true" className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send test
          </>
        )}
      </button>

      {state.ok && (
        <p
          role="status"
          className="text-accent-dark mt-4 flex items-start gap-2 text-sm leading-relaxed"
        >
          <CheckCircle2
            size={16}
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
            size={16}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />
          {state.error}
        </p>
      )}
    </form>
  );
}
