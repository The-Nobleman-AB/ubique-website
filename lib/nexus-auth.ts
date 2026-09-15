import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

/**
 * Bearer-token auth for the endpoints Nexus polls.
 *
 * A separate token from the inbound careers feed. That one writes job
 * postings; these read candidate personal data and CVs. Different direction,
 * different blast radius — so if one leaks, the other is unaffected and can be
 * rotated independently.
 */

export function requireFeedToken(request: Request): NextResponse | null {
  const expected = process.env.NEXUS_API_TOKEN;

  if (!expected) {
    console.error("[nexus-api] NEXUS_API_TOKEN is not set");
    return NextResponse.json(
      { error: "Not configured on this deployment." },
      { status: 503 },
    );
  }

  const header = request.headers.get("authorization");

  if (!header?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const supplied = Buffer.from(header.slice(7).trim());
  const target = Buffer.from(expected);

  /* Length first — timingSafeEqual throws on a mismatch, and the throw would
     itself leak the length. */
  if (supplied.length !== target.length || !timingSafeEqual(supplied, target)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  return null;
}

/* --------------------------------------------------------------- cursor */

/**
 * Keyset pagination on (createdAt, reference).
 *
 * Not an offset: rows are being collected while the poller pages through, so
 * offsets would shift under it and silently skip applications. Not a bare
 * timestamp either — two applications in the same millisecond would collide,
 * and the reference breaks that tie.
 */
export function encodeCursor(createdAt: Date, reference: string): string {
  return Buffer.from(`${createdAt.toISOString()}|${reference}`).toString(
    "base64url",
  );
}

export function decodeCursor(
  cursor: string,
): { createdAt: Date; reference: string } | null {
  try {
    const [iso, reference] = Buffer.from(cursor, "base64url")
      .toString("utf8")
      .split("|");

    const createdAt = new Date(iso);

    if (!reference || Number.isNaN(createdAt.getTime())) return null;

    return { createdAt, reference };
  } catch {
    return null;
  }
}
