import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type WaitlistRequestBody = {
  email?: unknown;
  source?: unknown;
  referrer?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: WaitlistRequestBody;

  try {
    body = (await request.json()) as WaitlistRequestBody;
  } catch {
    return NextResponse.json(
      {
        message: "Invalid request body.",
      },
      {
        status: 400,
      },
    );
  }

  const email =
    typeof body.email === "string"
      ? body.email.trim().toLowerCase()
      : "";

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      {
        message: "Please enter a valid email address.",
      },
      {
        status: 400,
      },
    );
  }

  if (email.length > 320) {
    return NextResponse.json(
      {
        message: "Please enter a valid email address.",
      },
      {
        status: 400,
      },
    );
  }

  const source =
    typeof body.source === "string" && body.source.trim()
      ? body.source.trim().slice(0, 100)
      : "coming-soon-page";

  const referrer =
    typeof body.referrer === "string" && body.referrer.trim()
      ? body.referrer.trim().slice(0, 500)
      : null;

  try {
    const supabase = createSupabaseAdminClient();

    const { error } = await supabase
      .from("waitlist_signups")
      .insert({
        email,
        source,
        referrer,
      });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            message: "You’re already on the waitlist.",
          },
          {
            status: 200,
          },
        );
      }

      console.error("Waitlist signup failed", {
        code: error.code,
        message: error.message,
      });

      return NextResponse.json(
        {
          message: "Unable to join the waitlist right now. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        message: "You’re on the list!",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Unexpected waitlist error", error);

    return NextResponse.json(
      {
        message: "Unable to join the waitlist right now. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}