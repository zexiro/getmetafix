import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia" as Parameters<typeof Stripe>[1]["apiVersion"],
});

// Only allow verified Stripe sessions to download
export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId || !sessionId.startsWith("cs_")) {
    return NextResponse.json({ error: "Invalid session" }, { status: 400 });
  }

  // Verify the session with Stripe
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }

  // Must be paid
  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment not completed" }, { status: 403 });
  }

  // Read the PDF from private-assets (bundled via next.config outputFileTracingIncludes)
  const pdfPath = path.join(process.cwd(), "private-assets", "openclaw-setup-guide.pdf");

  let pdfBuffer: Buffer;
  try {
    pdfBuffer = fs.readFileSync(pdfPath);
  } catch {
    console.error("PDF not found at:", pdfPath);
    return NextResponse.json({ error: "File not found" }, { status: 500 });
  }

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="openclaw-setup-guide.pdf"',
      "Content-Length": pdfBuffer.length.toString(),
      "Cache-Control": "private, no-store",
    },
  });
}
