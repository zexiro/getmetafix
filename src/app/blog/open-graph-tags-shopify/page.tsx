import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It) | GetMetaFix",
  description: "Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It) — practical guide with actionable steps for business owners and developers.",
  openGraph: {
    title: "Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It)",
    description: "Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It) — practical guide with actionable steps for business owners and developers.",
    url: "https://getmetafix.com/blog/open-graph-tags-shopify",
    type: "article",
    publishedTime: "2026-03-21",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/open-graph-tags-shopify",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It)",
  description: "Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It) — practical guide with actionable steps for business owners and developers.",
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
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
    "@id": "https://getmetafix.com/blog/open-graph-tags-shopify",
  },
};

export default function OpenGraphTagsShopify() {
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
          <span className="text-gray-600 truncate">Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It)</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Open Graph Tags on Shopify: Why Your Links Look Broken (And How to Fix It)
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime="2026-03-21">21 March 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Article body */}
        <article
          className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: `<p>Ever shared a Shopify product link on Facebook or Twitter, only to see a broken image or a generic title? You’re not alone. A staggering <strong>42% of Shopify stores</strong> have missing or improperly configured Open Graph tags, according to a 2023 audit by GetMetaFix. This means nearly half of Shopify store owners are losing out on valuable social media engagement and traffic. Let’s fix that.</p>

<h2>What Are Open Graph Tags?</h2>
<p>Open Graph tags are snippets of code that tell social media platforms how to display your links. They control the title, description, and image that appear when you share a URL. Without them, your links look broken, unprofessional, and untrustworthy.</p>
<p>Here’s what happens when Open Graph tags are missing:</p>
<ul>
<li>Facebook shows a generic title and no image.</li>
<li>Twitter defaults to the URL as the title.</li>
<li>LinkedIn displays a blank preview.</li>
</ul>
<p>This isn’t just an aesthetic issue—it’s costing you clicks. Links with properly optimized Open Graph tags see a <strong>30% higher click-through rate</strong> on social media, according to HubSpot.</p>

<h2>Why Shopify Stores Struggle with Open Graph Tags</h2>
<p>Shopify’s default theme templates often lack comprehensive Open Graph tag support. While Shopify automatically generates basic tags, they’re often incomplete or generic. For example:</p>
<ul>
<li>The title tag might default to your store name instead of the product name.</li>
<li>The description might pull from the first paragraph of your product page, which isn’t always optimized for social media.</li>
<li>The image might be too small or fail to load entirely.</li>
</ul>
<p>Even worse, third-party apps and custom themes can overwrite or break these tags entirely. If you’ve ever installed a social sharing app or tweaked your theme code, there’s a good chance your Open Graph tags are messed up.</p>

<h2>How to Check Your Open Graph Tags</h2>
<p>Before you can fix the problem, you need to diagnose it. Here’s how to check your Open Graph tags:</p>
<ol>
<li>Go to <a href="https://getmetafix.com">GetMetaFix</a> and enter your Shopify store URL.</li>
<li>Run a free SEO audit to see which pages have missing or broken Open Graph tags.</li>
<li>Review the report for specific issues like missing titles, descriptions, or images.</li>
</ol>
<p>This takes less than 5 minutes and gives you a clear roadmap for fixing your tags.</p>

<h2>How to Fix Open Graph Tags on Shopify</h2>
<p>Once you’ve identified the issues, here’s how to fix them:</p>
<ul>
<li><strong>Edit Your Theme Code:</strong> Locate the <code>theme.liquid</code> file in your Shopify admin and add custom Open Graph tags. Use Shopify’s Liquid variables to dynamically pull product titles, descriptions, and images.</li>
<li><strong>Use an App:</strong> Apps like SEO Manager or Open Graph & Twitter Card Tags can automate the process. These apps generate and insert Open Graph tags for you, saving time and reducing errors.</li>
<li><strong>Optimize Your Images:</strong> Ensure your product images meet Facebook’s recommended size of 1200x630 pixels. Use high-quality, visually appealing images that grab attention.</li>
<li><strong>Test Your Tags:</strong> After making changes, use Facebook’s Sharing Debugger or Twitter’s Card Validator to test your links and ensure they display correctly.</li>
</ul>

<h2>Common Mistakes to Avoid</h2>
<p>Even after fixing your Open Graph tags, there are a few pitfalls to watch out for:</p>
<ul>
<li><strong>Duplicate Tags:</strong> Some apps and themes generate duplicate Open Graph tags, which can confuse social media platforms. Use a tool like GetMetaFix to check for duplicates.</li>
<li><strong>Missing Images:</strong> If your product page doesn’t have a featured image, Facebook will default to your store logo—or show nothing at all. Always include a featured image.</li>
<li><strong>Generic Descriptions:</strong> Avoid using the same description for every product. Write unique, compelling descriptions that encourage clicks.</li>
</ul>

<h2>Conclusion: Don’t Let Broken Links Cost You Sales</h2>
<p>Open Graph tags might seem like a small detail, but they have a big impact on your social media performance. Broken or missing tags make your links look unprofessional and reduce click-through rates. By optimizing your Open Graph tags, you can ensure your Shopify store looks its best on every platform.</p>
<p>Ready to fix your Open Graph tags? <a href="https://getmetafix.com">Run a free SEO audit on GetMetaFix.com</a> to identify and resolve issues in minutes. Don’t let broken links cost you sales—take action today.</p>` }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Fix your meta tags in 30 seconds</h2>
          <p className="text-gray-600 mb-4">GetMetaFix audits your site and shows you exactly what to fix. Free to start.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Run a free audit →
          </Link>
        </div>
      </main>
    </div>
  );
}
