-- Consent versioning, and the collection flag Nexus sets.

ALTER TABLE "Application" ADD COLUMN "consentTextVersion" TEXT;
ALTER TABLE "Application" ADD COLUMN "collectedAt" TIMESTAMP(3);

-- Uncollected, oldest first — the query the poller runs every 15 minutes.
CREATE INDEX "Application_collectedAt_createdAt_idx"
  ON "Application"("collectedAt", "createdAt");
