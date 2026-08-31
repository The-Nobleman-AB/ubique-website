import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

/** CSV of active subscribers, for whatever the team sends campaigns with. */
export async function GET() {
  const user = await getCurrentUser();

  if (!user) return new NextResponse("Unauthorised", { status: 401 });

  const subscribers = await prisma.subscriber.findMany({
    where: { unsubscribedAt: null },
    orderBy: { createdAt: "desc" },
  });

  /* Quote every field — an address with a comma would otherwise split the row. */
  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const csv = [
    "email,source,subscribed_at",
    ...subscribers.map((s) =>
      [escape(s.email), escape(s.source), escape(s.createdAt.toISOString())].join(","),
    ),
  ].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="ubique-subscribers-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "private, no-store",
    },
  });
}
