import Link from "next/link";

export const metadata = {
  title: "How to Check Meta Tags: 5 Free Tools + What to Look For (2026)",
  description:
    "Stop guessing if your meta tags are working. Here are 5 free tools to check meta tags instantly, plus exactly what to look for in title tags, descriptions, and Open Graph.",
  openGraph: {
    title: "How to Check Meta Tags: 5 Free Tools + What to Look For (2026)",
    description:
      "Stop guessing if your meta tags are working. Here are 5 free tools to check meta tags instantly, plus exactly what to look for in title tags, descriptions, and Open Graph.",
    type: "article",
    publishedTime: "2026-03-24T14:00:00Z",
  },
};

export default function HowToCheckMetaTagsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-purple-600">
            Blog
          </Link>
          {" / "}
          <span className="text-gray-900">How to Check Meta Tags</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Check Meta Tags: 5 Free Tools + What to Look For
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <time dateTime="2026-03-24">March 24, 2026</time>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2>Why checking your meta tags matters</h2>

          <p>
            Your meta tags control how Google and social media platforms
            display your content. Bad meta tags = bad rankings and zero clicks
            when people share your links.
          </p>

          <p>
            Most websites have broken meta tags and don&apos;t know it. Title
            tags that are too long. Meta descriptions that Google ignores.
            Open Graph images that don&apos;t load when shared on LinkedIn.
          </p>

          <p>
            Here&apos;s how to check if your meta tags are working, what to
            look for, and how to fix common problems in under 5 minutes.
          </p>

          <hr />

          <h2>The 5 meta tags you need to check</h2>

          <p>
            Before we get to the tools, here&apos;s what you&apos;re looking
            for. These 5 meta tags control 95% of how your page appears in
            search and social:
          </p>

          <h3>1. Title tag (&lt;title&gt;)</h3>

          <p>
            <strong>What it does:</strong> Appears as the blue clickable
            headline in Google search results. Also appears in browser tabs.
          </p>

          <p>
            <strong>What to check:</strong>
          </p>
          <ul>
            <li>Length: 50-60 characters (Google truncates longer titles)</li>
            <li>Includes your primary keyword near the start</li>
            <li>Unique for every page (no duplicates)</li>
            <li>
              Includes brand name at the end if space allows (e.g.,
              &quot;...| YourBrand&quot;)
            </li>
          </ul>

          <p>
            <strong>Bad example:</strong> &quot;Home - Welcome to Our Amazing
            Website - Buy Products Online&quot; (72 characters, keyword-stuffed,
            generic)
          </p>

          <p>
            <strong>Good example:</strong> &quot;Organic Dog Food Delivery |
            PetCo&quot; (39 characters, clear, keyword-focused)
          </p>

          <h3>2. Meta description</h3>

          <p>
            <strong>What it does:</strong> Appears as the grey text snippet
            below your title in Google results. Not a ranking factor, but
            massively affects click-through rate.
          </p>

          <p>
            <strong>What to check:</strong>
          </p>
          <ul>
            <li>Length: 150-160 characters (Google truncates after this)</li>
            <li>Unique for every page (Google penalises duplicates)</li>
            <li>
              Includes primary keyword + value proposition + soft CTA
            </li>
            <li>Reads like a human wrote it (no keyword stuffing)</li>
          </ul>

          <p>
            <strong>Bad example:</strong> &quot;We sell dog food. Buy dog food
            online. Dog food delivery. Best dog food.&quot; (keyword spam,
            Google will ignore this)
          </p>

          <p>
            <strong>Good example:</strong> &quot;Fresh organic dog food
            delivered weekly. Vet-approved recipes, no fillers. 4.9★ from 12K
            reviews. Free trial box.&quot; (147 chars)
          </p>

          <h3>3. Open Graph image (og:image)</h3>

          <p>
            <strong>What it does:</strong> The image that appears when someone
            shares your link on Facebook, LinkedIn, Twitter, Slack, or
            iMessage.
          </p>

          <p>
            <strong>What to check:</strong>
          </p>
          <ul>
            <li>Exists (if missing, platforms grab a random image or show nothing)</li>
            <li>Size: at least 1200×630px (Facebook/LinkedIn standard)</li>
            <li>Loads correctly (broken image = broken preview)</li>
            <li>Relevant to the page content</li>
          </ul>

          <p>
            If your og:image is missing or broken, your links look unprofessional
            when shared. People scroll past.
          </p>

          <h3>4. Open Graph title and description (og:title, og:description)</h3>

          <p>
            <strong>What it does:</strong> Controls the title and description
            when your page is shared on social media. Often different from your
            SEO title/description.
          </p>

          <p>
            <strong>What to check:</strong>
          </p>
          <ul>
            <li>og:title exists and is compelling (doesn&apos;t need brand name)</li>
            <li>og:description exists and is 2-3 sentences max</li>
            <li>Both are set explicitly (if missing, platforms use your meta title/description)</li>
          </ul>

          <h3>5. Canonical URL</h3>

          <p>
            <strong>What it does:</strong> Tells Google which URL is the
            &quot;official&quot; version when you have duplicate or similar
            content at multiple URLs.
          </p>

          <p>
            <strong>What to check:</strong>
          </p>
          <ul>
            <li>Exists on every page</li>
            <li>Points to the correct URL (usually the current page URL)</li>
            <li>Uses HTTPS and includes the full domain</li>
          </ul>

          <p>
            Common mistake: having a canonical tag that points to a different
            domain or a 404 page. This confuses Google.
          </p>

          <hr />

          <h2>5 free tools to check your meta tags</h2>

          <h3>1. GetMetaFix (fastest option)</h3>

          <p>
            <strong>Best for:</strong> Checking all meta tags + getting fix
            recommendations in under 30 seconds.
          </p>

          <p>
            Paste in your URL at{" "}
            <a
              href="https://getmetafix.com"
              className="text-purple-600 hover:text-purple-700 underline"
            >
              getmetafix.com
            </a>
            . You&apos;ll get:
          </p>
          <ul>
            <li>Title tag analysis (length, keywords, duplicates)</li>
            <li>Meta description check</li>
            <li>Open Graph tag validation</li>
            <li>Canonical URL check</li>
            <li>Social preview simulator (see how your link looks when shared)</li>
            <li>AI-generated fixes for every issue</li>
          </ul>

          <p>
            <strong>Free tier:</strong> Full audit with issue detection.
          </p>
          <p>
            <strong>Paid ($29):</strong> AI-generated HTML snippets to copy-paste
            the fixes.
          </p>

          <h3>2. View Page Source (built into every browser)</h3>

          <p>
            <strong>Best for:</strong> Quickly checking if tags exist at all.
          </p>

          <p>
            Right-click anywhere on the page → &quot;View Page Source&quot;
            (or press <code>Ctrl+U</code> / <code>Cmd+Option+U</code>).
          </p>

          <p>
            Look at the <code>&lt;head&gt;</code> section. You should see:
          </p>
          <ul>
            <li>
              <code>&lt;title&gt;Your Title&lt;/title&gt;</code>
            </li>
            <li>
              <code>
                &lt;meta name=&quot;description&quot; content=&quot;...&quot;
                /&gt;
              </code>
            </li>
            <li>
              <code>
                &lt;meta property=&quot;og:image&quot; content=&quot;...&quot;
                /&gt;
              </code>
            </li>
            <li>
              <code>
                &lt;link rel=&quot;canonical&quot; href=&quot;...&quot; /&gt;
              </code>
            </li>
          </ul>

          <p>
            <strong>Limitation:</strong> Doesn&apos;t tell you if the tags are
            <em>good</em>, just if they exist.
          </p>

          <h3>3. Facebook Sharing Debugger</h3>

          <p>
            <strong>Best for:</strong> Checking how your page looks when shared
            on Facebook, Instagram, or WhatsApp.
          </p>

          <p>
            Go to{" "}
            <a
              href="https://developers.facebook.com/tools/debug/"
              className="text-purple-600 hover:text-purple-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              developers.facebook.com/tools/debug/
            </a>
            , paste your URL, and click &quot;Debug&quot;.
          </p>

          <p>You&apos;ll see:</p>
          <ul>
            <li>The exact preview users see when they share your link</li>
            <li>Which og:image, og:title, og:description Facebook detected</li>
            <li>Warnings if tags are missing or broken</li>
          </ul>

          <p>
            <strong>Pro tip:</strong> If you just updated your meta tags, click
            &quot;Scrape Again&quot; to clear Facebook&apos;s cache.
          </p>

          <h3>4. Twitter Card Validator</h3>

          <p>
            <strong>Best for:</strong> Checking how your page looks when shared
            on Twitter/X.
          </p>

          <p>
            Go to{" "}
            <a
              href="https://cards-dev.twitter.com/validator"
              className="text-purple-600 hover:text-purple-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              cards-dev.twitter.com/validator
            </a>{" "}
            (requires a Twitter account), paste your URL.
          </p>

          <p>
            Twitter uses <code>twitter:card</code>, <code>twitter:title</code>,{" "}
            <code>twitter:description</code>, and <code>twitter:image</code>{" "}
            meta tags. If those don&apos;t exist, it falls back to Open Graph
            tags.
          </p>

          <h3>5. Google Search Console (best for advanced users)</h3>

          <p>
            <strong>Best for:</strong> Seeing which meta tags Google is actually
            reading, and checking for duplicate title/description issues across
            your entire site.
          </p>

          <p>
            Go to{" "}
            <a
              href="https://search.google.com/search-console"
              className="text-purple-600 hover:text-purple-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              search.google.com/search-console
            </a>{" "}
            → Performance → Pages.
          </p>

          <p>
            Google Search Console will flag pages with duplicate or missing meta
            descriptions under &quot;Enhancements&quot;. It&apos;s slow (data
            updates every 1-3 days), but it&apos;s the source of truth for what
            Google sees.
          </p>

          <hr />

          <h2>Quick meta tag checklist</h2>

          <p>Use this every time you publish a new page:</p>

          <ul>
            <li>
              <input type="checkbox" disabled /> Title tag exists, under 60
              characters, includes primary keyword
            </li>
            <li>
              <input type="checkbox" disabled /> Meta description exists, 150-160
              characters, unique, compelling
            </li>
            <li>
              <input type="checkbox" disabled /> og:image set and loads correctly
              (1200×630px minimum)
            </li>
            <li>
              <input type="checkbox" disabled /> og:title and og:description set
            </li>
            <li>
              <input type="checkbox" disabled /> Canonical URL points to correct
              page
            </li>
            <li>
              <input type="checkbox" disabled /> No duplicate meta tags across
              site
            </li>
            <li>
              <input type="checkbox" disabled /> Test share preview on Facebook
              and Twitter
            </li>
          </ul>

          <hr />

          <h2>What to do if your meta tags are broken</h2>

          <p>
            If you found issues, here&apos;s the fastest fix depending on your
            setup:
          </p>

          <h3>WordPress</h3>
          <p>
            Install Yoast SEO or RankMath (free plugins). Both let you edit
            title tags, meta descriptions, and Open Graph tags for every page
            directly in the editor.
          </p>

          <h3>Shopify</h3>
          <p>
            Go to the page editor → scroll to &quot;Search engine listing
            preview&quot; → click &quot;Edit SEO&quot;. You can set title and
            meta description here. For og:image, you&apos;ll need to edit your
            theme code or use an app like SEO Manager.
          </p>

          <h3>Custom/static site</h3>
          <p>
            Edit the <code>&lt;head&gt;</code> section of your HTML. Add:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {`<title>Your Title Here</title>
<meta name="description" content="Your description here" />
<meta property="og:title" content="Your OG title" />
<meta property="og:description" content="Your OG description" />
<meta property="og:image" content="https://yourdomain.com/image.jpg" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://yourdomain.com/page" />`}
          </pre>

          <h3>Or use GetMetaFix</h3>
          <p>
            Run an audit at{" "}
            <a
              href="https://getmetafix.com"
              className="text-purple-600 hover:text-purple-700 underline"
            >
              getmetafix.com
            </a>
            . For $29, you get AI-generated HTML snippets for every issue. Copy,
            paste, deploy. Takes 5 minutes.
          </p>

          <hr />

          <h2>Common meta tag mistakes (and how to avoid them)</h2>

          <h3>1. Same title tag on every page</h3>
          <p>
            Google sees this as duplicate content. Every page needs a unique
            title that describes what&apos;s on <em>that specific page</em>.
          </p>

          <h3>2. Keyword stuffing in meta descriptions</h3>
          <p>
            &quot;Buy shoes online cheap shoes best shoes running shoes...&quot;
            Google ignores this. Write for humans, not bots.
          </p>

          <h3>3. Missing og:image</h3>
          <p>
            When someone shares your link on Slack or LinkedIn, they see a blank
            preview. Looks broken. Always set an og:image.
          </p>

          <h3>4. Title tags that are too long</h3>
          <p>
            Google shows ~60 characters. If your title is 85 characters,
            people see: &quot;How to Bake the Perfect Chocolate Chip Cookies
            Using Organic Ingre...&quot;
          </p>
          <p>Cut it down. Front-load the important words.</p>

          <h3>5. Not testing after changes</h3>
          <p>
            You updated your meta tags. Great. But did you check if they
            actually work? Use the tools above to verify.
          </p>

          <hr />

          <h2>TL;DR</h2>

          <p>
            <strong>What to check:</strong>
          </p>
          <ol>
            <li>Title tag (50-60 chars, unique, keyword-focused)</li>
            <li>Meta description (150-160 chars, unique, compelling)</li>
            <li>og:image (1200×630px, loads correctly)</li>
            <li>og:title and og:description (set explicitly)</li>
            <li>Canonical URL (points to correct page)</li>
          </ol>

          <p>
            <strong>Best tools:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://getmetafix.com"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                GetMetaFix
              </a>{" "}
              for full audit + AI fixes
            </li>
            <li>View Page Source to check if tags exist</li>
            <li>Facebook Debugger for social previews</li>
            <li>Twitter Card Validator for Twitter previews</li>
            <li>Google Search Console for duplicate detection</li>
          </ul>

          <p>
            Check your meta tags → fix issues → test with the tools above →
            deploy. Takes 5-10 minutes per page.
          </p>

          <div className="mt-12 p-6 bg-purple-50 border border-purple-200 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              Check your meta tags in 30 seconds
            </h3>
            <p className="mb-4">
              Paste your URL into GetMetaFix and get a full audit with AI-powered
              fix recommendations. Free to audit, $29 for the fixes.
            </p>
            <Link
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Run Free Audit →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
