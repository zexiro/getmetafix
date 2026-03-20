import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Health Monitor – GetMetaFix",
  description:
    "Weekly automated health checks for your website. Know the moment something breaks – SSL, broken links, page speed, uptime, SEO. Monday morning report. $79/mo.",
};

export default function MonitorPage() {
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
            <Link href="/growth-audit" className="hover:text-gray-900 transition-colors">Growth Audit</Link>
            <Link href="/monitor" className="text-gray-900 font-medium">Monitor</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Weekly automated scans · Monday morning report
        </div>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Know the moment something<br />
          <span className="text-gray-400">breaks on your site.</span>
        </h1>

        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Weekly automated health checks. Monday morning report.{" "}
          <strong className="text-gray-700">$79/mo – cancel anytime.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/monitor/checkout"
            className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-base"
          >
            Start Monitoring – $79/mo
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Cancel anytime. No contracts. First weekly report within 7 days.
        </p>
      </section>

      {/* Social Proof */}
      <section className="border-y border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg font-medium text-gray-700">
            Catches issues before your customers do.
          </p>
        </div>
      </section>

      {/* What&apos;s monitored */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          What we monitor
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Three categories. Every check runs automatically each week.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Performance */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Performance
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Is your site fast enough to keep visitors – and rank?
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              {[
                "Page speed score",
                "Core Web Vitals",
                "Load time regression",
                "Server response time",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical SEO */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Technical SEO
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Is Google still able to find and rank your site?
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              {[
                "Broken links",
                "Missing meta tags",
                "Canonical issues",
                "Sitemap errors",
                "robots.txt changes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Availability
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Is your site up, secure, and accessible?
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              {[
                "Uptime check",
                "SSL expiry warning",
                "404 pages",
                "Redirect chains",
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
          <h2 className="text-3xl font-bold text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter your URL",
                description:
                  "Tell us which website to watch. We handle the rest automatically.",
              },
              {
                step: "2",
                title: "We check every week",
                description:
                  "Our engine scans your site weekly – performance, SEO, uptime, SSL, links.",
              },
              {
                step: "3",
                title: "Monday morning report",
                description:
                  "You get an email every Monday with your health score and anything that changed or broke.",
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

      {/* Pricing CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="bg-black rounded-2xl p-12 text-white">
          <div className="text-4xl font-bold mb-1">$79</div>
          <div className="text-gray-400 text-sm mb-8">
            per month · cancel anytime
          </div>

          <ul className="text-sm text-gray-300 space-y-3 mb-10 text-left max-w-xs mx-auto">
            {[
              "Weekly automated health scans",
              "Monday morning email report",
              "Performance, SEO & uptime checks",
              "SSL expiry warnings",
              "Broken link detection",
              "Health score + change history",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span> {f}
              </li>
            ))}
          </ul>

          <Link
            href="/monitor/checkout"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors text-base"
          >
            Start Monitoring – $79/mo
          </Link>

          <p className="text-gray-500 text-sm mt-4">
            Cancel anytime. No contracts. First weekly report within 7 days.
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
            <span className="text-sm font-medium text-gray-900">
              GetMetaFix
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Built by an AI. Powered by actual SEO knowledge.
          </p>
        </div>
      </footer>
    </div>
  );
}
