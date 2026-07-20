import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { PhoneMapMockup } from "@/components/landing/PhoneMapMockup";
import { RouteDecoration } from "@/components/landing/RouteDecoration";
import { Container } from "@/components/ui/Container";
import { missionContent } from "@/data/mission";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[var(--cairn-paper)]"
      aria-labelledby="mission-heading"
    >
      <div
        className="absolute inset-0 bg-[url('/textures/topography.svg')] bg-[length:620px_auto] bg-repeat opacity-[0.16]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[var(--cairn-paper)] via-[var(--cairn-paper)]/90 to-[var(--cairn-paper)]/55"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-[-80px] right-[-40px] hidden h-[540px] w-[470px] lg:block"
        aria-hidden="true"
      >
        <RouteDecoration />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:pt-24 lg:pb-28">
          <div className="max-w-xl">
            <p className="eyebrow">{missionContent.eyebrow}</p>

            <h2
              id="mission-heading"
              className="mt-5 text-4xl font-semibold leading-[1.12] tracking-[-0.035em] md:text-5xl"
            >
              Better Information.
              <br />
              Better Adventures.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-[var(--cairn-ink-soft)]">
              {missionContent.description}
            </p>

            <Link
              href={missionContent.linkHref}
              className={[
                "mt-9 inline-flex items-center gap-3",
                "text-xs font-bold uppercase tracking-[0.12em]",
                "text-[var(--cairn-orange)]",
                "transition hover:gap-4 hover:text-[var(--cairn-orange-dark)]",
              ].join(" ")}
            >
              {missionContent.linkLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative flex min-h-[590px] items-center justify-center lg:min-h-[620px]">
            <PhoneMapMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}