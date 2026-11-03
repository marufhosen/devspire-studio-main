import { NextResponse } from "next/server";

import { site } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_ENDPOINT = "https://api.resend.com/emails";

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const body = (payload ?? {}) as Record<string, unknown>;

  // Honeypot: real submissions never fill this in.
  if (readString(body.company) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = readString(body.name);
  const email = readString(body.email);
  const phone = readString(body.phone);
  const message = readString(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please include your name, email and message." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (
    name.length > 120 ||
    email.length > 200 ||
    phone.length > 40 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "One of the fields is longer than allowed." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is not set, so the enquiry could not be sent.",
    );
    return NextResponse.json(
      { error: "The contact form is not configured yet." },
      { status: 503 },
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ].filter((line): line is string => line !== null);

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    console.error(
      "[contact] The email provider rejected the message:",
      response.status,
      await response.text(),
    );
    return NextResponse.json(
      { error: "We could not send your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
