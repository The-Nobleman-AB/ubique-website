import { NextResponse, type NextRequest } from "next/server";

import { prisma } from "@/lib/db";
import { decodeCursor, encodeCursor, requireFeedToken } from "@/lib/nexus-auth";

/**
 * Applications waiting to be collected by Nexus.
 *
 * Oldest first, so nothing is starved. Keyset pagination on
 * (createdAt, reference) — applications are being collected while the poller
 * pages through, and an offset would shift underneath it.
 *
 * Deliberately excluded from the response: our `status` field and the internal
 * screening notes. Once a candidate reaches Nexus, Nexus owns their pipeline
 * state; two systems tracking the same thing diverge within a week.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;

export async function GET(request: NextRequest) {
  const denied = requireFeedToken(request);
  if (denied) return denied;

  const params = request.nextUrl.searchParams;

  const limit = Math.min(
    Math.max(Number(params.get("limit")) || DEFAULT_LIMIT, 1),
    MAX_LIMIT,
  );

  /* Defaults to uncollected, which is the only mode the poller uses.
     `collected=true` exists so we can audit what has already gone across. */
  const wantCollected = params.get("collected") === "true";

  /* Applications against hand-created roles have no TR number and nowhere to
     land in Nexus. Opt-in so the default response stays complete and honest —
     the poller passes this, an auditor would not. */
  const requireJobId = params.get("require_job_id") === "true";

  const cursorParam = params.get("cursor");
  const cursor = cursorParam ? decodeCursor(cursorParam) : null;

  if (cursorParam && !cursor) {
    return NextResponse.json({ error: "Malformed cursor." }, { status: 400 });
  }

  const rows = await prisma.application.findMany({
    where: {
      collectedAt: wantCollected ? { not: null } : null,
      ...(requireJobId ? { job: { nexusId: { not: null } } } : {}),
      ...(cursor
        ? {
            OR: [
              { createdAt: { gt: cursor.createdAt } },
              {
                createdAt: cursor.createdAt,
                reference: { gt: cursor.reference },
              },
            ],
          }
        : {}),
    },
    orderBy: [{ createdAt: "asc" }, { reference: "asc" }],
    /* One extra row tells us whether there is another page, without a second
       count query over a growing table. */
    take: limit + 1,
    select: {
      reference: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      location: true,
      linkedin: true,
      coverNote: true,
      cvFilename: true,
      cvMimeType: true,
      cvSize: true,
      cvPath: true,
      consent: true,
      consentTextVersion: true,
      createdAt: true,
      job: { select: { nexusId: true, title: true } },
    },
  });

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;
  const last = page.at(-1);

  return NextResponse.json({
    applications: page.map((row) => ({
      reference: row.reference,
      job_id: row.job.nexusId,
      job_title: row.job.title,
      firstName: row.firstName,
      lastName: row.lastName,
      email: row.email,
      phone: row.phone,
      location: row.location,
      linkedin: row.linkedin,
      coverNote: row.coverNote,
      cvFilename: row.cvFilename,
      cvMimeType: row.cvMimeType,
      cvSize: row.cvSize,
      /* An application whose CV failed to store is still worth collecting —
         the details matter even without the file. Flagged so the collector
         does not treat a 404 on the download as its own bug. */
      cvAvailable: Boolean(row.cvPath),
      consent: row.consent,
      consentTextVersion: row.consentTextVersion,
      createdAt: row.createdAt.toISOString(),
    })),
    nextCursor:
      hasMore && last ? encodeCursor(last.createdAt, last.reference) : null,
    hasMore,
  });
}
