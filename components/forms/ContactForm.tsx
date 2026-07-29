"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema } from "@/lib/validation";
import { TextField, TextAreaField, SelectField, CheckboxField, HoneypotField } from "./FormField";

type FormState = {
  name: string;
  email: string;
  topic: "" | "general" | "media" | "partnership" | "safeguarding";
  message: string;
  consent: boolean;
};

const initialState: FormState = { name: "", email: "", topic: "", message: "", consent: false };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerMessage(null);

    const company = new FormData(e.currentTarget).get("company");
    const parsed = contactSchema.safeParse({ ...values, consent: values.consent || undefined, company });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        topic: fieldErrors.topic?.[0],
        message: fieldErrors.message?.[0],
        consent: fieldErrors.consent?.[0],
      });
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
      <div role="status" className="flex items-start gap-3 rounded-2xl border border-forest-700 bg-sage-100 p-6">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-forest-700" aria-hidden="true" />
        <div>
          <p className="font-semibold text-forest-900">Thank you. Your message has been sent.</p>
          <p className="mt-1 text-sm text-charcoal-700">
            This form is running in demonstration mode until Kupanda Collective connects a live inbox. See
            README.md for setup details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <HoneypotField />
      <TextField
        id="contact-name"
        label="Name"
        required
        value={values.name}
        onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        error={errors.name}
        autoComplete="name"
      />
      <TextField
        id="contact-email"
        label="Email"
        type="email"
        required
        value={values.email}
        onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        error={errors.email}
        autoComplete="email"
      />
      <SelectField
        id="contact-topic"
        label="Enquiry type"
        required
        value={values.topic}
        onChange={(e) => setValues((v) => ({ ...v, topic: e.target.value as FormState["topic"] }))}
        error={errors.topic}
      >
        <option value="">Select an option</option>
        <option value="general">General enquiry</option>
        <option value="media">Media enquiry</option>
        <option value="partnership">Partnership enquiry</option>
        <option value="safeguarding">Safeguarding concern</option>
      </SelectField>
      <TextAreaField
        id="contact-message"
        label="Message"
        required
        value={values.message}
        onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        error={errors.message}
      />
      <CheckboxField
        id="contact-consent"
        checked={values.consent}
        onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
        error={errors.consent}
        label="I consent to Kupanda Collective contacting me about this enquiry using the details provided. See our Privacy Notice."
      />

      {status === "error" && serverMessage ? (
        <p role="alert" className="flex items-start gap-2 rounded-lg bg-clay-100 p-3 text-sm text-clay-600">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {serverMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
