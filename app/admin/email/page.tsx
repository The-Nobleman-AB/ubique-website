import { CheckCircle2, CircleAlert, Inbox, Mail } from "lucide-react";

import { requireUser } from "@/lib/auth";
import {
  activeTransport,
  recipients,
  senderMismatch,
  smtpAuthMode,
} from "@/lib/email";
import { Panel } from "@/components/admin/ui";
import TestEmailForm from "@/components/admin/TestEmailForm";
import OAuthDiagnostic from "@/components/admin/OAuthDiagnostic";

export const metadata = { title: "Email" };
export const dynamic = "force-dynamic";

const DESCRIPTIONS: Record<
  string,
  { label: string; body: string; tone: "ok" | "warn" | "bad" }
> = {
  smtp: {
    label: "SMTP",
    body: "Sending through your own mail server. Messages come from your domain, so deliverability matches your normal email.",
    tone: "ok",
  },
  resend: {
    label: "Resend",
    body: "Sending through the Resend API. The sending domain must be verified in your Resend account.",
    tone: "ok",
  },
  file: {
    label: "Outbox (development)",
    body: "Nothing is being sent. Each message is written to storage/outbox as an .eml file you can open in a mail client — useful for checking the wording and layout before going live.",
    tone: "warn",
  },
  none: {
    label: "Not configured",
    body: "Both forms will return a clear error telling the visitor to email instead. Nothing is silently lost, but nothing is being delivered either.",
    tone: "bad",
  },
};

export default async function EmailSettingsPage() {
  await requireUser();

  const transport = activeTransport();
  const info = DESCRIPTIONS[transport];

  const authMode = transport === "smtp" ? smtpAuthMode() : null;
  const mismatch = senderMismatch();

  const AUTH_LABELS: Record<string, string> = {
    oauth2: "Authenticating with OAuth — no mailbox password stored.",
    basic:
      "Authenticating with a username and password. Works today, but Microsoft disables this by default from December 2026 — plan to move to OAuth.",
    none: "No credentials set — this only works against a relay that trusts this host's IP address.",
  };

  const tone =
    info.tone === "ok"
      ? "border-accent/30 bg-accent-tint"
      : info.tone === "warn"
        ? "border-warn/30 bg-warn/5"
        : "border-danger/30 bg-danger/5";

  const Icon = info.tone === "ok" ? CheckCircle2 : CircleAlert;

  return (
    <>
      <h1 className="display-3 text-navy font-bold">Email</h1>
      <p className="text-muted mt-2">
        Where enquiries and applications are delivered, and whether it&rsquo;s
        working.
      </p>

      <div
        className={`rounded-card mt-8 flex items-start gap-4 border p-6 ${tone}`}
      >
        <Icon
          size={22}
          aria-hidden="true"
          className={`mt-0.5 shrink-0 ${
            info.tone === "ok"
              ? "text-accent-dark"
              : info.tone === "warn"
                ? "text-warn"
                : "text-danger"
          }`}
        />
        <div>
          <p className="text-navy font-semibold">Transport: {info.label}</p>
          <p className="text-muted mt-2 leading-relaxed">{info.body}</p>
          {authMode && (
            <p className="text-muted mt-2 text-sm leading-relaxed">
              {AUTH_LABELS[authMode]}
            </p>
          )}
        </div>
      </div>

      {mismatch && (
        <div
          role="alert"
          className="rounded-card border-warn/30 bg-warn/5 mt-6 flex items-start gap-4 border p-6"
        >
          <CircleAlert
            size={22}
            aria-hidden="true"
            className="text-warn mt-0.5 shrink-0"
          />
          <div>
            <p className="text-navy font-semibold">
              The From address isn&rsquo;t the mailbox signing in
            </p>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Messages are addressed from{" "}
              <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
                {mismatch.from}
              </code>{" "}
              but authenticate as{" "}
              <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
                {mismatch.user}
              </code>
              . Microsoft 365 rejects that with <em>5.7.60 SendAsDenied</em>{" "}
              unless the signing-in mailbox has been granted{" "}
              <strong>Send As</strong> rights on the other address. Either set{" "}
              <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
                CONTACT_FROM
              </code>{" "}
              to the same mailbox as{" "}
              <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
                SMTP_USER
              </code>
              , or grant the permission in Exchange.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Panel title="Where messages go">
          <dl className="divide-line divide-y">
            <div className="flex items-start gap-4 px-6 py-4">
              <Mail
                size={17}
                aria-hidden="true"
                className="text-muted mt-0.5"
              />
              <div>
                <dt className="text-muted text-sm">Contact enquiries</dt>
                <dd className="text-navy mt-0.5 font-medium">
                  {recipients("CONTACT_TO").join(", ")}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4 px-6 py-4">
              <Inbox
                size={17}
                aria-hidden="true"
                className="text-muted mt-0.5"
              />
              <div>
                <dt className="text-muted text-sm">Job applications</dt>
                <dd className="text-navy mt-0.5 font-medium">
                  {recipients("CAREERS_TO").join(", ")}
                </dd>
              </div>
            </div>
          </dl>

          <p className="text-muted border-line border-t px-6 py-4 text-sm leading-relaxed">
            Set with{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              CONTACT_TO
            </code>{" "}
            and{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              CAREERS_TO
            </code>{" "}
            — comma-separate several addresses.
          </p>
        </Panel>

        <Panel title="Send a test">
          <TestEmailForm />
        </Panel>
      </div>

      {authMode === "oauth2" && (
        <Panel title="Diagnose OAuth" className="mt-6">
          <OAuthDiagnostic />
        </Panel>
      )}

      <Panel title="How to switch it on" className="mt-6">
        <div className="text-muted px-6 py-5 leading-relaxed">
          <p className="text-navy font-medium">
            This domain runs on Microsoft 365
          </p>
          <p className="mt-2 text-sm">
            The MX records point at Exchange Online, and SPF is set to{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              -all
            </code>{" "}
            — a hard fail. That means any sender other than Microsoft will be
            rejected unless SPF is changed first, so sending through Microsoft
            365 itself is both the quickest and the safest route.
          </p>

          <p className="text-navy mt-6 font-medium">
            Option 1 — Microsoft 365 with OAuth (recommended)
          </p>
          <p className="mt-2 text-sm">
            No mailbox password is stored anywhere; the app exchanges an Azure
            client secret for a short-lived token on each send. Microsoft
            disables basic SMTP AUTH by default for existing tenants from
            December 2026, so this is where the tenant ends up regardless.
          </p>
          <pre className="bg-surface border-line mt-3 overflow-x-auto rounded border p-4 text-xs">
            {`SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_TENANT_ID="…"
SMTP_CLIENT_ID="…"
SMTP_CLIENT_SECRET="…"
SMTP_USER="relay@ubique-systems.com"
CONTACT_FROM="Ubique Systems <relay@ubique-systems.com>"`}
          </pre>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">
            <li>
              Azure portal → App registrations → New registration. Name it
              something like &ldquo;Website mail&rdquo;. No redirect URI needed.
            </li>
            <li>
              API permissions → Add → APIs my organisation uses →{" "}
              <strong>Office 365 Exchange Online</strong> → Application
              permissions → <strong>SMTP.SendAsApp</strong>. Then{" "}
              <strong>Grant admin consent</strong>.
            </li>
            <li>
              Certificates &amp; secrets → New client secret. Copy the{" "}
              <strong>Value</strong> (not the Secret ID) — it&rsquo;s shown
              once. Note the expiry date and put a reminder in the calendar.
            </li>
            <li>
              In Exchange Online PowerShell, give the app rights to the mailbox
              — the portal has no equivalent:
              <pre className="bg-surface border-line mt-2 overflow-x-auto rounded border p-3 text-xs">
                {`New-ServicePrincipal -AppId <client-id> \\
  -ObjectId <enterprise-app-object-id>

Add-MailboxPermission -Identity "relay@ubique-systems.com" \\
  -User <enterprise-app-object-id> -AccessRights FullAccess`}
              </pre>
            </li>
            <li>Set the variables above, redeploy, and send a test here.</li>
          </ol>

          <p className="text-navy mt-6 font-medium">
            Option 2 — Microsoft 365 with a password (fastest today)
          </p>
          <p className="mt-2 text-sm">
            Fewer moving parts, and it works right now — but it&rsquo;s a
            stopgap with a known end date. Reasonable if you want mail live this
            week and OAuth scheduled properly afterwards.
          </p>
          <pre className="bg-surface border-line mt-3 overflow-x-auto rounded border p-4 text-xs">
            {`SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_USER="relay@ubique-systems.com"
SMTP_PASS="…"
CONTACT_FROM="Ubique Systems <relay@ubique-systems.com>"`}
          </pre>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">
            <li>Create or pick a licensed mailbox to send from.</li>
            <li>
              Admin centre → Users → Active users → that mailbox → Mail → Manage
              email apps → tick <strong>Authenticated SMTP</strong>. Allow up to
              an hour to apply.
            </li>
            <li>
              If MFA is on for that account, generate an{" "}
              <strong>app password</strong> — a normal password will be
              rejected.
            </li>
          </ol>

          <p className="text-navy mt-6 font-medium">
            Option 3 — Resend (needs an SPF change first)
          </p>
          <p className="mt-2 text-sm">
            Decouples website mail from the corporate tenant entirely, which is
            the better security posture — no Microsoft credential in the web app
            at all. But because SPF ends in{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              -all
            </code>{" "}
            you must add{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              include:_spf.resend.com
            </code>{" "}
            to the domain&rsquo;s SPF record and verify the domain in Resend, or
            everything will bounce.
          </p>

          <p className="mt-6 text-sm">
            Whichever you choose, come back here and send a test — the error
            messages on this page are written to tell you the next step.
          </p>
        </div>
      </Panel>
    </>
  );
}
