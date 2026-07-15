import Image from "next/image";
import Link from "next/link";

import { ActivityArrowIcon } from "@/components/icons/ActivityArrowIcon";
import type { Pursuit } from "@/data/pursuits";

type PursuitCardProps = {
  pursuit: Pursuit;
  featured?: boolean;
};

export function PursuitCard({
  pursuit,
  featured = false,
}: PursuitCardProps) {
  return (
    <Link
      href={pursuit.href}
      className={[
        "group relative isolate block overflow-hidden rounded-[22px]",
        "bg-[var(--cairn-night)]",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        "focus-visible:outline-[var(--cairn-orange)]",
        featured
          ? "min-h-[430px] md:min-h-[520px]"
          : "min-h-[330px] md:min-h-[360px]",
      ].join(" ")}
      aria-label={`Explore Cairn for ${pursuit.name}`}
    >
      <Image
        src={pursuit.image}
        alt=""
        fill
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 58vw"
            : "(max-width: 768px) 100vw, 33vw"
        }
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#102029]/95 via-[#102029]/20 to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[var(--cairn-orange)]/0 transition-colors duration-500 group-hover:bg-[var(--cairn-orange)]/10"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
        <div className="flex items-end justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              {pursuit.name}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
              {pursuit.description}
            </p>
          </div>

          <span
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              "border border-white/30 bg-white/10 text-white backdrop-blur-sm",
              "transition duration-300",
              "group-hover:-translate-y-1 group-hover:translate-x-1",
              "group-hover:border-white/60 group-hover:bg-white group-hover:text-[var(--cairn-ink)]",
            ].join(" ")}
            aria-hidden="true"
          >
            <ActivityArrowIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}