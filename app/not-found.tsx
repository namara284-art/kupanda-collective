import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] max-w-2xl flex-col items-center justify-center text-center py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">404</p>
      <h1 className="mt-2 text-balance text-[clamp(1.8rem,1.5rem+1.4vw,2.6rem)] font-semibold text-forest-900">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-4 leading-relaxed text-charcoal-700">
        The page you were looking for may have moved or no longer exists. Try one of the links below, or head
        back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary">
          Go to homepage
        </Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </Container>
  );
}
