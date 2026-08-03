import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--cairn-paper)] px-6">
      <div className="max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--cairn-orange)]">
          404 · Off trail
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[var(--cairn-ink)] md:text-7xl">
          Looks like you’ve wandered off trail.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--cairn-ink-soft)]">
          This route doesn’t exist, but the trail back to Cairn is just ahead.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex rounded-[var(--radius-small)] bg-[var(--cairn-orange)] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}