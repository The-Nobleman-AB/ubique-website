import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

import { prisma } from "../lib/db";
import { hashPassword } from "../lib/auth";

/**
 * Creates (or updates) an admin user.
 *
 *   npm run admin:create
 *
 * Prompts rather than taking argv, so the password never lands in shell
 * history. Re-running with an existing email resets that user's password.
 */

const rl = createInterface({ input: stdin, output: stdout });

const email = (await rl.question("Email: ")).trim().toLowerCase();
const name = (await rl.question("Full name: ")).trim();
const password = (await rl.question("Password (min 12 chars): ")).trim();
const confirm = (await rl.question("Confirm password: ")).trim();

rl.close();

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
  console.log(`\n✓ Admin created: ${email} (${isFirstUser ? "owner" : "editor"})`);
}

console.log("  Sign in at /admin/login");

await prisma.$disconnect();
