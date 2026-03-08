import { NextResponse } from "next/server";
import { createLead } from "@/lib/twenty";
import { sendConfirmationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("=== NEW LEAD SUBMISSION ===");
    console.log("Name:", body.firstName);
    console.log("Email:", body.email);
    console.log("Phone:", body.phone);
    console.log("Contact method:", body.contactMethod);
    console.log("Locale:", body.locale);
    console.log("Selections:", JSON.stringify(body.selections));
    console.log("TWENTY_API_URL configured:", !!process.env.TWENTY_API_URL);
    console.log("TWENTY_API_KEY configured:", !!process.env.TWENTY_API_KEY);
    console.log("RESEND_API_KEY configured:", !!process.env.RESEND_API_KEY);

    // Validate required fields
    if (!body.firstName?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      console.error("[Lead] Validation failed: missing required fields");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Twenty CRM
    try {
      console.log("[Twenty] Creating lead...");
      const personId = await createLead({
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
      console.log(`[Twenty] SUCCESS — Person ID: ${personId}`);
    } catch (err) {
      console.error("[Twenty] FAILED:", err instanceof Error ? err.message : err);
    }

    // Resend email
    try {
      console.log("[Resend] Sending confirmation email...");
      await sendConfirmationEmail({
        firstName: body.firstName,
        email: body.email,
        locale: body.locale ?? "nl",
        selections: body.selections ?? {},
      });
      console.log(`[Resend] SUCCESS — Email sent to ${body.email}`);
    } catch (err) {
      console.error("[Resend] FAILED:", err instanceof Error ? err.message : err);
    }

    console.log("=== LEAD PROCESSING COMPLETE ===");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Lead] Request error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
