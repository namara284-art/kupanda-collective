import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { notify } from "@/lib/notify";
import { getClientKey, isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (isRateLimited(`contact:${getClientKey(request)}`)) {
    return NextResponse.json({ ok: false, message: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the form for errors.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // Honeypot tripped: report success to the bot without processing anything.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, topic, message } = parsed.data;
  const { delivered } = await notify("contact", { name, email, topic, message });

  return NextResponse.json({ ok: true, delivered });
}
