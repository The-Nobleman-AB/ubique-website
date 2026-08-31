import { defineConfig, env } from "prisma/config";

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

export default defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    url: env("DATABASE_URL"),
  },

  migrations: {
    seed: "npx tsx prisma/seed.mts",
  },
});
