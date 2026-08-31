import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * File storage for candidate CVs.
 *
 * Two drivers, chosen automatically:
 *
 *   blob   BLOB_READ_WRITE_TOKEN is set — Vercel Blob. Required in production,
 *          because Vercel's filesystem is read-only and wiped between
 *          invocations, so anything written to disk is gone before a recruiter
 *          could open it.
 *
 *   disk   Otherwise — writes under ./storage/cv. Fine for local development.
 *
 * CVs are personal data under a 24-month retention policy, so they are stored
 * privately and only ever served through the admin route, which checks the
 * session on every request. Nothing here is publicly addressable.
 */

const DISK_DIR = path.join(process.cwd(), "storage", "cv");

export type StorageDriver = "blob" | "disk" | "none";

export class StorageNotConfiguredError extends Error {
  constructor() {
    super(
      "No blob storage configured. Add a Blob store in the Vercel dashboard " +
        "(Storage → Create → Blob), then redeploy so BLOB_READ_WRITE_TOKEN " +
        "reaches the running functions.",
    );
    this.name = "StorageNotConfiguredError";
  }
}

export function activeDriver(): StorageDriver {
  if (process.env.BLOB_READ_WRITE_TOKEN) return "blob";

  /* Writing to disk in production is not a fallback, it's a guaranteed EROFS —
     serverless filesystems are read-only. Saying so beats attempting a write
     that cannot succeed and reporting the syscall error. */
  return process.env.NODE_ENV === "production" ? "none" : "disk";
}

export interface StoredFile {
  /** Opaque handle to give `read`. A blob URL, or a path on disk. */
  key: string;
  driver: StorageDriver;
  size: number;
}

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
      access: "public",
      contentType,
      /* Vercel Blob appends a random suffix, so the URL is unguessable even
         though the bucket is technically public. The download route is still
         session-gated — this is defence in depth, not the only control. */
      addRandomSuffix: true,
    });

    return { key: blob.url, driver: "blob", size: bytes.length };
  }

  await mkdir(DISK_DIR, { recursive: true });

  const target = path.join(DISK_DIR, filename);
  await writeFile(target, bytes);

  return { key: target, driver: "disk", size: bytes.length };
}

/* ------------------------------------------------------------------- read */

export async function read(key: string): Promise<Buffer> {
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
  if (key.startsWith("http://") || key.startsWith("https://")) {
    const { del } = await import("@vercel/blob");
    await del(key);
    return;
  }

  await unlink(key).catch(() => {
    /* Already gone is the outcome we wanted. */
  });
}
