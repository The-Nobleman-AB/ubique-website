"use client";

import { useState } from "react";
import { Check, Copy, Clock } from "lucide-react";

import { revokeInvite } from "@/app/admin/users/actions";

export interface PendingInvite {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
  /** Preformatted on the server — see the note in AdminRow. */
  expiresAt: string;
  expired: boolean;
  invitedBy: string;
  createdAt: string;
}

export default function InviteRow({ invite }: { invite: PendingInvite }) {
  const [copied, setCopied] = useState(false);

  const revoke = revokeInvite.bind(null, invite.id);

  async function copyLink() {
    const url = `${window.location.origin}/admin/invite/${invite.token}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this invite link:", url);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-6 py-5">
      <div className="min-w-0 flex-1">
        <p className="text-navy font-semibold">{invite.name}</p>
        <p className="text-muted mt-0.5 truncate text-sm">
          {invite.email} · invited as {invite.role} by {invite.invitedBy}
        </p>
        <p className="text-muted/70 mt-1 text-xs">
          Sent {invite.createdAt} ·{" "}
          {invite.expired
            ? `expired ${invite.expiresAt}`
            : `expires ${invite.expiresAt}`}
        </p>
      </div>

      <span
        className={`rounded-pill inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold ${
          invite.expired ? "bg-danger/10 text-danger" : "bg-warn/10 text-warn"
        }`}
      >
        <Clock size={12} aria-hidden="true" />
        {invite.expired ? "Expired" : "Pending"}
      </span>

      {!invite.expired && (
        <button
          type="button"
          onClick={copyLink}
          className="rounded-control border-line text-navy hover:bg-surface inline-flex items-center gap-2 border px-3 py-2 text-sm font-semibold transition-colors"
        >
          {copied ? (
            <>
              <Check size={14} aria-hidden="true" className="text-accent" />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} aria-hidden="true" />
              Copy link
            </>
          )}
        </button>
      )}

      <form action={revoke}>
        <button
          type="submit"
          className="rounded-control border-danger/30 text-danger hover:bg-danger/5 border px-3 py-2 text-sm font-semibold transition-colors"
        >
          Revoke
        </button>
      </form>
    </div>
  );
}
