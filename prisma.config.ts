import { defineConfig } from "prisma/config";

/**
 * Prisma 7 moved the datasource URL out of schema.prisma into this file.
 * The schema declares only the provider; the connection string lives here for
 * the CLI, and the runtime client gets a driver adapter (see lib/db.ts).
 *
 * The CLI doesn't read .env for us, so load it explicitly — .env.local wins
 * where it exists, matching Next.js precedence.
 */
for (const file of [".env", ".env.local"]) {
  try {
    process.loadEnvFile(file);
  } catch {
    // absent is fine — the variable may come from the real environment
  }
}

/**
 * `prisma generate` runs in postinstall, including on build servers where no
 * database exists. Prisma's own `env()` helper throws when the variable is
 * missing, which broke the Vercel build during `npm install`:
 *
 *   PrismaConfigEnvError: Cannot resolve environment variable: DATABASE_URL
 *
 * Codegen doesn't need a reachable database — only `migrate` and `db push` do.
 * So fall back to an obviously-fake URL when nothing is set: generate succeeds,
 * and anything that genuinely needs a connection fails immediately rather than
 * silently pointing somewhere wrong.
 */
const url =
  process.env.DATABASE_URL ??
  /* Valid protocol so `generate` can parse it, obviously fake so anything
     that tries to connect fails immediately and legibly. */
  "postgresql://unset:unset@localhost:5432/unset";

export default defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    url,
  },

  migrations: {
    seed: "npx tsx prisma/seed.mts",
  },
});
