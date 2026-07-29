import type { Metadata } from "next";
import { LegalPageBody } from "@/components/shared/LegalPageBody";
import { safeguardingDraft } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Safeguarding",
  description: "Kupanda Collective's approach to safeguarding children and adults, and how to report a concern.",
  path: "/safeguarding",
});

export default function SafeguardingPage() {
  return (
    <LegalPageBody title="Safeguarding" updated={safeguardingDraft.updated} sections={safeguardingDraft.sections} />
  );
}
