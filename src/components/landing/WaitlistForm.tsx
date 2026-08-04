"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase/client";

type SubmissionState = "idle" | "submitting" | "success" | "error";

type WaitlistFormProps = {
  theme?: "default" | "light";
  source?: string;
};

export function WaitlistForm({
  theme = "default",
  source = "coming-soon-page",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setSubmissionState("error");
      setMessage("Please enter an email address.");
      return;
    }

    setSubmissionState("submitting");
    setMessage("");

    try {
      const { error } = await supabase.from("waitlist_signups").insert({
        email: normalizedEmail,
        source,
        referrer: document.referrer || null,
      });

      if (error) {
        // PostgreSQL unique-constraint violation.
        if (error.code === "23505") {
          setSubmissionState("success");
          setMessage("You're already on the list!");
          setEmail("");
          return;
        }

        throw new Error(error.message);
      }

      setSubmissionState("success");
      setMessage("You're on the list!");
      setEmail("");
    } catch (error) {
      console.error("Waitlist submission failed:", error);

      setSubmissionState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (submissionState === "success") {
    return (
      <div
        className={[
          "rounded-2xl border p-6 text-left",
          theme === "light"
            ? "border-white/20 bg-white/10 text-white"
            : "border-[var(--cairn-border)] bg-white text-[var(--cairn-ink)]",
        ].join(" ")}
        role="status"
        aria-live="polite"
      >
        <div
          className={[
            "flex h-10 w-10 items-center justify-center rounded-full",
            theme === "light"
              ? "bg-white text-[var(--cairn-orange)]"
              : "bg-[var(--cairn-orange)] text-white",
          ].join(" ")}
          aria-hidden="true"
        >
          <CheckIcon className="h-5 w-5" />
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
          You’re on the list!
        </h3>

        <p
          className={[
            "mt-2 text-sm leading-6",
            theme === "light"
              ? "text-white/80"
              : "text-[var(--cairn-ink-soft)]",
          ].join(" ")}
        >
          We’ll send updates as we build Cairn.
        </p>

        <p
          className={[
            "mt-4 text-sm",
            theme === "light"
              ? "text-white/75"
              : "text-[var(--cairn-ink-soft)]",
          ].join(" ")}
        >
          In the meantime,{" "}
          <a
            href="https://x.com/CairnOutdoors"
            target="_blank"
            rel="noreferrer"
            className={[
              "font-semibold underline underline-offset-4 transition",
              theme === "light"
                ? "text-white hover:text-white/80"
                : "text-[var(--cairn-orange)] hover:text-[var(--cairn-orange-dark)]",
            ].join(" ")}
          >
            follow along on X →
          </a>
        </p>
      </div>
    );
  }

  const inputClassName =
    theme === "light"
      ? [
          "min-h-12 flex-1 rounded-[var(--radius-small)]",
          "border border-white/30 bg-white px-4",
          "text-[var(--cairn-ink)]",
          "placeholder:text-[var(--cairn-ink-soft)]/60",
          "outline-none transition",
          "focus:border-white focus:ring-2 focus:ring-white/30",
        ].join(" ")
      : [
          "min-h-12 flex-1 rounded-[var(--radius-small)]",
          "border border-[var(--cairn-border)] bg-white px-4",
          "text-[var(--cairn-ink)]",
          "placeholder:text-[var(--cairn-ink-soft)]/60",
          "outline-none transition",
          "focus:border-[var(--cairn-orange)]",
          "focus:ring-2 focus:ring-[var(--cairn-orange)]/20",
        ].join(" ");

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`waitlist-email-${theme}`} className="sr-only">
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
              ? "min-h-12 !bg-[var(--cairn-night)] !text-white hover:!bg-[var(--cairn-ink)]"
              : "min-h-12"
          }
        >
          {submissionState === "submitting"
            ? "Joining..."
            : "Join the Waitlist"}
        </Button>
      </div>

      {message ? (
        <p
          className={[
            "mt-3 text-sm",
            theme === "light" ? "text-white" : "text-red-700",
          ].join(" ")}
          role="alert"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="m5 12.5 4.25 4.25L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}