"use client";

import { useState } from "react";
import Link from "next/link";

export default function GrowthAuditOrderPage() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim() || !email.trim() || !businessName.trim()) return;
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/growth-audit/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url.trim(),
          email: email.trim(),
          businessName: businessName.trim(),
          competitorUrl: competitorUrl.trim() || undefined,
        }),
      });

      const data = await res.json() as { url?: string; error?: string };
      if (!res.ok) throw new Error(data.error || "Failed to create checkout");

      if (data.url) {
        window.location.href = data.url;
      }
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
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="font-semibold text-gray-900">GetMetaFix</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/growth-audit" className="hover:text-gray-900 transition-colors">Growth Audit</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Order Your Growth Audit</h1>
          <p className="text-gray-500">
            Fill in your details below. You&apos;ll be taken to a secure checkout, then your PDF report will land in your inbox within 30 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* URL */}
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1.5">
              Your website URL <span className="text-red-500">*</span>
            </label>
            <input
              id="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="yourstore.com"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
            />
          </div>

          {/* Business name */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1.5">
              Your business name <span className="text-red-500">*</span>
            </label>
            <input
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Acme Store"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourstore.com"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
            />
            <p className="mt-1.5 text-xs text-gray-400">Your PDF report will be sent to this address.</p>
          </div>

          {/* Competitor URL (optional) */}
          <div>
            <label htmlFor="competitorUrl" className="block text-sm font-medium text-gray-700 mb-1.5">
              Competitor URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="competitorUrl"
              type="text"
              value={competitorUrl}
              onChange={(e) => setCompetitorUrl(e.target.value)}
              placeholder="competitor.com"
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
            />
            <p className="mt-1.5 text-xs text-gray-400">Enter a competitor&apos;s URL for a side-by-side comparison in your report.</p>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !url.trim() || !email.trim() || !businessName.trim()}
            className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Redirecting to checkout…
              </span>
            ) : "Pay $149 — Get My Growth Audit"}
          </button>

          <p className="text-center text-xs text-gray-400 pt-2">
            Secure checkout powered by Stripe. 100% satisfaction guarantee.
            <br />
            Delivered within 30 minutes to your email.
          </p>
        </form>
      </div>
    </div>
  );
}
