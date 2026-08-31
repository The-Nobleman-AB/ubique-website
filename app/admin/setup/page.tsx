import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";

import { prisma } from "@/lib/db";
import SetupForm from "@/components/admin/SetupForm";

export const metadata = {
  title: "Set up your administrator",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function SetupPage() {
  /* Once an administrator exists this page has no reason to be reachable. */
  const existing = await prisma.adminUser.count();

  if (existing > 0) redirect("/admin/login");

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-navy text-2xl font-bold">
            UBIQUE<span className="text-accent">.</span>
          </p>

          <h1 className="display-4 text-navy mt-6 font-bold">
            Create your administrator
          </h1>

          <p className="text-muted mt-3 leading-relaxed">
            This database has no admin yet. Set one up and you&rsquo;ll be
            signed straight in.
          </p>
        </div>

        <SetupForm />

        <div className="rounded-card border-line bg-surface mt-6 flex items-start gap-3 border p-5">
          <ShieldCheck
            size={18}
            aria-hidden="true"
            className="text-accent mt-0.5 shrink-0"
          />
          <p className="text-muted text-sm leading-relaxed">
            This page closes itself permanently once the first account exists.
            After that, add or reset accounts with{" "}
            <code className="border-line rounded border bg-white px-1.5 py-0.5 text-xs">
              npm run admin:create
            </code>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
