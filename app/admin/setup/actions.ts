"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { prisma } from "@/lib/db";
import { createSession, hashPassword } from "@/lib/auth";
import type { ActionState } from "@/lib/action-state";

/**
 * First-run admin creation.
 *
 * Only works while the database has zero admins. The moment one exists this
 * becomes inert, so it can't be used to add accounts later — that's what
 * `npm run admin:create` is for.
 *
 * This exists because creating the first production account otherwise means
 * running a CLI against a remote database, which is an awkward and error-prone
 * thing to ask of someone deploying through a dashboard.
 */

const schema = z
  .object({
    name: z.string().trim().min(2, "Enter your name."),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Enter a valid email address."),
    password: z
      .string()
      .min(12, "Use at least 12 characters — this guards candidate data."),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Those two passwords don't match.",
    path: ["confirm"],
  });

export async function createFirstAdmin(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  /* Re-check inside the action. The page checks too, but a form can be posted
     directly and this is the only gate that actually counts. */
  if ((await prisma.adminUser.count()) > 0) {
    return {
      error:
        "An administrator already exists, so this page is closed. Sign in instead, or reset a password with `npm run admin:create`.",
    };
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { error: "Check the highlighted fields.", fieldErrors };
  }

  const { name, email, password } = parsed.data;
  const passwordHash = await hashPassword(password);

  let userId: string;

  try {
    /* Serialisable so two people hitting this at once can't both create an
       owner — the second transaction sees the first and fails the count check. */
    const created = await prisma.$transaction(
      async (tx) => {
        if ((await tx.adminUser.count()) > 0) {
          throw new Error("ALREADY_EXISTS");
        }

        return tx.adminUser.create({
          data: { email, name, passwordHash, role: "owner" },
        });
      },
      { isolationLevel: "Serializable" },
    );

    userId = created.id;
  } catch (error) {
    if (error instanceof Error && error.message === "ALREADY_EXISTS") {
      return {
        error: "Someone just created the first administrator. Sign in instead.",
      };
    }

    console.error("[setup] Could not create the first admin:", error);

    return {
      error:
        "Couldn't create the account. Check the server logs — this usually means the database is unreachable.",
    };
  }

  /* Sign them straight in; making someone re-enter credentials they set two
     seconds ago is pure friction. */
  await createSession(userId);

  redirect("/admin");
}
