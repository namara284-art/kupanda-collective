import type { Metadata } from "next";
import { LegalPageBody } from "@/components/shared/LegalPageBody";
import { termsDraft } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for the Kupanda Collective website.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPageBody title="Terms of Use" updated={termsDraft.updated} sections={termsDraft.sections} />;
}
