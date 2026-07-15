import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { PursuitCard } from "@/components/landing/PursuitCard";
import { Container } from "@/components/ui/Container";
import { pursuits } from "@/data/pursuits";

export function PursuitsSection() {
  const [hiking, cycling, skiing, running, camping, fishing] = pursuits;

  return (
    <section
      id="outdoors"
      className="overflow-hidden bg-[var(--cairn-cream)] py-20 md:py-28"
      aria-labelledby="pursuits-heading"
    >
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="eyebrow">Built for the outdoors</p>

            <h2
              id="pursuits-heading"
              className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl"
            >
              Every pursuit.
              <br />
              One living map.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--cairn-ink-soft)]">
              Whether you move on foot, wheels, skis, or water, Cairn brings
              the conditions and local knowledge you need into one place.
            </p>
          </div>

          <Link
            href="/outdoors"
            className={[
              "inline-flex items-center gap-3",
              "text-xs font-bold uppercase tracking-[0.12em]",
              "text-[var(--cairn-orange)]",
              "transition hover:gap-4 hover:text-[var(--cairn-orange-dark)]",
            ].join(" ")}
          >
            Explore all pursuits
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PursuitCard pursuit={hiking} featured />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <PursuitCard pursuit={cycling} />
            <PursuitCard pursuit={skiing} />
          </div>

          <div className="lg:col-span-4">
            <PursuitCard pursuit={running} />
          </div>

          <div className="lg:col-span-4">
            <PursuitCard pursuit={camping} />
          </div>

          <div className="lg:col-span-4">
            <PursuitCard pursuit={fishing} />
          </div>
        </div>
      </Container>
    </section>
  );
}