import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { addSubscriber, deactivateSubscriber } from "@/lib/subscriber-store";
import { randomUUID } from "crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const webhookSecret = process.env.STRIPE_MONITOR_WEBHOOK_SECRET;
  let event: Stripe.Event;

  if (webhookSecret) {
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }
    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
      console.error("Monitor webhook signature error:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  } else {
    // Dev/testing mode - parse event directly
    try {
      event = JSON.parse(body) as Stripe.Event;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const monitoredUrl = session.metadata?.monitored_url;
    const customerEmail =
      session.metadata?.customer_email || session.customer_email;

    if (!monitoredUrl || !customerEmail) {
      console.log(
        "Monitor webhook: skipping session - missing required metadata",
        session.id
      );
      return NextResponse.json({ received: true });
    }

    const subscriptionId =
      typeof session.subscription === "string"
        ? session.subscription
        : session.subscription?.id ?? undefined;

    const subscriber = {
      id: randomUUID(),
      url: monitoredUrl,
      email: customerEmail,
      createdAt: new Date().toISOString(),
      lastChecked: null,
      stripeSubscriptionId: subscriptionId,
    };

    addSubscriber(subscriber);
    console.log(
      `Monitor: new subscriber added - ${monitoredUrl} (${customerEmail})`
    );
  } else if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;
    deactivateSubscriber(subscription.id);
    console.log(`Monitor: subscriber deactivated - ${subscription.id}`);
  }

  return NextResponse.json({ received: true });
}
