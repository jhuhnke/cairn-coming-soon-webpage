"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
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
      setMessage(result.message ?? "You’re on the list.");
      setEmail("");
    } catch (error) {
      setSubmissionState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>

        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="min-h-12 flex-1 rounded-[var(--radius-small)] border border-[var(--cairn-border)] bg-white px-4 outline-none transition focus:border-[var(--cairn-orange)] focus:ring-2 focus:ring-[var(--cairn-orange)]/20"
        />

        <Button
          type="submit"
          disabled={submissionState === "submitting"}
          className="min-h-12"
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
            submissionState === "error"
              ? "text-red-700"
              : "text-[var(--cairn-forest)]",
          ].join(" ")}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}