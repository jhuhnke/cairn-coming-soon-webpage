type AnalyticsEventName =
  | "page_view"
  | "hero_cta_click"
  | "footer_cta_click"
  | "scroll_depth";

type TrackEventOptions = {
  source?: string;
  metadata?: Record<string, unknown>;
};

const VISITOR_STORAGE_KEY = "cairn_visitor_id";
const SESSION_STORAGE_KEY = "cairn_session_id";

function createAnonymousId(): string {
  return crypto.randomUUID();
}

function getVisitorId(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const existingId = window.localStorage.getItem(VISITOR_STORAGE_KEY);

    if (existingId) {
      return existingId;
    }

    const newId = createAnonymousId();
    window.localStorage.setItem(VISITOR_STORAGE_KEY, newId);

    return newId;
  } catch {
    return null;
  }
}

function getSessionId(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const existingId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (existingId) {
      return existingId;
    }

    const newId = createAnonymousId();
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, newId);

    return newId;
  } catch {
    return null;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  options: TrackEventOptions = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload = JSON.stringify({
    eventName,
    source: options.source ?? null,
    path: window.location.pathname,
    metadata: options.metadata ?? {},
    visitorId: getVisitorId(),
    sessionId: getSessionId(),
  });

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], {
      type: "application/json",
    });

    const sent = navigator.sendBeacon("/api/events", blob);

    if (sent) {
      return;
    }
  }

  void fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // Analytics should never interrupt the page experience.
  });
}