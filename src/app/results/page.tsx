"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { AuditResult, SEOIssue } from "@/lib/seo-analyzer";

const SEVERITY_COLORS = {
  critical: "bg-red-50 border-red-200 text-red-700",
  warning: "bg-amber-50 border-amber-200 text-amber-700",
  info: "bg-blue-50 border-blue-200 text-blue-700",
};

const SEVERITY_BADGE = {
  critical: "bg-red-100 text-red-700",
  warning: "bg-amber-100 text-amber-700",
  info: "bg-blue-100 text-blue-700",
};

const GRADE_COLOR = {
  A: "text-green-600",
  B: "text-green-500",
  C: "text-amber-500",
  D: "text-orange-500",
  F: "text-red-600",
};

const SCORE_BG = {
  A: "bg-green-50 border-green-200",
  B: "bg-green-50 border-green-200",
  C: "bg-amber-50 border-amber-200",
  D: "bg-orange-50 border-orange-200",
  F: "bg-red-50 border-red-200",
};

function IssueCard({ issue, unlocked }: { issue: SEOIssue; unlocked: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border p-4 cursor-pointer transition-all ${SEVERITY_COLORS[issue.severity]}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${SEVERITY_BADGE[issue.severity]} shrink-0 mt-0.5`}>
            {issue.severity}
          </span>
          <div>
            <div className="font-medium text-sm text-gray-900">{issue.title}</div>
            {open && <p className="text-sm mt-1 text-gray-600">{issue.description}</p>}
          </div>
        </div>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform text-gray-400 mt-0.5 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {open && (
        <div className="mt-4 space-y-3">
          {issue.current && (
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Current</div>
              <code className="block text-xs bg-white/60 rounded p-2 text-gray-700 break-all">{issue.current}</code>
            </div>
          )}

          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              AI Fix {!unlocked && <span className="text-amber-600">🔒 Unlock for $29</span>}
            </div>
            {unlocked ? (
              <div className="relative">
                <code className="block text-xs bg-white/60 rounded p-2 text-gray-700 whitespace-pre-wrap break-all">
                  {issue.fix}
                </code>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(issue.fix);
                  }}
                  className="absolute top-2 right-2 text-xs text-gray-400 hover:text-gray-700 bg-white px-2 py-0.5 rounded border border-gray-200"
                >
                  Copy
                </button>
              </div>
            ) : (
              <div className="relative">
                <code className="block text-xs bg-white/60 rounded p-2 text-gray-500 whitespace-pre-wrap blur-sm select-none">
                  {"<meta name=\"..." + issue.fix.slice(0, 80) + "..."}
                </code>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200">
                    🔒 Unlock to see fix
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ResultsContent() {
  const params = useSearchParams();
  const url = params.get("url") ?? "";
  const unlocked = params.get("unlocked") === "1";

  const [result, setResult] = useState<AuditResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    if (!url) { setError("No URL provided"); setLoading(false); return; }

    // Try sessionStorage first
    const stored = sessionStorage.getItem("auditResult");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.url && url.includes(new URL(parsed.url).hostname)) {
          setResult(parsed);
          setLoading(false);
          return;
        }
      } catch { /* ignore */ }
    }

    // Re-fetch
    fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setResult(data);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [url]);

  async function handleCheckout(type: "one-time" | "monthly") {
    if (!result) return;
    setCheckingOut(true);
    try {
      const priceId = type === "one-time"
        ? process.env.NEXT_PUBLIC_STRIPE_PRICE_ONETIME!
        : process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY!;

      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, url, auditData: result }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (e) {
      console.error(e);
    } finally {
      setCheckingOut(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <svg className="animate-spin h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-gray-500">Auditing {url}…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-red-500 text-lg font-medium">Audit failed</div>
        <p className="text-gray-500">{error}</p>
        <a href="/" className="text-black underline text-sm">← Try another URL</a>
      </div>
    );
  }

  if (!result) return null;

  const criticalIssues = result.issues.filter((i) => i.severity === "critical");
  const warningIssues = result.issues.filter((i) => i.severity === "warning");
  const infoIssues = result.issues.filter((i) => i.severity === "info");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-gray-900">SEOAudit.ai</span>
          </a>
          <a href="/" className="text-sm text-gray-500 hover:text-gray-900">← Audit another URL</a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-1">Audit results for</p>
          <h1 className="text-2xl font-bold text-gray-900 break-all">{result.url}</h1>
          <p className="text-xs text-gray-400 mt-1">
            Crawled {new Date(result.crawledAt).toLocaleString()}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Score card */}
          <div className={`rounded-2xl border p-8 text-center ${SCORE_BG[result.grade]}`}>
            <div className={`text-7xl font-black ${GRADE_COLOR[result.grade]}`}>{result.grade}</div>
            <div className="text-3xl font-bold text-gray-900 mt-1">{result.score}/100</div>
            <div className="text-sm text-gray-500 mt-1">SEO Health Score</div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-xl font-bold text-red-600">{result.summary.critical}</div>
                <div className="text-xs text-gray-500">Critical</div>
              </div>
              <div>
                <div className="text-xl font-bold text-amber-600">{result.summary.warning}</div>
                <div className="text-xs text-gray-500">Warnings</div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-600">{result.summary.passed}</div>
                <div className="text-xs text-gray-500">Passed</div>
              </div>
            </div>
          </div>

          {/* Upsell / Unlocked banner */}
          <div className="lg:col-span-2">
            {unlocked ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-6 h-full flex flex-col justify-center">
                <div className="text-2xl mb-2">✅</div>
                <h2 className="text-lg font-bold text-green-900 mb-2">Fixes unlocked</h2>
                <p className="text-green-700 text-sm">
                  All AI-generated fixes are now visible below. Click any issue to expand it and copy the fix code directly into your site.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl bg-black p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-2">🔒</div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    Get AI-generated fixes for every issue
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    {result.summary.critical + result.summary.warning} issues found. Each one has a ready-to-paste code fix — just click, copy, and deploy.
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1.5 mb-6">
                    {["Copy-ready HTML/JSON-LD snippets", "Prioritised by impact", "AI-written meta descriptions & titles", "One-time payment, instant access"].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-green-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleCheckout("one-time")}
                    disabled={checkingOut}
                    className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 text-sm"
                  >
                    {checkingOut ? "Loading…" : "Unlock all fixes — $29"}
                  </button>
                  <button
                    onClick={() => handleCheckout("monthly")}
                    disabled={checkingOut}
                    className="flex-1 py-3 border border-gray-600 text-gray-300 font-medium rounded-xl hover:border-gray-400 transition-colors disabled:opacity-50 text-sm"
                  >
                    Monitor weekly — $19/mo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Issues */}
        <div className="mt-10 space-y-8">
          {criticalIssues.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                Critical Issues ({criticalIssues.length})
              </h2>
              <div className="space-y-3">
                {criticalIssues.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} unlocked={unlocked} />
                ))}
              </div>
            </div>
          )}

          {warningIssues.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                Warnings ({warningIssues.length})
              </h2>
              <div className="space-y-3">
                {warningIssues.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} unlocked={unlocked} />
                ))}
              </div>
            </div>
          )}

          {infoIssues.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                Recommendations ({infoIssues.length})
              </h2>
              <div className="space-y-3">
                {infoIssues.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} unlocked={unlocked} />
                ))}
              </div>
            </div>
          )}

          {result.summary.passed > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                Passed ({result.summary.passed})
              </h2>
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                {result.summary.passed} checks passed. These elements are correctly implemented.
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {!unlocked && (
          <div className="mt-12 rounded-2xl bg-black p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Fix every issue in under an hour.
            </h2>
            <p className="text-gray-400 mb-6">
              Each fix is a ready-to-paste code snippet. No guessing. No Googling. Just copy and deploy.
            </p>
            <button
              onClick={() => handleCheckout("one-time")}
              disabled={checkingOut}
              className="px-8 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {checkingOut ? "Loading…" : "Get all fixes — $29 one-time"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense>
      <ResultsContent />
    </Suspense>
  );
}
