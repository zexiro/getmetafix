import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, email }: { url: string; email: string } = body;

    if (!url || !email) {
      return NextResponse.json(
        { error: "url and email are required" },
        { status: 400 }
      );
    }

    const priceId = process.env.MONITOR_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "MONITOR_PRICE_ID is not configured" },
        { status: 500 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://getmetafix.com";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 14,
        metadata: { monitored_url: url },
      },
      metadata: {
        monitored_url: url,
        customer_email: email,
      },
      success_url: `${baseUrl}/monitor/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/monitor/checkout`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Monitor checkout error:", err);
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
