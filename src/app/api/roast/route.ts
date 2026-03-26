import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 30;

interface RoastResponse {
  roastText: string;
  issues: Array<{
    emoji: string;
    shortName: string;
    detail: string;
  }>;
  score: number;
  url: string;
}

async function fetchPageMetadata(url: string) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; GetMetaFix/1.0; +https://getmetafix.com)"
    }
  });

  const html = await response.text();
  const size = Buffer.byteLength(html, 'utf8');

  // Extract basic metadata
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const h1Match = html.match(/<h1[^>]*>([^<]*)<\/h1>/i);
  const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);

  // Count images without alt text
  const imgTags = html.match(/<img[^>]*>/gi) || [];
  const imagesWithoutAlt = imgTags.filter(img => !img.match(/alt=["'][^"']*["']/i)).length;

  return {
    title: titleMatch?.[1]?.trim() || "No title found",
    metaDescription: metaDescMatch?.[1]?.trim() || "No meta description",
    h1: h1Match?.[1]?.trim() || "No H1 found",
    hasOgImage: !!ogImageMatch,
    hasCanonical: !!canonicalMatch,
    pageSize: size,
    totalImages: imgTags.length,
    imagesWithoutAlt,
    htmlLength: html.length
  };
}

async function generateRoast(url: string, metadata: any): Promise<RoastResponse> {
  const prompt = `You are a brutally honest but constructive web performance expert reviewing a website. Generate a funny, personality-driven roast of this website based on its actual technical issues.

URL: ${url}

Technical findings:
- Page title: "${metadata.title}" (${metadata.title.length} chars)
- Meta description: "${metadata.metaDescription}" (${metadata.metaDescription.length} chars)
- H1: "${metadata.h1}"
- Has OG image: ${metadata.hasOgImage ? "Yes" : "No"}
- Has canonical URL: ${metadata.hasCanonical ? "Yes" : "No"}
- Page size: ${(metadata.pageSize / 1024).toFixed(1)} KB
- Images: ${metadata.totalImages} total, ${metadata.imagesWithoutAlt} missing alt text

Your task:
1. Write a 3-4 paragraph roast that's funny but true. Be specific to THEIR actual problems, not generic. Like a friend who's a world-class developer reviewing their site at 2am. Examples:
   - "That 4-word meta description? Google's just gonna write its own. You've basically surrendered control of how your site appears in search results. Bold strategy."
   - "I see you went with 'Welcome to Our Website' as your H1. Really nailed the specificity there. I bet your conversion rate is just... chef's kiss."
   - "200KB of HTML? What are you serving, the entire works of Shakespeare? Meanwhile your visitors are rage-quitting on 3G."

2. List 3-5 specific issues in this format:
   - emoji (single emoji that represents the issue)
   - shortName (2-4 words, e.g. "Meta Description Missing")
   - detail (one sentence explaining why it matters)

3. Give them a score out of 10 (be harsh but fair - most sites are 3-6/10)

Return ONLY valid JSON in this exact structure (no markdown, no code blocks):
{
  "roastText": "paragraph 1\n\nparagraph 2\n\nparagraph 3",
  "issues": [
    {"emoji": "🏷️", "shortName": "Issue Name", "detail": "Why this matters in one sentence."}
  ],
  "score": 5
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY || "",
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`Claude API error: ${response.statusText}`);
  }

  const data = await response.json();
  const content = data.content[0].text;

  // Parse the JSON response
  const result = JSON.parse(content);

  return {
    ...result,
    url
  };
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Basic URL validation
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("http")) cleanUrl = "https://" + cleanUrl;

    try {
      new URL(cleanUrl);
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Fetch metadata
    const metadata = await fetchPageMetadata(cleanUrl);

    // Generate roast
    const roast = await generateRoast(cleanUrl, metadata);

    return NextResponse.json(roast);
  } catch (err) {
    console.error("Roast error:", err);
    const message = err instanceof Error ? err.message : "Roast generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
