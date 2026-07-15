import { CairnMap } from "@/components/map/CairnMap";
import { TrailConditionCard } from "@/components/landing/TrailConditionCard";

export function PhoneMapMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div
        className={[
          "relative mx-auto h-[570px] w-[286px]",
          "rounded-[48px] border-[8px] border-[#161b1c]",
          "bg-[#161b1c] p-[5px]",
          "shadow-[0_30px_70px_rgba(23,41,52,0.28)]",
          "sm:h-[620px] sm:w-[310px]",
        ].join(" ")}
      >
        <div className="absolute left-1/2 top-[9px] z-30 h-7 w-24 -translate-x-1/2 rounded-full bg-[#101415]" />

        <div className="relative h-full overflow-hidden rounded-[36px] bg-[#677366]">
          <CairnMap />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/30 to-transparent"
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--cairn-ink)] shadow-sm backdrop-blur">
            Cairn
          </div>

          <button
            type="button"
            aria-label="Center map on current location"
            className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--cairn-ink)] shadow-sm backdrop-blur transition hover:bg-white"
          >
            <LocationIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 z-30 scale-[0.88] -translate-x-1/2 sm:bottom-16 sm:left-auto sm:right-[-10px] sm:scale-100 sm:translate-x-0">
        <TrailConditionCard />
      </div>
    </div>
  );
}

function LocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="7"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}