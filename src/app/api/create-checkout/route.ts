import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
  try {
    const { priceId, url, auditData, mode } = await req.json();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://seoaudit.ai";

    // Store audit data in metadata so we can fulfil after payment
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: mode === "subscription" ? "subscription" : "payment",
      success_url: `${baseUrl}/results?session_id={CHECKOUT_SESSION_ID}&url=${encodeURIComponent(url)}&unlocked=1`,
      cancel_url: `${baseUrl}/results?url=${encodeURIComponent(url)}`,
      metadata: {
        audited_url: url,
        audit_score: String(auditData?.score ?? ""),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
