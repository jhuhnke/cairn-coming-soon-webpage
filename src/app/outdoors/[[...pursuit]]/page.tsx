import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export default function OutdoorsComingSoonPage() {
  return (
    <main className="min-h-screen bg-[var(--cairn-paper)]">
      <header className="border-b border-[var(--cairn-border)]">
        <Container className="flex min-h-24 items-center justify-between">
          <Logo />

          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--cairn-orange)]"
          >
            Back home
          </Link>
        </Container>
      </header>

      <Container className="flex min-h-[calc(100vh-96px)] items-center py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Coming soon</p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            Find your next adventure with Cairn.
          </h1>

          <p className="mt-7 text-lg leading-8 text-[var(--cairn-ink-soft)]">
            Detailed pursuit pages are being built now. Join the waitlist to
            follow along.
          </p>

          <Link
            href="/#waitlist"
            className="mt-9 inline-flex rounded-[var(--radius-small)] bg-[var(--cairn-orange)] px-5 py-4 text-xs font-bold uppercase tracking-wide text-white"
          >
            Join the waitlist
          </Link>
        </div>
      </Container>
    </main>
  );
}