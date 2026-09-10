import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

import { prisma } from "@/lib/db";
import { serialiseList } from "@/lib/jobs";
import {
  feedEnvelopeSchema,
  feedJobSchema,
  firstIssue,
  mapFeedJob,
} from "@/lib/careers-feed";

/**
 * Nexus careers feed receiver.
 *
 * Accepts a daily batch of open Talent Requests, upserted on the Nexus TR
 * number. Per the contract with the Nexus team:
 *
 *   - Upsert on job_id. Never create a duplicate.
 *   - Idempotent. The same job legitimately arrives four days running, so an
 *     unchanged record is a no-op — not a fresh posting with a bumped date.
 *   - status drives visibility. Absence from a batch means nothing, because
 *     their window only looks back four days.
 *   - Partial success. Three bad records must not reject the other 232.
 *
 * Returns 200 for any batch we processed, whatever the per-record outcome.
 * 4xx and 5xx are reserved for auth failures, malformed envelopes and real
 * server faults — the things they retry.
 */

export const runtime = "nodejs";
/* A 235-record batch is a lot of round trips; well inside Netlify's limit, but
   not something to run on the edge. */
export const maxDuration = 60;

const MAX_BATCH = 300;

export async function POST(request: NextRequest) {
  /* ------------------------------------------------------------- auth */

  const expected = process.env.CAREERS_FEED_TOKEN;

  if (!expected) {
    console.error("[careers-feed] CAREERS_FEED_TOKEN is not set");
    return NextResponse.json(
      { error: "Feed is not configured on this deployment." },
      { status: 503 },
    );
  }

  if (!authorised(request.headers.get("authorization"), expected)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  /* --------------------------------------------------------- envelope */

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Body is not JSON." }, { status: 400 });
  }

  const envelope = feedEnvelopeSchema.safeParse(payload);

  if (!envelope.success) {
    return NextResponse.json(
      { error: `Malformed envelope — ${firstIssue(envelope.error)}` },
      { status: 400 },
    );
  }

  const { jobs } = envelope.data;

  if (jobs.length > MAX_BATCH) {
    return NextResponse.json(
      { error: `Batch too large: ${jobs.length}. Maximum is ${MAX_BATCH}.` },
      { status: 400 },
    );
  }

  /* ---------------------------------------------------------- records */

  let created = 0;
  let updated = 0;
  let unchanged = 0;
  const errors: { job_id: string; reason: string }[] = [];

  let anythingChanged = false;

  for (const raw of jobs) {
    /* Pull the id out first so a record that fails validation can still be
       named in the errors array — "unknown" helps nobody debug. */
    const id =
      typeof raw === "object" && raw !== null && "job_id" in raw
        ? String((raw as { job_id: unknown }).job_id)
        : "unknown";

    const parsed = feedJobSchema.safeParse(raw);

    if (!parsed.success) {
      errors.push({ job_id: id, reason: firstIssue(parsed.error) });
      continue;
    }

    try {
      const outcome = await upsert(parsed.data);

      if (outcome === "created") created++;
      else if (outcome === "updated") updated++;
      else unchanged++;

      if (outcome !== "unchanged") anythingChanged = true;
    } catch (error) {
      errors.push({ job_id: id, reason: reasonFor(error) });
    }
  }

  /* Only bust the cache when something actually moved. A batch of 235
     unchanged records — the normal case on days two, three and four of their
     rolling window — should cost nothing. */
  if (anythingChanged) {
    revalidatePath("/careers");
    revalidatePath("/careers/[slug]", "page");
    revalidatePath("/");
  }

  console.log(
    `[careers-feed] ${jobs.length} received · ${created} created · ${updated} updated · ${unchanged} unchanged · ${errors.length} errors`,
  );

  return NextResponse.json({
    received: jobs.length,
    created,
    updated,
    unchanged,
    errors,
  });
}

/* ------------------------------------------------------------- upsert */

type Outcome = "created" | "updated" | "unchanged";

async function upsert(job: Parameters<typeof mapFeedJob>[0]): Promise<Outcome> {
  const mapped = mapFeedJob(job);

  const existing = await prisma.job.findUnique({
    where: { nexusId: mapped.nexusId },
    select: { id: true, slug: true, contentHash: true, status: true },
  });

  const data = {
    title: mapped.title,
    department: mapped.department,
    location: mapped.location,
    employmentType: mapped.employmentType,
    workplace: mapped.workplace,
    experience: mapped.experience,
    experienceMin: mapped.experienceMin,
    experienceMax: mapped.experienceMax,
    description: mapped.description,
    responsibilities: serialiseList(mapped.responsibilities),
    requirements: serialiseList(mapped.requirements),
    technologies: serialiseList(mapped.technologies),
    niceToHave: serialiseList(mapped.niceToHave),
    status: mapped.status,
    validThrough: mapped.validThrough,
    contentHash: mapped.contentHash,
  };

  if (!existing) {
    await prisma.job.create({
      data: {
        ...data,
        nexusId: mapped.nexusId,
        slug: await freeSlug(mapped.slug, null),
        /* Set once, on first publish, and never moved again — so "Newest"
           stays honest across the four days this record repeats. */
        postedAt: mapped.postedAt,
      },
    });

    return "created";
  }

  /* Their hash covers the publishable fields. When it matches, there is
     nothing to write — but a status change still has to land, because a
     closure is exactly the case where the content is identical. */
  if (
    mapped.contentHash &&
    existing.contentHash === mapped.contentHash &&
    existing.status === mapped.status
  ) {
    return "unchanged";
  }

  await prisma.job.update({
    where: { id: existing.id },
    data: {
      ...data,
      /* Only move the slug if theirs changed and is actually free. Existing
         URLs are already indexed and may be on a candidate's screen. */
      slug:
        mapped.slug === existing.slug
          ? existing.slug
          : await freeSlug(mapped.slug, existing.id),
    },
  });

  return "updated";
}

/**
 * Slugs are unique in our schema and hand-created roles share the namespace,
 * so a collision is possible even though Nexus suffixes with the TR number.
 * Suffix rather than fail — losing a whole role to a name clash would be a
 * poor trade.
 */
async function freeSlug(slug: string, ownId: string | null): Promise<string> {
  const holder = await prisma.job.findUnique({
    where: { slug },
    select: { id: true },
  });

  if (!holder || holder.id === ownId) return slug;

  for (let n = 2; n <= 20; n++) {
    const candidate = `${slug}-${n}`;

    const taken = await prisma.job.findUnique({
      where: { slug: candidate },
      select: { id: true },
    });

    if (!taken) return candidate;
  }

  throw new Error("slug collision");
}

/* ------------------------------------------------------------- helpers */

function authorised(header: string | null, expected: string): boolean {
  if (!header?.startsWith("Bearer ")) return false;

  const supplied = Buffer.from(header.slice(7).trim());
  const target = Buffer.from(expected);

  /* Compare in constant time. Lengths must match first — timingSafeEqual
     throws on a mismatch, which would itself leak the length. */
  if (supplied.length !== target.length) return false;

  return timingSafeEqual(supplied, target);
}

function reasonFor(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);

  /* Prisma's unique-constraint error is the one we expect to see in the wild;
     say which constraint rather than echoing the driver's prose. */
  if (message.includes("Unique constraint")) {
    return message.includes("slug") ? "slug collision" : "duplicate key";
  }

  return message.slice(0, 200);
}
