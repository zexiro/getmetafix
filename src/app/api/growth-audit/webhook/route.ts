import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { runGrowthAudit } from "@/lib/growth-audit-engine";
import { generateAuditHtml, generatePdf } from "@/lib/pdf-generator";
import { sendAuditEmail } from "@/lib/send-audit-email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
  const body = await req.text();

  // Signature verification — enabled when STRIPE_GROWTH_AUDIT_WEBHOOK_SECRET is set
  const webhookSecret = process.env.STRIPE_GROWTH_AUDIT_WEBHOOK_SECRET;
  let event: Stripe.Event;

  if (webhookSecret) {
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }
    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
      console.error("Growth Audit webhook signature error:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  } else {
    // No webhook secret configured — parse event directly (dev/testing mode)
    try {
      event = JSON.parse(body) as Stripe.Event;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
  }

  if (event.type !== "checkout.session.completed") {
    // Acknowledge but ignore other event types
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Only process Growth Audit payments (they carry our metadata keys)
  const auditedUrl = session.metadata?.audited_url;
  const businessName = session.metadata?.business_name;
  const customerEmail = session.metadata?.customer_email || session.customer_email;
  const competitorUrl = session.metadata?.competitor_url || undefined;

  if (!auditedUrl || !businessName || !customerEmail) {
    console.log("Growth Audit webhook: skipping session — missing required metadata", session.id);
    return NextResponse.json({ received: true });
  }

  console.log(`Growth Audit: starting for ${auditedUrl} (${businessName}) → ${customerEmail}`);

  try {
    // 1. Run the audit
    const result = await runGrowthAudit(auditedUrl, businessName, competitorUrl);

    // 2. Generate HTML report
    const html = generateAuditHtml(result);

    // 3. Convert to PDF via Playwright
    const pdfBuffer = await generatePdf(html);

    // 4. Send PDF via SendGrid
    await sendAuditEmail({
      to: customerEmail,
      businessName,
      url: auditedUrl,
      result,
      pdfBuffer,
    });

    console.log(`Growth Audit: completed and emailed for ${auditedUrl}`);
  } catch (err) {
    console.error(`Growth Audit: failed for ${auditedUrl}:`, err);
    // Return 200 so Stripe doesn't retry — log the error for manual follow-up
    // In production you'd want alerting here
  }

  return NextResponse.json({ received: true });
}
