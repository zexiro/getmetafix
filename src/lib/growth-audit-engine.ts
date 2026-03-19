import * as cheerio from "cheerio";
import { Agent, fetch as undiciFetch } from "undici";

export interface AuditCheck {
  id: string;
  label: string;
  passed: boolean;
  value: string;
  note: string;
}

export interface SeoChecks {
  score: number; // out of 40
  checks: AuditCheck[];
}

export interface PerformanceChecks {
  score: number; // out of 30
  performanceScore: number | null;
  lcp: string | null;
  fcp: string | null;
  cls: string | null;
  mobileScore: number | null;
  checks: AuditCheck[];
}

export interface SocialChecks {
  score: number; // out of 30
  checks: AuditCheck[];
}

export interface CompetitorComparison {
  competitorUrl: string;
  subjectChecks: AuditCheck[];
  competitorChecks: AuditCheck[];
}

export interface GrowthAuditResult {
  url: string;
  businessName: string;
  overallScore: number; // 0-100
  seo: SeoChecks;
  performance: PerformanceChecks;
  social: SocialChecks;
  competitor?: CompetitorComparison;
  topFixes: { priority: number; title: string; impact: string; detail: string }[];
  auditedAt: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeAgent() {
  return new Agent({ connect: { rejectUnauthorized: false } });
}

async function fetchHtml(url: string): Promise<{ html: string; statusCode: number; responseTime: number }> {
  const agent = makeAgent();
  const start = Date.now();
  const res = await undiciFetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; GetMetaFixBot/1.0; +https://getmetafix.com)",
    },
    signal: AbortSignal.timeout(20000),
    dispatcher: agent,
  } as Parameters<typeof undiciFetch>[1]);
  const responseTime = Date.now() - start;
  const html = await res.text();
  return { html, statusCode: res.status, responseTime };
}

function check(id: string, label: string, passed: boolean, value: string, note: string): AuditCheck {
  return { id, label, passed, value, note };
}

// ── SEO Checks ───────────────────────────────────────────────────────────────

async function runSeoChecks(url: string, $: cheerio.CheerioAPI, isHttps: boolean): Promise<SeoChecks> {
  const checks: AuditCheck[] = [];

  // 1. Title tag
  const title = $("title").first().text().trim();
  const titleOk = !!title && title.length >= 30 && title.length <= 60;
  checks.push(check(
    "title",
    "Title tag (30–60 chars)",
    titleOk,
    title ? `"${title.slice(0, 60)}${title.length > 60 ? "…" : ""}" (${title.length} chars)` : "(none)",
    !title ? "No title tag found" : title.length < 30 ? "Title is too short" : title.length > 60 ? "Title is too long" : "Title length is ideal"
  ));

  // 2. Meta description
  const metaDesc = $('meta[name="description"]').attr("content")?.trim() ?? "";
  const descOk = !!metaDesc && metaDesc.length >= 120 && metaDesc.length <= 160;
  checks.push(check(
    "meta-description",
    "Meta description (120–160 chars)",
    descOk,
    metaDesc ? `${metaDesc.length} chars` : "(none)",
    !metaDesc ? "No meta description" : metaDesc.length < 120 ? "Description too short" : metaDesc.length > 160 ? "Description too long" : "Description length is ideal"
  ));

  // 3. H1 tag
  const h1s = $("h1");
  const h1Ok = h1s.length === 1;
  checks.push(check(
    "h1",
    "Single H1 tag",
    h1Ok,
    h1s.length === 0 ? "(none)" : `${h1s.length} found: "${$("h1").first().text().trim().slice(0, 50)}"`,
    h1s.length === 0 ? "No H1 heading" : h1s.length > 1 ? `${h1s.length} H1 tags found, should be exactly 1` : "H1 is present and unique"
  ));

  // 4. OG title
  const ogTitle = $('meta[property="og:title"]').attr("content")?.trim() ?? "";
  checks.push(check("og-title", "og:title tag", !!ogTitle, ogTitle || "(none)", ogTitle ? "Present" : "Missing og:title"));

  // 5. OG description
  const ogDesc = $('meta[property="og:description"]').attr("content")?.trim() ?? "";
  checks.push(check("og-description", "og:description tag", !!ogDesc, ogDesc ? `${ogDesc.length} chars` : "(none)", ogDesc ? "Present" : "Missing og:description"));

  // 6. OG image
  const ogImage = $('meta[property="og:image"]').attr("content")?.trim() ?? "";
  checks.push(check("og-image", "og:image tag", !!ogImage, ogImage || "(none)", ogImage ? "Present" : "Missing og:image — social shares will show no image"));

  // 7. Twitter card
  const twitterCard = $('meta[name="twitter:card"]').attr("content")?.trim() ?? "";
  const twitterTitle = $('meta[name="twitter:title"]').attr("content")?.trim() ?? "";
  const twitterOk = !!twitterCard && !!twitterTitle;
  checks.push(check("twitter-card", "Twitter Card tags", twitterOk, twitterCard || "(none)", twitterOk ? "Present" : "Missing Twitter Card tags"));

  // 8. Canonical tag
  const canonical = $('link[rel="canonical"]').attr("href")?.trim() ?? "";
  checks.push(check("canonical", "Canonical tag", !!canonical, canonical || "(none)", canonical ? "Present" : "Missing canonical tag — may cause duplicate content issues"));

  // 9. Schema / JSON-LD
  const jsonLd = $('script[type="application/ld+json"]').length > 0;
  checks.push(check("schema", "Schema markup (JSON-LD)", jsonLd, jsonLd ? "Present" : "(none)", jsonLd ? "Structured data found" : "No schema markup — missing rich result eligibility"));

  // 10. Robots meta
  const robots = $('meta[name="robots"]').attr("content")?.trim() ?? "";
  const notNoindex = !robots.includes("noindex");
  checks.push(check("robots", "Robots meta (not noindex)", notNoindex, robots || "(not set — default is index)", notNoindex ? "Page is indexable" : "CRITICAL: Page is set to noindex — not visible in search"));

  // 11. Sitemap
  let sitemapOk = false;
  try {
    const parsedUrl = new URL(url);
    const sitemapUrl = `${parsedUrl.protocol}//${parsedUrl.host}/sitemap.xml`;
    const sitemapRes = await undiciFetch(sitemapUrl, {
      method: "HEAD",
      signal: AbortSignal.timeout(8000),
      dispatcher: makeAgent(),
    } as Parameters<typeof undiciFetch>[1]);
    sitemapOk = sitemapRes.ok;
  } catch {
    sitemapOk = false;
  }
  checks.push(check("sitemap", "Sitemap (/sitemap.xml)", sitemapOk, sitemapOk ? "Found" : "Not found", sitemapOk ? "Sitemap exists" : "No sitemap.xml found — submit one to Google Search Console"));

  // 12. SSL / HTTPS
  checks.push(check("ssl", "SSL (HTTPS)", isHttps, isHttps ? "HTTPS" : "HTTP", isHttps ? "Site uses HTTPS" : "Site is not using HTTPS — this is a ranking factor"));

  // Score: each check worth ~3.3 pts, max 40
  const passedCount = checks.filter((c) => c.passed).length;
  const score = Math.round((passedCount / checks.length) * 40);

  return { score, checks };
}

// ── Performance Checks ───────────────────────────────────────────────────────

async function runPerformanceChecks(url: string, $: cheerio.CheerioAPI, responseTime: number): Promise<PerformanceChecks> {
  const checks: AuditCheck[] = [];

  // Response time
  const responseOk = responseTime < 2000;
  checks.push(check(
    "response-time",
    "Server response time",
    responseOk,
    `${responseTime}ms`,
    responseOk ? "Fast response time" : `Slow response time (${responseTime}ms) — aim for < 2000ms`
  ));

  // Images without alt
  const images = $("img");
  let imgsNoAlt = 0;
  images.each((_, el) => {
    if ($( el).attr("alt") === undefined) imgsNoAlt++;
  });
  const imgAltOk = imgsNoAlt === 0;
  checks.push(check(
    "image-alt",
    "Images with alt text",
    imgAltOk,
    images.length === 0 ? "No images found" : `${images.length - imgsNoAlt}/${images.length} have alt`,
    imgAltOk ? "All images have alt text" : `${imgsNoAlt} image(s) missing alt text`
  ));

  // Viewport tag
  const viewport = $('meta[name="viewport"]').attr("content")?.trim() ?? "";
  checks.push(check("viewport", "Viewport meta tag (mobile)", !!viewport, viewport || "(none)", viewport ? "Mobile viewport set" : "Missing viewport tag — will render poorly on mobile"));

  // PageSpeed Insights (optional, may not have API key)
  let performanceScore: number | null = null;
  let lcp: string | null = null;
  let fcp: string | null = null;
  let cls: string | null = null;
  let mobileScore: number | null = null;

  try {
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile${apiKey ? `&key=${apiKey}` : ""}`;
    const psiRes = await undiciFetch(apiUrl, {
      signal: AbortSignal.timeout(30000),
    } as Parameters<typeof undiciFetch>[1]);
    if (psiRes.ok) {
      const psiData = await psiRes.json() as {
        lighthouseResult?: {
          categories?: { performance?: { score?: number } };
          audits?: {
            "largest-contentful-paint"?: { displayValue?: string };
            "first-contentful-paint"?: { displayValue?: string };
            "cumulative-layout-shift"?: { displayValue?: string };
          };
        };
      };
      const cats = psiData.lighthouseResult?.categories;
      performanceScore = cats?.performance?.score != null ? Math.round(cats.performance.score * 100) : null;
      mobileScore = performanceScore;
      const audits = psiData.lighthouseResult?.audits;
      lcp = audits?.["largest-contentful-paint"]?.displayValue ?? null;
      fcp = audits?.["first-contentful-paint"]?.displayValue ?? null;
      cls = audits?.["cumulative-layout-shift"]?.displayValue ?? null;

      if (performanceScore !== null) {
        checks.push(check(
          "pagespeed-mobile",
          "PageSpeed mobile score",
          performanceScore >= 70,
          `${performanceScore}/100`,
          performanceScore >= 90 ? "Excellent performance" : performanceScore >= 70 ? "Good performance" : performanceScore >= 50 ? "Needs improvement" : "Poor performance — likely hurting conversions"
        ));
        if (lcp) {
          const lcpMs = parseFloat(lcp.replace(/[^0-9.]/g, "")) * (lcp.includes("ms") ? 1 : 1000);
          checks.push(check("lcp", "LCP (Largest Contentful Paint)", lcpMs < 2500, lcp, lcpMs < 2500 ? "Good LCP" : "LCP too slow — target < 2.5s"));
        }
        if (cls) {
          const clsVal = parseFloat(cls);
          checks.push(check("cls", "CLS (Cumulative Layout Shift)", clsVal < 0.1, cls, clsVal < 0.1 ? "Good layout stability" : "High CLS — page elements are shifting"));
        }
      }
    }
  } catch {
    // PageSpeed API unavailable — that's fine
  }

  const passedCount = checks.filter((c) => c.passed).length;
  const score = Math.round((passedCount / Math.max(checks.length, 1)) * 30);

  return { score, performanceScore, lcp, fcp, cls, mobileScore, checks };
}

// ── Social Checks ────────────────────────────────────────────────────────────

function runSocialChecks($: cheerio.CheerioAPI): SocialChecks {
  const checks: AuditCheck[] = [];
  const allLinks: string[] = [];
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    allLinks.push(href.toLowerCase());
  });

  const socialPlatforms: { id: string; label: string; domains: string[] }[] = [
    { id: "twitter", label: "Twitter/X link", domains: ["twitter.com", "x.com"] },
    { id: "instagram", label: "Instagram link", domains: ["instagram.com"] },
    { id: "facebook", label: "Facebook link", domains: ["facebook.com", "fb.com"] },
    { id: "linkedin", label: "LinkedIn link", domains: ["linkedin.com"] },
    { id: "tiktok", label: "TikTok link", domains: ["tiktok.com"] },
  ];

  for (const platform of socialPlatforms) {
    const found = allLinks.some((href) => platform.domains.some((d) => href.includes(d)));
    checks.push(check(
      platform.id,
      platform.label,
      found,
      found ? "Found" : "(none)",
      found ? `${platform.label} present on homepage` : `No ${platform.label} found on homepage`
    ));
  }

  // OG image
  const ogImage = $('meta[property="og:image"]').attr("content")?.trim() ?? "";
  const ogImageOk = !!ogImage && (ogImage.startsWith("http://") || ogImage.startsWith("https://") || ogImage.startsWith("/"));
  checks.push(check("og-image-social", "og:image for social sharing", ogImageOk, ogImage || "(none)", ogImageOk ? "og:image is set" : "No og:image — social shares will be link-only (no preview image)"));

  const passedCount = checks.filter((c) => c.passed).length;
  const score = Math.round((passedCount / checks.length) * 30);

  return { score, checks };
}

// ── Competitor Comparison ─────────────────────────────────────────────────────

async function runCompetitorChecks(
  subjectUrl: string,
  competitorUrl: string,
  subject$: cheerio.CheerioAPI
): Promise<CompetitorComparison> {
  const basicChecksFor = ($: cheerio.CheerioAPI): AuditCheck[] => {
    const title = $("title").first().text().trim();
    const metaDesc = $('meta[name="description"]').attr("content")?.trim() ?? "";
    const ogTitle = $('meta[property="og:title"]').attr("content")?.trim() ?? "";
    const ogImage = $('meta[property="og:image"]').attr("content")?.trim() ?? "";
    const canonical = $('link[rel="canonical"]').attr("href")?.trim() ?? "";
    const jsonLd = $('script[type="application/ld+json"]').length > 0;

    return [
      check("c-title", "Title tag", !!title && title.length >= 30 && title.length <= 60, title ? `${title.length} chars` : "(none)", ""),
      check("c-desc", "Meta description", !!metaDesc, metaDesc ? `${metaDesc.length} chars` : "(none)", ""),
      check("c-og-title", "og:title", !!ogTitle, ogTitle || "(none)", ""),
      check("c-og-image", "og:image", !!ogImage, ogImage ? "Present" : "(none)", ""),
      check("c-canonical", "Canonical tag", !!canonical, canonical ? "Present" : "(none)", ""),
      check("c-schema", "Schema markup", jsonLd, jsonLd ? "Present" : "(none)", ""),
    ];
  };

  const subjectChecks = basicChecksFor(subject$);

  let competitorChecks: AuditCheck[] = subjectChecks.map((c) => ({ ...c, passed: false, value: "(error)", note: "Could not fetch" }));
  try {
    const { html } = await fetchHtml(competitorUrl.startsWith("http") ? competitorUrl : "https://" + competitorUrl);
    const comp$ = cheerio.load(html);
    competitorChecks = basicChecksFor(comp$);
  } catch {
    // competitor fetch failed — use defaults
  }

  return { competitorUrl, subjectChecks, competitorChecks };
}

// ── Top Fixes ─────────────────────────────────────────────────────────────────

function deriveTopFixes(
  seo: SeoChecks,
  perf: PerformanceChecks,
  social: SocialChecks
): GrowthAuditResult["topFixes"] {
  const fixes: GrowthAuditResult["topFixes"] = [];

  const allChecks: { check: AuditCheck; impact: string }[] = [
    ...seo.checks.map((c) => ({ check: c, impact: "High" as const })),
    ...perf.checks.map((c) => ({ check: c, impact: "Medium" as const })),
    ...social.checks.map((c) => ({ check: c, impact: "Medium" as const })),
  ];

  const priorityOrder = ["robots", "ssl", "title", "meta-description", "h1", "og-image", "og-title", "pagespeed-mobile", "lcp", "viewport", "schema", "canonical", "twitter-card", "instagram", "facebook"];

  let priority = 1;
  for (const id of priorityOrder) {
    if (priority > 5) break;
    const entry = allChecks.find((e) => e.check.id === id && !e.check.passed);
    if (entry) {
      fixes.push({
        priority,
        title: entry.check.label,
        impact: entry.impact,
        detail: entry.check.note,
      });
      priority++;
    }
  }

  // Fill remaining slots from any failed check
  if (priority <= 5) {
    for (const entry of allChecks) {
      if (priority > 5) break;
      if (!entry.check.passed && !fixes.find((f) => f.title === entry.check.label)) {
        fixes.push({
          priority,
          title: entry.check.label,
          impact: entry.impact,
          detail: entry.check.note,
        });
        priority++;
      }
    }
  }

  return fixes;
}

// ── Main entry point ──────────────────────────────────────────────────────────

export async function runGrowthAudit(
  rawUrl: string,
  businessName: string,
  competitorRawUrl?: string
): Promise<GrowthAuditResult> {
  const url = rawUrl.startsWith("http") ? rawUrl : "https://" + rawUrl;
  const isHttps = url.startsWith("https://");

  const { html, responseTime } = await fetchHtml(url);
  const $ = cheerio.load(html);

  const [seo, performance, social] = await Promise.all([
    runSeoChecks(url, $, isHttps),
    runPerformanceChecks(url, $, responseTime),
    Promise.resolve(runSocialChecks($)),
  ]);

  let competitor: CompetitorComparison | undefined;
  if (competitorRawUrl && competitorRawUrl.trim()) {
    competitor = await runCompetitorChecks(url, competitorRawUrl.trim(), $);
  }

  const overallScore = Math.min(100, seo.score + performance.score + social.score);
  const topFixes = deriveTopFixes(seo, performance, social);

  return {
    url,
    businessName,
    overallScore,
    seo,
    performance,
    social,
    competitor,
    topFixes,
    auditedAt: new Date().toISOString(),
  };
}
