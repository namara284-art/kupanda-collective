import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";
import { notify } from "@/lib/notify";
import { getClientKey, isRateLimited } from "@/lib/rate-limit";

// Demo-mode newsletter signup. No email marketing platform is connected.
// see README.md "Configure newsletter sign-up" for how to wire this route
// to Mailchimp, Buttondown, ConvertKit or similar.
export async function POST(request: Request) {
  if (isRateLimited(`newsletter:${getClientKey(request)}`)) {
    return NextResponse.json({ ok: false, message: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the form for errors.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { delivered } = await notify("newsletter", { email: parsed.data.email });

  return NextResponse.json({ ok: true, delivered });
}
