import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Duplicate Meta Descriptions: What They Are and How to Fix Them – GetMetaFix",
  description:
    "Duplicate meta descriptions silently hurt your SEO – Google ignores them and your click-through rate suffers. Here's how to find them and fix them on Shopify, WordPress, and Wix.",
  openGraph: {
    title: "Duplicate Meta Descriptions: What They Are and How to Fix Them",
    description:
      "Duplicate meta descriptions silently hurt your SEO – Google ignores them and your click-through rate suffers. Here's how to find them and fix them on Shopify, WordPress, and Wix.",
    url: "https://getmetafix.com/blog/duplicate-meta-descriptions-fix",
    type: "article",
    publishedTime: "2026-03-20",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/duplicate-meta-descriptions-fix",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Duplicate Meta Descriptions: What They Are and How to Fix Them",
  description:
    "Duplicate meta descriptions silently hurt your SEO – Google ignores them and your click-through rate suffers. Here's how to find them and fix them on Shopify, WordPress, and Wix.",
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  author: {
    "@type": "Organization",
    name: "GetMetaFix",
    url: "https://getmetafix.com",
  },
  publisher: {
    "@type": "Organization",
    name: "GetMetaFix",
    url: "https://getmetafix.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getmetafix.com/blog/duplicate-meta-descriptions-fix",
  },
};

export default function DuplicateMetaDescriptionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-gray-900">GetMetaFix</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors px-3 py-1.5 bg-black text-white rounded-lg text-xs font-medium"
            >
              Free audit →
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-600 truncate">Duplicate Meta Descriptions: What They Are and How to Fix Them</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <time dateTime="2026-03-20">20 March 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Duplicate Meta Descriptions: What They Are and How to Fix Them
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Duplicate meta descriptions silently hurt your SEO – Google ignores them and your click-through rate suffers. Here&apos;s how to find them and fix them on Shopify, WordPress, and Wix.
          </p>
        </header>

        {/* Inline CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-1">Check your site right now</p>
          <p className="text-sm text-gray-500 mb-4">
            Free SEO audit in 30 seconds – find duplicate meta descriptions and every other issue covered in this guide.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Audit for free →
          </Link>
        </div>

        {/* Article body */}
        <article className="prose-content">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What are duplicate meta descriptions?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A duplicate meta description is when two or more pages on your website share the same{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">&lt;meta name=&quot;description&quot;&gt;</code>{" "}
            content. Google reads this tag to understand what each page is about and often uses it as the snippet of text shown below your link in search results.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When multiple pages carry identical descriptions, Google faces a problem: it cannot distinguish your pages from one another. The result is predictable and costly – Google ignores the description entirely and writes its own, pulling a random excerpt from your page content instead.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">Here&apos;s what a duplicate meta description looks like in HTML:</p>
          <pre className="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>{`<!-- Product page A -->
<meta name="description" content="Shop our full range of products. Free delivery over £50.">

<!-- Product page B – identical description -->
<meta name="description" content="Shop our full range of products. Free delivery over £50.">`}</code></pre>
          <p className="text-gray-600 leading-relaxed mb-4">
            This kind of duplication is almost always accidental – caused by a CMS template generating the same fallback text across hundreds of pages when no custom description has been set.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why duplicate meta descriptions hurt your SEO</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Meta descriptions don&apos;t directly affect Google&apos;s ranking algorithm – Google has confirmed this. But they have a significant indirect impact, and duplicate descriptions make that impact negative.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">1. Google rewrites them – badly</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When Google detects a duplicate or templated meta description, it overrides it with an auto-generated snippet pulled from your page content. Google&apos;s algorithm doesn&apos;t understand your intent – it grabs whatever text appears relevant to the search query, which is often an awkward sentence fragment, a navigation item, or a legal disclaimer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You lose control of the single most visible piece of copy in Google search results.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2. Click-through rate drops</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A well-crafted meta description acts like ad copy for your page. It answers the searcher&apos;s question, highlights your unique value, and includes a soft call to action. A generic or auto-generated snippet does none of these things.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lower click-through rate (CTR) means fewer visitors from the same ranking position. And sustained low CTR sends a negative quality signal to Google.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">3. Pages look identical in search results</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            If a user sees two of your pages in search results with the same description, they have no reason to visit either – they cannot tell what&apos;s different. This is especially damaging for e-commerce stores where product pages often appear together for broad category queries.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4. Google Search Console flags it</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google Search Console actively reports duplicate meta descriptions under <strong className="font-semibold text-gray-900">Enhancements → HTML improvements</strong>. It&apos;s a signal Google takes seriously enough to surface in their own tools.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to find duplicate meta descriptions</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Method 1: Free audit at GetMetaFix (30 seconds)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The fastest way to find duplicate meta descriptions is to paste your URL into{" "}
            <a href="https://getmetafix.com" className="text-black underline hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">GetMetaFix</a>.
            It crawls your page, checks your meta description, and flags whether it&apos;s present, the right length, and unique.
            No account needed. Free for the full audit.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Method 2: Google Search Console</h3>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Open Google Search Console</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Go to <strong className="font-semibold text-gray-900">Pages</strong> in the left sidebar</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Look for the <strong className="font-semibold text-gray-900">HTML improvements</strong> section</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Duplicate meta descriptions are listed there with the affected URLs</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            This gives you a comprehensive list across your whole site, but it requires your site to be verified and indexed.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Method 3: Screaming Frog (free up to 500 URLs)</h3>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Download Screaming Frog SEO Spider (free tier crawls up to 500 pages)</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Enter your domain and run a crawl</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Go to the <strong className="font-semibold text-gray-900">Meta Description</strong> tab</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Filter by <strong className="font-semibold text-gray-900">Duplicate</strong> – you&apos;ll see every page sharing an identical description</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Method 4: View page source</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a quick spot check: open the page, press{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">Ctrl+U</code>{" "}
            (Windows) or{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">Cmd+U</code>{" "}
            (Mac), and search for{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">meta name=&quot;description&quot;</code>.
            Compare what you see across different pages.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to fix duplicate meta descriptions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The fix is always the same in principle: write a <strong className="font-semibold text-gray-900">unique, specific meta description for every important page</strong>. But the mechanics differ by platform.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">The formula for a good meta description</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong className="font-semibold text-gray-900">[Primary keyword] + [specific value proposition] + [soft CTA] – under 155 characters</strong>
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Example for a product page:<br />
            <span className="text-green-700">✓</span> <em>&apos;Organic cotton heavyweight t-shirt in navy. 280gsm, sustainably sourced. Free UK delivery over £50. 4.9 stars from 2,400 reviews.&apos;</em> (137 chars)
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Example for a blog post:<br />
            <span className="text-green-700">✓</span> <em>&apos;Learn how to fix duplicate meta descriptions on Shopify, WordPress, and Wix. Step-by-step guide with a free audit tool.&apos;</em> (122 chars)
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to fix duplicate meta descriptions on Shopify</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shopify auto-generates meta descriptions using a template that often produces identical output across product pages, especially when no custom description is set.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">For product pages</h3>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Go to your Shopify admin → <strong className="font-semibold text-gray-900">Products</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Select the product with a duplicate or missing description</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Scroll to <strong className="font-semibold text-gray-900">Search engine listing preview</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click <strong className="font-semibold text-gray-900">Edit website SEO</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">In the <strong className="font-semibold text-gray-900">Meta description</strong> field, write a unique description (120–155 characters)</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click <strong className="font-semibold text-gray-900">Save</strong></li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Prioritise your highest-traffic pages first – use Google Search Console to find which product URLs get the most impressions.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">For collection pages</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Go to <strong className="font-semibold text-gray-900">Products → Collections</strong> → select the collection → scroll to <strong className="font-semibold text-gray-900">Search engine listing preview</strong> → edit the meta description.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">For the homepage</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Go to <strong className="font-semibold text-gray-900">Online Store → Preferences</strong> → edit the <strong className="font-semibold text-gray-900">Meta description</strong> field at the top of the page.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to fix duplicate meta descriptions on WordPress</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            WordPress itself doesn&apos;t add meta descriptions – they come from your SEO plugin. The most common culprits for duplicates are pages with no description written, leaving the plugin to use a global fallback template.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">With Yoast SEO</h3>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Open any page or post in the WordPress editor</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Scroll to the <strong className="font-semibold text-gray-900">Yoast SEO</strong> panel</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click the <strong className="font-semibold text-gray-900">SEO</strong> tab → <strong className="font-semibold text-gray-900">Edit snippet</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Write a unique description in the <strong className="font-semibold text-gray-900">Meta description</strong> field</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Update / Publish</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            To find all pages with duplicate or missing descriptions in Yoast: go to <strong className="font-semibold text-gray-900">SEO → Pages</strong> in the WordPress admin and sort by the description column.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">With Rank Math</h3>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Open the page in the editor</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click the <strong className="font-semibold text-gray-900">Rank Math</strong> icon in the top-right toolbar</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Go to <strong className="font-semibold text-gray-900">Edit Snippet</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Write a unique description and update</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Rank Math also has a <strong className="font-semibold text-gray-900">Bulk Edit</strong> feature under <strong className="font-semibold text-gray-900">Rank Math → Status and Tools</strong> to update meta descriptions across multiple pages from a single interface.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to fix duplicate meta descriptions on Wix</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wix makes it straightforward to set meta descriptions per page, but duplicates still appear when site owners haven&apos;t customised the default settings.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">For standard pages</h3>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Open the <strong className="font-semibold text-gray-900">Wix Editor</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click on the page in the <strong className="font-semibold text-gray-900">Pages</strong> panel</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click the three-dot menu next to the page name → <strong className="font-semibold text-gray-900">SEO (Google)</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Write a unique description in the <strong className="font-semibold text-gray-900">Meta Description</strong> field</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click <strong className="font-semibold text-gray-900">Done</strong> and publish</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">For blog posts</h3>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Open the <strong className="font-semibold text-gray-900">Blog Manager</strong></li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Select the blog post</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Click <strong className="font-semibold text-gray-900">SEO</strong> in the post editor</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Set a unique meta description in the <strong className="font-semibold text-gray-900">Description</strong> field</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Publish</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">For dynamic pages (Wix Stores, Events)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For large Wix stores, use <strong className="font-semibold text-gray-900">Wix SEO Wiz</strong> (built-in) to identify pages with missing or weak meta descriptions. For individual products or events, open the item in its manager, find the <strong className="font-semibold text-gray-900">SEO</strong> or <strong className="font-semibold text-gray-900">Advanced</strong> tab, and set a custom meta description.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which pages need unique meta descriptions?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every page you want Google to rank and users to click. In practice, prioritise:
          </p>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">Homepage</strong> – Always needs a hand-crafted description</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">Top-level service or product category pages</strong> – High traffic, high competition</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">Individual product pages</strong> for your best sellers</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">Blog posts</strong> targeting specific keywords</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">Landing pages</strong> used in ads or outreach</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pages you can deprioritise: thank-you pages, password reset pages, admin URLs, and any page with a <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">noindex</code> tag.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Check for duplicate meta descriptions right now</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The fastest way to find duplicate meta descriptions – and every other SEO issue on your site – is a free 30-second audit at{" "}
            <a href="https://getmetafix.com" className="text-black underline hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">GetMetaFix</a>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Paste in any URL and get a full report: whether your meta description is present, the right length, and potentially duplicated. No account required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you want the AI-generated fix – a unique, keyword-optimised meta description written specifically for your page – that&apos;s included in the $29 Fix Package.
          </p>

        </article>

        {/* Bottom CTA */}
        <div className="mt-16 bg-black rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Fix your site&apos;s SEO in 30 seconds</h2>
          <p className="text-gray-400 mb-6">Free audit. AI-generated fixes for $29.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Audit for free →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">S</span>
            </div>
            <span className="text-sm font-medium text-gray-900">GetMetaFix</span>
          </div>
          <p className="text-sm text-gray-400">Built by an AI. Powered by actual SEO knowledge.</p>
        </div>
      </footer>
    </div>
  );
}
