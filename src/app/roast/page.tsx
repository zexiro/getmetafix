"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

interface RoastResult {
  roastText: string;
  issues: Array<{
    emoji: string;
    shortName: string;
    detail: string;
  }>;
  score: number;
  url: string;
}

export default function RoastPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<RoastResult | null>(null);

  const dfyPaymentLink = "https://buy.stripe.com/6oU28keYz12UfiP5bO57W01";

  async function handleRoast(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setError("");
    setLoading(true);
    setResult(null);
    track("roast_submitted", { url: url.trim() });

    try {
      const res = await fetch("/api/roast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Roast failed");

      setResult(data);
      track("roast_completed", { url: url.trim(), score: data.score });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleShare() {
    if (!result) return;
    const text = `I just got my website roasted by AI and scored ${result.score}/10 😅\n\nTry yours at getmetafix.com/roast`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank");
    track("roast_shared", { url: result.url, score: result.score });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="border-b border-gray-700 px-6 py-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
              <span className="text-black text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-white">GetMetaFix</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/growth-audit" className="hover:text-white transition-colors">Growth Audit</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-red-500/20">
          <span className="text-xl">🔥</span>
          Free roast, brutally honest
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Get Your Website<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Roasted by AI</span>
        </h1>

        <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          Enter any URL. Get a brutally honest, funny roast of your website's SEO, performance, and conversion issues.
          <br />
          <span className="text-gray-400 text-base mt-2 block">Think PageSpeed Insights meets a stand-up comedian.</span>
        </p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-10">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-gray-900"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-gray-900"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-gray-900"></div>
          </div>
          <span className="font-medium text-white">2,847</span>
          <span>websites roasted and counting</span>
        </div>

        {/* Roast Form */}
        {!result && (
          <form onSubmit={handleRoast} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="yourwebsite.com"
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-base backdrop-blur-sm"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !url.trim()}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base shadow-lg shadow-red-500/30"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Roasting…
                  </span>
                ) : "Roast my site 🔥"}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-red-400 text-sm">{error}</p>
            )}
          </form>
        )}

        {/* Result */}
        {result && (
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            {/* Score Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Roast Report for</div>
                  <div className="text-lg font-semibold text-white truncate">{result.url}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-500">
                    {result.score}
                  </div>
                  <div className="text-gray-400 text-sm">/10</div>
                </div>
              </div>

              {/* Roast Text */}
              <div className="prose prose-invert max-w-none mb-6">
                {result.roastText.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>

              {/* Issues List */}
              <div className="space-y-3 mb-6">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Issues Found</div>
                {result.issues.map((issue, i) => (
                  <div key={i} className="flex items-start gap-3 bg-black/30 rounded-lg p-4 border border-gray-700">
                    <span className="text-2xl">{issue.emoji}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">{issue.shortName}</div>
                      <div className="text-sm text-gray-400">{issue.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on Twitter
              </button>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-700/50 text-center">
              <div className="text-3xl mb-4">🛠️</div>
              <h2 className="text-2xl font-bold text-white mb-3">Want us to fix all this?</h2>
              <p className="text-gray-300 mb-6">
                We'll handle everything. SEO optimization, performance fixes, conversion improvements.
                <br />
                <span className="font-semibold text-white">Done-for-you service. No ongoing work from you.</span>
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl font-bold text-white">
                  $299
                  <span className="text-lg text-gray-400 font-normal ml-2">one-time</span>
                </div>
                <a
                  href={dfyPaymentLink}
                  onClick={() => track("dfy_clicked", { url: result.url, score: result.score })}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg shadow-green-500/30 text-lg"
                >
                  Fix my website →
                </a>
                <p className="text-sm text-gray-400">We'll be in touch within 24 hours to get started</p>
              </div>
            </div>

            {/* Roast Another */}
            <button
              onClick={() => {
                setResult(null);
                setUrl("");
              }}
              className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-colors border border-white/10"
            >
              Roast another website
            </button>
          </div>
        )}
      </section>

      {/* How it works (only show when no result) */}
      {!result && (
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { emoji: "🔍", title: "We analyze", desc: "Fetch your site and extract metadata, performance, and SEO data" },
              { emoji: "🤖", title: "AI roasts", desc: "Claude AI generates a brutally honest, specific roast of your issues" },
              { emoji: "🛠️", title: "We fix (optional)", desc: "Want the problems solved? We'll do it for $299" }
            ].map((step) => (
              <div key={step.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl mb-3">{step.emoji}</div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 bg-black/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">S</span>
            </div>
            <span className="text-sm font-medium text-white">GetMetaFix</span>
          </div>
          <p className="text-sm text-gray-400">
            Built by an AI. Powered by brutal honesty.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
