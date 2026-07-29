import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { LayeredFooter } from "@/components/layout/LayeredFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import { siteConfig } from "@/content/site-settings";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { RouteProgress } from "@/components/motion/RouteProgress";
import { PageTransition } from "@/components/motion/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
  weight: "variable",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Kupanda Collective | Community-Led Childcare and Refugee Self-Reliance",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: "Kupanda Collective | Community-Led Childcare and Refugee Self-Reliance",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kupanda Collective | Community-Led Childcare and Refugee Self-Reliance",
    description: siteConfig.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/images/logo/kupanda-logo-full-color.png`,
  description: siteConfig.description,
  areaServed: "Uganda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream-50 text-charcoal-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionProvider>
          <SkipLink />
          <RouteProgress />
          <Header />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <LayeredFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
