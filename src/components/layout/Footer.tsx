import Link from "next/link";

import { FooterLandscape } from "@/components/landing/FooterLandscape";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "Mission", href: "/#mission" },
  { label: "Product", href: "/#product" },
  { label: "Outdoors", href: "/#outdoors" },
  { label: "Updates", href: "/#updates" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-[var(--cairn-night)] text-white">
      <div className="border-b border-white/10">
        <Container className="grid gap-12 py-14 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Logo inverted />

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              A living map built from real conditions, trusted sources, and the
              people exploring the outdoors.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm md:text-right"
            aria-label="Footer navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      <FooterLandscape />

      <Container className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Cairn. All rights reserved.</p>

        <div className="flex gap-5">
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}