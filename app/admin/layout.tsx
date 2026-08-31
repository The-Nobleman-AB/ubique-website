import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  LayoutDashboard,
  LogOut,
  Mail,
  Send,
  ServerCog,
  Users,
} from "lucide-react";

import { getCurrentUser } from "@/lib/auth";
import { signOut } from "./actions";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | Ubique Admin" },
  robots: { index: false, follow: false },
};

const nav = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Roles", href: "/admin/jobs", icon: Briefcase },
  { name: "Applications", href: "/admin/applications", icon: Users },
  { name: "Subscribers", href: "/admin/subscribers", icon: Send },
  { name: "Email", href: "/admin/email", icon: Mail },
  { name: "System", href: "/admin/system", icon: ServerCog },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  /* The login page renders inside this layout too, so the chrome only appears
     once there's someone signed in. */
  if (!user) {
    return <div className="bg-surface min-h-screen">{children}</div>;
  }

  return (
    <div className="bg-surface min-h-screen">
      <header className="bg-navy sticky top-0 z-30" data-surface="dark">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4">
          <Link href="/admin" className="text-lg font-bold text-white">
            UBIQUE<span className="text-accent">.</span>
            <span className="ml-2 text-sm font-normal text-white/50">
              Admin
            </span>
          </Link>

          <nav aria-label="Admin" className="flex-1">
            <ul className="flex flex-wrap gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-control flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <item.icon size={16} aria-hidden="true" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
            >
              View site
            </Link>

            <span className="hidden text-sm text-white/50 sm:inline">
              {user.name}
            </span>

            <form action={signOut}>
              <button
                type="submit"
                className="rounded-control flex items-center gap-2 border border-white/20 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <LogOut size={15} aria-hidden="true" />
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  );
}
