import * as cheerio from "cheerio";
import { Agent, fetch as undiciFetch } from "undici";
import tls from "tls";

export interface HealthCheck {
  url: string;
  timestamp: string;
  pageSpeed: number | null;        // 0-100 from PageSpeed API
  loadTime: number | null;         // ms
  sslValid: boolean;
  sslExpiryDays: number | null;    // days until SSL expires
  metaTitlePresent: boolean;
  metaDescPresent: boolean;
  ogImagePresent: boolean;
  h1Count: number;
  brokenLinksCount: number;        // count of internal 404s (up to 20 internal links)
  robotsBlocking: boolean;         // is robots.txt blocking Googlebot?
  sitemapExists: boolean;
  uptime: boolean;                 // did the page load successfully?
}

function makeAgent() {
  return new Agent({ connect: { rejectUnauthorized: false } });
}

async function fetchHtml(
  url: string
): Promise<{ html: string; statusCode: number; responseTime: number }> {
  const agent = makeAgent();
  const start = Date.now();
  const res = await undiciFetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; GetMetaFixBot/1.0; +https://getmetafix.com)",
    },
    signal: AbortSignal.timeout(20000),
    dispatcher: agent,
  } as Parameters<typeof undiciFetch>[1]);
  const responseTime = Date.now() - start;
  const html = await res.text();
  return { html, statusCode: res.status, responseTime };
}

async function checkSslExpiry(
  hostname: string
): Promise<{ valid: boolean; daysUntilExpiry: number | null }> {
  return new Promise((resolve) => {
    try {
      const socket = tls.connect(
        { host: hostname, port: 443, servername: hostname },
        () => {
          try {
            const cert = socket.getPeerCertificate();
            socket.destroy();
            if (!cert || !cert.valid_to) {
              resolve({ valid: false, daysUntilExpiry: null });
              return;
            }
            const expiryDate = new Date(cert.valid_to);
            const now = new Date();
            const daysUntilExpiry = Math.floor(
              (expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
            );
            resolve({
              valid: daysUntilExpiry > 0 && socket.authorized !== false,
              daysUntilExpiry,
            });
          } catch {
            socket.destroy();
            resolve({ valid: false, daysUntilExpiry: null });
          }
        }
      );
      socket.setTimeout(10000, () => {
        socket.destroy();
        resolve({ valid: false, daysUntilExpiry: null });
      });
      socket.on("error", () => {
        resolve({ valid: false, daysUntilExpiry: null });
      });
    } catch {
      resolve({ valid: false, daysUntilExpiry: null });
    }
  });
}

async function checkBrokenLinks(
  baseUrl: string,
  $: cheerio.CheerioAPI
): Promise<number> {
  const parsedBase = new URL(baseUrl);
  const internalLinks: string[] = [];

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }
    try {
      let fullUrl: string;
      if (href.startsWith("http://") || href.startsWith("https://")) {
        const parsed = new URL(href);
        if (parsed.hostname !== parsedBase.hostname) return;
        fullUrl = href;
      } else if (href.startsWith("/")) {
        fullUrl = `${parsedBase.protocol}//${parsedBase.host}${href}`;
      } else {
        return;
      }
      if (!internalLinks.includes(fullUrl)) {
        internalLinks.push(fullUrl);
      }
    } catch {
      // skip malformed URLs
    }
  });

  const toCheck = internalLinks.slice(0, 20);
  let brokenCount = 0;
  const agent = makeAgent();

  for (const link of toCheck) {
    try {
      const res = await undiciFetch(link, {
        method: "HEAD",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; GetMetaFixBot/1.0; +https://getmetafix.com)",
        },
        signal: AbortSignal.timeout(8000),
        dispatcher: agent,
      } as Parameters<typeof undiciFetch>[1]);
      if (res.status >= 400 && res.status < 500) {
        brokenCount++;
      }
    } catch {
      // network error - count as broken
      brokenCount++;
    }
  }

  return brokenCount;
}

async function checkRobotsBlocking(baseUrl: string): Promise<boolean> {
  try {
    const parsedUrl = new URL(baseUrl);
    const robotsUrl = `${parsedUrl.protocol}//${parsedUrl.host}/robots.txt`;
    const res = await undiciFetch(robotsUrl, {
      signal: AbortSignal.timeout(8000),
      dispatcher: makeAgent(),
    } as Parameters<typeof undiciFetch>[1]);
    if (!res.ok) return false;
    const text = await res.text();
    const lines = text.split("\n").map((l) => l.trim());
    let currentUserAgent = "";
    for (const line of lines) {
      if (line.toLowerCase().startsWith("user-agent:")) {
        currentUserAgent = line.split(":")[1]?.trim().toLowerCase() ?? "";
      } else if (line.toLowerCase().startsWith("disallow:")) {
        const path = line.split(":")[1]?.trim() ?? "";
        if (
          (currentUserAgent === "googlebot" || currentUserAgent === "*") &&
          path === "/"
        ) {
          return true;
        }
      }
    }
    return false;
  } catch {
    return false;
  }
}

async function checkSitemapExists(baseUrl: string): Promise<boolean> {
  try {
    const parsedUrl = new URL(baseUrl);
    const sitemapUrl = `${parsedUrl.protocol}//${parsedUrl.host}/sitemap.xml`;
    const res = await undiciFetch(sitemapUrl, {
      method: "HEAD",
      signal: AbortSignal.timeout(8000),
      dispatcher: makeAgent(),
    } as Parameters<typeof undiciFetch>[1]);
    return res.ok;
  } catch {
    return false;
  }
}

async function getPageSpeed(url: string): Promise<number | null> {
  try {
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&strategy=mobile${apiKey ? `&key=${apiKey}` : ""}`;
    const res = await undiciFetch(apiUrl, {
      signal: AbortSignal.timeout(30000),
    } as Parameters<typeof undiciFetch>[1]);
    if (!res.ok) return null;
    const data = (await res.json()) as {
      lighthouseResult?: {
        categories?: { performance?: { score?: number } };
      };
    };
    const score = data.lighthouseResult?.categories?.performance?.score;
    return score != null ? Math.round(score * 100) : null;
  } catch {
    return null;
  }
}

export async function runHealthCheck(rawUrl: string): Promise<HealthCheck> {
  const url = rawUrl.startsWith("http") ? rawUrl : "https://" + rawUrl;
  const timestamp = new Date().toISOString();

  // Fetch the page
  let html = "";
  let statusCode = 0;
  let loadTime: number | null = null;
  let uptime = false;

  try {
    const result = await fetchHtml(url);
    html = result.html;
    statusCode = result.statusCode;
    loadTime = result.responseTime;
    uptime = statusCode >= 200 && statusCode < 400;
  } catch {
    uptime = false;
  }

  const $ = cheerio.load(html);
  const parsedUrl = new URL(url);
  const isHttps = url.startsWith("https://");

  // SSL check
  let sslValid = false;
  let sslExpiryDays: number | null = null;
  if (isHttps) {
    const sslResult = await checkSslExpiry(parsedUrl.hostname);
    sslValid = sslResult.valid;
    sslExpiryDays = sslResult.daysUntilExpiry;
  }

  // Meta checks
  const metaTitlePresent = !!$("title").first().text().trim();
  const metaDescPresent = !!$('meta[name="description"]').attr("content")?.trim();
  const ogImagePresent = !!$('meta[property="og:image"]').attr("content")?.trim();
  const h1Count = $("h1").length;

  // Run parallel checks
  const [pageSpeed, brokenLinksCount, robotsBlocking, sitemapExists] =
    await Promise.all([
      getPageSpeed(url),
      uptime ? checkBrokenLinks(url, $) : Promise.resolve(0),
      checkRobotsBlocking(url),
      checkSitemapExists(url),
    ]);

  return {
    url,
    timestamp,
    pageSpeed,
    loadTime,
    sslValid,
    sslExpiryDays,
    metaTitlePresent,
    metaDescPresent,
    ogImagePresent,
    h1Count,
    brokenLinksCount,
    robotsBlocking,
    sitemapExists,
    uptime,
  };
}

export function computeHealthScore(check: HealthCheck): number {
  const checks: boolean[] = [
    check.uptime,
    check.sslValid,
    check.sslExpiryDays !== null && check.sslExpiryDays > 14,
    check.metaTitlePresent,
    check.metaDescPresent,
    check.ogImagePresent,
    check.h1Count === 1,
    check.brokenLinksCount === 0,
    !check.robotsBlocking,
    check.sitemapExists,
    check.pageSpeed !== null && check.pageSpeed >= 70,
    check.loadTime !== null && check.loadTime < 3000,
  ];
  const passed = checks.filter(Boolean).length;
  return Math.round((passed / checks.length) * 100);
}

export interface HealthChange {
  field: string;
  label: string;
  previous: string | number | boolean | null;
  current: string | number | boolean | null;
  severity: "critical" | "warning" | "info";
}

export function detectChanges(
  previous: HealthCheck,
  current: HealthCheck
): HealthChange[] {
  const changes: HealthChange[] = [];

  function check(
    field: keyof HealthCheck,
    label: string,
    severity: "critical" | "warning" | "info"
  ) {
    const prev = previous[field];
    const curr = current[field];
    if (prev !== curr) {
      changes.push({
        field: String(field),
        label,
        previous: prev as string | number | boolean | null,
        current: curr as string | number | boolean | null,
        severity,
      });
    }
  }

  check("uptime", "Site uptime", "critical");
  check("sslValid", "SSL certificate valid", "critical");
  check("robotsBlocking", "Robots.txt blocking Googlebot", "critical");
  check("metaTitlePresent", "Meta title present", "warning");
  check("metaDescPresent", "Meta description present", "warning");
  check("ogImagePresent", "OG image present", "warning");
  check("sitemapExists", "Sitemap exists", "warning");
  check("h1Count", "H1 count", "warning");

  // Broken links change
  if (previous.brokenLinksCount !== current.brokenLinksCount) {
    if (current.brokenLinksCount > previous.brokenLinksCount) {
      changes.push({
        field: "brokenLinksCount",
        label: "Broken links count",
        previous: previous.brokenLinksCount,
        current: current.brokenLinksCount,
        severity: "warning",
      });
    }
  }

  // SSL expiry warning
  if (
    current.sslExpiryDays !== null &&
    current.sslExpiryDays <= 14 &&
    (previous.sslExpiryDays === null || previous.sslExpiryDays > 14)
  ) {
    changes.push({
      field: "sslExpiryDays",
      label: `SSL expires in ${current.sslExpiryDays} days`,
      previous: previous.sslExpiryDays,
      current: current.sslExpiryDays,
      severity: "critical",
    });
  }

  // PageSpeed regression (drop of 10+ points)
  if (
    previous.pageSpeed !== null &&
    current.pageSpeed !== null &&
    previous.pageSpeed - current.pageSpeed >= 10
  ) {
    changes.push({
      field: "pageSpeed",
      label: "PageSpeed score dropped",
      previous: previous.pageSpeed,
      current: current.pageSpeed,
      severity: "warning",
    });
  }

  return changes;
}
