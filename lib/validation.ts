import { z } from "zod";

// Shared server + client validation schemas for all site forms.
// Keep these in sync with the corresponding form components.

const name = z.string().trim().min(2, "Enter your full name.").max(120);
const email = z.string().trim().email("Enter a valid email address.").max(200);
const message = z.string().trim().min(10, "Message must be at least 10 characters.").max(4000);

export const contactSchema = z.object({
  name,
  email,
  topic: z.enum(["general", "media", "partnership", "safeguarding"], {
    message: "Choose an enquiry type.",
  }),
  message,
  consent: z.literal(true, { message: "Please confirm consent to be contacted." }),
  // Honeypot: must stay empty. Bots that fill every field trip this.
  company: z.string().max(0).optional().or(z.literal("")),
});

export const partnerSchema = z.object({
  name,
  organisation: z.string().trim().min(2, "Enter your organisation name.").max(200),
  email,
  country: z.string().trim().min(2, "Enter your country.").max(100),
  interest: z.string().trim().min(2, "Select an area of interest."),
  message,
  consent: z.literal(true, { message: "Please confirm consent to be contacted." }),
  company: z.string().max(0).optional().or(z.literal("")),
});

export const newsletterSchema = z.object({
  email,
  consent: z.literal(true, { message: "Please confirm consent to receive updates." }),
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type PartnerInput = z.infer<typeof partnerSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
