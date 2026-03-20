import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// SendGrid Inbound Parse webhook
// Called when someone replies to a @getmetafix.com email
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const from = formData.get("from")?.toString() || "";
    const to = formData.get("to")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const text = formData.get("text")?.toString() || "";
    const html = formData.get("html")?.toString() || "";
    const timestamp = new Date().toISOString();

    const entry = {
      id: `reply_${Date.now()}`,
      timestamp,
      from,
      to,
      subject,
      body: text || html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
      read: false,
      actioned: false,
    };

    console.log("[inbound] New reply from:", from, "| subject:", subject);

    // Send notification email
    const notifyRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "louiswharmby@gmail.com" }] }],
        from: { email: "hello@getmetafix.com", name: "GetMetaFix Inbox" },
        subject: `📬 Reply from ${from}: ${subject}`,
        content: [
          {
            type: "text/plain",
            value: `New reply received at GetMetaFix:\n\nFrom: ${from}\nTo: ${to}\nSubject: ${subject}\nTime: ${timestamp}\n\n---\n\n${entry.body}\n\n---\nLog this reply and respond within 24h.`,
          },
        ],
      }),
    });

    console.log("[inbound] Notification sent:", notifyRes.status);

    return NextResponse.json({ ok: true, id: entry.id });
  } catch (err) {
    console.error("[inbound] Error:", err);
    return NextResponse.json({ ok: false }, { status: 200 }); // Always 200 to SendGrid
  }
}
