import * as cheerio from "cheerio";
import { Agent, fetch as undiciFetch } from "undici";

export interface SEOIssue {
  id: string;
  category: "meta" | "og" | "twitter" | "headings" | "images" | "schema" | "technical";
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
  current: string;
  fix: string; // gated behind payment
}

export interface AuditResult {
  url: string;
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  issues: SEOIssue[];
  summary: {
    critical: number;
    warning: number;
    info: number;
    passed: number;
    total: number;
  };
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    canonical: string;
    robots: string;
  };
  crawledAt: string;
}

function truncate(str: string, len: number) {
  if (!str) return "";
  return str.length > len ? str.slice(0, len) + "…" : str;
}

export async function analyzeUrl(url: string): Promise<AuditResult> {
  // Normalise URL
  if (!url.startsWith("http")) url = "https://" + url;
  const parsedUrl = new URL(url);

  // Fetch the page — use undici with relaxed TLS for crawler
  const agent = new Agent({
    connect: { rejectUnauthorized: false },
  });
  const res = await undiciFetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; GetMetaFixBot/1.0; +https://getmetafix.com)",
    },
    signal: AbortSignal.timeout(15000),
    dispatcher: agent,
  } as Parameters<typeof undiciFetch>[1]);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${res.status}`);
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  const issues: SEOIssue[] = [];
  let passed = 0;
  const checks = 0;

  // ── META TITLE ─────────────────────────────────────────────────────────────
  const title = $("title").first().text().trim();
  if (!title) {
    issues.push({
      id: "meta-title-missing",
      category: "meta",
      severity: "critical",
      title: "Missing page title",
      description:
        "Your page has no <title> tag. This is the single most important on-page SEO element.",
      current: "(none)",
      fix: `<title>${parsedUrl.hostname.replace("www.", "")} | [Add your primary keyword here]</title>`,
    });
  } else if (title.length < 30) {
    issues.push({
      id: "meta-title-short",
      category: "meta",
      severity: "warning",
      title: "Title tag too short",
      description: `Your title is only ${title.length} characters. Aim for 50–60 characters to maximise search visibility.`,
      current: truncate(title, 80),
      fix: `<title>${title} | [Add keyword + brand name to reach 50–60 chars]</title>`,
    });
  } else if (title.length > 60) {
    issues.push({
      id: "meta-title-long",
      category: "meta",
      severity: "warning",
      title: "Title tag too long",
      description: `Your title is ${title.length} characters. Google truncates titles over 60 characters in search results.`,
      current: truncate(title, 80),
      fix: `<title>${title.slice(0, 57)}…</title>`,
    });
  } else {
    passed++;
  }

  // ── META DESCRIPTION ───────────────────────────────────────────────────────
  const metaDesc = $('meta[name="description"]').attr("content")?.trim() ?? "";
  if (!metaDesc) {
    issues.push({
      id: "meta-desc-missing",
      category: "meta",
      severity: "critical",
      title: "Missing meta description",
      description:
        "No meta description found. Google uses this in search snippets — missing it means Google writes one for you (usually badly).",
      current: "(none)",
      fix: `<meta name="description" content="[Write a 120–155 character description of this page that includes your primary keyword and a clear value proposition.]">`,
    });
  } else if (metaDesc.length < 70) {
    issues.push({
      id: "meta-desc-short",
      category: "meta",
      severity: "warning",
      title: "Meta description too short",
      description: `Your meta description is only ${metaDesc.length} characters. Aim for 120–155 characters.`,
      current: truncate(metaDesc, 160),
      fix: `<meta name="description" content="${metaDesc} [Expand with benefits, keywords, and a call to action to reach 120–155 chars.]">`,
    });
  } else if (metaDesc.length > 160) {
    issues.push({
      id: "meta-desc-long",
      category: "meta",
      severity: "warning",
      title: "Meta description too long",
      description: `Your meta description is ${metaDesc.length} characters. Google truncates anything over ~160 characters.`,
      current: truncate(metaDesc, 160),
      fix: `<meta name="description" content="${metaDesc.slice(0, 155)}…">`,
    });
  } else {
    passed++;
  }

  // ── OPEN GRAPH ─────────────────────────────────────────────────────────────
  const ogTitle = $('meta[property="og:title"]').attr("content")?.trim() ?? "";
  const ogDesc = $('meta[property="og:description"]').attr("content")?.trim() ?? "";
  const ogImage = $('meta[property="og:image"]').attr("content")?.trim() ?? "";
  const ogUrl = $('meta[property="og:url"]').attr("content")?.trim() ?? "";
  const ogType = $('meta[property="og:type"]').attr("content")?.trim() ?? "";

  if (!ogTitle) {
    issues.push({
      id: "og-title-missing",
      category: "og",
      severity: "critical",
      title: "Missing og:title",
      description:
        "No Open Graph title found. When someone shares your page on Facebook, LinkedIn, or Slack, it will appear blank or use a fallback.",
      current: "(none)",
      fix: `<meta property="og:title" content="${title || "[Your page title]"}">`,
    });
  } else {
    passed++;
  }

  if (!ogDesc) {
    issues.push({
      id: "og-desc-missing",
      category: "og",
      severity: "warning",
      title: "Missing og:description",
      description:
        "No Open Graph description. Social shares will have no descriptive text.",
      current: "(none)",
      fix: `<meta property="og:description" content="${metaDesc || "[Your page description, 1–2 sentences]"}">`,
    });
  } else {
    passed++;
  }

  if (!ogImage) {
    issues.push({
      id: "og-image-missing",
      category: "og",
      severity: "critical",
      title: "Missing og:image",
      description:
        "No Open Graph image. Social media shares of your page will show no image — dramatically reducing click-through rates.",
      current: "(none)",
      fix: `<meta property="og:image" content="https://${parsedUrl.hostname}/og-image.jpg">\n<!-- Create a 1200×630px image and host it at this URL -->`,
    });
  } else {
    passed++;
  }

  if (!ogUrl) {
    issues.push({
      id: "og-url-missing",
      category: "og",
      severity: "info",
      title: "Missing og:url",
      description:
        "No canonical og:url specified. This helps social platforms identify the canonical version of your page.",
      current: "(none)",
      fix: `<meta property="og:url" content="${url}">`,
    });
  } else {
    passed++;
  }

  if (!ogType) {
    issues.push({
      id: "og-type-missing",
      category: "og",
      severity: "info",
      title: "Missing og:type",
      description:
        "No og:type specified. Set this to 'website' for homepages or 'article' for blog posts.",
      current: "(none)",
      fix: `<meta property="og:type" content="website">`,
    });
  } else {
    passed++;
  }

  // ── TWITTER CARD ───────────────────────────────────────────────────────────
  const twitterCard = $('meta[name="twitter:card"]').attr("content")?.trim() ?? "";
  const twitterTitle = $('meta[name="twitter:title"]').attr("content")?.trim() ?? "";
  const twitterImage = $('meta[name="twitter:image"]').attr("content")?.trim() ?? "";

  if (!twitterCard) {
    issues.push({
      id: "twitter-card-missing",
      category: "twitter",
      severity: "warning",
      title: "Missing Twitter Card tags",
      description:
        "No Twitter Card meta tags found. Your page will render poorly when shared on X/Twitter.",
      current: "(none)",
      fix: `<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="${ogTitle || title || "[Title]"}">\n<meta name="twitter:description" content="${ogDesc || metaDesc || "[Description]"}">\n<meta name="twitter:image" content="${ogImage || "[image URL]"}">`,
    });
  } else {
    passed++;
    if (!twitterTitle) {
      issues.push({
        id: "twitter-title-missing",
        category: "twitter",
        severity: "info",
        title: "Missing twitter:title",
        description: "Twitter card type is set but title is missing.",
        current: "(none)",
        fix: `<meta name="twitter:title" content="${ogTitle || title}">`,
      });
    } else {
      passed++;
    }
    if (!twitterImage) {
      issues.push({
        id: "twitter-image-missing",
        category: "twitter",
        severity: "warning",
        title: "Missing twitter:image",
        description:
          "Twitter card image is missing. Tweets sharing your URL will have no image.",
        current: "(none)",
        fix: `<meta name="twitter:image" content="${ogImage || "[1200×628px image URL]"}">`,
      });
    } else {
      passed++;
    }
  }

  // ── HEADINGS ───────────────────────────────────────────────────────────────
  const h1s = $("h1");
  if (h1s.length === 0) {
    issues.push({
      id: "h1-missing",
      category: "headings",
      severity: "critical",
      title: "Missing H1 tag",
      description:
        "No H1 heading found. Every page should have exactly one H1 that includes your primary keyword.",
      current: "(none)",
      fix: `<h1>[Your primary keyword phrase — be specific, e.g. "Handmade Leather Wallets for Men"]</h1>`,
    });
  } else if (h1s.length > 1) {
    issues.push({
      id: "h1-multiple",
      category: "headings",
      severity: "warning",
      title: `Multiple H1 tags (${h1s.length} found)`,
      description:
        "You have more than one H1 tag. Each page should have exactly one H1 to clearly signal the main topic to search engines.",
      current: h1s
        .map((_, el) => truncate($(el).text().trim(), 60))
        .get()
        .join(" | "),
      fix: `Keep only one H1: <h1>${$(h1s[0]).text().trim()}</h1>\nChange all others to H2 or H3.`,
    });
  } else {
    passed++;
  }

  const h2s = $("h2");
  if (h2s.length === 0) {
    issues.push({
      id: "h2-missing",
      category: "headings",
      severity: "info",
      title: "No H2 subheadings found",
      description:
        "No H2 tags found. Subheadings help search engines understand your page structure and improve readability.",
      current: "(none)",
      fix: `Add H2 subheadings that include related keywords. Example:\n<h2>Why Choose [Product]</h2>\n<h2>How [Product] Works</h2>\n<h2>Frequently Asked Questions</h2>`,
    });
  } else {
    passed++;
  }

  // ── IMAGES ─────────────────────────────────────────────────────────────────
  const images = $("img");
  const imgsWithoutAlt: string[] = [];
  const imgsWithEmptyAlt: string[] = [];

  images.each((_, el) => {
    const alt = $(el).attr("alt");
    const src = $(el).attr("src") ?? "(no src)";
    if (alt === undefined) {
      imgsWithoutAlt.push(truncate(src, 60));
    } else if (alt.trim() === "") {
      imgsWithEmptyAlt.push(truncate(src, 60));
    }
  });

  if (imgsWithoutAlt.length > 0) {
    issues.push({
      id: "img-alt-missing",
      category: "images",
      severity: "warning",
      title: `${imgsWithoutAlt.length} image(s) missing alt text`,
      description:
        "Images without alt text are invisible to search engines and screen readers. Each image should describe what it shows.",
      current: imgsWithoutAlt.slice(0, 3).join(", ") + (imgsWithoutAlt.length > 3 ? ` (+${imgsWithoutAlt.length - 3} more)` : ""),
      fix: `Add descriptive alt text to each image. Examples:\n<img src="product.jpg" alt="Handmade leather wallet in tan — front view">\n<img src="team.jpg" alt="The [Company] founding team at our Brooklyn studio">`,
    });
  } else if (images.length > 0) {
    passed++;
  }

  if (imgsWithEmptyAlt.length > 0) {
    issues.push({
      id: "img-alt-empty",
      category: "images",
      severity: "info",
      title: `${imgsWithEmptyAlt.length} image(s) with empty alt text`,
      description:
        "Empty alt text (alt=\"\") is fine for decorative images, but if these images are meaningful content they should have descriptive alt text.",
      current: imgsWithEmptyAlt.slice(0, 3).join(", "),
      fix: `Review these images. If they are decorative (icons, backgrounds), empty alt is fine.\nIf they show products, people, or meaningful content, add descriptive alt text.`,
    });
  }

  // ── CANONICAL ──────────────────────────────────────────────────────────────
  const canonical = $('link[rel="canonical"]').attr("href")?.trim() ?? "";
  if (!canonical) {
    issues.push({
      id: "canonical-missing",
      category: "technical",
      severity: "warning",
      title: "Missing canonical URL",
      description:
        "No canonical tag found. Without this, search engines may index multiple versions of your page (http vs https, www vs non-www) as duplicates.",
      current: "(none)",
      fix: `<link rel="canonical" href="${url}">`,
    });
  } else {
    passed++;
  }

  // ── ROBOTS ─────────────────────────────────────────────────────────────────
  const robots = $('meta[name="robots"]').attr("content")?.trim() ?? "";
  if (robots.includes("noindex")) {
    issues.push({
      id: "robots-noindex",
      category: "technical",
      severity: "critical",
      title: "Page is set to noindex",
      description:
        "This page has a noindex directive — it will not appear in Google search results. If this is intentional, ignore this. If not, remove the noindex tag immediately.",
      current: robots,
      fix: robots === "noindex" ? `Remove the robots meta tag entirely, or change to:\n<meta name="robots" content="index, follow">` : `<meta name="robots" content="${robots.replace("noindex", "index")}">`,
    });
  } else if (robots) {
    passed++;
  }

  // ── SCHEMA / JSON-LD ────────────────────────────────────────────────────────
  const jsonLdScripts = $('script[type="application/ld+json"]');
  if (jsonLdScripts.length === 0) {
    issues.push({
      id: "schema-missing",
      category: "schema",
      severity: "warning",
      title: "No structured data (JSON-LD) found",
      description:
        "No Schema.org markup found. Structured data helps Google understand your content and can unlock rich results (star ratings, FAQs, breadcrumbs) in search.",
      current: "(none)",
      fix: `Add JSON-LD for your page type. Example for a website:\n<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "WebSite",\n  "name": "${title || parsedUrl.hostname}",\n  "url": "${url}",\n  "description": "${metaDesc}"\n}\n</script>`,
    });
  } else {
    passed++;
  }

  // ── VIEWPORT ────────────────────────────────────────────────────────────────
  const viewport = $('meta[name="viewport"]').attr("content")?.trim() ?? "";
  if (!viewport) {
    issues.push({
      id: "viewport-missing",
      category: "technical",
      severity: "critical",
      title: "Missing viewport meta tag",
      description:
        "No viewport tag found. This will cause your page to render poorly on mobile devices. Google uses mobile-first indexing — this directly impacts rankings.",
      current: "(none)",
      fix: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    });
  } else {
    passed++;
  }

  // ── CALCULATE SCORE ────────────────────────────────────────────────────────
  const critical = issues.filter((i) => i.severity === "critical").length;
  const warning = issues.filter((i) => i.severity === "warning").length;
  const info = issues.filter((i) => i.severity === "info").length;
  const total = passed + issues.length;

  // Score: start at 100, deduct per issue
  const rawScore = Math.max(
    0,
    100 - critical * 15 - warning * 8 - info * 3
  );
  const score = Math.min(100, Math.round(rawScore));

  const grade: AuditResult["grade"] =
    score >= 90 ? "A" :
    score >= 75 ? "B" :
    score >= 60 ? "C" :
    score >= 45 ? "D" : "F";

  return {
    url,
    score,
    grade,
    issues,
    summary: { critical, warning, info, passed, total },
    meta: {
      title,
      description: metaDesc,
      ogTitle,
      ogDescription: ogDesc,
      ogImage,
      canonical,
      robots,
    },
    crawledAt: new Date().toISOString(),
  };
}
