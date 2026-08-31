import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * File storage for candidate CVs.
 *
 * Two drivers, chosen automatically:
 *
 *   blob   Vercel Blob, when the environment has credentials for it. Required
 *          in production, because Vercel's filesystem is read-only and wiped
 *          between invocations — anything written to disk is gone before a
 *          recruiter could open it.
 *
 *   disk   Otherwise — writes under ./storage/cv. Fine for local development.
 *
 * Blobs are stored with **private** access. CVs are personal data on a
 * 24-month retention policy, so a URL that works for anyone holding it is the
 * wrong model — a forwarded link would expose a candidate's CV indefinitely.
 * Private blobs are readable only by an authenticated call from this app, and
 * the one route that makes such a call checks the admin session first.
 */

const DISK_DIR = path.join(process.cwd(), "storage", "cv");

export type StorageDriver = "blob" | "disk" | "none";

export class StorageNotConfiguredError extends Error {
  constructor() {
    super(
      "No blob storage configured. Connect a Blob store to this project in " +
        "the Vercel dashboard (Storage → your store → Connect Project), then " +
        "redeploy. The SDK needs either BLOB_READ_WRITE_TOKEN, or BLOB_STORE_ID " +
        "with OIDC — connecting the store sets whichever your store uses.",
    );
    this.name = "StorageNotConfiguredError";
  }
}

/**
 * Vercel Blob supports two ways of authenticating, and which one you get
 * depends on when the store was created:
 *
 *   BLOB_READ_WRITE_TOKEN   the long-lived token. Older stores, and anything
 *                           created manually.
 *
 *   BLOB_STORE_ID + OIDC    newer stores. There is no read-write token to
 *                           find — the platform injects a short-lived
 *                           VERCEL_OIDC_TOKEN at runtime and the SDK pairs it
 *                           with the store id. The better model: no long-lived
 *                           secret sitting in the environment.
 */
export function blobAuth(): "token" | "oidc" | null {
  if (process.env.BLOB_READ_WRITE_TOKEN) return "token";
  if (process.env.BLOB_STORE_ID) return "oidc";
  return null;
}

export function activeDriver(): StorageDriver {
  if (blobAuth()) return "blob";

  /* Writing to disk in production is not a fallback, it's a guaranteed EROFS —
     serverless filesystems are read-only. Saying so beats attempting a write
     that cannot succeed and reporting the syscall error. */
  return process.env.NODE_ENV === "production" ? "none" : "disk";
}

export interface StoredFile {
  /**
   * Opaque handle to give `read`. For blobs this is the *pathname*, not a URL —
   * a private blob is addressed by pathname through an authenticated call, and
   * its URL is not independently fetchable.
   */
  key: string;
  driver: StorageDriver;
  size: number;
}

/** Blob keys carry this prefix so `read` knows how to fetch them. */
const BLOB_PREFIX = "blob:";

/* ------------------------------------------------------------------ write */

export async function store(
  filename: string,
  bytes: Buffer,
  contentType: string,
): Promise<StoredFile> {
  const driver = activeDriver();

  if (driver === "none") throw new StorageNotConfiguredError();

  if (driver === "blob") {
    const { put } = await import("@vercel/blob");

    const blob = await put(`cv/${filename}`, bytes, {
      access: "private",
      contentType,
      /* A random suffix keeps pathnames unguessable even though access is
         already authenticated — defence in depth, and it removes any chance of
         two references colliding. */
      addRandomSuffix: true,
    });

    return {
      key: `${BLOB_PREFIX}${blob.pathname}`,
      driver: "blob",
      size: bytes.length,
    };
  }

  await mkdir(DISK_DIR, { recursive: true });

  const target = path.join(DISK_DIR, filename);
  await writeFile(target, bytes);

  return { key: target, driver: "disk", size: bytes.length };
}

/* ------------------------------------------------------------------- read */

export async function read(key: string): Promise<Buffer> {
  if (key.startsWith(BLOB_PREFIX)) {
    const { get } = await import("@vercel/blob");

    const result = await get(key.slice(BLOB_PREFIX.length), {
      access: "private",
    });

    if (!result || result.statusCode !== 200) {
      throw new Error(`Blob not found: ${key.slice(BLOB_PREFIX.length)}`);
    }

    const chunks: Uint8Array[] = [];
    const reader = result.stream.getReader();

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) chunks.push(value);
    }

    return Buffer.concat(chunks);
  }

  /* A plain URL means a blob written before the switch to private access. */
  if (key.startsWith("http://") || key.startsWith("https://")) {
    const response = await fetch(key);

    if (!response.ok) {
      throw new Error(`Blob fetch failed (${response.status}) for ${key}`);
    }

    return Buffer.from(await response.arrayBuffer());
  }

  return readFile(key);
}

/* ----------------------------------------------------------------- delete */

/** Used when a retention period expires, or an application is removed. */
export async function remove(key: string): Promise<void> {
  if (key.startsWith(BLOB_PREFIX) || key.startsWith("http")) {
    const { del } = await import("@vercel/blob");

    await del(
      key.startsWith(BLOB_PREFIX) ? key.slice(BLOB_PREFIX.length) : key,
    );
    return;
  }

  await unlink(key).catch(() => {
    /* Already gone is the outcome we wanted. */
  });
}
