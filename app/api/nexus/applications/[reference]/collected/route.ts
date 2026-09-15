import { NextResponse, type NextRequest } from "next/server";

import { prisma } from "@/lib/db";
import { requireFeedToken } from "@/lib/nexus-auth";

/**
 * Nexus confirms it has stored the application and its CV.
 *
 * Idempotent: marking an already-collected application returns success and
 * leaves the original timestamp alone. The collector may legitimately retry
 * after a timeout it never saw the response to, and that must not look like
 * an error or silently move the record's history.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ reference: string }> },
) {
  const denied = requireFeedToken(request);
  if (denied) return denied;

  const { reference } = await params;

  const application = await prisma.application.findUnique({
    where: { reference },
    select: { id: true, collectedAt: true },
  });

  if (!application) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  if (application.collectedAt) {
    return NextResponse.json({
      ok: true,
      reference,
      collectedAt: application.collectedAt.toISOString(),
      alreadyCollected: true,
    });
  }

  const updated = await prisma.application.update({
    where: { id: application.id },
    data: { collectedAt: new Date() },
    select: { collectedAt: true },
  });

  console.log(`[nexus-api] ${reference} collected`);

  return NextResponse.json({
    ok: true,
    reference,
    collectedAt: updated.collectedAt!.toISOString(),
    alreadyCollected: false,
  });
}
