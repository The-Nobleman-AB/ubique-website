/**
 * Minimal fixed-window rate limiter.
 *
 * In-memory, so it is per-instance: on a serverless platform a determined
 * attacker spread across cold starts can exceed the limit. It is here to stop
 * casual form spam, not as a security boundary. If abuse becomes a real
 * problem, swap the Map for Upstash/Redis — the call signature won't change.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/** Drop expired buckets so the Map doesn't grow without bound. */
function sweep(now: number) {
  if (buckets.size < 5_000) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  /** Seconds until the window resets — used for the Retry-After header. */
  retryAfter: number;
}

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 60_000 } = {},
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }

  existing.count += 1;

  if (existing.count > limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  return { ok: true, remaining: limit - existing.count, retryAfter: 0 };
}

/**
 * Best-effort client identity. Behind a proxy the platform sets these; if
 * none are present every request shares one bucket, which fails closed
 * rather than open.
 */
export function clientKey(request: Request, scope: string): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  return `${scope}:${ip}`;
}
