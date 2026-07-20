"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const;

export function ScrollDepthTracker() {
  useEffect(() => {
    const recordedThresholds = new Set<number>();

    function handleScroll() {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        return;
      }

      const percentage = Math.min(
        100,
        Math.round((window.scrollY / documentHeight) * 100),
      );

      for (const threshold of THRESHOLDS) {
        if (
          percentage >= threshold &&
          !recordedThresholds.has(threshold)
        ) {
          recordedThresholds.add(threshold);

          trackEvent("scroll_depth", {
            source: "landing-page",
            metadata: {
              percentage: threshold,
            },
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}