import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, url, summary } = await req.json();

    if (!email || !url) {
      return NextResponse.json({ error: "Email and URL required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const sendgridKey = process.env.SENDGRID_API_KEY;
    if (!sendgridKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    // 1. Add to SendGrid contacts list
    await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sendgridKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contacts: [
          {
            email: email.toLowerCase().trim(),
            custom_fields: {},
          },
        ],
      }),
    });

    // 2. Send the audit report email
    const scoreEmoji =
      (summary?.grade === "A" && "🟢") ||
      (summary?.grade === "B" && "🟢") ||
      (summary?.grade === "C" && "🟡") ||
      (summary?.grade === "D" && "🟠") ||
      "🔴";

    const issuesText =
      summary?.critical > 0
        ? `<strong style="color:#dc2626">${summary.critical} critical issue${summary.critical !== 1 ? "s" : ""}</strong>${summary.warning > 0 ? ` and <strong style="color:#d97706">${summary.warning} warning${summary.warning !== 1 ? "s" : ""}</strong>` : ""} found.`
        : summary?.warning > 0
        ? `<strong style="color:#d97706">${summary.warning} warning${summary.warning !== 1 ? "s" : ""}</strong> found.`
        : "No critical issues found - great work.";

    const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f9fafb;margin:0;padding:0">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
        <!-- Header -->
        <tr><td style="background:#000000;padding:24px 32px">
          <span style="color:#ffffff;font-size:18px;font-weight:700">GetMetaFix</span>
          <span style="color:#6b7280;font-size:14px;margin-left:8px">SEO Audit Report</span>
        </td></tr>

        <!-- Score -->
        <tr><td style="padding:32px">
          <p style="color:#6b7280;font-size:14px;margin:0 0 4px">Audit results for</p>
          <p style="color:#111827;font-size:16px;font-weight:600;margin:0 0 24px;word-break:break-all">${url}</p>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;border-radius:8px;padding:20px;margin-bottom:24px">
            <tr>
              <td style="text-align:center;width:33%">
                <div style="font-size:48px;font-weight:900;color:#111827">${scoreEmoji} ${summary?.grade ?? "?"}</div>
                <div style="font-size:24px;font-weight:700;color:#374151">${summary?.score ?? "?"}/100</div>
                <div style="font-size:12px;color:#6b7280;margin-top:4px">SEO Score</div>
              </td>
              <td style="text-align:center;width:33%">
                <div style="font-size:28px;font-weight:700;color:#dc2626">${summary?.critical ?? 0}</div>
                <div style="font-size:12px;color:#6b7280;margin-top:4px">Critical</div>
              </td>
              <td style="text-align:center;width:33%">
                <div style="font-size:28px;font-weight:700;color:#d97706">${summary?.warning ?? 0}</div>
                <div style="font-size:12px;color:#6b7280;margin-top:4px">Warnings</div>
              </td>
            </tr>
          </table>

          <p style="color:#374151;font-size:15px;margin:0 0 24px">${issuesText}</p>

          <p style="color:#374151;font-size:15px;margin:0 0 8px">
            The full audit with all issue details is available on your results page. If you'd like the AI-generated fixes - exact HTML to copy-paste into your site - they're available for $29 (one-time).
          </p>

          <!-- CTA -->
          <table cellpadding="0" cellspacing="0" style="margin:24px 0">
            <tr>
              <td style="background:#000000;border-radius:8px;padding:14px 28px">
                <a href="https://getmetafix.com/results?url=${encodeURIComponent(url)}"
                   style="color:#ffffff;font-weight:700;font-size:15px;text-decoration:none">
                  View full audit →
                </a>
              </td>
              <td style="width:12px"></td>
              <td style="border:1px solid #e5e7eb;border-radius:8px;padding:13px 20px">
                <a href="https://getmetafix.com/results?url=${encodeURIComponent(url)}"
                   style="color:#374151;font-weight:600;font-size:14px;text-decoration:none">
                  Get fixes for $29
                </a>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">

          <p style="color:#9ca3af;font-size:12px;margin:0">
            You received this because you ran an audit at getmetafix.com.<br>
            Questions? Reply to this email or visit <a href="https://getmetafix.com" style="color:#6b7280">getmetafix.com</a>.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const emailRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sendgridKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: email.toLowerCase().trim() }] }],
        from: {
          email: "hello@getmetafix.com",
          name: "GetMetaFix",
        },
        subject: `Your SEO audit for ${new URL(url).hostname} - Grade ${summary?.grade ?? "complete"}`,
        content: [{ type: "text/html", value: htmlBody }],
        tracking_settings: {
          click_tracking: { enable: true },
          open_tracking: { enable: true },
        },
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("SendGrid error:", errText);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email capture error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
