"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleAudit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setError("");
    setLoading(true);
    track("audit_submitted", { url: url.trim() });

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Audit failed");

      // Store result in sessionStorage and navigate
      sessionStorage.setItem("auditResult", JSON.stringify(data));
      router.push(`/results?url=${encodeURIComponent(url.trim())}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-gray-900">GetMetaFix</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="/growth-audit" className="hover:text-gray-900 transition-colors font-medium text-gray-900">Growth Audit</a>
            <a href="/monitor" className="hover:text-gray-900 transition-colors font-medium text-gray-900">Monitor</a>
            <a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Free audit – no account required
        </div>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Your SEO is probably broken.<br />
          <span className="text-gray-400">Find out in 30 seconds.</span>
        </h1>

        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Enter any URL. Get a full SEO health report – meta tags, Open Graph, schema, headings, images.
          Free to audit. <strong className="text-gray-700">$29 to get the AI-generated fixes.</strong>
        </p>

        {/* Audit Form */}
        <form onSubmit={handleAudit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="yourstore.com"
              className="flex-1 px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-base"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="px-6 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Auditing…
                </span>
              ) : "Audit for free →"}
            </button>
          </div>
          {error && (
            <p className="mt-3 text-red-500 text-sm">{error}</p>
          )}
          <p className="mt-3 text-gray-400 text-sm">
            Works with any website – Shopify, WordPress, Webflow, custom builds
          </p>
        </form>
      </section>

      {/* Social Proof */}
      <section className="border-y border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center">
          {[
            { stat: "200+", label: "stores audited" },
            { stat: "54/100", label: "avg score we find" },
            { stat: "30 sec", label: "average audit time" },
            { stat: "$29", label: "one-time fix, no subscription" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div className="text-2xl font-bold text-gray-900">{stat}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we check */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">What we audit</h2>
        <p className="text-gray-500 text-center mb-12">12 critical SEO checks across 5 categories</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🏷️",
              title: "Meta Tags",
              items: ["Page title length & quality", "Meta description", "Robots directives"],
            },
            {
              icon: "📱",
              title: "Open Graph",
              items: ["og:title, og:description", "og:image presence", "og:url & og:type"],
            },
            {
              icon: "🐦",
              title: "Twitter Cards",
              items: ["Card type", "Twitter title & image", "Share preview quality"],
            },
            {
              icon: "📝",
              title: "Headings",
              items: ["H1 presence & uniqueness", "Heading hierarchy", "H2 subheading structure"],
            },
            {
              icon: "🖼️",
              title: "Images",
              items: ["Alt text on all images", "Decorative vs content images", "Accessibility compliance"],
            },
            {
              icon: "⚙️",
              title: "Technical",
              items: ["Canonical URL", "Viewport tag", "JSON-LD structured data"],
            },
          ].map(({ icon, title, items }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <ul className="text-sm text-gray-500 space-y-1">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Simple pricing</h2>
          <p className="text-gray-500 text-center mb-12">Audit for free. Pay only when you want the fixes.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-2xl font-bold mb-1">Free</div>
              <div className="text-gray-500 text-sm mb-6">Forever, no account needed</div>
              <ul className="text-sm space-y-3 mb-8">
                {["Full audit of any URL", "12 SEO checks", "Issues identified & scored", "Overall SEO grade"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
                {["AI-generated fixes", "Copy-ready code snippets"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-400">
                    <span className="text-gray-300">✗</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("audit-input")?.focus()}
                className="w-full py-2.5 rounded-lg border border-gray-200 text-sm font-medium hover:border-gray-300 transition-colors"
              >
                Start free audit
              </button>
            </div>

            {/* One-time */}
            <div className="bg-black rounded-2xl p-8 border border-black relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most popular
              </div>
              <div className="text-2xl font-bold text-white mb-1">$29</div>
              <div className="text-gray-400 text-sm mb-6">One-time payment</div>
              <ul className="text-sm space-y-3 mb-8">
                {[
                  "Everything in Free",
                  "AI-generated fixes for every issue",
                  "Copy-ready HTML snippets",
                  "Prioritised fix order",
                  "Shareable audit report",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Audit + fix for $29
              </button>
              <p className="text-center text-gray-500 text-xs mt-3">30-day money-back guarantee</p>
            </div>

            {/* Monthly */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-2xl font-bold mb-1">$19<span className="text-base font-normal text-gray-500">/mo</span></div>
              <div className="text-gray-500 text-sm mb-6">Weekly monitoring</div>
              <ul className="text-sm space-y-3 mb-8">
                {[
                  "Everything in one-time fix",
                  "Weekly re-crawl & alerts",
                  "New page auto-audit",
                  "SEO regression detection",
                  "Monthly summary email",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full py-2.5 rounded-lg border border-gray-200 text-sm font-medium hover:border-gray-300 transition-colors"
              >
                Start monitoring
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">S</span>
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
