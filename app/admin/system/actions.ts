"use server";

import { randomBytes } from "node:crypto";

import { requireUser } from "@/lib/auth";
import {
  StorageNotConfiguredError,
  activeDriver,
  blobAuth,
  read,
  remove,
  store,
} from "@/lib/storage";
import type { ActionState } from "@/lib/action-state";

/**
 * Round-trips a small file through whatever storage is configured.
 *
 * Answers the question a status row can't: the environment variables can be
 * present and the write still fail — wrong store, revoked token, expired OIDC.
 * This writes, reads back, compares, and deletes.
 */
export async function testStorage(
  _prev: ActionState & { ok?: string },
  _formData: FormData,
): Promise<ActionState & { ok?: string }> {
  await requireUser();

  const driver = activeDriver();
  const auth = blobAuth();
  const marker = randomBytes(16).toString("hex");
  const payload = Buffer.from(`ubique storage check ${marker}\n`);
  const filename = `_healthcheck-${marker}.txt`;

  let key: string | null = null;

  try {
    const stored = await store(filename, payload, "text/plain");
    key = stored.key;

    const readBack = await read(stored.key);

    if (!readBack.equals(payload)) {
      return {
        error:
          "The file was written but read back different. That points at the wrong store being connected, or a caching layer in front of it.",
      };
    }

    return {
      ok: `Wrote, read back and deleted a test file successfully via ${
        driver === "blob"
          ? `Vercel Blob (${auth === "oidc" ? "OIDC" : "read-write token"})`
          : "local disk"
      }. CV uploads will work.`,
    };
  } catch (error) {
    if (error instanceof StorageNotConfiguredError) {
      return { error: error.message };
    }

    const message = error instanceof Error ? error.message : String(error);

    if (/EROFS|read-only/i.test(message)) {
      return {
        error:
          "Tried to write to the local filesystem, which is read-only here. Storage isn't picking up the Blob store — connect it to this project and redeploy.",
      };
    }

    if (/401|403|unauthor|forbidden|token/i.test(message)) {
      return {
        error: `Storage rejected the request: ${message}. The store is connected but the credentials aren't valid for it — usually a store connected to a different project, or a deploy that predates the connection. Redeploy first.`,
      };
    }

    return { error: `Storage write failed: ${message}` };
  } finally {
    /* Never leave health-check files behind, even when the read failed. */
    if (key) await remove(key).catch(() => {});
  }
}
