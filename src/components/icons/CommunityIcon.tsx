import type { SVGProps } from "react";

export function CommunityIcon(
  props: SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="32"
        cy="18"
        r="7"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <circle
        cx="14"
        cy="24"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <circle
        cx="50"
        cy="24"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M21 48v-6c0-7 4.9-12 11-12s11 5 11 12v6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M5 48v-4c0-6 3.8-10 9-10 3.4 0 6.2 1.6 7.8 4.2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M59 48v-4c0-6-3.8-10-9-10-3.4 0-6.2 1.6-7.8 4.2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}