"use client";

import { useState } from "react";
import { AlertTriangle, Loader2, Trash2, X } from "lucide-react";
import { useFormStatus } from "react-dom";

/**
 * Irreversible delete, behind a confirmation proportional to the damage.
 *
 * A single application asks once. A role that would take candidates with it
 * asks you to type its title first — because that delete removes people who
 * applied in good faith, and a misclick shouldn't be able to do it.
 */

export interface DangerZoneProps {
  /** Bound server action — takes no arguments by the time it gets here. */
  action: () => Promise<void>;
  /** e.g. "Delete this role" */
  buttonLabel: string;
  title: string;
  /** What exactly is about to be destroyed. Be specific and quantified. */
  consequences: string[];
  /** When set, the exact text the user must type to enable the button. */
  confirmPhrase?: string;
}

export default function DangerZone({
  action,
  buttonLabel,
  title,
  consequences,
  confirmPhrase,
}: DangerZoneProps) {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");

  const ready = !confirmPhrase || typed.trim() === confirmPhrase;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-control border-danger/30 text-danger hover:bg-danger/5 inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold transition-colors"
      >
        <Trash2 size={15} aria-hidden="true" />
        {buttonLabel}
      </button>
    );
  }

  return (
    <div
      role="alertdialog"
      aria-labelledby="danger-title"
      className="rounded-card border-danger/30 bg-danger/5 border p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={20}
            aria-hidden="true"
            className="text-danger mt-0.5 shrink-0"
          />
          <h3 id="danger-title" className="text-navy font-semibold">
            {title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setTyped("");
          }}
          aria-label="Cancel"
          className="text-muted hover:text-navy rounded-control p-1 transition-colors"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <ul className="text-muted mt-4 flex list-disc flex-col gap-1.5 pl-9 text-sm leading-relaxed">
        {consequences.map((line) => (
          <li key={line}>{line}</li>
        ))}
        <li className="text-danger font-medium">This cannot be undone.</li>
      </ul>

      <form action={action} className="mt-5 pl-9">
        {confirmPhrase && (
          <div className="mb-4">
            <label
              htmlFor="confirm-phrase"
              className="text-navy mb-2 block text-sm font-medium"
            >
              Type <span className="font-semibold">{confirmPhrase}</span> to
              confirm
            </label>
            <input
              id="confirm-phrase"
              type="text"
              value={typed}
              onChange={(event) => setTyped(event.target.value)}
              autoComplete="off"
              className="rounded-control border-line focus:border-danger text-navy w-full max-w-sm border bg-white px-4 py-2.5 transition-colors"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <DeleteButton disabled={!ready} label={buttonLabel} />

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setTyped("");
            }}
            className="rounded-control border-line text-navy inline-flex items-center border bg-white px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/60"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

/* Separate component so useFormStatus can read the enclosing form's state. */
function DeleteButton({
  disabled,
  label,
}: {
  disabled: boolean;
  label: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className="rounded-control bg-danger inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
    >
      {pending ? (
        <>
          <Loader2 size={15} aria-hidden="true" className="animate-spin" />
          Deleting…
        </>
      ) : (
        <>
          <Trash2 size={15} aria-hidden="true" />
          {label}
        </>
      )}
    </button>
  );
}
