"use client";

import { useState } from "react";
import { CheckCircle2, PenLine } from "lucide-react";
import { newsletterSchema } from "@/lib/validation";
import { newsletter as newsletterCopy } from "@/content/homepage";
import { HoneypotField } from "@/components/forms/FormField";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const company = new FormData(e.currentTarget).get("company");
    const parsed = newsletterSchema.safeParse({ email, consent: consent || undefined, company });

    if (!parsed.success) {
      setError(parsed.error.flatten().fieldErrors.email?.[0] ?? "Please confirm consent and enter a valid email.");
      return;
    }

    setError(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.message ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setError("We couldn't reach the server. Please try again.");
    }
  }

  return (
    <div id="newsletter" className="radius-organic-2 scroll-mt-24 border border-clay-500/30 bg-cream-50 p-6 text-charcoal-900 sm:p-8">
      <div className="mb-4 flex items-center gap-2 text-clay-600">
        <PenLine className="h-4 w-4" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.14em]">{newsletterCopy.eyebrow}</span>
      </div>
      <h2 className="font-heading text-xl font-semibold text-forest-900">{newsletterCopy.heading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{newsletterCopy.body}</p>

      {status === "success" ? (
        <p role="status" className="mt-5 flex items-center gap-2 text-sm font-semibold text-forest-700">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          Thank you, you&rsquo;re on the list. (Demonstration mode: no live email platform is connected yet.)
        </p>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="mt-5">
          <HoneypotField />
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "newsletter-error" : undefined}
              className="min-h-11 flex-1 rounded-full border border-sage-300 bg-white px-5 py-2.5 text-charcoal-900 placeholder:text-charcoal-500/60 focus-visible:border-forest-600"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="min-h-11 rounded-full bg-forest-700 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800 disabled:opacity-60"
            >
              {status === "submitting" ? "Signing up…" : "Sign up"}
            </button>
          </div>
          <label className="mt-3 flex items-start gap-2 text-left text-xs text-charcoal-500">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-sage-300"
            />
            I consent to receive occasional email updates from Kupanda Collective. Unsubscribe anytime.
          </label>
          {error ? (
            <p id="newsletter-error" role="alert" className="mt-2 text-sm text-clay-600">
              {error}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}
