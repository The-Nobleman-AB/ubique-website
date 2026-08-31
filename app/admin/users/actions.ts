"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { prisma } from "@/lib/db";
import { requireOwner } from "@/lib/auth";
import type { ActionState } from "@/lib/action-state";

/**
 * Managing who can get into the admin.
 *
 * Owner-only, all of it. Every action re-checks — the page check gates the UI,
 * but an action is its own entry point and must not trust that anything ran
 * before it.
 *
 * The guiding rule throughout: never let the last owner be removed or demoted.
 * That would lock everyone out of user management permanently, recoverable only
 * by editing the database by hand.
 */

const INVITE_DAYS = 7;

export type UserActionState = ActionState & { ok?: string; inviteUrl?: string };

/* ------------------------------------------------------------------ invite */

const inviteSchema = z.object({
  name: z.string().trim().min(2, "Enter their name."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address.")
    .max(254),
  role: z.enum(["owner", "editor"]),
});

export async function inviteAdmin(
  _prev: UserActionState,
  formData: FormData,
): Promise<UserActionState> {
  const actor = await requireOwner();

  const parsed = inviteSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { error: "Check the highlighted fields.", fieldErrors };
  }

  const { name, email, role } = parsed.data;

  if (await prisma.adminUser.findUnique({ where: { email } })) {
    return { error: `${email} already has an admin account.` };
  }

  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + INVITE_DAYS * 86_400_000);

  /* Re-inviting replaces the old invite rather than erroring — the common case
     is that the first link was lost. */
  await prisma.adminInvite.upsert({
    where: { email },
    create: {
      email,
      name,
      role,
      token,
      expiresAt,
      invitedById: actor.id,
    },
    update: { name, role, token, expiresAt, acceptedAt: null },
  });

  revalidatePath("/admin/users");

  return {
    ok: `Invite created for ${name}. Send them the link below — it works once and expires in ${INVITE_DAYS} days.`,
    inviteUrl: `/admin/invite/${token}`,
  };
}

export async function revokeInvite(id: string): Promise<void> {
  await requireOwner();

  await prisma.adminInvite.delete({ where: { id } }).catch(() => {});

  revalidatePath("/admin/users");
}

/* -------------------------------------------------------------------- role */

export async function setAdminRole(
  id: string,
  formData: FormData,
): Promise<void> {
  const actor = await requireOwner();

  const role = String(formData.get("role") ?? "");

  if (role !== "owner" && role !== "editor") return;

  const target = await prisma.adminUser.findUnique({ where: { id } });

  if (!target) return;

  /* Demoting the last owner would leave nobody able to manage users. */
  if (target.role === "owner" && role === "editor") {
    const owners = await prisma.adminUser.count({ where: { role: "owner" } });

    if (owners <= 1) {
      redirectWithError(
        "There has to be at least one owner. Promote someone else first.",
      );
    }
  }

  await prisma.adminUser.update({ where: { id }, data: { role } });

  console.log(`[admin] ${actor.email} set ${target.email} to ${role}.`);

  revalidatePath("/admin/users");
}

/* ------------------------------------------------------------------ remove */

export async function removeAdmin(id: string): Promise<void> {
  const actor = await requireOwner();

  if (actor.id === id) {
    redirectWithError(
      "You can't remove your own account. Ask another owner to do it.",
    );
  }

  const target = await prisma.adminUser.findUnique({ where: { id } });

  if (!target) return;

  if (target.role === "owner") {
    const owners = await prisma.adminUser.count({ where: { role: "owner" } });

    if (owners <= 1) {
      redirectWithError(
        "That's the last owner. Promote someone else before removing them.",
      );
    }
  }

  /* Sessions cascade with the user, so access is revoked immediately.
     Their notes survive with a null author — see the schema comment. */
  await prisma.adminUser.delete({ where: { id } });

  console.log(`[admin] ${actor.email} removed ${target.email}.`);

  revalidatePath("/admin/users");
}

/* Small helper so the guard rails read as one line at the call site. */
function redirectWithError(message: string): never {
  redirect(`/admin/users?error=${encodeURIComponent(message)}`);
}
