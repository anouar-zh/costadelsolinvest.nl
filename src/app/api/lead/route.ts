import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // MVP: log the lead to console
    console.log("--- NEW LEAD ---");
    console.log("Name:", body.firstName);
    console.log("Email:", body.email);
    console.log("Phone:", body.phone);
    console.log("Message:", body.message || "(none)");
    console.log("Selections:", JSON.stringify(body.selections, null, 2));
    console.log("----------------");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
