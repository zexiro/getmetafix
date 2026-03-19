import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      url,
      email,
      businessName,
      competitorUrl,
    }: {
      url: string;
      email: string;
      businessName: string;
      competitorUrl?: string;
    } = body;

    if (!url || !email || !businessName) {
      return NextResponse.json(
        { error: "url, email, and businessName are required" },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://getmetafix.com";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 14900, // $149.00
            product_data: {
              name: "GetMetaFix Growth Audit",
              description:
                "47-point audit covering SEO, page speed, social presence, and competitors. Delivered as a PDF within 30 minutes.",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        audited_url: url,
        business_name: businessName,
        customer_email: email,
        competitor_url: competitorUrl ?? "",
      },
      success_url: `${baseUrl}/growth-audit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/growth-audit/order`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Growth Audit checkout error:", err);
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
