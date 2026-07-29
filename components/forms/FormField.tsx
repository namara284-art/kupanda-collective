"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";

type SharedProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
};

const fieldClasses =
  "w-full rounded-lg border border-sage-300 bg-white px-4 py-2.5 text-[0.95rem] text-charcoal-900 transition-[border-color,box-shadow] duration-200 placeholder:text-charcoal-500/60 focus-visible:border-forest-600 focus-visible:shadow-[0_0_0_3px_rgba(43,114,70,0.15)]";

/** Smoothly reveals a field's inline error rather than snapping it into layout. */
function FieldError({ id, error }: { id: string; error?: string }) {
  return (
    <AnimatePresence initial={false}>
      {error ? (
        <motion.p
          key={error}
          id={`${id}-error`}
          role="alert"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={transition.control}
          className="mt-1.5 overflow-hidden text-sm text-clay-600"
        >
          {error}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

export function TextField({
  id,
  label,
  error,
  required,
  hint,
  type = "text",
  ...rest
}: SharedProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-charcoal-900">
        {label} {required ? <span aria-hidden="true" className="text-clay-600">*</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mb-1.5 text-xs text-charcoal-500">
          {hint}
        </p>
      ) : null}
      <input
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        required={required}
        className={cn(fieldClasses, error && "border-clay-600")}
        {...rest}
      />
      <FieldError id={id} error={error} />
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  error,
  required,
  hint,
  ...rest
}: SharedProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-charcoal-900">
        {label} {required ? <span aria-hidden="true" className="text-clay-600">*</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mb-1.5 text-xs text-charcoal-500">
          {hint}
        </p>
      ) : null}
      <textarea
        id={id}
        rows={5}
        aria-invalid={Boolean(error)}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        required={required}
        className={cn(fieldClasses, "resize-y", error && "border-clay-600")}
        {...rest}
      />
      <FieldError id={id} error={error} />
    </div>
  );
}

export function SelectField({
  id,
  label,
  error,
  required,
  hint,
  children,
  ...rest
}: SharedProps & React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-charcoal-900">
        {label} {required ? <span aria-hidden="true" className="text-clay-600">*</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mb-1.5 text-xs text-charcoal-500">
          {hint}
        </p>
      ) : null}
      <select
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        required={required}
        className={cn(fieldClasses, error && "border-clay-600")}
        {...rest}
      >
        {children}
      </select>
      <FieldError id={id} error={error} />
    </div>
  );
}

export function CheckboxField({
  id,
  label,
  error,
  ...rest
}: { id: string; label: React.ReactNode; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-5 w-5 shrink-0 rounded border-sage-300 text-forest-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay-600"
          {...rest}
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-charcoal-700">
          {label}
        </label>
      </div>
      <FieldError id={id} error={error} />
    </div>
  );
}

export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
      <label htmlFor="company">Company</label>
      <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
