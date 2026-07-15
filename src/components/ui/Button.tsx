import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-[var(--cairn-orange)] text-white hover:bg-[var(--cairn-orange-dark)]"
      : "border border-[var(--cairn-border)] bg-white text-[var(--cairn-ink)] hover:bg-[var(--cairn-cream)]";

  return (
    <button
      className={[
        "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-small)]",
        "px-5 text-sm font-bold uppercase tracking-wide",
        "transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClass,
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}