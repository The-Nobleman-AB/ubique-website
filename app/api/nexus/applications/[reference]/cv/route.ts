import { NextResponse, type NextRequest } from "next/server";

import { prisma } from "@/lib/db";
import { read } from "@/lib/storage";
import { requireFeedToken } from "@/lib/nexus-auth";

/** The CV bytes for one application, for Nexus to store its own copy. */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ reference: string }> },
) {
  const denied = requireFeedToken(request);
  if (denied) return denied;

  const { reference } = await params;

  const application = await prisma.application.findUnique({
    where: { reference },
    select: { cvPath: true, cvFilename: true, cvMimeType: true },
  });

  if (!application) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  /* An empty path means storage was unavailable when this arrived — the
     application was kept rather than discarded. Say so plainly, so the
     collector logs a known gap instead of retrying forever. */
  if (!application.cvPath) {
    return NextResponse.json(
      { error: "No CV stored for this application." },
      { status: 409 },
    );
  }

  try {
    const file = await read(application.cvPath);

    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": application.cvMimeType,
        "Content-Length": String(file.length),
        "Content-Disposition": `attachment; filename="${application.cvFilename.replace(/"/g, "")}"`,
        /* Candidate personal data — never cached by anything in between. */
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error(`[nexus-api] CV read failed for ${reference}:`, error);

    return NextResponse.json(
      { error: "Could not read the stored file." },
      { status: 502 },
    );
  }
}
