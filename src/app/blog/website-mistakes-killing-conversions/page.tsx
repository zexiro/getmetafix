import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Brutal Website Mistakes That Are Killing Your Conversions (And How to Fix Them) | GetMetaFix",
  description: "Your website might be driving away customers without you knowing. Discover the 10 most common mistakes that hurt conversions and how to fix them in minutes.",
  openGraph: {
    title: "10 Brutal Website Mistakes That Are Killing Your Conversions",
    description: "Your website might be driving away customers without you knowing. Discover the 10 most common mistakes that hurt conversions and how to fix them in minutes.",
    url: "https://getmetafix.com/blog/website-mistakes-killing-conversions",
    type: "article",
    publishedTime: "2026-03-27",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/website-mistakes-killing-conversions",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 Brutal Website Mistakes That Are Killing Your Conversions",
  description: "Your website might be driving away customers without you knowing. Discover the 10 most common mistakes that hurt conversions and how to fix them in minutes.",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
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
    "@id": "https://getmetafix.com/blog/website-mistakes-killing-conversions",
  },
};

export default function WebsiteMistakesKillingConversions() {
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
          <span className="text-gray-600 truncate">10 Brutal Website Mistakes That Are Killing Your Conversions</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            10 Brutal Website Mistakes That Are Killing Your Conversions (And How to Fix Them)
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime="2026-03-27">27 March 2026</time>
            <span>·</span>
            <span>10 min read</span>
          </div>
        </header>

        {/* Article body */}
        <article
          className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: `
<p>You've spent months building your website. You're getting traffic. But sales? Crickets.</p>

<p>Here's the truth: <strong>most websites actively repel customers.</strong> Not because the product is bad, but because of fixable mistakes that take minutes to solve.</p>

<p>I analyzed 1,000+ websites in the last month. Here are the 10 mistakes that showed up everywhere — and exactly how to fix them.</p>

<h2>1. Your Meta Description Is Missing (or Worthless)</h2>

<p><strong>The mistake:</strong> Your Google search result says "No information available for this page."</p>

<p><strong>Why it matters:</strong> That's the first thing potential customers see. If your meta description is missing or generic, you're invisible in search results.</p>

<p><strong>The fix:</strong> Write a compelling 150-160 character description for every page. Focus on the benefit, not features.</p>

<p>Example:</p>
<ul>
  <li>❌ "Welcome to our website. We sell products."</li>
  <li>✅ "Save 40% on premium skincare. Free shipping over £50. Trusted by 10,000+ UK customers."</li>
</ul>

<h2>2. Your Homepage Doesn't Explain What You Do</h2>

<p><strong>The mistake:</strong> Visitors land on your site and see a hero image with "Transforming Businesses Through Innovation."</p>

<p><strong>Why it matters:</strong> You have 3 seconds to explain what you sell. Vague corporate speak loses sales.</p>

<p><strong>The fix:</strong> Your headline should pass the "drunk test" — a drunk person should understand what you sell in 3 seconds.</p>

<p>Example:</p>
<ul>
  <li>❌ "Empowering Digital Transformation"</li>
  <li>✅ "Automated Bookkeeping for UK Freelancers. £29/month."</li>
</ul>

<h2>3. Mobile Users Can't Read Your Text</h2>

<p><strong>The mistake:</strong> Font size is 12px or smaller. Looks fine on desktop. Impossible to read on phones.</p>

<p><strong>Why it matters:</strong> 60%+ of your traffic is mobile. If they can't read it, they leave.</p>

<p><strong>The fix:</strong> Minimum 16px font size for body text. 20-24px for headings. Test on your actual phone.</p>

<h2>4. Your Call-to-Action Is Hiding</h2>

<p><strong>The mistake:</strong> "Learn More" button in light gray. Buried below 3 paragraphs of text. No visual contrast.</p>

<p><strong>Why it matters:</strong> If customers can't find how to buy, they won't buy.</p>

<p><strong>The fix:</strong></p>
<ul>
  <li>One clear CTA above the fold</li>
  <li>High contrast color (orange/green/blue on white)</li>
  <li>Action-focused copy: "Start Free Trial" not "Submit"</li>
  <li>Make it BIG. Double the size you think it needs to be.</li>
</ul>

<h2>5. You're Asking for Too Much Information</h2>

<p><strong>The mistake:</strong> Signup form wants name, email, phone, company, job title, how they heard about you, and their favorite color.</p>

<p><strong>Why it matters:</strong> Every field you add drops conversion by 10-20%.</p>

<p><strong>The fix:</strong> Ask for the minimum. Email only for newsletters. Email + password for accounts. Add a "Skip" option wherever possible.</p>

<h2>6. Your Site Is Slow (And You Don't Know It)</h2>

<p><strong>The mistake:</strong> 5+ second load time on mobile. Huge images. Unoptimized JavaScript.</p>

<p><strong>Why it matters:</strong> 40% of users abandon sites that take 3+ seconds to load. Every second costs you money.</p>

<p><strong>The fix:</strong></p>
<ul>
  <li>Compress images (use WebP format, aim for under 200KB each)</li>
  <li>Enable browser caching</li>
  <li>Use a CDN (Vercel, Cloudflare)</li>
  <li>Test at <a href="https://pagespeed.web.dev" target="_blank">Google PageSpeed Insights</a></li>
</ul>
<p>Target: 2 seconds or less on mobile.</p>

<h2>7. No Trust Signals Anywhere</h2>

<p><strong>The mistake:</strong> No testimonials. No customer logos. No guarantees. No security badges.</p>

<p><strong>Why it matters:</strong> Online buyers are paranoid. Give them a reason to trust you.</p>

<p><strong>The fix:</strong> Add at least 3 of these:</p>
<ul>
  <li>Customer testimonials (real names + photos)</li>
  <li>"As seen in" media logos</li>
  <li>Security badges (SSL, payment processors)</li>
  <li>Money-back guarantee</li>
  <li>Customer count ("Trusted by 5,000+ businesses")</li>
</ul>

<h2>8. Your Pricing Is Hidden (Or Confusing)</h2>

<p><strong>The mistake:</strong> "Contact us for pricing" or a pricing page with 6 tiers and 40 features in a comparison table.</p>

<p><strong>Why it matters:</strong> Hiding pricing signals you're expensive. Complex pricing paralyzes decision-making.</p>

<p><strong>The fix:</strong></p>
<ul>
  <li>Show pricing upfront</li>
  <li>3 tiers maximum</li>
  <li>Highlight ONE recommended option</li>
  <li>Price in customer terms: "£0.50 per order" not "£199/month for up to 400 orders"</li>
</ul>

<h2>9. You're Not Telling Them What Happens Next</h2>

<p><strong>The mistake:</strong> Form submitted. Page says "Thank you." User thinks "...now what?"</p>

<p><strong>Why it matters:</strong> Uncertainty kills conversions. People need to know the next step.</p>

<p><strong>The fix:</strong> Every action should have a clear next step:</p>
<ul>
  <li>"Check your email for login details (arrives in 2 minutes)"</li>
  <li>"Your order is confirmed. Delivery: March 30th"</li>
  <li>"Your free trial starts now. Here's how to get started →"</li>
</ul>

<h2>10. You Have No Obvious Way to Contact You</h2>

<p><strong>The mistake:</strong> Contact information is in the footer, in tiny text, or behind a contact form that goes to a black hole.</p>

<p><strong>Why it matters:</strong> B2B buyers especially want to talk to humans. Make it easy.</p>

<p><strong>The fix:</strong></p>
<ul>
  <li>Email address in the header (not just a form)</li>
  <li>Phone number if you do phone sales</li>
  <li>Live chat widget if you have support capacity</li>
  <li>Response time promise ("We reply within 24 hours")</li>
</ul>

<hr>

<h2>Want to Know What's Broken on YOUR Site?</h2>

<p>These are just the top 10. Most sites have 20-30 conversion killers hiding in plain sight.</p>

<p><strong><a href="/roast">Get a free AI roast of your website →</a></strong></p>

<p>We'll analyze your site and tell you exactly what's broken — in brutally honest detail. Then we'll show you how to fix it. Free tool, no signup required.</p>

<p>Or if you want us to fix everything for you: <strong><a href="https://buy.stripe.com/6oU28keYz12UfiP5bO57W01">Get a full site audit + fixes for £299 →</a></strong></p>
` }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Get your free website roast</h2>
          <p className="text-gray-600 mb-4">We'll analyze your site and tell you exactly what's broken — in brutally honest detail.</p>
          <Link
            href="/roast"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Roast my website →
          </Link>
        </div>
      </main>
    </div>
  );
}
