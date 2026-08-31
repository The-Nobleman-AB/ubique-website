import { NextResponse, type NextRequest } from "next/server";

import { SESSION_COOKIE } from "@/lib/session-cookie";

/**
 * Gate /admin at the edge.
 *
 * This only checks that a session cookie is present — it can't hit the
 * database from middleware. Real verification happens in requireUser() on
 * every admin page and server action; this just avoids rendering the shell
 * for someone with no cookie at all.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* Both of these have to work before a session can exist. Each guards itself:
     setup closes once an admin exists, login needs valid credentials. */
  if (pathname === "/admin/login" || pathname === "/admin/setup") {
    return NextResponse.next();
  }

  const hasCookie = request.cookies.has(SESSION_COOKIE);

  if (!hasCookie) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
