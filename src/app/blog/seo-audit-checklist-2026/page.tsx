import Link from 'next/link';

export const metadata = {
  title: 'Complete SEO Audit Checklist 2026: 27 Things to Check Right Now',
  description: 'Step-by-step SEO audit checklist used by professional agencies. Check technical SEO, on-page optimization, content quality, and local SEO. Free tools included.',
  openGraph: {
    title: 'Complete SEO Audit Checklist 2026: 27 Things to Check Right Now',
    description: 'Step-by-step SEO audit checklist used by professional agencies. Check technical SEO, on-page optimization, content quality, and local SEO.',
    type: 'article',
    publishedTime: '2026-03-24T20:30:00Z',
  },
};

export default function SEOAuditChecklistPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">
          Complete SEO Audit Checklist 2026: 27 Things to Check Right Now
        </h1>
        <p className="text-gray-600">
          Published March 24, 2026 • 12 min read
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-6">
          Every website loses traffic to SEO issues. Missing meta tags, broken links, slow pages — these problems cost you rankings and revenue. This checklist covers everything you need to audit your site's SEO in under 2 hours.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="font-semibold mb-2">Quick Win:</p>
          <p>Start with meta tags. They're the fastest SEO fix with the biggest impact. <Link href="/" className="text-blue-600 hover:underline font-semibold">Run a free 30-second audit here</Link> to see what's broken on your site right now.</p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Why SEO Audits Matter</h2>

        <p>An SEO audit is a health check for your website's search performance. It identifies:</p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Technical issues</strong> blocking Google from crawling your site</li>
          <li><strong>On-page problems</strong> making your pages rank lower than they should</li>
          <li><strong>Content gaps</strong> where competitors outrank you</li>
          <li><strong>Quick wins</strong> that boost rankings in days, not months</li>
        </ul>

        <p>Most sites have 20-50 fixable SEO issues at any time. The sites that rank highest aren't perfect — they just fix issues faster than competitors.</p>

        <h2 className="text-3xl font-bold mt-12 mb-4">The Complete SEO Audit Checklist</h2>

        <h3 className="text-2xl font-bold mt-8 mb-3">Part 1: Technical SEO (9 checks)</h3>

        <h4 className="text-xl font-semibold mt-6 mb-2">1. Check Google Search Console for crawl errors</h4>
        <p>Log into <a href="https://search.google.com/search-console" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Google Search Console</a>. Go to Coverage report. Look for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Pages with errors (404s, server errors, blocked by robots.txt)</li>
          <li>Pages excluded (duplicate content, noindex tags, redirect chains)</li>
          <li>Valid pages with warnings</li>
        </ul>
        <p><strong>Fix priority:</strong> High. Google can't rank pages it can't crawl.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">2. Verify your site is mobile-friendly</h4>
        <p>Use Google's <a href="https://search.google.com/test/mobile-friendly" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Mobile-Friendly Test</a>. Check for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Text too small to read</li>
          <li>Content wider than screen</li>
          <li>Clickable elements too close together</li>
        </ul>
        <p><strong>Fix priority:</strong> Critical. Google uses mobile-first indexing.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">3. Test page speed</h4>
        <p>Run your homepage and top 5 pages through <a href="https://pagespeed.web.dev/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">PageSpeed Insights</a>. Target scores:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>90+ for mobile</li>
          <li>Core Web Vitals all "Good" (green)</li>
        </ul>
        <p>Common fixes: compress images, enable caching, minify CSS/JS, use a CDN.</p>
        <p><strong>Fix priority:</strong> High. Page speed is a direct ranking factor.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">4. Check for HTTPS</h4>
        <p>Your site must use HTTPS (lock icon in browser). If you see "Not Secure", get an SSL certificate immediately. Most hosts offer free SSL via Let's Encrypt.</p>
        <p><strong>Fix priority:</strong> Critical. HTTP sites rank lower and scare visitors.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">5. Test structured data</h4>
        <p>Use Google's <a href="https://search.google.com/test/rich-results" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Rich Results Test</a>. Add schema markup for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Products (if e-commerce)</li>
          <li>Local business (if you have a physical location)</li>
          <li>Articles (for blog posts)</li>
          <li>FAQs, reviews, breadcrumbs</li>
        </ul>
        <p><strong>Fix priority:</strong> Medium. Structured data helps rich snippets appear in search results.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">6. Review robots.txt and sitemap</h4>
        <p>Check <code>yoursite.com/robots.txt</code>. Make sure you're not accidentally blocking important pages. Then check <code>yoursite.com/sitemap.xml</code> exists and submit it to Google Search Console.</p>
        <p><strong>Fix priority:</strong> High. Wrong robots.txt blocks Google entirely.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">7. Find and fix broken links</h4>
        <p>Use a crawler like <a href="https://www.screamingfrog.co.uk/seo-spider/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Screaming Frog</a> (free up to 500 URLs). Fix all 404 errors. Redirect deleted pages to relevant alternatives.</p>
        <p><strong>Fix priority:</strong> Medium. Broken links hurt user experience and waste crawl budget.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">8. Check for duplicate content</h4>
        <p>Search Google for <code>site:yoursite.com</code>. Look for duplicate pages (www vs non-www, HTTP vs HTTPS, multiple URLs for the same page). Use 301 redirects and canonical tags to consolidate.</p>
        <p><strong>Fix priority:</strong> High. Duplicate content splits ranking power.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">9. Review internal linking</h4>
        <p>Important pages should have 5+ internal links pointing to them. Use descriptive anchor text, not "click here." Link deep (to specific pages, not just the homepage).</p>
        <p><strong>Fix priority:</strong> Medium. Internal links distribute authority across your site.</p>

        <h3 className="text-2xl font-bold mt-12 mb-3">Part 2: On-Page SEO (10 checks)</h3>

        <h4 className="text-xl font-semibold mt-6 mb-2">10. Audit all title tags</h4>
        <p>Every page needs a unique title tag, 50-60 characters, with the primary keyword near the beginning. Common issues:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Missing title tags</li>
          <li>Duplicate titles across multiple pages</li>
          <li>Titles too long (truncated in search results)</li>
          <li>Titles too short (not descriptive enough)</li>
        </ul>
        <p className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
          <strong>Quick fix:</strong> <Link href="/" className="text-green-700 hover:underline font-semibold">GetMetaFix finds and fixes all title tag issues in under 60 seconds</Link>. Free audit, $29 for the complete fix package.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">11. Audit all meta descriptions</h4>
        <p>Every page needs a unique meta description, 150-160 characters, that sells the click. Check for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Missing meta descriptions (Google writes bad ones for you)</li>
          <li>Duplicate descriptions</li>
          <li>Descriptions too long or too short</li>
        </ul>
        <p><Link href="/" className="text-blue-600 hover:underline">Run a free meta tag audit</Link> to see your issues instantly.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">12. Check header tag hierarchy</h4>
        <p>Each page should have:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>One H1 tag (page title, includes primary keyword)</li>
          <li>Multiple H2 tags (section headers)</li>
          <li>H3-H6 for subsections as needed</li>
        </ul>
        <p>Don't skip levels (H1 → H3) or use headers for styling only.</p>
        <p><strong>Fix priority:</strong> Medium. Headers help Google understand page structure.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">13. Optimize images</h4>
        <p>Every image needs:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Descriptive filename (not IMG_1234.jpg)</li>
          <li>Alt text describing the image (includes keyword if relevant)</li>
          <li>Compression (use WebP format, target under 200KB per image)</li>
          <li>Proper dimensions (don't load 4000px images scaled down to 400px)</li>
        </ul>
        <p><strong>Fix priority:</strong> Medium. Images rank in Google Images and improve page speed.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">14. Review URL structure</h4>
        <p>Good URLs are short, descriptive, and include the target keyword. Bad URLs have random IDs or session parameters.</p>
        <p>✅ Good: <code>/seo-audit-checklist</code><br/>❌ Bad: <code>/p?id=12345&amp;session=abc</code></p>
        <p><strong>Fix priority:</strong> Low for existing pages (changing URLs requires redirects). High for new pages.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">15. Check keyword targeting</h4>
        <p>Each page should target one primary keyword. Check if that keyword appears in:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Title tag</li>
          <li>First paragraph</li>
          <li>At least one H2 header</li>
          <li>Image alt text</li>
          <li>URL</li>
        </ul>
        <p>Don't keyword stuff. Natural language wins.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">16. Review content length</h4>
        <p>Longer content ranks better, but only if it's valuable. Target:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>1,500+ words for competitive keywords</li>
          <li>800-1,200 words for long-tail keywords</li>
          <li>300-500 words minimum for product pages</li>
        </ul>
        <p>Quality beats quantity. 800 words of unique insight beats 2,000 words of fluff.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">17. Check content freshness</h4>
        <p>Google favors recently updated content. Add "Last updated" dates to blog posts. Update old posts with new data, examples, and screenshots. Aim to refresh top pages every 6-12 months.</p>
        <p><strong>Fix priority:</strong> Medium. Fresh content ranks higher for time-sensitive queries.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">18. Audit Open Graph tags</h4>
        <p>Open Graph tags control how your pages look when shared on social media. Check for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><code>og:title</code> (the headline)</li>
          <li><code>og:description</code> (the preview text)</li>
          <li><code>og:image</code> (the thumbnail, min 1200x630px)</li>
          <li><code>og:url</code> (the canonical URL)</li>
        </ul>
        <p>Test with Facebook's <a href="https://developers.facebook.com/tools/debug/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Sharing Debugger</a>.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">19. Check for thin content</h4>
        <p>Pages with under 200 words rarely rank. Either expand them or noindex/delete them. Common thin content:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Tag/category pages with no descriptions</li>
          <li>Bare-bones product pages</li>
          <li>Outdated blog posts with no value</li>
        </ul>
        <p><strong>Fix priority:</strong> Medium. Thin content drags down site-wide quality.</p>

        <h3 className="text-2xl font-bold mt-12 mb-3">Part 3: Content & Keywords (5 checks)</h3>

        <h4 className="text-xl font-semibold mt-6 mb-2">20. Keyword gap analysis</h4>
        <p>Find keywords your competitors rank for but you don't. Use Ahrefs, SEMrush, or Ubersuggest. Look for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>High-volume keywords (1,000+ searches/month)</li>
          <li>Low difficulty (under 40/100)</li>
          <li>Relevant to your business</li>
        </ul>
        <p>Create new content targeting these gaps.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">21. Check keyword cannibalization</h4>
        <p>Multiple pages targeting the same keyword compete against each other. Search Google for <code>site:yoursite.com "target keyword"</code>. If multiple pages appear, consolidate them into one strong page with 301 redirects.</p>
        <p><strong>Fix priority:</strong> High. Cannibalization splits your ranking power.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">22. Review search intent match</h4>
        <p>Your content must match what searchers want. Google the keyword and check the top 10 results. Are they:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Blog posts? (informational intent)</li>
          <li>Product pages? (transactional intent)</li>
          <li>Lists or comparisons? (commercial investigation)</li>
        </ul>
        <p>Match the format. Don't write a blog post if people want to buy.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">23. Check featured snippet opportunities</h4>
        <p>Featured snippets appear above organic results. Target them by:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Answering questions directly in 40-60 words</li>
          <li>Using lists and tables</li>
          <li>Including schema markup</li>
        </ul>
        <p>Find opportunities: look for keywords where you rank #2-#10 and a snippet already exists.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">24. Review E-E-A-T signals</h4>
        <p>Google looks for Experience, Expertise, Authoritativeness, and Trustworthiness. Improve E-E-A-T by:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Adding author bios with credentials</li>
          <li>Citing sources and linking to authoritative sites</li>
          <li>Publishing original research or case studies</li>
          <li>Getting mentioned by reputable publications</li>
        </ul>

        <h3 className="text-2xl font-bold mt-12 mb-3">Part 4: Local SEO (3 checks, if applicable)</h3>

        <h4 className="text-xl font-semibold mt-6 mb-2">25. Claim and optimize Google Business Profile</h4>
        <p>If you have a physical location or serve a local area:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Claim your Google Business Profile</li>
          <li>Complete all fields (hours, services, photos, description)</li>
          <li>Choose accurate categories</li>
          <li>Post weekly updates</li>
          <li>Respond to all reviews</li>
        </ul>
        <p>Read our <Link href="/blog/google-business-profile-seo-guide-2026" className="text-blue-600 hover:underline">complete Google Business Profile SEO guide</Link>.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">26. Check NAP consistency</h4>
        <p>Your Name, Address, and Phone number must be identical across:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your website</li>
          <li>Google Business Profile</li>
          <li>All directory listings (Yelp, Facebook, industry directories)</li>
        </ul>
        <p>Inconsistent NAP confuses Google and hurts local rankings.</p>

        <h4 className="text-xl font-semibold mt-6 mb-2">27. Build local citations</h4>
        <p>Get listed in relevant local directories. Start with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Yelp, Facebook Business, Apple Maps</li>
          <li>Industry-specific directories (e.g., Avvo for lawyers, Zillow for real estate)</li>
          <li>Local chamber of commerce</li>
        </ul>
        <p>Quality beats quantity. 20 authoritative listings beat 200 low-quality ones.</p>

        <h2 className="text-3xl font-bold mt-12 mb-4">How to Prioritize SEO Fixes</h2>

        <p>You just found 50+ issues. You can't fix them all today. Prioritize by:</p>

        <ol className="list-decimal pl-6 mb-6">
          <li><strong>Impact:</strong> Fixing a critical crawl error helps every page. Fixing one image alt tag helps one image.</li>
          <li><strong>Effort:</strong> Some fixes take 5 minutes (add a meta description). Some take 5 weeks (rewrite all thin content).</li>
          <li><strong>Current rankings:</strong> Pages ranking #11-#20 are low-hanging fruit. Push them to page 1 with small improvements.</li>
        </ol>

        <p>The fastest wins:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Fix missing/duplicate meta tags (5-30 minutes with <Link href="/" className="text-blue-600 hover:underline">GetMetaFix</Link>)</li>
          <li>Submit sitemap to Google Search Console (2 minutes)</li>
          <li>Add SSL certificate if missing (10-30 minutes)</li>
          <li>Compress oversized images (10-60 minutes)</li>
          <li>Fix broken links (30-120 minutes)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">How Often to Run SEO Audits</h2>

        <p><strong>Full audit:</strong> Quarterly (every 3 months)<br/>
        <strong>Quick check:</strong> Monthly<br/>
        <strong>After major changes:</strong> Immediately (new site launch, platform migration, design overhaul)</p>

        <p>Set a recurring calendar reminder. SEO is not a one-time project.</p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Tools to Speed Up Your Audit</h2>

        <p><strong>Free tools:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><Link href="/" className="text-blue-600 hover:underline font-semibold">GetMetaFix</Link> — 30-second meta tag audit (our tool)</li>
          <li><a href="https://search.google.com/search-console" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Google Search Console</a> — crawl errors, indexing issues, search performance</li>
          <li><a href="https://pagespeed.web.dev/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">PageSpeed Insights</a> — page speed and Core Web Vitals</li>
          <li><a href="https://www.screamingfrog.co.uk/seo-spider/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Screaming Frog</a> — full site crawl (free up to 500 URLs)</li>
        </ul>

        <p><strong>Paid tools:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Ahrefs — backlinks, keyword research, competitor analysis ($99/mo)</li>
          <li>SEMrush — all-in-one SEO platform ($119/mo)</li>
          <li>Moz Pro — rank tracking, site audits ($99/mo)</li>
        </ul>

        <p>Start with free tools. Upgrade to paid when you're ready to scale.</p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Common SEO Audit Mistakes</h2>

        <p><strong>1. Auditing but not fixing</strong><br/>
        Finding 100 issues means nothing if you fix zero. Pick the top 5 highest-impact issues and fix them this week.</p>

        <p><strong>2. Ignoring user experience</strong><br/>
        SEO is not about gaming Google. It's about making your site useful, fast, and trustworthy. If users bounce, you won't rank.</p>

        <p><strong>3. Chasing too many keywords</strong><br/>
        Better to rank #1 for 10 keywords than #50 for 100 keywords. Focus beats breadth.</p>

        <p><strong>4. Neglecting mobile</strong><br/>
        60%+ of searches happen on mobile. If your site isn't mobile-friendly, you're invisible to most of Google's users.</p>

        <p><strong>5. Expecting instant results</strong><br/>
        SEO takes 3-6 months to show results. Technical fixes (like meta tags) can show improvement in 2-4 weeks, but content and backlinks take longer.</p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>

        <p>You now have a complete SEO audit checklist. Here's how to use it:</p>

        <ol className="list-decimal pl-6 mb-6">
          <li><strong>Start with the quick wins:</strong> <Link href="/" className="text-blue-600 hover:underline font-semibold">Run a free meta tag audit</Link> right now (takes 30 seconds).</li>
          <li><strong>Fix critical issues first:</strong> Crawl errors, missing HTTPS, mobile-friendliness.</li>
          <li><strong>Schedule monthly check-ins:</strong> Review Google Search Console for new issues.</li>
          <li><strong>Track your progress:</strong> Note your rankings before fixes, then check again in 30 days.</li>
        </ol>

        <p>SEO is a marathon, not a sprint. Small, consistent improvements compound over time.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-2">Want your meta tags fixed in under 60 seconds?</h3>
          <p className="mb-4">GetMetaFix scans your entire site, finds every meta tag issue, and generates perfect fixes automatically. Free audit, $29 for the complete fix package.</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700">
            Run Free Audit →
          </Link>
        </div>

        <div className="border-t pt-8 mt-12">
          <p className="text-sm text-gray-600">
            <strong>About the author:</strong> This guide was created by the team at GetMetaFix, an AI-powered SEO meta tag auditor used by over 500 e-commerce stores and agencies. We help businesses fix SEO issues in minutes, not weeks.
          </p>
        </div>
      </div>
    </article>
  );
}
