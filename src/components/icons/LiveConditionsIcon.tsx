import type { SVGProps } from "react";

export function LiveConditionsIcon(
  props: SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M32 8C24.3 8 18 14.3 18 22c0 10.2 14 24 14 24s14-13.8 14-24C46 14.3 39.7 8 32 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <circle
        cx="32"
        cy="22"
        r="5"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M8 47c7-2 11-6 16-6 6 0 9 5 15 5 5 0 10-4 17-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M9 53c6-1 10-4 15-4 6 0 10 4 16 4 5 0 9-3 15-4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}