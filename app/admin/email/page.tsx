import { CheckCircle2, CircleAlert, Inbox, Mail } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { activeTransport, recipients } from "@/lib/email";
import { Panel } from "@/components/admin/ui";
import TestEmailForm from "@/components/admin/TestEmailForm";

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
        </div>
      </div>

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
            Option 1 — SMTP AUTH (start here)
          </p>
          <pre className="bg-surface border-line mt-3 overflow-x-auto rounded border p-4 text-xs">
            {`SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_USER="noreply@ubique-systems.com"
SMTP_PASS="…"
CONTACT_FROM="Ubique Systems <noreply@ubique-systems.com>"
CONTACT_TO="info@ubique-systems.com"
CAREERS_TO="careers@ubique-systems.com"`}
          </pre>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">
            <li>Create or pick a licensed mailbox to send from.</li>
            <li>
              Admin centre → Users → Active users → that mailbox → Mail → Manage
              email apps → tick <strong>Authenticated SMTP</strong>.
            </li>
            <li>
              If MFA is on for that account, generate an{" "}
              <strong>app password</strong> — a normal password will be
              rejected.
            </li>
            <li>
              Put the block above in{" "}
              <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
                .env.local
              </code>
              , restart, then send a test from this page.
            </li>
          </ol>

          <p className="text-navy mt-6 font-medium">
            Option 2 — SMTP relay connector (if AUTH is disabled)
          </p>
          <p className="mt-2 text-sm">
            Microsoft has been retiring basic authentication for SMTP client
            submission. If Option 1 fails with{" "}
            <em>&ldquo;SmtpClientAuthentication is disabled&rdquo;</em> and an
            admin can&rsquo;t re-enable it, use a connector instead: Exchange
            admin centre → Mail flow → Connectors → from{" "}
            <strong>Your organisation&rsquo;s email server</strong> to{" "}
            <strong>Office 365</strong>, authenticating by the server&rsquo;s
            static IP. Then point{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              SMTP_HOST
            </code>{" "}
            at your tenant&rsquo;s MX endpoint on port 25 and leave{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              SMTP_USER
            </code>{" "}
            empty — no password involved.
          </p>

          <p className="text-navy mt-6 font-medium">
            Option 3 — Resend (needs an SPF change first)
          </p>
          <p className="mt-2 text-sm">
            Workable, but because SPF ends in{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              -all
            </code>{" "}
            you must add{" "}
            <code className="bg-surface rounded px-1.5 py-0.5 text-xs">
              include:_spf.resend.com
            </code>{" "}
            to the domain&rsquo;s SPF record and verify the domain in Resend, or
            everything will bounce. Only worth it if you&rsquo;d rather not put
            a mailbox credential in the app at all.
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
