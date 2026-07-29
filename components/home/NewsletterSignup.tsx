"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { newsletterSchema } from "@/lib/validation";
import { newsletter as newsletterCopy } from "@/content/homepage";
import { HoneypotField } from "@/components/forms/FormField";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

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
    <section id="newsletter" className="bg-forest-900 py-16 text-cream-50 sm:py-20">
      <Container className="max-w-3xl text-center">
        <SectionHeading
          align="center"
          title={newsletterCopy.heading}
          description={newsletterCopy.body}
          className="[&_h2]:text-cream-50 [&_p]:text-sage-200"
        />

        {status === "success" ? (
          <p role="status" className="mt-8 flex items-center justify-center gap-2 text-leaf-400">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            Thank you — you&rsquo;re on the list. (Demonstration mode: no live email platform is connected yet.)
          </p>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md">
            <HoneypotField />
            <div className="flex flex-col gap-3 sm:flex-row">
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
                className="min-h-11 flex-1 rounded-full border border-forest-600 bg-forest-800 px-5 py-2.5 text-cream-50 placeholder:text-sage-300 focus-visible:border-leaf-400"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="min-h-11 rounded-full bg-leaf-500 px-6 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-leaf-400 disabled:opacity-60"
              >
                {status === "submitting" ? "Signing up…" : "Sign up"}
              </button>
            </div>
            <label className="mt-3 flex items-start justify-center gap-2 text-left text-xs text-sage-200">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-sage-300"
              />
              I consent to receive occasional email updates from Kupanda Collective. Unsubscribe anytime.
            </label>
            {error ? (
              <p id="newsletter-error" role="alert" className="mt-2 text-sm text-leaf-300">
                {error}
              </p>
            ) : null}
          </form>
        )}
      </Container>
    </section>
  );
}
