"use client";

import { useState } from "react";
import { Crown, ShieldCheck } from "lucide-react";

import { removeAdmin, setAdminRole } from "@/app/admin/users/actions";
import DangerZone from "./DangerZone";
import { cn } from "@/lib/cn";

export interface AdminSummary {
  id: string;
  name: string;
  email: string;
  role: string;
  /* Dates arrive preformatted. Formatting them here would render once on the
     server in UTC and again in the viewer's timezone, and React would flag the
     mismatch. */
  lastLogin: string | null;
  added: string;
}

export default function AdminRow({
  admin,
  isSelf,
  isLastOwner,
}: {
  admin: AdminSummary;
  isSelf: boolean;
  isLastOwner: boolean;
}) {
  const [confirming, setConfirming] = useState(false);

  const changeRole = setAdminRole.bind(null, admin.id);
  const remove = removeAdmin.bind(null, admin.id);

  const owner = admin.role === "owner";

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4 px-6 py-5">
      <div className="min-w-0 flex-1">
        <p className="text-navy flex flex-wrap items-center gap-2 font-semibold">
          {admin.name}
          {isSelf && (
            <span className="rounded-pill bg-brand-tint text-brand px-2 py-0.5 text-xs font-medium">
              You
            </span>
          )}
        </p>
        <p className="text-muted mt-0.5 truncate text-sm">{admin.email}</p>
        <p className="text-muted/70 mt-1 text-xs">
          {admin.lastLogin
            ? `Last signed in ${admin.lastLogin}`
            : `Added ${admin.added} · never signed in`}
        </p>
      </div>

      {/* --- role --- */}

      <form action={changeRole} className="flex items-center gap-2">
        <span
          className={cn(
            "rounded-pill inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase",
            owner ? "bg-accent-tint text-accent-dark" : "bg-surface text-muted",
          )}
        >
          {owner ? (
            <Crown size={12} aria-hidden="true" />
          ) : (
            <ShieldCheck size={12} aria-hidden="true" />
          )}
          {admin.role}
        </span>

        <label htmlFor={`role-${admin.id}`} className="sr-only">
          Role for {admin.name}
        </label>

        <select
          id={`role-${admin.id}`}
          name="role"
          defaultValue={admin.role}
          disabled={isLastOwner}
          className="rounded-control border-line focus:border-brand text-navy cursor-pointer border bg-white px-3 py-2 text-sm capitalize transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="owner">Owner</option>
          <option value="editor">Editor</option>
        </select>

        <button
          type="submit"
          disabled={isLastOwner}
          className="rounded-control border-line text-navy hover:bg-surface border px-3 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          Save
        </button>
      </form>

      {/* --- remove --- */}

      <div className="min-w-[9rem]">
        {isSelf ? (
          <p className="text-muted text-xs leading-relaxed">
            Another owner has to remove your account.
          </p>
        ) : isLastOwner ? (
          <p className="text-muted text-xs leading-relaxed">
            The last owner can&rsquo;t be removed.
          </p>
        ) : confirming ? (
          <DangerZone
            action={remove}
            buttonLabel="Remove"
            title={`Remove ${admin.name}?`}
            consequences={[
              "They'll be signed out immediately and won't be able to sign back in.",
              "Notes they wrote stay on the applications, shown as “Removed user”.",
            ]}
          />
        ) : (
          <button
            type="button"
            onClick={() => setConfirming(true)}
            className="rounded-control border-danger/30 text-danger hover:bg-danger/5 border px-3 py-2 text-sm font-semibold transition-colors"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
