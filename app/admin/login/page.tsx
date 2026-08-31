import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";
import LoginForm from "@/components/admin/LoginForm";

export const metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  /* On a fresh database there is nobody to sign in as — send them to setup
     rather than showing a form that cannot succeed. Falls through to the form
     if the database is unreachable, so an outage doesn't expose setup. */
  let needsSetup = false;

  try {
    needsSetup = (await prisma.adminUser.count()) === 0;
  } catch (error) {
    console.error("[login] Could not count admins:", error);
  }

  if (needsSetup) redirect("/admin/setup");

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-navy text-2xl font-bold">
            UBIQUE<span className="text-accent">.</span>
          </p>
          <h1 className="display-4 text-navy mt-6 font-bold">
            Sign in to admin
          </h1>
          <p className="text-muted mt-3">
            Manage open roles and candidate applications.
          </p>
        </div>

        <LoginForm needsSetup={needsSetup} />
      </div>
    </div>
  );
}
