import { randomUUID } from "node:crypto";
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

export type StorageDriver = "s3" | "blob" | "disk" | "none";

export interface S3Config {
  endpoint: string;
  bucket: string;
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
}

/**
 * Any S3-compatible object store: Cloudflare R2, Backblaze B2, AWS S3,
 * MinIO. This is what makes the app host-agnostic — Vercel Blob only exists
 * on Vercel, so relying on it alone means the hosting decision is made by the
 * code rather than by us.
 */
export function s3Config(): S3Config | null {
  const endpoint = process.env.S3_ENDPOINT;
  const bucket = process.env.S3_BUCKET;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

  if (!endpoint || !bucket || !accessKeyId || !secretAccessKey) return null;

  return {
    /* Trailing slashes would produce a double slash in the signed URL, which
       changes the signature and fails with an opaque 403. */
    endpoint: endpoint.replace(/\/+$/, ""),
    bucket,
    accessKeyId,
    secretAccessKey,
    /* R2 ignores the region but the signature still has to carry one. */
    region: process.env.S3_REGION ?? "auto",
  };
}

export class StorageNotConfiguredError extends Error {
  constructor() {
    super(
      "No file storage configured. Either set S3_ENDPOINT, S3_BUCKET, " +
        "S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY for any S3-compatible " +
        "store (Cloudflare R2, Backblaze B2, AWS S3) — this works on every " +
        "host — or, on Vercel, connect a Blob store to the project so it sets " +
        "BLOB_READ_WRITE_TOKEN or BLOB_STORE_ID for you.",
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
  /* S3 first: it's the portable one, so if both are configured the app keeps
     behaving identically wherever it's deployed. */
  if (s3Config()) return "s3";

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

/** Keys carry a prefix so `read` knows which driver wrote them. */
const BLOB_PREFIX = "blob:";
const S3_PREFIX = "s3:";

/* ------------------------------------------------------------------- s3 */

async function s3Client(config: S3Config) {
  const { AwsClient } = await import("aws4fetch");

  return new AwsClient({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region,
    service: "s3",
  });
}

function s3Url(config: S3Config, key: string): string {
  /* Path-style addressing. Virtual-hosted style needs per-bucket DNS, which
     not every S3-compatible provider sets up. */
  return `${config.endpoint}/${config.bucket}/${key}`;
}

/* ------------------------------------------------------------------ write */

export async function store(
  filename: string,
  bytes: Buffer,
  contentType: string,
): Promise<StoredFile> {
  const driver = activeDriver();

  if (driver === "none") throw new StorageNotConfiguredError();

  if (driver === "s3") {
    const config = s3Config()!;

    /* A random prefix keeps keys unguessable. Nothing serves these directly —
       reads go through a session-checked route — but a predictable key would
       be one misconfigured bucket policy away from exposing every CV. */
    const key = `cv/${randomUUID()}-${filename}`;

    const response = await (
      await s3Client(config)
    ).fetch(s3Url(config, key), {
      method: "PUT",
      body: new Uint8Array(bytes),
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(bytes.length),
      },
    });

    if (!response.ok) {
      throw new Error(
        `S3 upload failed (${response.status}): ${(await response.text().catch(() => "")).slice(0, 300)}`,
      );
    }

    return { key: `${S3_PREFIX}${key}`, driver: "s3", size: bytes.length };
  }

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
  if (key.startsWith(S3_PREFIX)) {
    const config = s3Config();

    if (!config) {
      throw new StorageNotConfiguredError();
    }

    const objectKey = key.slice(S3_PREFIX.length);

    const response = await (
      await s3Client(config)
    ).fetch(s3Url(config, objectKey));

    if (!response.ok) {
      throw new Error(`S3 fetch failed (${response.status}) for ${objectKey}`);
    }

    return Buffer.from(await response.arrayBuffer());
  }

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
  if (key.startsWith(S3_PREFIX)) {
    const config = s3Config();

    if (!config) return;

    await (
      await s3Client(config)
    ).fetch(s3Url(config, key.slice(S3_PREFIX.length)), { method: "DELETE" });

    return;
  }

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
