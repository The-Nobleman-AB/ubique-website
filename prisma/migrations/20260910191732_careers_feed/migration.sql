-- Columns the Nexus careers feed writes into.

ALTER TABLE "Job" ADD COLUMN "nexusId" TEXT;
ALTER TABLE "Job" ADD COLUMN "contentHash" TEXT;
ALTER TABLE "Job" ADD COLUMN "niceToHave" TEXT NOT NULL DEFAULT '[]';
ALTER TABLE "Job" ADD COLUMN "experienceMin" INTEGER;
ALTER TABLE "Job" ADD COLUMN "experienceMax" INTEGER;

-- Unique so the feed can upsert on the TR number, partial-safe because
-- hand-created roles leave it null and Postgres allows many nulls in a
-- unique index.
CREATE UNIQUE INDEX "Job_nexusId_key" ON "Job"("nexusId");
CREATE INDEX "Job_nexusId_idx" ON "Job"("nexusId");
