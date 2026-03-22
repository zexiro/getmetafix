import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Using Google Search Console to Find Meta Tag Problems | GetMetaFix",
  description: "Using Google Search Console to Find Meta Tag Problems — practical guide with actionable steps for business owners and developers.",
  openGraph: {
    title: "Using Google Search Console to Find Meta Tag Problems",
    description: "Using Google Search Console to Find Meta Tag Problems — practical guide with actionable steps for business owners and developers.",
    url: "https://getmetafix.com/blog/google-search-console-meta-tags",
    type: "article",
    publishedTime: "2026-03-22",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/google-search-console-meta-tags",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Using Google Search Console to Find Meta Tag Problems",
  description: "Using Google Search Console to Find Meta Tag Problems — practical guide with actionable steps for business owners and developers.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
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
    "@id": "https://getmetafix.com/blog/google-search-console-meta-tags",
  },
};

export default function GoogleSearchConsoleMetaTags() {
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
          <span className="text-gray-600 truncate">Using Google Search Console to Find Meta Tag Problems</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Using Google Search Console to Find Meta Tag Problems
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime="2026-03-22">22 March 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Article body */}
        <article
          className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: `<p>Did you know that <strong>58% of websites</strong> have at least one critical meta tag issue? These problems can tank your rankings, reduce click-through rates, and leave money on the table. If you’re not using Google Search Console to identify and fix meta tag errors, you’re flying blind. Let’s dive into how you can leverage this tool to uncover and resolve meta tag issues efficiently.</p>

<h2>Why Meta Tags Matter</h2>
<p>Meta tags are the backbone of your SEO strategy. They tell search engines what your page is about and influence how your site appears in search results. A missing or poorly optimized meta description can reduce your click-through rate by up to <strong>30%</strong>. Titles and descriptions that don’t align with user intent can also lead to higher bounce rates and lower rankings.</p>

<h2>How Google Search Console Helps</h2>
<p>Google Search Console (GSC) is a free tool that provides actionable insights into your site’s performance. It flags meta tag issues like missing titles, duplicate descriptions, and excessively long tags. Here’s how to use it:</p>
<ul>
  <li>Log in to your GSC account.</li>
  <li>Navigate to the “Coverage” report under the “Indexing” section.</li>
  <li>Look for errors related to meta tags, such as “Duplicate meta descriptions” or “Missing title tag.”</li>
</ul>

<h2>Common Meta Tag Errors Found in GSC</h2>
<p>Here are some of the most frequent meta tag problems GSC identifies:</p>
<ul>
  <li><strong>Duplicate Titles:</strong> Multiple pages sharing the same title tag confuse search engines.</li>
  <li><strong>Missing Descriptions:</strong> Pages without meta descriptions lose out on potential clicks.</li>
  <li><strong>Overly Long Tags:</strong> Titles or descriptions exceeding character limits get truncated in search results.</li>
</ul>

<h2>Step-by-Step Fixes for Meta Tag Issues</h2>
<p>Once you’ve identified the problems, here’s how to fix them:</p>
<ul>
  <li><strong>Duplicate Titles:</strong> Create unique, keyword-rich titles for each page.</li>
  <li><strong>Missing Descriptions:</strong> Write compelling meta descriptions that include your target keywords.</li>
  <li><strong>Overly Long Tags:</strong> Keep titles under 60 characters and descriptions under 160 characters.</li>
</ul>

<h2>Pro Tips for Meta Tag Optimization</h2>
<p>Beyond fixing errors, optimize your meta tags for better performance:</p>
<ul>
  <li>Use action-oriented language in descriptions to encourage clicks.</li>
  <li>Include primary keywords naturally in titles and descriptions.</li>
  <li>Test different variations to see what resonates with your audience.</li>
</ul>

<h2>Conclusion</h2>
<p>Meta tag issues are more common than you think, but they’re also fixable. Google Search Console is your best ally for identifying and resolving these problems. Don’t let poor meta tags sabotage your SEO efforts. Take action today to ensure your site is optimized for maximum visibility and clicks.</p>

<p>Ready to uncover hidden meta tag issues? <a href="https://getmetafix.com">Run a free SEO audit on GetMetaFix.com</a> and get actionable insights to boost your rankings.</p>` }}
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
