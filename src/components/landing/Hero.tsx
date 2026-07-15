import { Container } from "@/components/ui/Container";
import { WaitlistForm } from "@/components/landing/WaitlistForm";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[var(--cairn-paper)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(250,247,241,1) 0%, rgba(250,247,241,0.95) 34%, rgba(250,247,241,0.18) 66%, rgba(250,247,241,0) 100%), url('/images/hero/hero-placeholder.jpg')",
        }}
      />

      <Container className="relative z-10 flex min-h-[760px] items-center pt-[var(--header-height)]">
        <div className="max-w-xl py-20">
          <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-7xl">
            The Living Map
            <br />
            of the Outdoors
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[var(--cairn-ink-soft)] md:text-lg">
            Cairn brings together real-time conditions, community observations,
            and trusted data to help you choose where to go with confidence.
          </p>

          <div className="mt-9">
            <WaitlistForm />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em]">
            Coming soon
          </p>
        </div>
      </Container>
    </section>
  );
}