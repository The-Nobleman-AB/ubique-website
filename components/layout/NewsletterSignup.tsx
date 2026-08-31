"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

/**
 * Newsletter signup.
 *
 * The live ubique-systems.com has one and the rebuild had dropped it — it's
 * the only low-commitment way for someone who isn't ready to enquire to stay
 * in contact.
 */
export default function NewsletterSignup({
  source = "footer",
}: {
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "busy" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("busy");
    setMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, company }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setMessage(result.error ?? "That didn't work. Please try again.");
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("done");
    } catch {
      setMessage("We couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80">
        <CheckCircle2
          size={17}
          aria-hidden="true"
          className="text-accent mt-0.5 shrink-0"
        />
        You&rsquo;re on the list. We send market commentary and notable roles —
        not often, and never a sales blast.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label
        htmlFor="newsletter-email"
        className="mb-2 block text-sm text-white/70"
      >
        Hiring market commentary and notable roles. No more than monthly.
      </label>

      <div className="flex flex-wrap gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          aria-invalid={status === "error"}
          className="rounded-control focus:border-accent min-w-0 flex-1 border border-white/20 bg-white/5 px-4 py-3 text-white transition-colors placeholder:text-white/40"
        />

        <button
          type="submit"
          disabled={status === "busy"}
          className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition-colors disabled:opacity-60"
        >
          {status === "busy" ? (
            <Loader2 size={16} aria-hidden="true" className="animate-spin" />
          ) : (
            <>
              Subscribe
              <ArrowRight size={15} aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="newsletter-company">Company</label>
        <input
          id="newsletter-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      {message && (
        <p role="alert" className="text-danger mt-2 text-sm">
          {message}
        </p>
      )}
    </form>
  );
}
