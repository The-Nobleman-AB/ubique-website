import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/db";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const schema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("That doesn't look like a valid email address.")
    .max(254),
  source: z.string().trim().max(60).optional().default("footer"),
  /** Honeypot. */
  company: z.string().max(2000).optional().default(""),
});

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "subscribe"), {
    limit: 5,
    windowMs: 10 * 60_000,
  });

  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait a moment." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const parsed = schema.safeParse(await request.json().catch(() => ({})));

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check that address." },
      { status: 422 },
    );
  }

  const { email, source, company } = parsed.data;

  if (company) return NextResponse.json({ ok: true });

  /* Re-subscribing after unsubscribing should work, and subscribing twice
     shouldn't error — either way the answer to the visitor is the same. */
  await prisma.subscriber.upsert({
    where: { email },
    create: {
      email,
      source,
      unsubscribeToken: randomBytes(24).toString("base64url"),
    },
    update: { unsubscribedAt: null },
  });

  return NextResponse.json({ ok: true });
}
