"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

/**
 * Route-level error boundary. Keeps the header and footer, so a failed page
 * still leaves the visitor somewhere to go.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the digest so it can be matched against server logs.
    console.error("Page error:", error);
  }, [error]);

  return (
    <section className="bg-navy pt-20" data-surface="dark">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <p className="eyebrow text-accent">Something went wrong</p>

        <h1 className="display-2 mt-5 font-bold text-white">
          This page didn&rsquo;t load
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
          The problem is on our side, not yours. Try again — and if it keeps
          happening, let us know and we&rsquo;ll look into it.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors"
          >
            <RefreshCw size={17} aria-hidden="true" />
            Try again
          </button>

          <Link
            href="/"
            className="rounded-control inline-flex items-center border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-10 text-sm text-white/40">
            Reference: <code className="font-mono">{error.digest}</code>
          </p>
        )}
      </div>
    </section>
  );
}
