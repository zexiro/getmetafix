import type { GrowthAuditResult } from "./growth-audit-engine";

function scoreColor(score: number): string {
  if (score >= 70) return "#22c55e"; // green
  if (score >= 45) return "#f59e0b"; // amber
  return "#ef4444"; // red
}

function checkRow(label: string, passed: boolean, value: string, note: string): string {
  const icon = passed
    ? '<span style="color:#22c55e;font-weight:700;">✓</span>'
    : '<span style="color:#ef4444;font-weight:700;">✗</span>';
  return `
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:8px 12px;">${icon}</td>
      <td style="padding:8px 12px;font-size:13px;color:#374151;">${label}</td>
      <td style="padding:8px 12px;font-size:12px;color:#6b7280;max-width:200px;word-break:break-word;">${value}</td>
      <td style="padding:8px 12px;font-size:12px;color:${passed ? "#6b7280" : "#b45309"};">${note}</td>
    </tr>`;
}

function sectionTable(title: string, checks: { id: string; label: string; passed: boolean; value: string; note: string }[]): string {
  const rows = checks.map((c) => checkRow(c.label, c.passed, c.value, c.note)).join("");
  return `
    <div style="margin-bottom:32px;">
      <h3 style="font-size:16px;font-weight:700;color:#111827;margin:0 0 12px 0;padding-bottom:8px;border-bottom:2px solid #e5e7eb;">${title}</h3>
      <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <thead>
          <tr style="background:#f9fafb;">
            <th style="padding:8px 12px;text-align:left;font-size:12px;color:#9ca3af;width:32px;"></th>
            <th style="padding:8px 12px;text-align:left;font-size:12px;color:#9ca3af;">Check</th>
            <th style="padding:8px 12px;text-align:left;font-size:12px;color:#9ca3af;">Current</th>
            <th style="padding:8px 12px;text-align:left;font-size:12px;color:#9ca3af;">Finding</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

export function generateAuditHtml(result: GrowthAuditResult): string {
  const { url, businessName, overallScore, seo, performance, social, competitor, topFixes, auditedAt } = result;

  const overallColor = scoreColor(overallScore);
  const auditDate = new Date(auditedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const topFixRows = topFixes.map((f) => `
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:10px 12px;font-weight:700;color:#111827;width:32px;">${f.priority}</td>
      <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#111827;">${f.title}</td>
      <td style="padding:10px 12px;">
        <span style="display:inline-block;padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:${f.impact === "High" ? "#fee2e2" : "#fef3c7"};color:${f.impact === "High" ? "#991b1b" : "#92400e"};">${f.impact} impact</span>
      </td>
      <td style="padding:10px 12px;font-size:12px;color:#6b7280;">${f.detail}</td>
    </tr>`).join("");

  let competitorSection = "";
  if (competitor) {
    const compRows = competitor.subjectChecks.map((sc, i) => {
      const cc = competitor.competitorChecks[i];
      const subjectCell = `<td style="padding:8px 12px;font-size:12px;">${sc.passed ? '<span style="color:#22c55e;">✓</span>' : '<span style="color:#ef4444;">✗</span>'} ${sc.value}</td>`;
      const compCell = cc
        ? `<td style="padding:8px 12px;font-size:12px;">${cc.passed ? '<span style="color:#22c55e;">✓</span>' : '<span style="color:#ef4444;">✗</span>'} ${cc.value}</td>`
        : `<td style="padding:8px 12px;font-size:12px;color:#9ca3af;">—</td>`;
      return `<tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:8px 12px;font-size:13px;color:#374151;">${sc.label}</td>${subjectCell}${compCell}</tr>`;
    }).join("");

    competitorSection = `
      <div style="margin-bottom:32px;">
        <h3 style="font-size:16px;font-weight:700;color:#111827;margin:0 0 12px 0;padding-bottom:8px;border-bottom:2px solid #e5e7eb;">Competitor Comparison</h3>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          <thead>
            <tr style="background:#f9fafb;">
              <th style="padding:8px 12px;text-align:left;font-size:12px;color:#9ca3af;">Check</th>
              <th style="padding:8px 12px;text-align:left;font-size:12px;color:#9ca3af;">Your site</th>
              <th style="padding:8px 12px;text-align:left;font-size:12px;color:#9ca3af;">${competitor.competitorUrl}</th>
            </tr>
          </thead>
          <tbody>${compRows}</tbody>
        </table>
      </div>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>GetMetaFix Growth Audit — ${businessName}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background: #fff; color: #111827; }
  @page { size: A4; margin: 0; }
</style>
</head>
<body>

<!-- HEADER -->
<div style="background:#111827;color:#fff;padding:32px 48px 28px;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
        <div style="width:32px;height:32px;background:#22c55e;border-radius:6px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#fff;font-weight:900;font-size:16px;">G</span>
        </div>
        <span style="font-weight:700;font-size:18px;letter-spacing:-0.3px;">GetMetaFix</span>
      </div>
      <h1 style="font-size:28px;font-weight:800;letter-spacing:-0.5px;margin-bottom:6px;">Growth Audit Report</h1>
      <p style="color:#9ca3af;font-size:14px;">${businessName}</p>
      <p style="color:#6b7280;font-size:12px;margin-top:4px;">${url}</p>
    </div>
    <div style="text-align:right;">
      <div style="font-size:56px;font-weight:900;color:${overallColor};line-height:1;">${overallScore}</div>
      <div style="color:#9ca3af;font-size:13px;margin-top:4px;">Overall Score / 100</div>
      <div style="color:#6b7280;font-size:11px;margin-top:8px;">${auditDate}</div>
    </div>
  </div>
</div>

<!-- SCORE SUMMARY BAR -->
<div style="background:#1f2937;padding:20px 48px;display:flex;gap:32px;">
  <div style="text-align:center;">
    <div style="font-size:26px;font-weight:800;color:${scoreColor(seo.score * 100 / 40)};">${seo.score}<span style="font-size:14px;color:#9ca3af;">/40</span></div>
    <div style="color:#9ca3af;font-size:12px;margin-top:4px;">SEO Health</div>
  </div>
  <div style="width:1px;background:#374151;"></div>
  <div style="text-align:center;">
    <div style="font-size:26px;font-weight:800;color:${scoreColor(performance.score * 100 / 30)};">${performance.score}<span style="font-size:14px;color:#9ca3af;">/30</span></div>
    <div style="color:#9ca3af;font-size:12px;margin-top:4px;">Performance</div>
  </div>
  <div style="width:1px;background:#374151;"></div>
  <div style="text-align:center;">
    <div style="font-size:26px;font-weight:800;color:${scoreColor(social.score * 100 / 30)};">${social.score}<span style="font-size:14px;color:#9ca3af;">/30</span></div>
    <div style="color:#9ca3af;font-size:12px;margin-top:4px;">Social Presence</div>
  </div>
  ${performance.performanceScore !== null ? `
  <div style="width:1px;background:#374151;"></div>
  <div style="text-align:center;">
    <div style="font-size:26px;font-weight:800;color:${scoreColor(performance.performanceScore)};">${performance.performanceScore}<span style="font-size:14px;color:#9ca3af;">/100</span></div>
    <div style="color:#9ca3af;font-size:12px;margin-top:4px;">PageSpeed (Mobile)</div>
  </div>` : ""}
</div>

<!-- BODY -->
<div style="padding:40px 48px;">

  <!-- TOP 5 FIXES -->
  <div style="margin-bottom:40px;">
    <h2 style="font-size:20px;font-weight:800;color:#111827;margin-bottom:16px;">
      Top ${topFixes.length} Priority Fixes
    </h2>
    <p style="font-size:14px;color:#6b7280;margin-bottom:16px;">Address these issues first for the highest impact on your growth.</p>
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <thead>
        <tr style="background:#f9fafb;">
          <th style="padding:10px 12px;text-align:left;font-size:12px;color:#9ca3af;width:32px;">#</th>
          <th style="padding:10px 12px;text-align:left;font-size:12px;color:#9ca3af;">Issue</th>
          <th style="padding:10px 12px;text-align:left;font-size:12px;color:#9ca3af;">Impact</th>
          <th style="padding:10px 12px;text-align:left;font-size:12px;color:#9ca3af;">Detail</th>
        </tr>
      </thead>
      <tbody>${topFixRows}</tbody>
    </table>
  </div>

  <!-- DETAILED FINDINGS -->
  ${sectionTable("SEO Health Findings", seo.checks)}
  ${sectionTable("Performance Findings", performance.checks)}
  ${sectionTable("Social Presence Findings", social.checks)}
  ${competitorSection}

  <!-- NEXT STEPS -->
  <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:28px;margin-top:32px;">
    <h3 style="font-size:16px;font-weight:700;color:#14532d;margin-bottom:10px;">Next Steps</h3>
    <p style="font-size:14px;color:#166534;line-height:1.6;margin-bottom:12px;">
      You've received a snapshot of your site's current state. Now it's time to fix these issues and keep them fixed.
    </p>
    <p style="font-size:14px;color:#166534;line-height:1.6;margin-bottom:16px;">
      <strong>GetMetaFix Monitoring ($29/mo)</strong> automatically re-audits your site weekly, alerts you when new issues appear,
      and provides AI-generated fixes you can copy-paste directly into your CMS.
    </p>
    <div style="display:flex;gap:12px;align-items:center;">
      <a href="https://getmetafix.com" style="display:inline-block;background:#111827;color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;">
        Start monitoring — getmetafix.com
      </a>
      <span style="font-size:12px;color:#6b7280;">Reply to this email with any questions.</span>
    </div>
  </div>

</div>

<!-- FOOTER -->
<div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 48px;display:flex;justify-content:space-between;align-items:center;">
  <span style="font-size:12px;color:#9ca3af;">Generated by GetMetaFix · getmetafix.com</span>
  <span style="font-size:12px;color:#9ca3af;">47-point Growth Audit · ${auditDate}</span>
</div>

</body>
</html>`;
}

export async function generatePdf(html: string): Promise<Buffer> {
  // Build the module path at runtime so Turbopack cannot statically analyze it.
  // Turbopack only traces string literals passed directly to require/import —
  // a runtime-constructed string is opaque to the bundler.
  const playwrightPath =
    process.env.PLAYWRIGHT_CORE_PATH ??
    ["/tmp", "reddit_work", "node_modules", "playwright-core"].join("/");

  const { createRequire } = await import("module");
  const req = createRequire(import.meta.url);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { chromium } = req(playwrightPath) as any;

  const browser = await chromium.launch({
    executablePath:
      "/tmp/pw-browsers/chromium_headless_shell-1208/chrome-headless-shell-linux64/chrome-headless-shell",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle" });
    const pdf = await page.pdf({ format: "A4", printBackground: true });
    return pdf as Buffer;
  } finally {
    await browser.close();
  }
}
