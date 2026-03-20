import type { GrowthAuditResult } from "./growth-audit-engine";

interface SendAuditEmailOptions {
  to: string;
  businessName: string;
  url: string;
  result: GrowthAuditResult;
  pdfBuffer: Buffer;
}

export async function sendAuditEmail(opts: SendAuditEmailOptions): Promise<void> {
  const { to, businessName, url, result, pdfBuffer } = opts;

  const top3 = result.topFixes.slice(0, 3);
  const top3Text = top3
    .map((f, i) => `${i + 1}. ${f.title} (${f.impact} impact) - ${f.detail}`)
    .join("\n");

  const textBody = `Hi ${businessName},

Your GetMetaFix Growth Audit for ${url} is attached.

Overall Score: ${result.overallScore}/100
SEO Health: ${result.seo.score}/40
Performance: ${result.performance.score}/30
Social Presence: ${result.social.score}/30

Your top 3 priority fixes:
${top3Text}

The full 47-point report is attached as a PDF.

If you have any questions, just reply to this email.

- The GetMetaFix Team
https://getmetafix.com`;

  const htmlBody = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#111827;">
      <div style="background:#111827;padding:24px 32px;border-radius:8px 8px 0 0;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:28px;height:28px;background:#22c55e;border-radius:5px;display:flex;align-items:center;justify-content:center;">
            <span style="color:#fff;font-weight:900;font-size:14px;">G</span>
          </div>
          <span style="color:#fff;font-weight:700;font-size:16px;">GetMetaFix</span>
        </div>
      </div>
      <div style="background:#fff;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
        <h1 style="font-size:22px;font-weight:800;margin-bottom:8px;">Your Growth Audit is ready</h1>
        <p style="color:#6b7280;font-size:14px;margin-bottom:24px;">Hi ${businessName}, your audit for <strong>${url}</strong> is attached.</p>

        <div style="background:#f9fafb;border-radius:8px;padding:20px;margin-bottom:24px;">
          <div style="font-size:32px;font-weight:900;color:${result.overallScore >= 70 ? "#22c55e" : result.overallScore >= 45 ? "#f59e0b" : "#ef4444"};">${result.overallScore}<span style="font-size:16px;color:#9ca3af;">/100</span></div>
          <div style="font-size:13px;color:#6b7280;margin-top:4px;">Overall Score</div>
        </div>

        <h2 style="font-size:15px;font-weight:700;margin-bottom:12px;">Your top 3 priority fixes:</h2>
        <ol style="padding-left:20px;margin-bottom:24px;">
          ${top3.map((f) => `<li style="margin-bottom:8px;font-size:14px;color:#374151;"><strong>${f.title}</strong> - ${f.detail}</li>`).join("")}
        </ol>

        <p style="font-size:14px;color:#374151;margin-bottom:24px;">The full PDF report is attached. It contains all 47 checks across SEO, performance, and social presence${result.competitor ? ", plus a competitor comparison" : ""}.</p>

        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin-bottom:24px;">
          <p style="font-size:13px;color:#166534;margin:0;">Want ongoing monitoring? <a href="https://getmetafix.com" style="color:#15803d;font-weight:600;">GetMetaFix monitors your site weekly</a> and alerts you to new issues - from $29/mo.</p>
        </div>

        <p style="font-size:13px;color:#9ca3af;">Reply to this email if you have questions.</p>
      </div>
    </div>`;

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: "hello@getmetafix.com", name: "GetMetaFix" },
    subject: "Your GetMetaFix Growth Audit is ready",
    content: [
      { type: "text/plain", value: textBody },
      { type: "text/html", value: htmlBody },
    ],
    attachments: [
      {
        content: pdfBuffer.toString("base64"),
        filename: `getmetafix-growth-audit-${new URL(result.url).hostname.replace("www.", "")}.pdf`,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`SendGrid error ${response.status}: ${errText}`);
  }
}
