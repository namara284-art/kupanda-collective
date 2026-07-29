import { communityVoice } from "@/content/homepage";
import { CommunityVoicePlaceholder } from "@/components/shared/QuoteBlock";
import { Container } from "@/components/ui/Container";

export function CommunityVoiceSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="community-voice-heading">
      <Container className="max-w-3xl">
        <h2 id="community-voice-heading" className="sr-only">
          {communityVoice.heading}
        </h2>
        <CommunityVoicePlaceholder heading={communityVoice.heading} body={communityVoice.body} note={communityVoice.note} />
      </Container>
    </section>
  );
}
