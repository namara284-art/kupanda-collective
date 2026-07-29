"use client";

import { useState } from "react";
import { Sprout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { newsletterSchema } from "@/lib/validation";
import { newsletter as newsletterCopy } from "@/content/homepage";
import { HoneypotField } from "@/components/forms/FormField";
import { transition } from "@/lib/motion";

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
      <h2 className="font-heading text-xl font-semibold text-forest-900">{newsletterCopy.heading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{newsletterCopy.body}</p>

      {status === "success" ? (
        <motion.p
          role="status"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.reveal}
          className="mt-5 flex items-center gap-2 text-sm font-semibold text-forest-700"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ...transition.control, delay: 0.1 }}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-forest-700 text-cream-50"
          >
            <Sprout className="h-3.5 w-3.5" aria-hidden="true" />
          </motion.span>
          Thank you, you&rsquo;re on the list. (Demonstration mode: no live email platform is connected yet.)
        </motion.p>
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
              className="min-h-11 flex-1 rounded-full border border-sage-300 bg-white px-5 py-2.5 text-charcoal-900 transition-[border-color,box-shadow] duration-200 placeholder:text-charcoal-500/60 focus-visible:border-forest-600 focus-visible:shadow-[0_0_0_3px_rgba(43,114,70,0.15)]"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-md disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? (
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="h-3.5 w-3.5 rounded-full border-2 border-cream-50/40 border-t-cream-50"
                />
              ) : null}
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
          <AnimatePresence initial={false}>
            {error ? (
              <motion.p
                id="newsletter-error"
                role="alert"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={transition.control}
                className="mt-2 overflow-hidden text-sm text-clay-600"
              >
                {error}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}
