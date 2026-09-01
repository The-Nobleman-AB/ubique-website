import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import nodemailer from "nodemailer";

import { siteConfig } from "@/lib/site";

/**
 * Email delivery.
 *
 * Three transports, chosen automatically from the environment so the site can
 * send real mail on whatever the business already has:
 *
 *   smtp    SMTP_HOST is set — Microsoft 365, Google Workspace, or any relay.
 *           Usually the fastest route to working mail, because no new vendor
 *           account or domain verification is involved.
 *
 *   resend  RESEND_API_KEY is set — good if you'd rather not put mailbox
 *           credentials in the app. Needs a domain verified with Resend.
 *
 *   file    Neither is set and EMAIL_TRANSPORT=file (the default in
 *           development). Writes each message to storage/outbox as an .eml
 *           file you can open in any mail client. Nothing leaves the machine,
 *           but the whole path is exercised — so you can prove the forms work
 *           before wiring up a provider.
 *
 * In production with nothing configured, sending throws
 * EmailNotConfiguredError and the API routes fail loudly rather than
 * pretending a message was sent.
 */

const OUTBOX_DIR = path.join(process.cwd(), "storage", "outbox");

export type Transport = "smtp" | "resend" | "file" | "none";

export class EmailNotConfiguredError extends Error {
  constructor(reason: string) {
    super(`Email is not configured: ${reason}`);
    this.name = "EmailNotConfiguredError";
  }
}

/** Which transport the current environment resolves to. */
export function activeTransport(): Transport {
  const forced = process.env.EMAIL_TRANSPORT as Transport | undefined;

  if (forced && forced !== "none") {
    if (forced === "file" && process.env.NODE_ENV === "production") {
      /* Would write to a read-only filesystem and lose the message. */
      return process.env.SMTP_HOST
        ? "smtp"
        : process.env.RESEND_API_KEY
          ? "resend"
          : "none";
    }
    return forced;
  }

  if (process.env.SMTP_HOST) return "smtp";
  if (process.env.RESEND_API_KEY) return "resend";

  /* Development falls back to the outbox so the forms are testable. The
     outbox writes to disk, which serverless hosts don't allow — so it is
     never selected in production, even if EMAIL_TRANSPORT asks for it. */
  return process.env.NODE_ENV === "production" ? "none" : "file";
}

export interface Attachment {
  filename: string;
  /** Base64-encoded file content. */
  content: string;
}

export interface SendEmailOptions {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: Attachment[];
}

export function recipients(key: "CONTACT_TO" | "CAREERS_TO"): string[] {
  const raw = process.env[key] ?? "";

  const list = raw
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  /* Fall back to the general inbox rather than dropping the message. */
  return list.length > 0 ? list : [siteConfig.email];
}

function sender(): string {
  return (
    process.env.CONTACT_FROM ??
    process.env.SMTP_USER ??
    `${siteConfig.name} <noreply@ubique-systems.com>`
  );
}

/* ------------------------------------------------------------------ send */

export async function sendEmail(options: SendEmailOptions): Promise<Transport> {
  if (options.to.length === 0) {
    throw new EmailNotConfiguredError("no recipients configured");
  }

  const transport = activeTransport();

  switch (transport) {
    case "smtp":
      await sendViaSmtp(options);
      return "smtp";

    case "resend":
      await sendViaResend(options);
      return "resend";

    case "file":
      await sendToOutbox(options);
      return "file";

    default:
      throw new EmailNotConfiguredError(
        "set SMTP_HOST (with SMTP_USER/SMTP_PASS) or RESEND_API_KEY",
      );
  }
}

/* ------------------------------------------------------------------ smtp */

/**
 * How we authenticate to the SMTP server.
 *
 *   oauth2  Microsoft 365 with an Azure app registration. Microsoft disables
 *           basic SMTP AUTH by default for existing tenants from December
 *           2026 and removes it entirely after that, so this is where every
 *           Microsoft tenant ends up. No mailbox password is involved.
 *
 *   basic   Username and password (an app password where MFA is on). Still
 *           works, but on a clock — see above.
 *
 *   none    An unauthenticated relay: a connector that trusts this host's IP,
 *           or a local MTA. Nothing to send.
 */
export type SmtpAuthMode = "oauth2" | "basic" | "none";

export function smtpAuthMode(): SmtpAuthMode {
  if (
    process.env.SMTP_TENANT_ID &&
    process.env.SMTP_CLIENT_ID &&
    process.env.SMTP_CLIENT_SECRET
  ) {
    return "oauth2";
  }

  if (process.env.SMTP_USER && process.env.SMTP_PASS) return "basic";

  return "none";
}

/* Tokens last about an hour. Cache until shortly before expiry rather than
   asking Microsoft for a new one on every enquiry. */
let cachedToken: { value: string; expiresAt: number } | null = null;

async function microsoftAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 120_000) {
    return cachedToken.value;
  }

  const tenant = process.env.SMTP_TENANT_ID!;

  const response = await fetch(
    `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.SMTP_CLIENT_ID!,
        client_secret: process.env.SMTP_CLIENT_SECRET!,
        /* The SMTP scope specifically. Graph tokens are rejected by the
           SMTP endpoint even though the app registration looks identical. */
        scope: "https://outlook.office365.com/.default",
        grant_type: "client_credentials",
      }),
    },
  );

  const payload = (await response.json().catch(() => ({}))) as {
    access_token?: string;
    expires_in?: number;
    error_description?: string;
  };

  if (!response.ok || !payload.access_token) {
    throw new Error(
      `Microsoft refused the OAuth token (${response.status}): ${
        payload.error_description ?? "no detail returned"
      }`,
    );
  }

  cachedToken = {
    value: payload.access_token,
    expiresAt: Date.now() + (payload.expires_in ?? 3600) * 1000,
  };

  return cachedToken.value;
}

let cachedTransporter: nodemailer.Transporter | null = null;

async function smtpTransporter(): Promise<nodemailer.Transporter> {
  const host = process.env.SMTP_HOST;

  if (!host) throw new EmailNotConfiguredError("SMTP_HOST is not set");

  const port = Number(process.env.SMTP_PORT ?? 587);
  const mode = smtpAuthMode();

  const base = {
    host,
    port,
    /* 465 is implicit TLS; 587 upgrades with STARTTLS. */
    secure: port === 465,
    /* Serverless functions have a hard wall-clock limit, and a mail server
       that never answers would otherwise burn all of it and return nothing
       useful. Fail fast enough to show the visitor a real error. */
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  };

  if (mode === "oauth2") {
    /* Built per send: the access token rotates, so this one can't be cached
       the way a static username and password can. */
    return nodemailer.createTransport({
      ...base,
      auth: {
        type: "OAuth2",
        user: process.env.SMTP_USER ?? sendingMailbox(),
        accessToken: await microsoftAccessToken(),
      },
    });
  }

  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    ...base,
    auth:
      mode === "basic"
        ? { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! }
        : undefined,
  });

  return cachedTransporter;
}

/**
 * Exchange Online refuses to send when the From address isn't the mailbox that
 * authenticated — 5.7.60 SendAsDenied — unless that mailbox has been granted
 * explicit Send As rights on the other address.
 *
 * It is far and away the most common way this setup fails, and it fails at
 * send time, on a real enquiry. Surface it on the settings page instead.
 */
export function senderMismatch(): { from: string; user: string } | null {
  if (activeTransport() !== "smtp") return null;

  const user = process.env.SMTP_USER?.trim().toLowerCase();

  if (!user) return null;

  const from = sendingMailbox().toLowerCase();

  if (!from || from === user) return null;

  return { from, user };
}

/** The mailbox we authenticate as, pulled out of CONTACT_FROM if need be. */
function sendingMailbox(): string {
  const from = process.env.CONTACT_FROM ?? "";
  const match = from.match(/<([^>]+)>/);

  return (match ? match[1] : from).trim();
}

async function sendViaSmtp(options: SendEmailOptions): Promise<void> {
  const transporter = await smtpTransporter();

  await transporter.sendMail({
    from: sender(),
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
    replyTo: options.replyTo,
    attachments: options.attachments?.map((attachment) => ({
      filename: attachment.filename,
      content: Buffer.from(attachment.content, "base64"),
    })),
  });
}

/** Checks the SMTP credentials without sending anything. */
export async function verifySmtp(): Promise<void> {
  const transporter = await smtpTransporter();
  await transporter.verify();
}

/* ---------------------------------------------------------------- resend */

async function sendViaResend(options: SendEmailOptions): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender(),
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      ...(options.replyTo ? { reply_to: options.replyTo } : {}),
      ...(options.attachments?.length
        ? { attachments: options.attachments }
        : {}),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Resend rejected the message (${response.status}): ${detail.slice(0, 500)}`,
    );
  }
}

/* ----------------------------------------------------------------- file */

/** Writes a real RFC 822 message so it opens in Mail, Outlook or Thunderbird. */
async function sendToOutbox(options: SendEmailOptions): Promise<void> {
  const message = await nodemailer
    .createTransport({ streamTransport: true, buffer: true })
    .sendMail({
      from: sender(),
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      replyTo: options.replyTo,
      attachments: options.attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: Buffer.from(attachment.content, "base64"),
      })),
    });

  await mkdir(OUTBOX_DIR, { recursive: true });

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const slug = options.subject
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);

  const file = path.join(OUTBOX_DIR, `${stamp}--${slug}.eml`);

  await writeFile(file, message.message as Buffer);

  console.log(
    `[email] Written to outbox: ${path.relative(process.cwd(), file)}`,
  );
}

/* ---------------------------------------------------------------- render */

/** Escapes user-supplied text before it goes into an HTML email body. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface Row {
  label: string;
  value: string;
}

/** A plain, client-safe HTML table — no external CSS, no images. */
export function renderRows(title: string, rows: Row[], body?: Row): string {
  const cells = rows
    .filter((row) => row.value)
    .map(
      (row) => `
        <tr>
          <td style="padding:8px 16px 8px 0;color:#667085;font-size:14px;vertical-align:top;white-space:nowrap;">${escapeHtml(row.label)}</td>
          <td style="padding:8px 0;color:#101828;font-size:14px;vertical-align:top;">${escapeHtml(row.value)}</td>
        </tr>`,
    )
    .join("");

  const bodyBlock = body?.value
    ? `
      <h2 style="margin:32px 0 8px;font-size:14px;color:#667085;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">${escapeHtml(body.label)}</h2>
      <div style="padding:16px;background:#f8fafc;border:1px solid #e4e7ec;border-radius:8px;color:#101828;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(body.value)}</div>`
    : "";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:32px;background:#ffffff;border:1px solid #e4e7ec;border-radius:12px;">
      <p style="margin:0 0 4px;font-size:12px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#155eef;">${escapeHtml(siteConfig.name)}</p>
      <h1 style="margin:0 0 24px;font-size:20px;color:#071b3a;">${escapeHtml(title)}</h1>
      <table style="width:100%;border-collapse:collapse;">${cells}</table>
      ${bodyBlock}
      <p style="margin:32px 0 0;padding-top:16px;border-top:1px solid #e4e7ec;font-size:12px;color:#667085;">
        Sent from the ${escapeHtml(siteConfig.name)} website.
      </p>
    </div>
  </body>
</html>`;
}

export function renderText(title: string, rows: Row[], body?: Row): string {
  const lines = rows
    .filter((row) => row.value)
    .map((row) => `${row.label}: ${row.value}`);

  if (body?.value) {
    lines.push("", `${body.label}:`, body.value);
  }

  return [title, "=".repeat(title.length), "", ...lines].join("\n");
}
