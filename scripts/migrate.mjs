/**
 * Applies migrations before the build.
 *
 * Runs as part of `npm run build`, which is what Vercel invokes. Two things
 * have to be true for a deploy to be worth continuing:
 *
 *   1. DATABASE_URL is set. Without it the site builds but every write fails —
 *      no admin login, no job posting, no applications. Better to stop here
 *      with a readable message than to ship something broken.
 *
 *   2. Migrations apply cleanly, so the schema matches the code being deployed.
 */

import { spawnSync } from "node:child_process";

/* This runs before Next.js starts, so nothing has loaded .env yet. On Vercel
   the variable comes from the real environment and these are no-ops. */
for (const file of [".env", ".env.local"]) {
  try {
    process.loadEnvFile(file);
  } catch {
    // absent is fine
  }
}

const url = process.env.DATABASE_URL;

if (!url) {
  console.error(`
✗ DATABASE_URL is not set.

  This app needs Postgres — Vercel's filesystem is read-only and wiped between
  requests, so a local database file cannot work.

  Add a Postgres database (Vercel Postgres or Neon), then set DATABASE_URL in
  Project Settings → Environment Variables for Production, Preview and
  Development. Use the POOLED connection string on serverless.
`);
  process.exit(1);
}

if (url.startsWith("file:")) {
  console.error(`
✗ DATABASE_URL points at a SQLite file: ${url}

  That works locally but not on a serverless host. Point it at Postgres.
`);
  process.exit(1);
}

console.log("→ Applying database migrations…");

const result = spawnSync("npx", ["prisma", "migrate", "deploy"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);
