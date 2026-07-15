import type { SVGProps } from "react";

export function LayersIcon(
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
        d="M32 8 54 20 32 32 10 20 32 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="m14 30-4 2 22 12 22-12-4-2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m14 42-4 2 22 12 22-12-4-2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}