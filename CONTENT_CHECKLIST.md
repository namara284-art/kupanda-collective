# Content Checklist — Before Public Launch

This site was built without inventing organisational facts, staff, testimonials, funding commitments,
registration details, or contact information. Everything below is a placeholder in the codebase today and
needs Kupanda Collective's confirmed information before the site goes live. Search the codebase for
"placeholder" / "PLACEHOLDER" / "pending confirmation" to find every instance referenced here.

## Contact and organisational details
- [ ] Approved general enquiry email address (`content/site-settings.ts` → `contactInfo.email.general`)
- [ ] Approved partnerships email address (`contactInfo.email.partnerships`)
- [ ] Approved media enquiries email address (`contactInfo.email.media`)
- [ ] Approved safeguarding contact (email and/or phone) (`contactInfo.email.safeguarding`)
- [ ] Telephone number (`contactInfo.phone`)
- [ ] Confirmation of what location to publish (city-level only, per safeguarding guidance) (`contactInfo.location`)
- [ ] Organisation registration details, if/when intended for public disclosure (not currently published anywhere)

## Social and digital presence
- [ ] LinkedIn URL (`content/site-settings.ts` → `socialLinks`)
- [ ] X / Twitter URL
- [ ] Facebook URL
- [ ] Instagram URL
- [ ] Final domain name (used throughout for canonical URLs, sitemap, robots.txt, structured data, OG tags —
      `content/site-settings.ts` → `siteConfig.domain`)

## People and governance
- [ ] Approved team member names, roles and bios for the About page (currently a placeholder notice —
      `content/about.ts` → `governance`)
- [ ] Board / trustee information, if to be published
- [ ] Any institutional affiliations Kupanda wants listed

## Photography
- [ ] Verified, rights-cleared photographs for: homepage hero, flagship initiative feature, each of the 5
      programme pillar sections, Childcare Workforce Initiative page. Every image slot in the codebase is a
      placeholder (`components/shared/ImagePlaceholder.tsx`) with the required alt text already drafted —
      see §5c of README.md for how to swap them in.
- [ ] Photo credits/attribution for each image
- [ ] Confirmation that consent was obtained for any identifiable individual, especially children (see
      `/safeguarding`)

## Community stories
- [ ] At least one consented, reviewed community story or testimonial for the "Community voices" section
      (`content/homepage.ts` → `communityVoice`) — currently intentionally left as "Community stories coming
      soon"
- [ ] Real entries to replace the placeholder cards in `content/stories.ts` (all currently marked "Editorial
      placeholder" or "Forthcoming")

## Safeguarding, privacy and legal
- [ ] Legal review and sign-off of `content/legal.ts` (Privacy Notice, Safeguarding, Terms of Use) — all three
      are explicitly labelled "Draft — not yet approved for launch"
- [ ] Confirmed safeguarding reporting contact/pathway
- [ ] Data retention policy for form submissions, once a real notification/storage service is connected

## Downloads and documents
- [ ] Final, approved organisational profile (PDF) for the Resources section
- [ ] Final concept note or programme brief for the Childcare Workforce Initiative page — currently shown as
      "available on request" via the Partner form rather than a direct download, since the full concept note
      contains fundraising-sensitive detail; confirm whether a public version should be prepared
- [ ] Any partner logos Kupanda has explicit permission to display (none are shown anywhere in this build)

## Services to configure
- [ ] Email/notification provider for the Contact and Partner forms (README.md §6)
- [ ] Newsletter platform for the sign-up form (README.md §7)
- [ ] Analytics tool, if desired, with a privacy/consent approach agreed (README.md §8)
- [ ] Durable rate limiting for the API routes if deploying to a multi-instance/serverless host (README.md §6)

## Final domain and deployment
- [ ] Production domain confirmed and DNS configured
- [ ] `siteConfig.domain` updated to match
- [ ] Sitemap/robots/OG output re-verified against the live domain after deployment
