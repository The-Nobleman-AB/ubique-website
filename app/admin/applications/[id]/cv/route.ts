import { readFile } from "node:fs/promises";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

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

  try {
    const file = await readFile(application.cvPath);

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
