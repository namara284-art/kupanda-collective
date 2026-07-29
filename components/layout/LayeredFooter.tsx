import Link from "next/link";
import Image from "next/image";
import { siteConfig, contactInfo, socialLinks, footerLinks } from "@/content/site-settings";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";

export function LayeredFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream-50">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 text-forest-800/60"
        fill="none"
      >
        <path
          d="M100 10 C40 10 10 60 10 100 C10 150 50 190 100 190 C150 190 190 150 190 100"
          stroke="currentColor"
          strokeWidth="18"
        />
      </svg>

      {/* Layered top panel: a light field-note card floats over the dark footer field. */}
      <div className="content-container-wide relative pt-14 sm:pt-16">
        <div className="mx-auto max-w-xl shadow-2xl shadow-forest-950/40">
          <NewsletterSignup />
        </div>
      </div>

      <div className="content-container relative grid gap-10 pb-14 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/logo/kupanda-logo-white.png"
            alt={`${siteConfig.name} logo`}
            width={598}
            height={249}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sage-200">
            A Uganda-based, women-led organisation strengthening community-led systems that connect childcare,
            caregiver livelihoods, health and social cohesion for refugee and host communities.
          </p>
        </div>

        {footerLinks.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-leaf-400">{group.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sage-200 hover:text-cream-50 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-leaf-400">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-sage-200">
            <li>{contactInfo.location.city}</li>
            <li>
              <a href={`mailto:${contactInfo.email.general}`} className="hover:text-cream-50 hover:underline">
                {contactInfo.email.general}
              </a>{" "}
              <span className="text-sage-300/70">(placeholder)</span>
            </li>
            <li>
              <Link href="/safeguarding" className="hover:text-cream-50 hover:underline">
                Report a safeguarding concern
              </Link>
            </li>
          </ul>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-leaf-400">Follow</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-sage-200 hover:text-cream-50 hover:underline"
                  aria-label={`${social.label}${social.placeholder ? " (link coming soon)" : ""}`}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-forest-700">
        <div className="content-container flex flex-col gap-2 py-6 text-xs text-sage-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Contact details, registration information and social links shown are placeholders pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
