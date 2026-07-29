"use client";

import { useState } from "react";
import { AlertCircle, Sprout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { partnerSchema } from "@/lib/validation";
import { partnershipInterestOptions } from "@/content/partnership";
import { TextField, TextAreaField, SelectField, CheckboxField, HoneypotField } from "./FormField";
import { transition } from "@/lib/motion";

type FormState = {
  name: string;
  organisation: string;
  email: string;
  country: string;
  interest: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  organisation: "",
  email: "",
  country: "",
  interest: "",
  message: "",
  consent: false,
};

export function PartnerForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerMessage(null);

    const company = new FormData(e.currentTarget).get("company");
    const parsed = partnerSchema.safeParse({ ...values, consent: values.consent || undefined, company });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        organisation: fieldErrors.organisation?.[0],
        email: fieldErrors.email?.[0],
        country: fieldErrors.country?.[0],
        interest: fieldErrors.interest?.[0],
        message: fieldErrors.message?.[0],
        consent: fieldErrors.consent?.[0],
      });
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setServerMessage(data.message ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
      setServerMessage("We couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition.reveal}
        className="flex items-start gap-3 rounded-2xl border border-forest-700 bg-sage-100 p-6"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ...transition.control, delay: 0.1 }}
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-700 text-cream-50"
        >
          <Sprout className="h-4 w-4" aria-hidden="true" />
        </motion.span>
        <div>
          <p className="font-semibold text-forest-900">Thank you. Your enquiry has been sent.</p>
          <p className="mt-1 text-sm text-charcoal-700">
            This form is running in demonstration mode until Kupanda Collective connects a live inbox. See
            README.md for setup details.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <HoneypotField />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="partner-name"
          label="Name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          error={errors.name}
          autoComplete="name"
        />
        <TextField
          id="partner-organisation"
          label="Organisation"
          required
          value={values.organisation}
          onChange={(e) => setValues((v) => ({ ...v, organisation: e.target.value }))}
          error={errors.organisation}
          autoComplete="organization"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="partner-email"
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          error={errors.email}
          autoComplete="email"
        />
        <TextField
          id="partner-country"
          label="Country"
          required
          value={values.country}
          onChange={(e) => setValues((v) => ({ ...v, country: e.target.value }))}
          error={errors.country}
          autoComplete="country-name"
        />
      </div>
      <SelectField
        id="partner-interest"
        label="Area of interest"
        required
        value={values.interest}
        onChange={(e) => setValues((v) => ({ ...v, interest: e.target.value }))}
        error={errors.interest}
      >
        <option value="">Select an option</option>
        {partnershipInterestOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectField>
      <TextAreaField
        id="partner-message"
        label="Message"
        required
        hint="Tell us about your organisation and how you'd like to work together."
        value={values.message}
        onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        error={errors.message}
      />
      <CheckboxField
        id="partner-consent"
        checked={values.consent}
        onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
        error={errors.consent}
        label="I consent to Kupanda Collective contacting me about this enquiry using the details provided. See our Privacy Notice."
      />

      <AnimatePresence initial={false}>
        {status === "error" && serverMessage ? (
          <motion.p
            role="alert"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition.control}
            className="flex items-start gap-2 overflow-hidden rounded-lg bg-clay-100 p-3 text-sm text-clay-600"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {serverMessage}
          </motion.p>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-md disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <motion.span
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="h-3.5 w-3.5 rounded-full border-2 border-cream-50/40 border-t-cream-50"
          />
        ) : null}
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
