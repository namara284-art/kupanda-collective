import Link from "next/link";
import Image from "next/image";
import { siteConfig, contactInfo, socialLinks, footerLinks } from "@/content/site-settings";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-300 bg-sage-100">
      <div className="content-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/logo/kupanda-logo-full-color.png"
            alt={`${siteConfig.name} logo`}
            width={598}
            height={249}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-700">
            A Uganda-based, women-led organisation strengthening community-led systems that connect childcare,
            caregiver livelihoods, health and social cohesion for refugee and host communities.
          </p>
        </div>

        {footerLinks.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-forest-800">{group.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-charcoal-700 hover:text-forest-800 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-forest-800">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal-700">
            <li>{contactInfo.location.city}</li>
            <li>
              <a href={`mailto:${contactInfo.email.general}`} className="hover:text-forest-800 hover:underline">
                {contactInfo.email.general}
              </a>{" "}
              <span className="text-charcoal-500">(placeholder)</span>
            </li>
            <li>
              <Link href="/#newsletter" className="hover:text-forest-800 hover:underline">
                Sign up for updates
              </Link>
            </li>
            <li>
              <Link href="/safeguarding" className="hover:text-forest-800 hover:underline">
                Report a safeguarding concern
              </Link>
            </li>
          </ul>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-forest-800">Follow</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-charcoal-700 hover:text-forest-800 hover:underline"
                  aria-label={`${social.label}${social.placeholder ? " (link coming soon)" : ""}`}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sage-300">
        <div className="content-container flex flex-col gap-2 py-6 text-xs text-charcoal-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Contact details, registration information and social links shown are placeholders pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
