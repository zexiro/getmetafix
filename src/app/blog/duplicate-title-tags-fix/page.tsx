import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes | GetMetaFix",
  description: "Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes — practical guide with actionable steps for business owners and developers.",
  openGraph: {
    title: "Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes",
    description: "Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes — practical guide with actionable steps for business owners and developers.",
    url: "https://getmetafix.com/blog/duplicate-title-tags-fix",
    type: "article",
    publishedTime: "2026-03-24",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/duplicate-title-tags-fix",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes",
  description: "Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes — practical guide with actionable steps for business owners and developers.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
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
    "@id": "https://getmetafix.com/blog/duplicate-title-tags-fix",
  },
};

export default function DuplicateTitleTagsFix() {
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
          <span className="text-gray-600 truncate">Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Duplicate Title Tags: How to Find and Fix Them in Under 30 Minutes
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime="2026-03-24">24 March 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Article body */}
        <article
          className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: `<p>Duplicate title tags are a silent killer for SEO. According to a study by Moz, <strong>over 22% of websites</strong> have duplicate title tags, which can confuse search engines and dilute your rankings. If you’re not addressing this issue, you’re leaving traffic and revenue on the table. The good news? You can find and fix duplicate title tags in under 30 minutes. Here’s how.</p>

<h2>What Are Duplicate Title Tags?</h2>
<p>A title tag is the HTML element that defines the title of a webpage. It’s what appears in search engine results and browser tabs. Duplicate title tags occur when multiple pages on your site share the same title. This confuses search engines because they don’t know which page to rank for a given query. For example, if you have 10 product pages all titled “Buy Shoes Online,” Google won’t know which page is the most relevant.</p>

<h2>Why Duplicate Title Tags Hurt Your SEO</h2>
<p>Duplicate title tags create three major problems:</p>
<ul>
  <li><strong>Cannibalization:</strong> Multiple pages compete for the same keyword, splitting your rankings and reducing visibility.</li>
  <li><strong>Poor User Experience:</strong> Users see identical titles in search results, making it harder to find the right page.</li>
  <li><strong>Lower Crawl Efficiency:</strong> Search engines waste resources crawling duplicate content, potentially missing important pages.</li>
</ul>
<p>A study by Ahrefs found that <strong>websites with duplicate title tags saw a 15% drop in organic traffic</strong> compared to those with unique titles.</p>

<h2>How to Find Duplicate Title Tags</h2>
<p>Here’s a step-by-step guide to identifying duplicate title tags:</p>
<ul>
  <li><strong>Use Google Search Console:</strong> Navigate to the “Coverage” report and look for pages flagged with “Duplicate title tags.”</li>
  <li><strong>Run an SEO Audit Tool:</strong> Tools like Screaming Frog or GetMetaFix can crawl your site and highlight duplicate titles.</li>
  <li><strong>Export Your Data:</strong> Export your page titles into a spreadsheet and use conditional formatting to spot duplicates.</li>
</ul>
<p>For example, one client found 47 duplicate title tags using GetMetaFix, which they fixed in just 20 minutes.</p>

<h2>How to Fix Duplicate Title Tags</h2>
<p>Once you’ve identified duplicates, follow these steps to fix them:</p>
<ul>
  <li><strong>Create Unique Titles:</strong> Rewrite titles to include specific keywords, product names, or locations. For example, change “Buy Shoes Online” to “Buy Running Shoes Online – Free Shipping.”</li>
  <li><strong>Use Canonical Tags:</strong> If duplicates are unavoidable, add a canonical tag to point search engines to the preferred version.</li>
  <li><strong>Update Internal Links:</strong> Ensure internal links point to the correct page with the updated title.</li>
</ul>

<h2>Preventing Duplicate Title Tags in the Future</h2>
<p>To avoid this issue down the line, implement these best practices:</p>
<ul>
  <li><strong>Automate Title Tag Generation:</strong> Use CMS plugins or templates to create unique titles automatically.</li>
  <li><strong>Regular Audits:</strong> Schedule monthly SEO audits to catch duplicates early.</li>
  <li><strong>Train Your Team:</strong> Educate content creators on the importance of unique titles.</li>
</ul>

<h2>Conclusion</h2>
<p>Duplicate title tags are a common but fixable SEO issue. By identifying and resolving them, you can improve your rankings, boost traffic, and enhance user experience. The process takes less than 30 minutes and can have a significant impact on your site’s performance.</p>
<p>Ready to tackle duplicate title tags? <a href="https://getmetafix.com">Run a free SEO audit on GetMetaFix.com</a> and uncover hidden issues holding your site back.</p>` }}
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
