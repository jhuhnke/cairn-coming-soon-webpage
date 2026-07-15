import type { SVGProps } from "react";

export function CompassIcon(
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
        cy="34"
        r="21"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M32 5v8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M28 5h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="m40 24-5 13-11 7 5-13 11-7Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <circle cx="32" cy="34" r="2" fill="currentColor" />
    </svg>
  );
}