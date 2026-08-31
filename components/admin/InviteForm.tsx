"use client";

import { useActionState, useState } from "react";
import { AlertCircle, Check, Copy, Loader2, UserPlus } from "lucide-react";

import { inviteAdmin, type UserActionState } from "@/app/admin/users/actions";

export default function InviteForm() {
  const [state, formAction, pending] = useActionState<
    UserActionState,
    FormData
  >(inviteAdmin, {});

  const [copied, setCopied] = useState(false);

  async function copyLink() {
    if (!state.inviteUrl) return;

    const url = `${window.location.origin}${state.inviteUrl}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this invite link:", url);
    }
  }

  return (
    <>
      <form action={formAction} className="flex flex-wrap items-end gap-4">
        <div className="min-w-[12rem] flex-1">
          <label
            htmlFor="invite-name"
            className="text-navy mb-2 block text-sm font-semibold"
          >
            Name
          </label>
          <input
            id="invite-name"
            name="name"
            type="text"
            required
            className="rounded-control border-line focus:border-brand text-navy w-full border bg-white px-4 py-3 transition-colors"
            placeholder="Priya Sharma"
          />
          {state.fieldErrors?.name && (
            <p className="text-danger mt-1.5 text-sm">
              {state.fieldErrors.name}
            </p>
          )}
        </div>

        <div className="min-w-[14rem] flex-1">
          <label
            htmlFor="invite-email"
            className="text-navy mb-2 block text-sm font-semibold"
          >
            Email
          </label>
          <input
            id="invite-email"
            name="email"
            type="email"
            required
            className="rounded-control border-line focus:border-brand text-navy w-full border bg-white px-4 py-3 transition-colors"
            placeholder="priya@ubique-systems.com"
          />
          {state.fieldErrors?.email && (
            <p className="text-danger mt-1.5 text-sm">
              {state.fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="invite-role"
            className="text-navy mb-2 block text-sm font-semibold"
          >
            Role
          </label>
          <select
            id="invite-role"
            name="role"
            defaultValue="editor"
            className="rounded-control border-line focus:border-brand text-navy cursor-pointer border bg-white px-4 py-3 transition-colors"
          >
            <option value="editor">Editor</option>
            <option value="owner">Owner</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="rounded-control bg-navy hover:bg-brand inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition-colors disabled:opacity-60"
        >
          {pending ? (
            <>
              <Loader2 size={16} aria-hidden="true" className="animate-spin" />
              Creating…
            </>
          ) : (
            <>
              <UserPlus size={16} aria-hidden="true" />
              Create invite
            </>
          )}
        </button>
      </form>

      {state.error && (
        <p
          role="alert"
          className="text-danger mt-4 flex items-start gap-2 text-sm"
        >
          <AlertCircle
            size={15}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />
          {state.error}
        </p>
      )}

      {state.ok && state.inviteUrl && (
        <div
          role="status"
          className="rounded-card border-accent/30 bg-accent-tint mt-5 border p-5"
        >
          <p className="text-navy text-sm leading-relaxed">{state.ok}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <code className="border-line text-navy min-w-0 flex-1 truncate rounded border bg-white px-3 py-2.5 text-xs">
              {state.inviteUrl}
            </code>

            <button
              type="button"
              onClick={copyLink}
              className="rounded-control bg-navy hover:bg-brand inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check size={14} aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} aria-hidden="true" />
                  Copy full link
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
