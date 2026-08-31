import { CheckCircle2, CircleAlert, XCircle } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { activeDriver, blobAuth } from "@/lib/storage";
import { activeTransport, recipients } from "@/lib/email";
import { Panel } from "@/components/admin/ui";
import TestStorageButton from "@/components/admin/TestStorageButton";

export const metadata = { title: "System" };
export const dynamic = "force-dynamic";

/**
 * What's actually configured in the environment this is running in.
 *
 * Exists because "I created the Blob store but there's no token" is only
 * answerable by looking at what the running process can see — the dashboard
 * shows what you configured, not what reached the function.
 *
 * Values are never printed, only whether they're present. Nothing here leaks a
 * credential to anyone who can read the page.
 */

type Level = "ok" | "warn" | "bad";

function Row({
  label,
  value,
  level,
  detail,
  action,
}: {
  label: string;
  value: string;
  level: Level;
  detail?: string;
  action?: React.ReactNode;
}) {
  const Icon =
    level === "ok" ? CheckCircle2 : level === "warn" ? CircleAlert : XCircle;

  const tone =
    level === "ok"
      ? "text-accent-dark"
      : level === "warn"
        ? "text-warn"
        : "text-danger";

  return (
    <div className="border-line grid gap-2 border-b px-6 py-4 last:border-b-0 sm:grid-cols-3 sm:gap-6">
      <dt className="text-navy flex items-start gap-2.5 font-medium">
        <Icon
          size={17}
          aria-hidden="true"
          className={`mt-0.5 shrink-0 ${tone}`}
        />
        {label}
      </dt>
      <dd className="sm:col-span-2">
        <p className="text-navy">{value}</p>
        {detail && (
          <p className="text-muted mt-1 text-sm leading-relaxed">{detail}</p>
        )}
        {action && <div className="mt-4">{action}</div>}
      </dd>
    </div>
  );
}

export default async function SystemPage() {
  await requireUser();

  /* --- database --- */
  let dbStatus = "Connected";
  let dbLevel: Level = "ok";
  let dbDetail = "";

  try {
    const [jobs, applications] = await Promise.all([
      prisma.job.count(),
      prisma.application.count(),
    ]);
    dbDetail = `${jobs} role${jobs === 1 ? "" : "s"}, ${applications} application${applications === 1 ? "" : "s"}.`;
  } catch (error) {
    dbStatus = "Unreachable";
    dbLevel = "bad";
    dbDetail =
      error instanceof Error ? error.message.slice(0, 200) : "Unknown error.";
  }

  const url = process.env.DATABASE_URL ?? "";
  const dbKind = url.startsWith("postgres")
    ? url.includes("-pooler") || url.includes("pgbouncer")
      ? "Postgres (pooled)"
      : "Postgres (direct — use the pooled string on serverless)"
    : url
      ? "Not Postgres"
      : "DATABASE_URL not set";

  /* --- storage --- */
  const driver = activeDriver();
  const auth = blobAuth();

  const storage: { value: string; level: Level; detail: string } =
    driver === "blob"
      ? {
          value: `Vercel Blob — ${auth === "oidc" ? "OIDC" : "read-write token"}`,
          level: "ok",
          detail:
            auth === "oidc"
              ? "Authenticating with BLOB_STORE_ID and a short-lived OIDC token. There is no BLOB_READ_WRITE_TOKEN to find — that's expected for newer stores."
              : "Authenticating with BLOB_READ_WRITE_TOKEN.",
        }
      : driver === "disk"
        ? {
            value: "Local disk",
            level: "warn",
            detail:
              "Fine in development. On a serverless host this would fail — the filesystem is read-only.",
          }
        : {
            value: "Not configured",
            level: "bad",
            detail:
              "CV uploads will fail. Connect a Blob store to this project (Storage → your store → Connect Project) and redeploy. Applications are still saved; the CV rides on the notification email instead.",
          };

  /* --- email --- */
  const transport = activeTransport();

  const email: { value: string; level: Level; detail: string } =
    transport === "smtp" || transport === "resend"
      ? {
          value: transport === "smtp" ? "SMTP" : "Resend",
          level: "ok",
          detail: `Enquiries → ${recipients("CONTACT_TO").join(", ")} · Applications → ${recipients("CAREERS_TO").join(", ")}`,
        }
      : transport === "file"
        ? {
            value: "Outbox (development)",
            level: "warn",
            detail:
              "Messages are written to storage/outbox as .eml files. Nothing is sent.",
          }
        : {
            value: "Not configured",
            level: "bad",
            detail:
              "Both forms return a clear error rather than sending. Applications are still saved to the database.",
          };

  return (
    <>
      <h1 className="display-3 text-navy font-bold">System</h1>
      <p className="text-muted mt-2">
        What this deployment can actually see. Useful when the dashboard says
        one thing and the app behaves differently.
      </p>

      <Panel title="Configuration" className="mt-8">
        <dl>
          <Row
            label="Database"
            value={dbStatus}
            level={dbLevel}
            detail={`${dbKind}. ${dbDetail}`}
          />
          <Row
            label="CV storage"
            value={storage.value}
            level={storage.level}
            detail={storage.detail}
            action={<TestStorageButton />}
          />
          <Row
            label="Email"
            value={email.value}
            level={email.level}
            detail={email.detail}
          />
          <Row
            label="Site URL"
            value={process.env.NEXT_PUBLIC_SITE_URL ?? "Not set"}
            level={process.env.NEXT_PUBLIC_SITE_URL ? "ok" : "warn"}
            detail="Used for canonicals, the sitemap and OG tags. Without it, robots.txt blocks indexing — which is correct for previews and wrong for production."
          />
          <Row
            label="Environment"
            value={process.env.NODE_ENV ?? "unknown"}
            level="ok"
            detail={
              process.env.VERCEL_ENV
                ? `Vercel: ${process.env.VERCEL_ENV}`
                : "Not running on Vercel."
            }
          />
        </dl>
      </Panel>

      <p className="text-muted mt-6 text-sm leading-relaxed">
        Only presence is shown — no credential value is ever rendered on this
        page.
      </p>
    </>
  );
}
