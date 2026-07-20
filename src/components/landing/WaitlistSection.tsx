import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { Container } from "@/components/ui/Container";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-[var(--cairn-orange)] py-20 text-white md:py-28"
      aria-labelledby="waitlist-heading"
    >
      <div
        className="absolute inset-0 bg-[url('/textures/topography.svg')] bg-[length:620px_auto] opacity-10"
        aria-hidden="true"
      />

      <div
        className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-44 -left-20 h-[420px] w-[420px] rounded-full border border-white/10"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
            Follow the trail
          </p>

          <h2
            id="waitlist-heading"
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl"
          >
            The outdoors is changing.
            <br />
            Your map should too.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Join the Cairn waitlist for product updates, early access, and the
            latest from the trails.
          </p>

          <div className="mx-auto mt-9 max-w-xl rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
            <WaitlistForm theme="light" source="closing-cta" />
          </div>

          <p className="mt-5 text-xs text-white/65">
            Occasional updates. No trail spam.
          </p>
        </div>
      </Container>
    </section>
  );
}