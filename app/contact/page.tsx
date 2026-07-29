import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldAlert, Newspaper, Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactInfo, socialLinks } from "@/content/site-settings";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Kupanda Collective for general, media, partnership or safeguarding enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-14 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">Contact</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.8vw,3.3rem)] font-semibold text-forest-900">
            Get in touch
          </h1>
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-forest-900">Contact details</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal-900">Location</p>
                  <p className="text-sm text-charcoal-700">{contactInfo.location.city}</p>
                  <p className="text-sm text-charcoal-500">{contactInfo.location.note}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal-900">Email</p>
                  <a href={`mailto:${contactInfo.email.general}`} className="text-sm text-forest-700 hover:underline">
                    {contactInfo.email.general}
                  </a>
                  <p className="text-xs text-charcoal-500">Placeholder pending confirmation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal-900">Phone</p>
                  <p className="text-sm text-charcoal-700">{contactInfo.phone}</p>
                  <p className="text-xs text-charcoal-500">Placeholder pending confirmation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal-900">Media enquiries</p>
                  <a href={`mailto:${contactInfo.email.media}`} className="text-sm text-forest-700 hover:underline">
                    {contactInfo.email.media}
                  </a>{" "}
                  <span className="text-xs text-charcoal-500">(placeholder)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Handshake className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal-900">Partnership enquiries</p>
                  <p className="text-sm text-charcoal-700">
                    Use our{" "}
                    <Link href="/partner-with-us" className="text-forest-700 hover:underline">
                      Partner With Us
                    </Link>{" "}
                    form for funding, research and implementation partnerships.
                  </p>
                </div>
              </li>
              <li className="radius-organic-2 flex items-start gap-3 bg-clay-100 p-4">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal-900">Safeguarding concern</p>
                  <p className="text-sm text-charcoal-700">
                    If you need to report a safeguarding concern, see our{" "}
                    <Link href="/safeguarding" className="text-forest-700 hover:underline">
                      Safeguarding page
                    </Link>{" "}
                    for the reporting pathway, or select “Safeguarding concern” in the form.
                  </p>
                </div>
              </li>
            </ul>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-forest-800">Follow us</h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className="text-sm text-forest-700 hover:underline">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-forest-900">Send us a message</h2>
            <div className="radius-organic-1 mt-6 border border-sage-200 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
