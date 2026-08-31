import { AlertCircle, Crown, Mail, ShieldCheck } from "lucide-react";

import { requireOwner } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { EmptyState, Panel, formatDate } from "@/components/admin/ui";
import InviteForm from "@/components/admin/InviteForm";
import AdminRow from "@/components/admin/AdminRow";
import InviteRow from "@/components/admin/InviteRow";

export const metadata = { title: "Admin users" };
export const dynamic = "force-dynamic";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const actor = await requireOwner();
  const { error } = await searchParams;

  const [admins, invites] = await Promise.all([
    prisma.adminUser.findMany({
      orderBy: [{ role: "asc" }, { createdAt: "asc" }],
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        lastLoginAt: true,
        createdAt: true,
      },
    }),
    prisma.adminInvite.findMany({
      where: { acceptedAt: null },
      orderBy: { createdAt: "desc" },
      include: { invitedBy: { select: { name: true } } },
    }),
  ]);

  const owners = admins.filter((a) => a.role === "owner").length;

  return (
    <>
      <h1 className="display-3 text-navy font-bold">Admin users</h1>
      <p className="text-muted mt-2">
        Who can sign in, and what they can do. Only owners see this page.
      </p>

      {error && (
        <div
          role="alert"
          className="rounded-card border-danger/30 bg-danger/5 mt-6 flex items-start gap-3 border p-5"
        >
          <AlertCircle
            size={18}
            aria-hidden="true"
            className="text-danger mt-0.5 shrink-0"
          />
          <p className="text-danger text-sm leading-relaxed">{error}</p>
        </div>
      )}

      {/* ------------------------------------------------ roles explained */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border-line bg-surface border p-6">
          <p className="text-navy flex items-center gap-2.5 font-semibold">
            <Crown size={17} aria-hidden="true" className="text-accent" />
            Owner
          </p>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            Everything an editor can do, plus this page — inviting people,
            changing roles and removing accounts. There must always be at least
            one.
          </p>
        </div>

        <div className="rounded-card border-line bg-surface border p-6">
          <p className="text-navy flex items-center gap-2.5 font-semibold">
            <ShieldCheck size={17} aria-hidden="true" className="text-brand" />
            Editor
          </p>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            Roles, applications, subscribers and email — the day-to-day work.
            Can&rsquo;t manage other admins.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------ people */}

      <Panel title={`People (${admins.length})`} className="mt-8">
        <ul className="divide-line divide-y">
          {admins.map((admin) => (
            <li key={admin.id}>
              <AdminRow
                admin={{
                  id: admin.id,
                  name: admin.name,
                  email: admin.email,
                  role: admin.role,
                  lastLogin: admin.lastLoginAt
                    ? formatDate(admin.lastLoginAt)
                    : null,
                  added: formatDate(admin.createdAt),
                }}
                isSelf={admin.id === actor.id}
                isLastOwner={admin.role === "owner" && owners <= 1}
              />
            </li>
          ))}
        </ul>
      </Panel>

      {/* ------------------------------------------------ invites */}

      <Panel title={`Pending invites (${invites.length})`} className="mt-8">
        {invites.length === 0 ? (
          <EmptyState
            title="No invites outstanding"
            body="Invite someone below and you'll get a one-time link to send them."
          />
        ) : (
          <ul className="divide-line divide-y">
            {invites.map((invite) => (
              <li key={invite.id}>
                <InviteRow
                  invite={{
                    id: invite.id,
                    name: invite.name,
                    email: invite.email,
                    role: invite.role,
                    token: invite.token,
                    expiresAt: formatDate(invite.expiresAt),
                    expired: invite.expiresAt < new Date(),
                    invitedBy: invite.invitedBy.name,
                    createdAt: formatDate(invite.createdAt),
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </Panel>

      {/* ------------------------------------------------ invite form */}

      <Panel title="Invite someone" className="mt-8">
        <div className="p-6">
          <p className="text-muted mb-6 max-w-2xl text-sm leading-relaxed">
            You&rsquo;ll get a one-time link to send them however you like —
            Teams, email, in person. They set their own password, so no password
            ever passes through you.
          </p>

          <InviteForm />
        </div>
      </Panel>

      <p className="text-muted mt-8 flex items-start gap-2.5 text-sm leading-relaxed">
        <Mail size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
        Locked out entirely? <code className="mx-1">
          npm run admin:create
        </code>{" "}
        against the production database resets any password and revokes that
        account&rsquo;s sessions.
      </p>
    </>
  );
}
