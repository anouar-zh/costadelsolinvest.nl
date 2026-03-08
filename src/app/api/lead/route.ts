import { NextResponse } from "next/server";
import { createLead } from "@/lib/twenty";
import { sendConfirmationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.firstName?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Always respond success to the user — CRM and email are fire-and-forget
    const response = NextResponse.json({ success: true });

    // Fire-and-forget: Twenty CRM + Resend email
    (async () => {
      try {
        await createLead({
          firstName: body.firstName,
          email: body.email,
          phone: body.phone,
          message: body.message,
          contactMethod: body.contactMethod ?? "phone",
          locale: body.locale ?? "nl",
          inferredCountry: body.inferredCountry ?? "NL",
          device: body.device ?? "unknown",
          selections: body.selections ?? {},
        });
        console.log(`[Twenty] Lead created: ${body.firstName} <${body.email}>`);
      } catch (err) {
        console.error("[Twenty] Failed to create lead:", err);
      }

      try {
        await sendConfirmationEmail({
          firstName: body.firstName,
          email: body.email,
          locale: body.locale ?? "nl",
          selections: body.selections ?? {},
        });
        console.log(`[Resend] Confirmation sent to: ${body.email}`);
      } catch (err) {
        console.error("[Resend] Failed to send email:", err);
      }
    })();

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
