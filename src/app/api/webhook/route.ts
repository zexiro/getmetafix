import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://getmetafix.com";

async function sendFulfillmentEmail(
  toEmail: string,
  toName: string,
  auditedUrl: string,
  isSubscription: boolean
) {
  const resultsLink = `${BASE_URL}/results?url=${encodeURIComponent(auditedUrl)}&unlocked=1`;
  const subject = isSubscription
    ? "Your GetMetaFix subscription is active - fixes unlocked"
    : "Your GetMetaFix fixes are ready";

  const body = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #111;">
  <div style="margin-bottom: 32px;">
    <div style="width: 32px; height: 32px; background: #000; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
      <span style="color: white; font-weight: 700; font-size: 14px;">S</span>
    </div>
    <span style="font-weight: 600; font-size: 16px; margin-left: 8px; vertical-align: middle;">GetMetaFix</span>
  </div>

  <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 8px;">Your fixes are unlocked.</h1>
  <p style="color: #666; margin: 0 0 24px;">
    ${isSubscription ? "Your 14-day free trial is now active." : "Payment confirmed."} Here's your audit with all AI-generated fixes:
  </p>

  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <p style="margin: 0 0 4px; font-size: 13px; color: #888;">Audited URL</p>
    <p style="margin: 0; font-weight: 600; word-break: break-all;">${auditedUrl}</p>
  </div>

  <a href="${resultsLink}" style="display: block; background: #000; color: #fff; text-align: center; padding: 14px 24px; border-radius: 10px; font-weight: 700; text-decoration: none; font-size: 15px; margin-bottom: 16px;">
    View your unlocked fixes →
  </a>

  <p style="font-size: 13px; color: #888; margin: 0 0 8px;">
    Each fix is a ready-to-paste HTML snippet. Click any issue to expand it, then copy the code directly into your site.
  </p>

  ${isSubscription ? `
  <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
  <p style="font-size: 13px; color: #888; margin: 0;">
    <strong style="color: #555;">What's included with your subscription:</strong><br />
    Weekly automated health checks, SSL expiry monitoring, broken link detection, and an updated audit report every Monday.
  </p>
  ` : `
  <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
  <p style="font-size: 13px; color: #888; margin: 0;">
    Want ongoing monitoring? Upgrade to $19/mo and we'll run automated checks every week and alert you to new issues.
    <a href="${BASE_URL}/monitor" style="color: #000;">Learn more →</a>
  </p>
  `}

  <p style="font-size: 12px; color: #aaa; margin: 24px 0 0;">
    Questions? Reply to this email or contact alex@getmetafix.com<br />
    GetMetaFix - <a href="${BASE_URL}" style="color: #aaa;">${BASE_URL}</a>
  </p>
</div>
  `.trim();

  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: toEmail, name: toName }] }],
      from: { email: "alex@getmetafix.com", name: "Alex @ GetMetaFix" },
      subject,
      content: [{ type: "text/html", value: body }],
      reply_to: { email: "alex@getmetafix.com", name: "Alex @ GetMetaFix" },
    }),
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const auditedUrl = session.metadata?.audited_url ?? "";
      const customerEmail = session.customer_details?.email ?? "";
      const customerName = session.customer_details?.name ?? "there";
      const isSubscription = session.mode === "subscription";

      console.log(
        `✅ Payment completed - Email: ${customerEmail}, URL: ${auditedUrl}, Mode: ${session.mode}`
      );

      // Send fulfillment email
      if (customerEmail && auditedUrl) {
        try {
          await sendFulfillmentEmail(customerEmail, customerName, auditedUrl, isSubscription);
          console.log(`📧 Fulfillment email sent to ${customerEmail}`);
        } catch (e) {
          console.error("Fulfillment email failed:", e);
        }
      }
      break;
    }
    case "customer.subscription.created": {
      const sub = event.data.object as Stripe.Subscription;
      console.log(`🔄 Subscription created: ${sub.id}`);
      break;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      console.log(`❌ Subscription cancelled: ${sub.id}`);
      break;
    }
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`⚠️ Payment failed for: ${invoice.customer}`);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
