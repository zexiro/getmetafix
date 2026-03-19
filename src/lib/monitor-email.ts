import type { HealthCheck, HealthChange } from "./health-checker";
import { computeHealthScore } from "./health-checker";

export interface WeeklyReportOptions {
  to: string;
  url: string;
  current: HealthCheck;
  previous: HealthCheck | null;
  changes: HealthChange[];
}

function scoreColor(score: number): string {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#f59e0b";
  return "#ef4444";
}

function severityColor(severity: "critical" | "warning" | "info"): string {
  if (severity === "critical") return "#ef4444";
  if (severity === "warning") return "#f59e0b";
  return "#6b7280";
}

function severityBg(severity: "critical" | "warning" | "info"): string {
  if (severity === "critical") return "#fef2f2";
  if (severity === "warning") return "#fffbeb";
  return "#f9fafb";
}

function severityBorder(severity: "critical" | "warning" | "info"): string {
  if (severity === "critical") return "#fecaca";
  if (severity === "warning") return "#fde68a";
  return "#e5e7eb";
}

function formatValue(val: string | number | boolean | null): string {
  if (val === null) return "N/A";
  if (typeof val === "boolean") return val ? "Yes" : "No";
  return String(val);
}

function deriveTopIssues(current: HealthCheck): string[] {
  const issues: string[] = [];
  if (!current.uptime) issues.push("Site is down or unreachable");
  if (!current.sslValid) issues.push("SSL certificate is invalid or expired");
  if (
    current.sslExpiryDays !== null &&
    current.sslExpiryDays > 0 &&
    current.sslExpiryDays <= 14
  ) {
    issues.push(`SSL certificate expires in ${current.sslExpiryDays} days`);
  }
  if (current.robotsBlocking)
    issues.push("robots.txt is blocking Googlebot — site may disappear from Google");
  if (current.brokenLinksCount > 0)
    issues.push(
      `${current.brokenLinksCount} broken internal link${current.brokenLinksCount > 1 ? "s" : ""} found`
    );
  if (!current.metaTitlePresent) issues.push("Page title tag is missing");
  if (!current.metaDescPresent) issues.push("Meta description is missing");
  if (!current.ogImagePresent)
    issues.push("OG image missing — social shares will have no preview image");
  if (current.h1Count === 0) issues.push("No H1 heading found on the page");
  if (current.h1Count > 1)
    issues.push(`${current.h1Count} H1 headings found — should be exactly 1`);
  if (!current.sitemapExists)
    issues.push("sitemap.xml not found — submit one to Google Search Console");
  if (current.pageSpeed !== null && current.pageSpeed < 50)
    issues.push(
      `PageSpeed score is ${current.pageSpeed}/100 — poor performance hurts rankings`
    );
  return issues.slice(0, 3);
}

function buildHtmlEmail(opts: WeeklyReportOptions): string {
  const { url, current, changes } = opts;
  const score = computeHealthScore(current);
  const domain = new URL(current.url).hostname.replace("www.", "");
  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const topIssues = deriveTopIssues(current);
  const hasIssues = topIssues.length > 0 || changes.length > 0;

  const changesHtml =
    changes.length > 0
      ? changes
          .map(
            (c) => `
          <div style="background:${severityBg(c.severity)};border:1px solid ${severityBorder(c.severity)};border-radius:8px;padding:12px 16px;margin-bottom:8px;">
            <div style="font-size:13px;font-weight:700;color:${severityColor(c.severity)};margin-bottom:4px;">${c.label}</div>
            <div style="font-size:12px;color:#6b7280;">
              Previous: <strong>${formatValue(c.previous)}</strong> &rarr; Now: <strong>${formatValue(c.current)}</strong>
            </div>
          </div>`
          )
          .join("")
      : "";

  const issuesHtml =
    topIssues.length > 0
      ? `<ol style="padding-left:20px;margin:0;">
          ${topIssues
            .map(
              (issue) =>
                `<li style="margin-bottom:8px;font-size:14px;color:#374151;">${issue}</li>`
            )
            .join("")}
        </ol>`
      : `<div style="color:#22c55e;font-size:14px;font-weight:600;">Everything looks good — no issues found this week.</div>`;

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#111827;">
      <!-- Header -->
      <div style="background:#111827;padding:24px 32px;border-radius:8px 8px 0 0;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:28px;height:28px;background:#22c55e;border-radius:5px;display:flex;align-items:center;justify-content:center;">
            <span style="color:#fff;font-weight:900;font-size:14px;">G</span>
          </div>
          <span style="color:#fff;font-weight:700;font-size:16px;">GetMetaFix</span>
          <span style="color:#6b7280;font-size:13px;margin-left:auto;">Weekly Health Report</span>
        </div>
      </div>

      <!-- Body -->
      <div style="background:#fff;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
        <h1 style="font-size:20px;font-weight:800;margin-bottom:4px;">Weekly health report for ${domain}</h1>
        <p style="color:#6b7280;font-size:13px;margin-bottom:24px;">${dateStr} &middot; ${url}</p>

        <!-- Score -->
        <div style="background:#f9fafb;border-radius:12px;padding:20px;margin-bottom:24px;text-align:center;">
          <div style="font-size:48px;font-weight:900;color:${scoreColor(score)};line-height:1;">${score}</div>
          <div style="font-size:13px;color:#6b7280;margin-top:4px;">Overall Health Score / 100</div>
        </div>

        ${
          changes.length > 0
            ? `
        <!-- Changes -->
        <h2 style="font-size:15px;font-weight:700;margin-bottom:12px;">${changes.length} change${changes.length > 1 ? "s" : ""} detected this week</h2>
        <div style="margin-bottom:24px;">${changesHtml}</div>`
            : ""
        }

        <!-- Top issues -->
        <h2 style="font-size:15px;font-weight:700;margin-bottom:12px;">
          ${hasIssues ? "Top issues to fix this week" : "Status this week"}
        </h2>
        <div style="margin-bottom:24px;">${issuesHtml}</div>

        <!-- Quick stats -->
        <div style="background:#f9fafb;border-radius:8px;padding:16px;margin-bottom:24px;">
          <div style="font-size:12px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;">Quick stats</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${[
              {
                label: "Uptime",
                value: current.uptime ? "Up" : "DOWN",
                color: current.uptime ? "#22c55e" : "#ef4444",
              },
              {
                label: "SSL",
                value: current.sslValid
                  ? `Valid (${current.sslExpiryDays}d)`
                  : "Invalid",
                color: current.sslValid ? "#22c55e" : "#ef4444",
              },
              {
                label: "PageSpeed",
                value:
                  current.pageSpeed !== null
                    ? `${current.pageSpeed}/100`
                    : "N/A",
                color:
                  current.pageSpeed !== null
                    ? scoreColor(current.pageSpeed)
                    : "#9ca3af",
              },
              {
                label: "Load Time",
                value:
                  current.loadTime !== null
                    ? `${current.loadTime}ms`
                    : "N/A",
                color:
                  current.loadTime !== null && current.loadTime < 3000
                    ? "#22c55e"
                    : "#f59e0b",
              },
              {
                label: "Broken Links",
                value: String(current.brokenLinksCount),
                color:
                  current.brokenLinksCount === 0 ? "#22c55e" : "#ef4444",
              },
              {
                label: "Sitemap",
                value: current.sitemapExists ? "Found" : "Missing",
                color: current.sitemapExists ? "#22c55e" : "#f59e0b",
              },
            ]
              .map(
                (stat) =>
                  `<div style="background:#fff;border-radius:6px;padding:10px;border:1px solid #e5e7eb;">
                    <div style="font-size:11px;color:#9ca3af;margin-bottom:2px;">${stat.label}</div>
                    <div style="font-size:14px;font-weight:700;color:${stat.color};">${stat.value}</div>
                  </div>`
              )
              .join("")}
          </div>
        </div>

        <!-- Footer note -->
        <p style="font-size:13px;color:#9ca3af;margin-bottom:0;">
          You're receiving this because you signed up for Website Health Monitor at <a href="https://getmetafix.com" style="color:#111827;">getmetafix.com</a>.
          To cancel your subscription, reply to this email.
        </p>
      </div>
    </div>`;
}

function buildTextEmail(opts: WeeklyReportOptions): string {
  const { url, current, changes } = opts;
  const score = computeHealthScore(current);
  const domain = new URL(current.url).hostname.replace("www.", "");
  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const topIssues = deriveTopIssues(current);

  const changeLines =
    changes.length > 0
      ? changes
          .map(
            (c) =>
              `  [${c.severity.toUpperCase()}] ${c.label}: ${formatValue(c.previous)} → ${formatValue(c.current)}`
          )
          .join("\n")
      : "  No changes detected.";

  const issueLines =
    topIssues.length > 0
      ? topIssues.map((issue, i) => `  ${i + 1}. ${issue}`).join("\n")
      : "  Everything looks good — no issues found this week.";

  return `GetMetaFix — Weekly Health Report
${domain} · ${dateStr}
${url}

OVERALL HEALTH SCORE: ${score}/100

CHANGES THIS WEEK:
${changeLines}

TOP ISSUES TO FIX:
${issueLines}

QUICK STATS:
  Uptime: ${current.uptime ? "Up" : "DOWN"}
  SSL: ${current.sslValid ? `Valid (${current.sslExpiryDays} days remaining)` : "Invalid"}
  PageSpeed: ${current.pageSpeed !== null ? `${current.pageSpeed}/100` : "N/A"}
  Load Time: ${current.loadTime !== null ? `${current.loadTime}ms` : "N/A"}
  Broken Links: ${current.brokenLinksCount}
  Sitemap: ${current.sitemapExists ? "Found" : "Missing"}

You're receiving this because you signed up for Website Health Monitor at getmetafix.com.
To cancel, reply to this email.

— The GetMetaFix Team
https://getmetafix.com`;
}

export async function sendWeeklyReport(
  opts: WeeklyReportOptions
): Promise<void> {
  const { to, current } = opts;
  const domain = new URL(current.url).hostname.replace("www.", "");
  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const subject = `Weekly health report for ${domain} — ${dateStr}`;
  const htmlBody = buildHtmlEmail(opts);
  const textBody = buildTextEmail(opts);

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: "hello@getmetafix.com", name: "GetMetaFix" },
    subject,
    content: [
      { type: "text/plain", value: textBody },
      { type: "text/html", value: htmlBody },
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
