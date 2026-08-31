import Link from "next/link";
import { Crown, ShieldCheck } from "lucide-react";

import { prisma } from "@/lib/db";
import AcceptInviteForm from "@/components/admin/AcceptInviteForm";

export const metadata = {
  title: "Accept your invite",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AcceptInvitePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const invite = await prisma.adminInvite.findUnique({
    where: { token },
    select: { name: true, email: true, role: true, expiresAt: true },
  });

  if (!invite || invite.expiresAt < new Date()) {
    return (
      <Shell>
        <h1 className="display-4 text-navy mt-6 font-bold">
          This link has expired
        </h1>

        <p className="text-muted mt-3 leading-relaxed">
          Invite links last seven days and can only be used once. Ask whoever
          invited you to send a new one.
        </p>

        <Link
          href="/admin/login"
          className="text-brand mt-6 inline-block font-semibold underline-offset-4 hover:underline"
        >
          Go to sign in
        </Link>
      </Shell>
    );
  }

  const owner = invite.role === "owner";

  return (
    <Shell>
      <h1 className="display-4 text-navy mt-6 font-bold">
        Welcome, {invite.name.split(" ")[0]}
      </h1>

      <p className="text-muted mt-3 leading-relaxed">
        You&rsquo;ve been invited to the Ubique admin as{" "}
        <span className="text-navy font-semibold">{invite.email}</span>. Choose
        a password and you&rsquo;re in.
      </p>

      <p className="rounded-pill bg-surface text-muted mt-5 inline-flex items-center gap-2 px-3 py-1.5 text-sm">
        {owner ? (
          <Crown size={14} aria-hidden="true" className="text-accent" />
        ) : (
          <ShieldCheck size={14} aria-hidden="true" className="text-brand" />
        )}
        {owner
          ? "Owner — full access, including managing other admins"
          : "Editor — manage roles and applications"}
      </p>

      <div className="text-left">
        <AcceptInviteForm token={token} />
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        <p className="text-navy text-2xl font-bold">
          UBIQUE<span className="text-accent">.</span>
        </p>
        {children}
      </div>
    </div>
  );
}
