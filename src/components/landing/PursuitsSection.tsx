import { PursuitCard } from "@/components/landing/PursuitCard";
import { Container } from "@/components/ui/Container";
import { pursuits } from "@/data/pursuits";

export function PursuitsSection() {
  return (
    <section
      id="outdoors"
      className="bg-[var(--cairn-cream)] py-20 md:py-28"
      aria-labelledby="pursuits-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Built for the outdoors</p>

          <h2
            id="pursuits-heading"
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl"
          >
            One map for every pursuit.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--cairn-ink-soft)] md:text-lg">
            Current conditions and local knowledge for wherever the trail,
            road, snow, or water takes you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pursuits.map((pursuit) => (
            <PursuitCard key={pursuit.name} pursuit={pursuit} />
          ))}
        </div>
      </Container>
    </section>
  );
}