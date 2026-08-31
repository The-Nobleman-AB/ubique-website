import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

import { prisma } from "@/lib/db";
import { SESSION_COOKIE } from "@/lib/session-cookie";

/**
 * Admin authentication.
 *
 * Password hashing uses scrypt from node:crypto — no dependency, and it is a
 * memory-hard KDF, which is what you want for passwords. Sessions are opaque
 * random tokens stored in the database, so signing out actually revokes
 * access (a stateless JWT could not).
 */

const scryptAsync = promisify(scrypt);

const SCRYPT_KEYLEN = 64;

const SESSION_DAYS = 7;

/* ------------------------------------------------------------- passwords */

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derived = (await scryptAsync(password, salt, SCRYPT_KEYLEN)) as Buffer;
  return `scrypt:${salt}:${derived.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const [scheme, salt, hash] = stored.split(":");

  if (scheme !== "scrypt" || !salt || !hash) return false;

  const derived = (await scryptAsync(password, salt, SCRYPT_KEYLEN)) as Buffer;
  const expected = Buffer.from(hash, "hex");

  /* Length check first — timingSafeEqual throws on a mismatch. */
  if (derived.length !== expected.length) return false;

  return timingSafeEqual(derived, expected);
}

/* -------------------------------------------------------------- sessions */

export async function createSession(userId: string): Promise<void> {
  const token = randomBytes(32).toString("base64url");

  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  await prisma.session.create({ data: { token, userId, expiresAt } });

  await prisma.adminUser.update({
    where: { id: userId },
    data: { lastLoginAt: new Date() },
  });

  const store = await cookies();

  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;

  if (token) {
    await prisma.session.deleteMany({ where: { token } });
  }

  store.delete(SESSION_COOKIE);
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

/**
 * The signed-in user, or null. Wrapped in React `cache` so several server
 * components on one page share a single query.
 */
export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;

  if (!token) return null;

  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session) return null;

  if (session.expiresAt < new Date()) {
    /* Expired — clean it up rather than leaving rows to accumulate. */
    await prisma.session.deleteMany({ where: { token } });
    return null;
  }

  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
    role: session.user.role,
  };
});

/** Redirects to the login page when there's no session. Use at the top of admin pages. */
export async function requireUser(): Promise<SessionUser> {
  const user = await getCurrentUser();

  if (!user) redirect("/admin/login");

  return user;
}

/** Remove expired rows. Called opportunistically on login. */
export async function sweepSessions(): Promise<void> {
  await prisma.session.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });
}

export { SESSION_COOKIE };
