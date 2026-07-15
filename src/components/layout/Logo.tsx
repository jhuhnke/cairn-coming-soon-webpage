import Link from "next/link";
import { CairnMark } from "@/components/icons/CairnMark";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3"
      aria-label="Cairn home"
    >
      <CairnMark className="h-12 w-12" />

      <span
        className={[
          "text-xl font-bold tracking-[0.32em]",
          inverted ? "text-white" : "text-[var(--cairn-ink)]",
        ].join(" ")}
      >
        CAIRN
      </span>
    </Link>
  );
}