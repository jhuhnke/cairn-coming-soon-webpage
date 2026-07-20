"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type SubmissionState = "idle" | "submitting" | "success" | "error";

type WaitlistFormProps = {
  theme?: "default" | "light";
};

export function WaitlistForm({
  theme = "default",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmissionState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = (await response.json()) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to join the waitlist.");
      }

      setSubmissionState("success");
      setMessage(result.message ?? "You're on the list!");
      setEmail("");
    } catch (error) {
      setSubmissionState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const inputClassName =
    theme === "light"
      ? [
          "min-h-12 flex-1 rounded-[var(--radius-small)]",
          "border border-white/30",
          "bg-white",
          "px-4",
          "text-[var(--cairn-ink)]",
          "placeholder:text-[var(--cairn-ink-soft)]/60",
          "outline-none transition",
          "focus:border-white",
          "focus:ring-2",
          "focus:ring-white/30",
        ].join(" ")
      : [
          "min-h-12 flex-1 rounded-[var(--radius-small)]",
          "border border-[var(--cairn-border)]",
          "bg-white",
          "px-4",
          "text-[var(--cairn-ink)]",
          "placeholder:text-[var(--cairn-ink-soft)]/60",
          "outline-none transition",
          "focus:border-[var(--cairn-orange)]",
          "focus:ring-2",
          "focus:ring-[var(--cairn-orange)]/20",
        ].join(" ");

  const statusClassName =
    theme === "light"
      ? "mt-3 text-sm text-white"
      : [
          "mt-3 text-sm",
          submissionState === "error"
            ? "text-red-700"
            : "text-[var(--cairn-forest)]",
        ].join(" ");

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label
          htmlFor={`waitlist-email-${theme}`}
          className="sr-only"
        >
          Email address
        </label>

        <input
          id={`waitlist-email-${theme}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className={inputClassName}
        />

        <Button
          type="submit"
          disabled={submissionState === "submitting"}
          className={
            theme === "light"
              ? "min-h-12 !bg-[var(--cairn-night)] hover:!bg-[var(--cairn-ink)]"
              : "min-h-12"
          }
        >
          {submissionState === "submitting"
            ? "Joining..."
            : "Join the Waitlist"}
        </Button>
      </div>

      {message && (
        <p className={statusClassName} role="status">
          {message}
        </p>
      )}
    </form>
  );
}