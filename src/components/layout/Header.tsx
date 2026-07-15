import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

const navigation = [
  { label: "Mission", href: "#mission" },
  { label: "Product", href: "#product" },
  { label: "Outdoors", href: "#outdoors" },
  { label: "Updates", href: "#updates" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex h-[var(--header-height)] items-center justify-between">
        <Logo />

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-wide transition-colors hover:text-[var(--cairn-orange)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#waitlist"
            className="rounded-[var(--radius-small)] bg-[var(--cairn-orange)] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--cairn-orange-dark)]"
          >
            Join Waitlist
          </Link>
        </nav>

        <Link
          href="#waitlist"
          className="rounded-[var(--radius-small)] bg-[var(--cairn-orange)] px-4 py-3 text-xs font-bold uppercase tracking-wide text-white lg:hidden"
        >
          Join
        </Link>
      </Container>
    </header>
  );
}