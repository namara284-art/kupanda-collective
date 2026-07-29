# Content Checklist: Before Public Launch

This site was built without inventing organisational facts, staff, testimonials, funding commitments,
registration details, or contact information. Everything below is a placeholder in the codebase today and
needs Kupanda Collective's confirmed information before the site goes live. Search the codebase for
"placeholder" / "PLACEHOLDER" / "pending confirmation" to find every instance referenced here.

## Contact and organisational details
- [ ] Approved general enquiry email address (`content/site-settings.ts` -> `contactInfo.email.general`)
- [ ] Approved partnerships email address (`contactInfo.email.partnerships`)
- [ ] Approved media enquiries email address (`contactInfo.email.media`)
- [ ] Approved safeguarding contact (email and/or phone) (`contactInfo.email.safeguarding`)
- [ ] Telephone number (`contactInfo.phone`)
- [ ] Confirmation of what location to publish (city-level only, per safeguarding guidance) (`contactInfo.location`)
- [ ] Organisation registration details, if/when intended for public disclosure (not currently published anywhere)

## Social and digital presence
- [ ] LinkedIn URL (`content/site-settings.ts` -> `socialLinks`)
- [ ] X / Twitter URL
- [ ] Facebook URL
- [ ] Instagram URL
- [ ] Final domain name (used throughout for canonical URLs, sitemap, robots.txt, structured data, OG tags;
      `content/site-settings.ts` -> `siteConfig.domain`)

## People and governance
- [ ] Approved team member names, roles and bios for the About page (currently a placeholder notice;
      `content/about.ts` -> `governance`)
- [ ] Board / trustee information, if to be published
- [ ] Any institutional affiliations Kupanda wants listed

## Photography
- [x] Three photographs supplied and placed: `public/images/community/gathering-dance.jpg` (homepage hero),
      `assembly-wide.jpg` (homepage Neighborhood Assemblies section), and `assembly-close.jpg` (Participation
      and Social Cohesion programme page).
- [x] `assembly-wide.jpg` and `assembly-close.jpg` show identifiable children, including an infant and a
      toddler. Confirmed by Kupanda (2026-07-29): guardian consent is in place for these images.
- [ ] Verified, rights-cleared photographs still needed for: meaning section, three-generation return, and the
      remaining 4 programme pillar pages under `/our-work/[slug]`. Every remaining image slot is a placeholder
      (`components/shared/ImagePlaceholder.tsx`) with the required alt text already drafted; see §5c of
      README.md for how to swap them in.
- [ ] Photo credits/attribution for the three supplied photographs (none is currently recorded in the codebase)

## Community stories
- [ ] At least one consented, reviewed community story for the "Stories from the community" homepage section
      (`content/homepage.ts` -> `storiesReel`); the on-page placeholder note has been removed at Kupanda's
      request, but the same consent/safeguarding requirement is preserved as a code comment above the export
- [ ] Real entries to replace the placeholder cards in `content/stories.ts` (all currently marked "Editorial
      placeholder")

## Safeguarding, privacy and legal
- [ ] Legal review and sign-off of `content/legal.ts` (Privacy Notice, Safeguarding, Terms of Use); all three
      are explicitly labelled "Draft: not yet approved for launch"
- [ ] Confirmed safeguarding reporting contact/pathway
- [ ] Data retention policy for form submissions, once a real notification/storage service is connected

## Downloads and documents
- [ ] Final, approved organisational profile (PDF) for the Resources section
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

## Note on the Childcare Workforce Initiative
The dedicated Childcare Workforce Initiative page and homepage feature have been removed from this site at
Kupanda's request, since the initiative remains a funding proposal rather than a committed programme. The
underlying model (caregiver credentialing, women-led childcare enterprises, government registration) is still
described in general terms on the homepage ("meaning" and "three-generation return" sections) and in the Our
Work pillar pages, without proposal-specific targets, budget or timeline. If and when the initiative is
formally committed, a dedicated page can be reintroduced using the same content model conventions as the
programme pages under `/our-work/[slug]`.
