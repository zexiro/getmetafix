import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Description Not Showing in Google? 7 Reasons Why (+ Fixes) | GetMetaFix",
  description:
    "Google rewrites 70% of meta descriptions. But if yours isn't showing at all, you have a technical problem. Here are the 7 reasons Google ignores your meta and how to fix each one.",
  openGraph: {
    title: "Meta Description Not Showing in Google? 7 Reasons Why (+ Fixes)",
    description:
      "Google rewrites 70% of meta descriptions. But if yours isn't showing at all, you have a technical problem. Here are the 7 reasons Google ignores your meta and how to fix each one.",
    url: "https://getmetafix.com/blog/meta-description-not-showing-google",
    type: "article",
    publishedTime: "2026-03-21",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/meta-description-not-showing-google",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meta Description Not Showing in Google? 7 Reasons Why (+ Fixes)",
  description:
    "Google rewrites 70% of meta descriptions. But if yours isn't showing at all, you have a technical problem. Here are the 7 reasons Google ignores your meta and how to fix each one.",
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
    "@id": "https://getmetafix.com/blog/meta-description-not-showing-google",
  },
};

export default function MetaDescriptionNotShowingPage() {
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
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Meta Description Not Showing in Google? 7 Reasons Why (+ Fixes)
          </h1>
          <p className="text-lg text-gray-600">
            Published March 21, 2026 • 6 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            You wrote the perfect meta description. 155 characters, compelling copy, clear call to action. But when you Google your page, it's not there. Google is showing something completely different — or worse, truncated gibberish from your page content.
          </p>

          <p>
            Here's the uncomfortable truth: <strong>Google rewrites 70% of meta descriptions</strong> according to their own data. But there's a difference between Google <em>choosing</em> to rewrite your meta and Google <em>ignoring</em> it because of a technical error.
          </p>

          <p>
            If your meta description isn't showing at all — not even sometimes — you have a fixable problem. Here are the 7 reasons Google skips your meta description and exactly how to fix each one.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. Your Meta Tag Has Syntax Errors
          </h2>

          <p>
            The most common cause. A missing closing quote, an extra space, a typo in the attribute name — any of these will make Google skip your meta entirely.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6 font-mono text-sm">
            <p className="text-red-600 mb-2">❌ Broken (missing quote):</p>
            <code className="text-gray-800">
              &lt;meta name="description content="Your text here"&gt;
            </code>
            <p className="text-green-600 mt-4 mb-2">✅ Correct:</p>
            <code className="text-gray-800">
              &lt;meta name="description" content="Your text here"&gt;
            </code>
          </div>

          <p>
            <strong>How to check:</strong> View your page source (Ctrl+U or Cmd+Option+U), search for "description", and inspect the HTML. Look for missing quotes, incorrect attribute names, or unclosed tags.
          </p>

          <p>
            <strong>How to fix:</strong> Correct the syntax. If you're on Shopify, WordPress, or Wix, your theme or SEO plugin might be generating broken HTML. Test in a different theme/plugin to isolate the issue.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. You Have Multiple Meta Descriptions
          </h2>

          <p>
            If your page has two or more meta description tags, Google picks one at random or ignores both. This happens when your CMS adds a default meta and your SEO plugin adds another.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6 font-mono text-sm">
            <p className="text-red-600 mb-2">❌ Two metas (conflict):</p>
            <code className="text-gray-800">
              &lt;meta name="description" content="First one"&gt;<br />
              &lt;meta name="description" content="Second one"&gt;
            </code>
          </div>

          <p>
            <strong>How to check:</strong> View source and Ctrl+F for "description". Count how many &lt;meta name="description"&gt; tags you see.
          </p>

          <p>
            <strong>How to fix:</strong> Remove the duplicate. On Shopify: check your theme's theme.liquid file. On WordPress: disable one SEO plugin (Yoast vs. RankMath). On custom sites: search your codebase for where both are being added.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Your Description Is Too Short
          </h2>

          <p>
            Google's unofficial minimum is around <strong>50 characters</strong>. Anything shorter and Google assumes you didn't write a real description — it looks like placeholder text.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6 font-mono text-sm">
            <p className="text-red-600 mb-2">❌ Too short (29 characters):</p>
            <code className="text-gray-800">
              &lt;meta name="description" content="Buy shoes online"&gt;
            </code>
            <p className="text-green-600 mt-4 mb-2">✅ Better (87 characters):</p>
            <code className="text-gray-800">
              &lt;meta name="description" content="Shop premium leather shoes for men and women. Free shipping on orders over $50."&gt;
            </code>
          </div>

          <p>
            <strong>How to fix:</strong> Write 120-155 character descriptions. That's the sweet spot where Google usually respects your copy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. The Meta Tag Is in the Wrong Place
          </h2>

          <p>
            Meta descriptions must be inside the <code>&lt;head&gt;</code> section of your HTML. If it's in the <code>&lt;body&gt;</code> or after the closing <code>&lt;/head&gt;</code> tag, Google ignores it.
          </p>

          <p>
            <strong>How to check:</strong> View source. Find your meta description tag. Scroll up — is there a <code>&lt;head&gt;</code> tag above it and a <code>&lt;/head&gt;</code> tag below it? If not, it's misplaced.
          </p>

          <p>
            <strong>How to fix:</strong> Move it inside the <code>&lt;head&gt;</code>. For most platforms (Shopify, WordPress, Wix), this is handled automatically — if it's wrong, your theme or plugin is broken.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Google Thinks Your Description Is Spammy
          </h2>

          <p>
            If your meta is stuffed with keywords, repeats the same phrase multiple times, or reads like an ad from 2005, Google will ignore it and generate their own.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6 font-mono text-sm">
            <p className="text-red-600 mb-2">❌ Keyword stuffing:</p>
            <code className="text-gray-800">
              Best shoes cheap shoes discount shoes buy shoes online shoes for men shoes for women leather shoes running shoes
            </code>
            <p className="text-green-600 mt-4 mb-2">✅ Natural copy:</p>
            <code className="text-gray-800">
              Shop premium leather shoes for men and women. Free shipping on orders over $50. 30-day returns.
            </code>
          </div>

          <p>
            <strong>How to fix:</strong> Write for humans, not bots. Use your target keyword once, maybe twice. The rest should be benefit-driven copy that makes someone want to click.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. The Page Isn't Indexed Yet
          </h2>

          <p>
            If your page is brand new (published in the last 48 hours), Google might not have crawled it yet. Until they do, there's no description to show.
          </p>

          <p>
            <strong>How to check:</strong> Search for <code>site:yourdomain.com/exact-page-url</code> in Google. If it doesn't appear, it's not indexed.
          </p>

          <p>
            <strong>How to fix:</strong> Submit your URL via Google Search Console (URL Inspection → Request Indexing). It'll typically show up within 24-48 hours. If it's been longer than a week, check your robots.txt and make sure the page isn't blocked.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. You're Using a robots Meta Tag That Blocks Descriptions
          </h2>

          <p>
            If your page has <code>&lt;meta name="robots" content="nosnippet"&gt;</code>, you're explicitly telling Google not to show a description. This is rare but happens.
          </p>

          <p>
            <strong>How to check:</strong> View source and search for "nosnippet" or "robots".
          </p>

          <p>
            <strong>How to fix:</strong> Remove the nosnippet directive or change it to <code>content="index, follow"</code>.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bonus: Google Rewrites Meta Descriptions Based on Query
            </h3>
            <p className="text-gray-700">
              Even with perfect syntax, Google might still rewrite your meta if they think a different snippet better matches the user's search query. This is expected behavior. If your meta shows <em>sometimes</em> but not always, that's Google doing its job — not a technical error.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            The Fastest Way to Find and Fix Meta Issues
          </h2>

          <p>
            Checking every page manually takes hours. If you're running a store, agency site, or blog with dozens (or hundreds) of pages, you need an automated solution.
          </p>

          <p>
            <strong>GetMetaFix audits your entire site in 30 seconds.</strong> It scans every page for:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>Missing meta descriptions</li>
            <li>Duplicate metas across pages</li>
            <li>Descriptions that are too short or too long</li>
            <li>Syntax errors in your meta tags</li>
            <li>Multiple description tags on the same page</li>
            <li>Missing Open Graph and Twitter Card tags</li>
          </ul>

          <p>
            Then it generates fixed meta tags for every page — professionally written, optimized for your content, ready to copy-paste.
          </p>

          <div className="bg-gray-900 text-white rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Fix Your Meta Descriptions in 30 Seconds
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Free audit shows you exactly what's broken. $29 one-time gets you fixed meta tags for your entire site.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Run Free Audit →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Quick Checklist: Is Your Meta Description Working?
          </h2>

          <ul className="space-y-3 my-6">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1">☐</span>
              <span>Only <strong>one</strong> <code>&lt;meta name="description"&gt;</code> tag per page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1">☐</span>
              <span>Tag is inside the <code>&lt;head&gt;</code> section</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1">☐</span>
              <span>120-155 characters long</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1">☐</span>
              <span>No syntax errors (missing quotes, typos)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1">☐</span>
              <span>Natural, benefit-driven copy (not keyword-stuffed)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1">☐</span>
              <span>Page is indexed in Google</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-mono text-sm mt-1">☐</span>
              <span>No <code>nosnippet</code> directive blocking it</span>
            </li>
          </ul>

          <p className="mt-8">
            Run through this checklist for any page where your meta isn't showing. Fix the issues, wait 48 hours for Google to recrawl, and check again. If your meta still isn't showing after fixing all technical issues, Google is choosing to rewrite it based on search context — which is expected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What to Do Next
          </h2>

          <p>
            Start with your homepage and top 10 landing pages. Check the source, fix any syntax errors, remove duplicates, and rewrite anything under 120 characters.
          </p>

          <p>
            If you're managing more than 20 pages, manual checking isn't realistic. <Link href="/" className="text-blue-600 hover:text-blue-700 underline">Run a free GetMetaFix audit</Link> — it'll flag every issue across your entire site in under a minute.
          </p>

          <p className="mt-8 text-gray-600">
            <strong>Updated March 21, 2026.</strong> All recommendations reflect Google's current meta description handling as of Q1 2026.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-12 mt-16">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">
          <p>
            © 2026 GetMetaFix. Fix your site's SEO meta tags in 30 seconds.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
