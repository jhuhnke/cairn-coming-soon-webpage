"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

export function PageViewTracker() {
  useEffect(() => {
    trackEvent("page_view", {
      source: "landing-page",
      metadata: {
        referrer: document.referrer || null,
      },
    });
  }, []);

  return null;
}