'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface ReportData {
  slug: string;
  targetUrl: string;
  domain: string;
  generatedAt: string;
  score: number;
  data: {
    title: string | null;
    titleLength: number;
    metaDescription: string | null;
    metaDescLength: number;
    h1s: string[];
    h1Count: number;
    ogImage: string | null;
    canonical: string | null;
    pageSize: number;
    totalImages: number;
    imagesWithoutAlt: number;
    hasViewport: boolean;
    favicon: string | null;
    hasStructuredData: boolean;
  };
  issues: Array<{
    severity: 'critical' | 'high' | 'medium' | 'low';
    category: string;
    issue: string;
    impact: string;
    fix: string;
  }>;
  summary: string;
  fixes: Array<{
    title: string;
    reason: string;
    impact: 'Critical' | 'High' | 'Medium' | 'Low';
    effort: string;
  }>;
  metadata: {
    issueCount: number;
    criticalIssues: number;
    highIssues: number;
    mediumIssues: number;
    lowIssues: number;
  };
}

function getSeverityBadgeClass(severity: string): string {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'high':
      return 'bg-orange-100 text-orange-800 border-orange-300';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'low':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
}

function getScoreColor(score: number): string {
  if (score >= 8) return 'text-green-600';
  if (score >= 6) return 'text-yellow-600';
  if (score >= 4) return 'text-orange-600';
  return 'text-red-600';
}

function getScoreBgColor(score: number): string {
  if (score >= 8) return 'bg-green-50 border-green-200';
  if (score >= 6) return 'bg-yellow-50 border-yellow-200';
  if (score >= 4) return 'bg-orange-50 border-orange-200';
  return 'bg-red-50 border-red-200';
}

export default function ReportPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReport() {
      try {
        const response = await fetch(`/reports/${slug}.json`);
        if (!response.ok) {
          throw new Error('Report not found');
        }
        const data = await response.json();
        setReport(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load report');
      } finally {
        setLoading(false);
      }
    }

    fetchReport();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading report...</p>
        </div>
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Report Not Found</h1>
          <p className="text-gray-600 mb-6">The report you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back to GetMetaFix
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(report.generatedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {report.data.favicon && (
                <img
                  src={report.data.favicon}
                  alt={`${report.domain} logo`}
                  className="w-12 h-12 rounded-lg shadow"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{report.domain}</h1>
                <p className="text-sm text-gray-500">Growth Report • {formattedDate}</p>
              </div>
            </div>
            <Link
              href="/"
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              ← GetMetaFix
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Score Card */}
        <div className={`rounded-2xl border-2 p-8 mb-8 ${getScoreBgColor(report.score)}`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-6xl font-bold ${getScoreColor(report.score)}`}>
                  {report.score}<span className="text-3xl text-gray-400">/10</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {report.metadata.issueCount} Issues Found
                  </p>
                  <div className="flex gap-2 mt-1">
                    {report.metadata.criticalIssues > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 font-medium">
                        {report.metadata.criticalIssues} Critical
                      </span>
                    )}
                    {report.metadata.highIssues > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-100 text-orange-700 font-medium">
                        {report.metadata.highIssues} High
                      </span>
                    )}
                    {report.metadata.mediumIssues > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700 font-medium">
                        {report.metadata.mediumIssues} Medium
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <div className="prose prose-gray max-w-none">
            {report.summary.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">We'll fix all of this — $299</h3>
              <p className="text-indigo-100 text-lg mb-0">
                Done-for-you implementation. All issues resolved within 3 business days.
                No subscription, no hidden fees.
              </p>
            </div>
            <a
              href="https://buy.stripe.com/6oU28keYz12UfiP5bO57W01"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors whitespace-nowrap shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fix My Site →
            </a>
          </div>
        </div>

        {/* Prioritized Fixes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prioritized Action Plan</h2>
          <div className="space-y-4">
            {report.fixes.map((fix, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                  <h3 className="font-semibold text-gray-900 text-lg flex-1">
                    {index + 1}. {fix.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                      fix.impact === 'Critical' ? 'bg-red-50 text-red-700 border-red-200' :
                      fix.impact === 'High' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                      fix.impact === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                      'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      {fix.impact}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-gray-100 text-gray-700 border border-gray-200">
                      {fix.effort}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{fix.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Issues Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Issues Found</h2>
          <div className="space-y-4">
            {report.issues.map((issue, index) => (
              <details
                key={index}
                className="border border-gray-200 rounded-lg group hover:border-indigo-300"
              >
                <summary className="p-5 cursor-pointer list-none">
                  <div className="flex items-start gap-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium border ${getSeverityBadgeClass(issue.severity)}`}>
                      {issue.severity.toUpperCase()}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{issue.issue}</h4>
                      <p className="text-sm text-gray-500">{issue.category}</p>
                    </div>
                    <span className="text-gray-400 group-open:rotate-90 transition-transform">▶</span>
                  </div>
                </summary>
                <div className="px-5 pb-5 pt-2 border-t border-gray-100 space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Impact:</p>
                    <p className="text-sm text-gray-600">{issue.impact}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">How to fix:</p>
                    <p className="text-sm text-gray-600">{issue.fix}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Want us to implement all of these fixes?
          </h3>
          <p className="text-gray-600 mb-6">
            Flat $299. Done in 3 business days. No subscription required.
          </p>
          <a
            href="https://buy.stripe.com/6oU28keYz12UfiP5bO57W01"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fix My Site for $299 →
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Either way, this report is yours to keep. Share it with your team.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Report generated by <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-700">Maestro Labs</Link> • <Link href="/" className="text-indigo-600 hover:text-indigo-700">getmetafix.com</Link>
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
