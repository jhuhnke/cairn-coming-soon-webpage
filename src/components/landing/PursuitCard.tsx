import Image from "next/image";
import Link from "next/link";

import { ActivityArrowIcon } from "@/components/icons/ActivityArrowIcon";
import type { Pursuit } from "@/data/pursuits";

type PursuitCardProps = {
  pursuit: Pursuit;
};

export function PursuitCard({ pursuit }: PursuitCardProps) {
  return (
    <Link
      href={pursuit.href}
      className={[
        "group relative isolate aspect-[4/3] overflow-hidden rounded-[22px]",
        "bg-[var(--cairn-night)]",
        "shadow-[0_14px_40px_rgba(23,41,52,0.08)]",
        "transition duration-300 hover:-translate-y-1",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        "focus-visible:outline-[var(--cairn-orange)]",
      ].join(" ")}
      aria-label={`Explore Cairn for ${pursuit.name}`}
    >
      <Image
        src={pursuit.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-105"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#102029]/95 via-[#102029]/20 to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[var(--cairn-orange)]/0 transition duration-500 group-hover:bg-[var(--cairn-orange)]/10"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
              {pursuit.name}
            </h3>

            <p className="mt-2 max-w-[280px] text-sm leading-6 text-white/75">
              {pursuit.description}
            </p>
          </div>

          <span
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
              "border border-white/30 bg-white/10 text-white backdrop-blur-sm",
              "transition duration-300",
              "group-hover:translate-x-1 group-hover:-translate-y-1",
              "group-hover:border-white group-hover:bg-white",
              "group-hover:text-[var(--cairn-ink)]",
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