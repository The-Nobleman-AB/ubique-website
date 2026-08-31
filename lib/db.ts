import { PrismaClient } from "@/lib/generated/prisma";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

/**
 * Prisma client singleton.
 *
 * Prisma 7 takes a driver adapter rather than reading the URL from the schema.
 * To move to Postgres: swap the provider in prisma/schema.prisma, install
 * @prisma/adapter-pg, and change the adapter here. Nothing else in the app
 * touches the driver.
 *
 * The globalThis cache stops `next dev` opening a new connection on every
 * hot reload.
 */

const url = process.env.DATABASE_URL ?? "file:./dev.db";

function createClient() {
  const adapter = new PrismaBetterSqlite3({
    url,
  });

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["warn", "error"]
        : ["error"],
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
