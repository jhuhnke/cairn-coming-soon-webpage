import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const ALLOWED_EVENTS = new Set([
  "page_view",
  "hero_cta_click",
  "footer_cta_click",
  "scroll_depth",
]);

type AnalyticsRequestBody = {
  eventName?: unknown;
  source?: unknown;
  path?: unknown;
  metadata?: unknown;
  visitorId?: unknown;
  sessionId?: unknown;
};

export async function POST(request: Request) {
  let body: AnalyticsRequestBody;

  try {
    body = (await request.json()) as AnalyticsRequestBody;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const eventName =
    typeof body.eventName === "string" ? body.eventName.trim() : "";

  if (!ALLOWED_EVENTS.has(eventName)) {
    return NextResponse.json(
      { message: "Invalid event name." },
      { status: 400 },
    );
  }

  const source =
    typeof body.source === "string" && body.source.trim()
      ? body.source.trim().slice(0, 100)
      : null;

  const path =
    typeof body.path === "string" && body.path.startsWith("/")
      ? body.path.slice(0, 500)
      : "/";

  const visitorId =
    typeof body.visitorId === "string"
      ? body.visitorId.trim().slice(0, 100)
      : null;

  const sessionId =
    typeof body.sessionId === "string"
      ? body.sessionId.trim().slice(0, 100)
      : null;

  const metadata =
    body.metadata &&
    typeof body.metadata === "object" &&
    !Array.isArray(body.metadata)
      ? body.metadata
      : {};

  try {
    const supabase = createSupabaseAdminClient();

    const { error } = await supabase.from("analytics_events").insert({
      event_name: eventName,
      source,
      path,
      metadata,
      visitor_id: visitorId,
      session_id: sessionId,
    });

    if (error) {
      console.error("Analytics event insert failed", {
        code: error.code,
        message: error.message,
      });

      return NextResponse.json(
        { message: "Unable to record event." },
        { status: 500 },
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Unexpected analytics error", error);

    return NextResponse.json(
      { message: "Unable to record event." },
      { status: 500 },
    );
  }
}