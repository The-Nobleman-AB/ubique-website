import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { read } from "@/lib/storage";

export const runtime = "nodejs";

/**
 * Serves a candidate's CV to a signed-in admin.
 *
 * CVs never sit under /public — they're personal data. This route checks the
 * session on every request and streams the file from the storage directory.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getCurrentUser();

  if (!user) {
    return new NextResponse("Unauthorised", { status: 401 });
  }

  const { id } = await params;

  const application = await prisma.application.findUnique({
    where: { id },
    select: { cvPath: true, cvFilename: true, cvMimeType: true },
  });

  if (!application) {
    return new NextResponse("Not found", { status: 404 });
  }

  /* An empty path means storage was misconfigured when this arrived. The CV
     exists — on the notification email — so say that rather than implying the
     candidate never sent one. */
  if (!application.cvPath) {
    return new NextResponse(
      "This CV was never stored: blob storage wasn't configured when the " +
        "application arrived. The file is attached to the notification email " +
        "for this application. Add a Blob store and redeploy so future " +
        "uploads are kept.",
      { status: 409, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  try {
    const file = await read(application.cvPath);

    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": application.cvMimeType,
        "Content-Disposition": `attachment; filename="${application.cvFilename.replace(/"/g, "")}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return new NextResponse("The file is missing from storage.", {
      status: 410,
    });
  }
}
