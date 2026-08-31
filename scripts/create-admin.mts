import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

import { prisma } from "../lib/db";
import { hashPassword } from "../lib/auth";

/**
 * Creates (or updates) an admin user.
 *
 *   npm run admin:create
 *
 * Prompts by default, so the password never lands in shell history.
 * Re-running with an existing email resets that user's password and revokes
 * any active sessions.
 *
 * For production — where you're running against a remote DATABASE_URL and a
 * prompt is awkward — set ADMIN_EMAIL, ADMIN_NAME and ADMIN_PASSWORD instead
 * and it runs without asking. Prefer a shell that doesn't record history, or
 * a one-off environment variable, so the password isn't left behind.
 */

const fromEnv =
  process.env.ADMIN_EMAIL &&
  process.env.ADMIN_NAME &&
  process.env.ADMIN_PASSWORD;

let email: string;
let name: string;
let password: string;
let confirm: string;

if (fromEnv) {
  email = process.env.ADMIN_EMAIL!.trim().toLowerCase();
  name = process.env.ADMIN_NAME!.trim();
  password = process.env.ADMIN_PASSWORD!;
  confirm = password;
} else {
  const rl = createInterface({ input: stdin, output: stdout });

  email = (await rl.question("Email: ")).trim().toLowerCase();
  name = (await rl.question("Full name: ")).trim();
  password = (await rl.question("Password (min 12 chars): ")).trim();
  confirm = (await rl.question("Confirm password: ")).trim();

  rl.close();
}

if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
  console.error("\n✗ That doesn't look like a valid email address.");
  process.exit(1);
}

if (!name) {
  console.error("\n✗ A name is required.");
  process.exit(1);
}

if (password.length < 12) {
  console.error("\n✗ Use at least 12 characters.");
  process.exit(1);
}

if (password !== confirm) {
  console.error("\n✗ Passwords don't match.");
  process.exit(1);
}

const passwordHash = await hashPassword(password);
const existing = await prisma.adminUser.findUnique({ where: { email } });

const isFirstUser = (await prisma.adminUser.count()) === 0;

await prisma.adminUser.upsert({
  where: { email },
  create: { email, name, passwordHash, role: isFirstUser ? "owner" : "editor" },
  update: { name, passwordHash },
});

/* A password reset should invalidate anything already signed in. */
if (existing) {
  await prisma.session.deleteMany({ where: { userId: existing.id } });
  console.log(`\n✓ Password reset for ${email}. Existing sessions revoked.`);
} else {
  console.log(
    `\n✓ Admin created: ${email} (${isFirstUser ? "owner" : "editor"})`,
  );
}

console.log("  Sign in at /admin/login");

await prisma.$disconnect();
