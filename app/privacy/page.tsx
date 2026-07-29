import type { Metadata } from "next";
import { LegalPageBody } from "@/components/shared/LegalPageBody";
import { privacyDraft } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description: "How Kupanda Collective's website handles personal data submitted through its forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPageBody title="Privacy Notice" updated={privacyDraft.updated} sections={privacyDraft.sections} />;
}
