import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "@/lib/generated/prisma";

/**
 * Prisma client singleton.
 *
 * Postgres, because the app runs on Vercel: its filesystem is read-only and
 * wiped between invocations, so a SQLite file can't be written at all — admin
 * sessions, job posting and applications would every one of them fail.
 *
 * Prisma 7 takes a driver adapter rather than reading the URL from the schema.
 * Neon and Vercel Postgres both speak the standard protocol, so `pg` works
 * against either with no code change.
 *
 * The globalThis cache stops `next dev` opening a new pool on every hot reload.
 */

function createClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    /* Better a clear message than a driver-level failure three frames deep. */
    throw new Error(
      "DATABASE_URL is not set. Point it at a Postgres instance — see README.",
    );
  }

  const adapter = new PrismaPg({
    connectionString,
    /* Serverless opens a connection per invocation; a small pool with a short
       idle timeout avoids exhausting Postgres' connection limit. Neon's pooled
       endpoint handles this too — use it if you have one. */
    max: 5,
    idleTimeoutMillis: 10_000,
  });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
