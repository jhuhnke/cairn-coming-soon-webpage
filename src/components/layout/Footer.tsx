import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "Mission", href: "/#mission" },
  { label: "Product", href: "/#product" },
  { label: "Outdoors", href: "/#outdoors" },
  { label: "Updates", href: "/#waitlist" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--cairn-night)] text-white">
      <div
        className={[
          "pointer-events-none absolute inset-x-0 bottom-0 h-44",
          "bg-[url('/textures/topography.svg')]",
          "bg-[length:540px_auto] bg-bottom opacity-[0.035]",
        ].join(" ")}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr] md:items-start md:py-16">
          <div className="max-w-md">
            <Logo inverted />

            <p className="mt-5 text-sm leading-7 text-white/60">
              A living map built from real conditions, trusted sources, and
              the people exploring the outdoors.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Built in Utah · Inspired by the Wasatch
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm md:justify-self-end"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/65 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cairn. All rights reserved.</p>

          <div className="flex gap-6">
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}