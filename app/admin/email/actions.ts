"use server";

import { requireUser } from "@/lib/auth";
import {
  EmailNotConfiguredError,
  activeTransport,
  recipients,
  renderRows,
  renderText,
  sendEmail,
  verifySmtp,
} from "@/lib/email";
import { siteConfig } from "@/lib/site";
import type { ActionState } from "@/lib/action-state";

/** Sends a real test message through whatever transport is configured. */
export async function sendTestEmail(
  _prev: ActionState & { ok?: string },
  formData: FormData,
): Promise<ActionState & { ok?: string }> {
  const user = await requireUser();

  const to = String(formData.get("to") ?? "").trim() || user.email;

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) {
    return { error: "Enter a valid email address to send the test to." };
  }

  const transport = activeTransport();

  try {
    /* Catch bad credentials before composing anything. */
    if (transport === "smtp") await verifySmtp();

    await sendEmail({
      to: [to],
      subject: `Test message from the ${siteConfig.name} website`,
      html: renderRows(
        "Email is working",
        [
          { label: "Transport", value: transport },
          { label: "Sent by", value: `${user.name} (${user.email})` },
          {
            label: "Enquiries go to",
            value: recipients("CONTACT_TO").join(", "),
          },
          {
            label: "Applications go to",
            value: recipients("CAREERS_TO").join(", "),
          },
          { label: "Sent at", value: new Date().toUTCString() },
        ],
        {
          label: "What this confirms",
          value:
            "The contact form and job application will deliver through this same path. If this arrived, both forms are live.",
        },
      ),
      text: renderText("Email is working", [
        { label: "Transport", value: transport },
        { label: "Sent at", value: new Date().toUTCString() },
      ]),
    });

    return {
      ok:
        transport === "file"
          ? `Written to storage/outbox as an .eml file — open it to check the formatting. Configure SMTP or Resend to send for real.`
          : `Sent to ${to} via ${transport}. Check the inbox (and the spam folder).`,
    };
  } catch (error) {
    if (error instanceof EmailNotConfiguredError) {
      return { error: error.message };
    }

    return { error: explain(error) };
  }
}

/**
 * Mail servers return accurate but unhelpful errors. These are the failures we
 * actually expect with Microsoft 365, translated into the next thing to do.
 */
function explain(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error);

  const patterns: [RegExp, string][] = [
    [
      /AADSTS7000215|invalid_client|invalid client secret/i,
      "Azure rejected the client secret. Secrets expire — check the expiry on the app registration (Azure portal → App registrations → your app → Certificates & secrets) and generate a new one if it has lapsed. Note that you need the secret *Value*, not the Secret ID.",
    ],
    [
      /AADSTS700016|AADSTS900023|application with identifier|was not found in the directory/i,
      "Azure couldn't find that application in the tenant. Check SMTP_CLIENT_ID and SMTP_TENANT_ID — the tenant ID must be the one that owns ubique-systems.com, and admin consent must have been granted for the SMTP.SendAsApp permission.",
    ],
    [
      /5\.7\.57|Client not authenticated to send|must issue a STARTTLS/i,
      "Microsoft accepted the token but won't let this app send as that mailbox. The service principal needs mailbox rights, which is a PowerShell step the Azure portal doesn't cover: New-ServicePrincipal, then Add-MailboxPermission for the sending mailbox. See the setup notes below.",
    ],
    [
      /SmtpClientAuthentication is disabled/i,
      "Microsoft 365 has SMTP AUTH disabled for this mailbox. An admin can enable it: Microsoft 365 admin centre → Users → Active users → select the mailbox → Mail → Manage email apps → tick 'Authenticated SMTP'. It can take an hour to apply. Worth knowing: Microsoft disables basic SMTP AUTH by default for existing tenants from December 2026, so this is a stopgap — the durable fix is OAuth (see the setup notes below).",
    ],
    [
      /5\.7\.139|basic authentication is disabled|AuthenticationFailed/i,
      "Microsoft rejected the sign-in. If multi-factor authentication is on for this account, a normal password won't work — create an app password, or switch to a relay connector that authenticates by IP instead of credentials.",
    ],
    [
      /535|Authentication unsuccessful|Invalid login|BadCredentials/i,
      "The username or password was rejected. Check SMTP_USER is the full email address, and that SMTP_PASS is correct — an app password if MFA is enabled.",
    ],
    [
      /5\.7\.60|SendAsDenied|not allowed to send as/i,
      "The account isn't allowed to send as the address in CONTACT_FROM. Either set CONTACT_FROM to the same mailbox as SMTP_USER, or grant that mailbox Send As permission on the shared address.",
    ],
    [
      /ECONNREFUSED|ETIMEDOUT|ENOTFOUND|EAI_AGAIN/i,
      "Couldn't reach the mail server. Check SMTP_HOST and SMTP_PORT (Microsoft 365 uses smtp.office365.com on port 587), and that outbound port 587 isn't blocked on this network or host.",
    ],
    [
      /self.signed|certificate|SSL|TLS/i,
      "TLS negotiation failed. Port 587 should use STARTTLS and port 465 implicit TLS — check SMTP_PORT matches what your server expects.",
    ],
    [
      /rate|throttl|quota|too many/i,
      "The mail server is throttling. Microsoft 365 limits a mailbox to roughly 30 messages a minute and 10,000 recipients a day — fine for form volume, but worth knowing.",
    ],
  ];

  for (const [pattern, advice] of patterns) {
    if (pattern.test(raw)) return `${advice}\n\nServer said: ${raw}`;
  }

  return `The mail server rejected it: ${raw}`;
}
