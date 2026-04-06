import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO_EMAIL = process.env.SENDGRID_TO_EMAIL || "lokesh.sundar@gmail.com";
    const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "no-reply@stjosephsbriandsquare.com";

    if (!SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: "SendGrid API key is not configured." },
        { status: 500 }
      );
    }

    const payload = {
      personalizations: [
        {
          to: [{ email: TO_EMAIL }],
          subject: `Contact form: ${subject}`,
        },
      ],
      from: {
        email: FROM_EMAIL,
        name: "St. Joseph's Briand Square Website",
      },
      reply_to: {
        email,
        name,
      },
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
        },
      ],
    };

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "Failed to send email.", details: errorText },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to process request.", details: String(error) },
      { status: 500 }
    );
  }
}
