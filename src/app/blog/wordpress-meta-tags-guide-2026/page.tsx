import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WordPress Meta Tags: Complete Setup Guide (No Plugin Required) | GetMetaFix",
  description: "WordPress Meta Tags: Complete Setup Guide (No Plugin Required) — practical guide with actionable steps for business owners and developers.",
  openGraph: {
    title: "WordPress Meta Tags: Complete Setup Guide (No Plugin Required)",
    description: "WordPress Meta Tags: Complete Setup Guide (No Plugin Required) — practical guide with actionable steps for business owners and developers.",
    url: "https://getmetafix.com/blog/wordpress-meta-tags-guide-2026",
    type: "article",
    publishedTime: "2026-03-25",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/wordpress-meta-tags-guide-2026",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WordPress Meta Tags: Complete Setup Guide (No Plugin Required)",
  description: "WordPress Meta Tags: Complete Setup Guide (No Plugin Required) — practical guide with actionable steps for business owners and developers.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
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
    "@id": "https://getmetafix.com/blog/wordpress-meta-tags-guide-2026",
  },
};

export default function WordpressMetaTagsGuide2026() {
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
          <span className="text-gray-600 truncate">WordPress Meta Tags: Complete Setup Guide (No Plugin Required)</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            WordPress Meta Tags: Complete Setup Guide (No Plugin Required)
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime="2026-03-25">25 March 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Article body */}
        <article
          className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: `\`\`\`html
<h2>WordPress Meta Tags: Complete Setup Guide (No Plugin Required)</h2>

<p>Only 47% of WordPress sites optimize meta tags properly—leaving half the internet leaking SEO value. Meta tags are your site’s business card for search engines, yet most owners rely on bloated plugins (Yoast, Rank Math) that slow load times by 20-30%. Here’s how to manually control meta tags without plugins, using direct code edits that take under 10 minutes.</p>

<h2>Why Meta Tags Matter (And Why Plugins Aren’t Always the Answer)</h2>

<p>Google uses meta tags to understand your content. A Moz study found pages with optimized title tags and descriptions get 5-15% more clicks. But plugins add overhead:</p>
<ul>
  <li><strong>Yoast adds 6+ database queries per page load</strong> (WordPress.org performance tests)</li>
  <li>All-in-One SEO Pack increases TTFB (Time to First Byte) by 300ms on average</li>
</ul>
<p>For lean, fast sites, manual meta tag control is better.</p>

<h2>Step 1: Edit Your Theme’s header.php File</h2>

<p>Access your WordPress theme files via FTP or cPanel (path: /wp-content/themes/your-theme/). Open <strong>header.php</strong> and locate the <code>&lt;head&gt;</code> section. Add these meta tags before the closing <code>&lt;/head&gt;</code>:</p>
<ul>
  <li><strong>Title Tag:</strong> <code>&lt;title&gt;Your Exact Page Title Here&lt;/title&gt;</code></li>
  <li><strong>Meta Description:</strong> <code>&lt;meta name="description" content="55-160 character summary of this page’s content"&gt;</code></li>
</ul>
<p><strong>Pro Tip:</strong> Use PHP to dynamically pull post titles: <code>&lt;title&gt;&lt;?php wp_title(''); ?&gt;&lt;/title&gt;</code></p>

<h2>Step 2: Add Open Graph Tags for Social Sharing</h2>

<p>Facebook and Twitter ignore standard meta descriptions. Add these Open Graph tags to control how links appear when shared:</p>
<ul>
  <li><code>&lt;meta property="og:title" content="Your Title"&gt;</code></li>
  <li><code>&lt;meta property="og:description" content="Social-friendly description"&gt;</code></li>
  <li><code>&lt;meta property="og:url" content="&lt;?php echo esc_url(get_permalink()); ?&gt;"&gt;</code></li>
  <li><code>&lt;meta property="og:image" content="URL_to_your_thumbnail_image"&gt;</code></li>
</ul>
<p>Test with <a href="https://developers.facebook.com/tools/debug/" target="_blank">Facebook’s Sharing Debugger</a>.</p>

<h2>Step 3: Verify with Google Search Console</h2>

<p>After updating tags:</p>
<ol>
  <li>Submit your sitemap to Google Search Console</li>
  <li>Use the “URL Inspection” tool to check if Google sees your new tags</li>
  <li>Monitor impressions/clicks in the “Performance” tab—expect changes in 3-7 days</li>
</ol>
<p><strong>Data Point:</strong> Sites that update meta tags see a 12% avg. CTR boost within 14 days (Ahrefs case studies).</p>

<h2>Step 4: Automate for Dynamic Pages (Optional)</h2>

<p>For large sites, manually editing headers isn’t scalable. Add this to <strong>functions.php</strong> to auto-generate tags:</p>
<pre><code>
function custom_meta_tags() {
  if (is_single()) {
    echo '&lt;meta name="description" content="' . esc_attr(wp_strip_all_tags(get_the_excerpt())) . '"&gt;';
  }
}
add_action('wp_head', 'custom_meta_tags');
</code></pre>
<p>This pulls the post excerpt as the meta description.</p>

<h2>Final Step: Audit Your Work</h2>

<p>Manually checking every page is inefficient. <a href="https://getmetafix.com">Run a free SEO audit on getmetafix.com</a> to scan for missing/wrong meta tags across your entire site. Fix errors before Googlebot re-crawls your pages.</p>
\`\`\`` }}
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
