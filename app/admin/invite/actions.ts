"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { prisma } from "@/lib/db";
import { createSession, hashPassword } from "@/lib/auth";
import type { ActionState } from "@/lib/action-state";

/**
 * Accepting an invite.
 *
 * The token *is* the authentication — whoever holds it becomes the account it
 * names. So it's single-use (deleted the moment it's redeemed), time-limited,
 * and 32 random bytes wide. The invitee chooses their own password here; an
 * owner never sets or sees it.
 *
 * Deliberately not gated by requireUser — the whole point is that nobody is
 * signed in yet.
 */

const schema = z
  .object({
    token: z.string().min(1),
    password: z
      .string()
      .min(12, "Use at least 12 characters — this guards candidate data."),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Those two passwords don't match.",
    path: ["confirm"],
  });

export async function acceptInvite(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = schema.safeParse({
    token: formData.get("token"),
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

  const { token, password } = parsed.data;

  const invite = await prisma.adminInvite.findUnique({ where: { token } });

  if (!invite || invite.expiresAt < new Date()) {
    return {
      error:
        "This invite link is no longer valid. Ask an owner to send you a new one.",
    };
  }

  const passwordHash = await hashPassword(password);

  let userId: string;

  try {
    const created = await prisma.$transaction(async (tx) => {
      /* Re-read inside the transaction: two submits of the same link must not
         both create an account. The second finds nothing and stops. */
      const live = await tx.adminInvite.findUnique({ where: { token } });

      if (!live) throw new Error("SPENT");

      if (await tx.adminUser.findUnique({ where: { email: live.email } })) {
        throw new Error("EXISTS");
      }

      const user = await tx.adminUser.create({
        data: {
          email: live.email,
          name: live.name,
          role: live.role,
          passwordHash,
        },
      });

      /* Spend the token rather than marking it accepted — a redeemed invite
         has no further use, and keeping it around keeps a live credential in
         the database for no reason. */
      await tx.adminInvite.delete({ where: { id: live.id } });

      return user;
    });

    userId = created.id;
  } catch (error) {
    if (error instanceof Error && error.message === "SPENT") {
      return { error: "This invite has already been used." };
    }

    if (error instanceof Error && error.message === "EXISTS") {
      return {
        error: "There's already an account with that email. Sign in instead.",
      };
    }

    console.error("[invite] Could not accept invite:", error);

    return {
      error:
        "Couldn't create the account. Check the server logs — this usually means the database is unreachable.",
    };
  }

  console.log(`[admin] Invite accepted — ${invite.email} joined.`);

  await createSession(userId);

  redirect("/admin");
}
