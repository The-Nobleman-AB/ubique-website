"use client";

import { useState, useTransition } from "react";
import { AlertCircle, Loader2, Terminal } from "lucide-react";

import { fetchSmtpTranscript } from "@/app/admin/email/actions";

export default function SmtpTranscript() {
  const [lines, setLines] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();

  return (
    <div className="px-6 py-5">
      <p className="text-muted mb-4 text-sm leading-relaxed">
        Records the conversation with the mail server, line by line. Shows which
        authentication method was actually offered and exactly what came back —
        the detail the one-line error leaves out. Credentials are redacted.
      </p>

      <button
        type="button"
        disabled={pending}
        onClick={() =>
          start(async () => {
            setError(null);
            setLines(null);
            const result = await fetchSmtpTranscript();
            if (result.error) setError(result.error);
            if (result.lines) setLines(result.lines);
          })
        }
        className="rounded-control border-line text-navy hover:bg-surface inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 size={15} aria-hidden="true" className="animate-spin" />
            Connecting…
          </>
        ) : (
          <>
            <Terminal size={15} aria-hidden="true" />
            Capture the SMTP conversation
          </>
        )}
      </button>

      {error && (
        <p
          role="alert"
          className="text-danger mt-4 flex items-start gap-2 text-sm leading-relaxed"
        >
          <AlertCircle
            size={15}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />
          {error}
        </p>
      )}

      {lines && (
        <pre className="border-line bg-navy mt-4 max-h-96 overflow-auto rounded border p-4 font-mono text-xs leading-relaxed text-white/85">
          {lines.join("\n")}
        </pre>
      )}
    </div>
  );
}
