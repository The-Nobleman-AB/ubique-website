"use client";

import { useActionState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  HardDriveDownload,
  Loader2,
} from "lucide-react";

import { testStorage } from "@/app/admin/system/actions";
import type { ActionState } from "@/lib/action-state";

type State = ActionState & { ok?: string };

export default function TestStorageButton() {
  const [state, formAction, pending] = useActionState<State, FormData>(
    testStorage,
    {},
  );

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={pending}
        className="rounded-control border-line text-navy hover:bg-surface inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 size={15} aria-hidden="true" className="animate-spin" />
            Testing…
          </>
        ) : (
          <>
            <HardDriveDownload size={15} aria-hidden="true" />
            Test an upload
          </>
        )}
      </button>

      {state.ok && (
        <p
          role="status"
          className="text-accent-dark mt-3 flex items-start gap-2 text-sm leading-relaxed"
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
          className="text-danger mt-3 flex items-start gap-2 text-sm leading-relaxed"
        >
          <AlertCircle
            size={15}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />
          {state.error}
        </p>
      )}
    </form>
  );
}
