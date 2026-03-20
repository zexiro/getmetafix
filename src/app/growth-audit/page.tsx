import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Audit | GetMetaFix",
  description:
    "47-point audit covering SEO, page speed, social presence, and competitors. Find out exactly what's holding your business back online. Delivered as a PDF within 30 minutes.",
};

export default function GrowthAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="font-semibold text-gray-900">GetMetaFix</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="/growth-audit" className="text-gray-900 font-medium">Growth Audit</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          One-time report · delivered within 30 minutes
        </div>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Find out exactly what&apos;s holding<br />
          <span className="text-gray-400">your business back online.</span>
        </h1>

        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          47-point audit covering SEO, page speed, social presence, and competitors.
          Delivered as a professional PDF report.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/growth-audit/order"
            className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-base"
          >
            Get Your Growth Audit ($149)
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Delivered within 30 minutes. PDF format. 100% satisfaction guarantee.
        </p>
      </section>

      {/* What&apos;s included */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">What&apos;s included</h2>
        <p className="text-gray-500 text-center mb-12">47 checks across three critical growth areas</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SEO Health */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">SEO Health</h3>
            <p className="text-sm text-gray-500 mb-4">Is Google able to find, understand, and rank your site?</p>
            <ul className="text-sm text-gray-500 space-y-2">
              {[
                "Meta tags & title tags",
                "Canonical URL",
                "Schema / structured data",
                "Sitemap & robots.txt",
                "Open Graph tags",
                "H1 & heading structure",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Performance */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Performance</h3>
            <p className="text-sm text-gray-500 mb-4">Is your site fast enough to keep visitors and rank?</p>
            <ul className="text-sm text-gray-500 space-y-2">
              {[
                "Page speed score",
                "Core Web Vitals (LCP, CLS)",
                "Mobile performance",
                "Image optimization",
                "Server response time",
                "SSL / HTTPS",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Competitive */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Competitive</h3>
            <p className="text-sm text-gray-500 mb-4">How do you compare to your direct competitors?</p>
            <ul className="text-sm text-gray-500 space-y-2">
              {[
                "Competitor SEO comparison",
                "Social media presence",
                "Social sharing setup",
                "Open Graph images",
                "Content gap overview",
                "Side-by-side comparison table",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter your URL",
                description: "Submit your website URL, email, and optionally a competitor URL.",
              },
              {
                step: "2",
                title: "We audit everything",
                description: "Our engine runs 47 checks across SEO, speed, and social in real time.",
              },
              {
                step: "3",
                title: "Receive your PDF",
                description: "A branded PDF report lands in your inbox within 30 minutes.",
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-black text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Pricing */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="bg-black rounded-2xl p-12 text-white">
          <div className="text-4xl font-bold mb-2">$149</div>
          <div className="text-gray-400 text-sm mb-6">One-time payment · no subscription</div>
          <ul className="text-sm text-gray-300 space-y-3 mb-8 text-left max-w-xs mx-auto">
            {[
              "47-point comprehensive audit",
              "Professional branded PDF report",
              "SEO, performance & social checks",
              "Competitor comparison (if URL provided)",
              "Top 5 priority fixes with detail",
              "Delivered within 30 minutes",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <Link
            href="/growth-audit/order"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors text-base"
          >
            Get Your Growth Audit ($149)
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Delivered within 30 minutes. 100% satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">G</span>
            </div>
            <span className="text-sm font-medium text-gray-900">GetMetaFix</span>
          </div>
          <p className="text-sm text-gray-400">
            Built by an AI. Powered by actual SEO knowledge.
          </p>
        </div>
      </footer>
    </div>
  );
}
