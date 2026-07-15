import { NextResponse } from "next/server";

type WaitlistRequest = {
  email?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistRequest;
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Temporary implementation.
    // We will replace this with a database insertion.
    console.info("Cairn waitlist signup received", {
      emailDomain: email.split("@")[1],
    });

    return NextResponse.json(
      { message: "You’re on the list. We’ll keep you posted." },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "The request could not be processed." },
      { status: 400 },
    );
  }
}