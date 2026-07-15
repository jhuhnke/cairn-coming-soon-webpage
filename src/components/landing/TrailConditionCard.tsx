export function TrailConditionCard() {
  return (
    <div
      className={[
        "w-[250px] rounded-2xl border border-black/5",
        "bg-white/95 p-5 shadow-[0_18px_50px_rgba(23,41,52,0.16)]",
        "backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[var(--cairn-ink)]">
            Trail Conditions
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full bg-[#4f9858]"
              aria-hidden="true"
            />

            <span className="text-sm font-semibold text-[var(--cairn-ink)]">
              Good
            </span>
          </div>
        </div>

        <span className="rounded-full bg-[var(--cairn-cream)] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--cairn-ink-soft)]">
          Recent
        </span>
      </div>

      <div className="mt-4 border-t border-[var(--cairn-border)] pt-4">
        <p className="text-sm leading-6 text-[var(--cairn-ink-soft)]">
          Snow patches remain on shaded sections above 8,500 feet.
        </p>

        <p className="mt-1 text-xs text-[var(--cairn-ink-soft)]/75">
          Community report · 2 hours ago
        </p>
      </div>
    </div>
  );
}