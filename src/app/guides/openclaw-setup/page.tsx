import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw Setup Guide: Mac Mini + fly.io — Complete 2026 Walkthrough",
  description:
    "Step-by-step guide to running OpenClaw on a Mac mini (local, boot-persistent) and fly.io (cloud, always-on). Real commands, full troubleshooting, Telegram integration. $19.",
  openGraph: {
    title: "OpenClaw Setup Guide: Mac Mini + fly.io",
    description:
      "The complete guide to setting up OpenClaw. Mac mini local setup, fly.io cloud deployment, Telegram integration, secrets management, and troubleshooting.",
    url: "https://getmetafix.com/guides/openclaw-setup",
    type: "website",
  },
  alternates: {
    canonical: "https://getmetafix.com/guides/openclaw-setup",
  },
};

export default function OpenClawGuidePage() {
  const PAYMENT_LINK = "https://buy.stripe.com/6oUeV6bMn3b2fiP9s457W00";

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-gray-900">GetMetaFix</span>
          </Link>
          <a
            href={PAYMENT_LINK}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get the guide — $19
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 text-xs font-semibold text-indigo-700 mb-8">
          <span>17-page PDF · Updated March 2026</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
          Run OpenClaw<br />
          <span className="text-indigo-600">Anywhere You Want</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          The complete guide to setting up OpenClaw on a Mac mini (local, always-on, starts at boot) and deploying to fly.io (cloud, accessible from anywhere). Real commands. No hand-waving.
        </p>

        <div className="flex items-center gap-4 mb-16">
          <a
            href={PAYMENT_LINK}
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-gray-800 transition-colors shadow-lg"
          >
            Get the guide — $19
            <span className="text-gray-400">→</span>
          </a>
          <p className="text-sm text-gray-400">One-time payment · Instant PDF download</p>
        </div>

        {/* Social proof bar */}
        <div className="flex items-center gap-8 pb-16 border-b border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">17</div>
            <div className="text-xs text-gray-400 mt-0.5">pages</div>
          </div>
          <div className="w-px h-10 bg-gray-100" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">100k+</div>
            <div className="text-xs text-gray-400 mt-0.5">OpenClaw GitHub stars</div>
          </div>
          <div className="w-px h-10 bg-gray-100" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="text-xs text-gray-400 mt-0.5">deployment targets</div>
          </div>
          <div className="w-px h-10 bg-gray-100" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">$0</div>
            <div className="text-xs text-gray-400 mt-0.5">to run locally</div>
          </div>
        </div>
      </div>

      {/* What's covered */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">What&apos;s covered</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🖥️",
              title: "Mac mini local setup",
              desc: "Install Node.js 24, OpenClaw, run the onboarding wizard, configure openclaw.json and the .env file. Set up launchd so it starts automatically on every boot.",
            },
            {
              icon: "☁️",
              title: "fly.io cloud deployment",
              desc: "Create the app and persistent volume, configure fly.toml correctly (including the settings that trip everyone up), set secrets, deploy, and create your config via SSH.",
            },
            {
              icon: "💬",
              title: "Telegram integration",
              desc: "Create a bot via BotFather, connect it to your gateway, complete the pairing flow, and optionally set up group chats. Both long-polling and webhook modes covered.",
            },
            {
              icon: "🔐",
              title: "Secrets management",
              desc: "Where to put API keys so the background service actually reads them (not .zshrc). Covers ~/.openclaw/.env on Mac and fly secrets on fly.io.",
            },
            {
              icon: "🤖",
              title: "Model providers and fallbacks",
              desc: "Configure Anthropic, OpenAI, Google, and OpenRouter. Set fallback models so your agent keeps working if one provider hits a rate limit.",
            },
            {
              icon: "🔒",
              title: "Private deployment",
              desc: "Deploy to fly.io with no public IP using fly.private.toml. Access via fly proxy, WireGuard, or SSH only.",
            },
            {
              icon: "🔧",
              title: "Full troubleshooting guide",
              desc: "Every common error with the exact fix. Gateway lock files, memory issues, iCloud conflicts, Telegram privacy mode, port conflicts, state persistence — all covered.",
            },
            {
              icon: "📋",
              title: "Quick reference cheatsheet",
              desc: "All key files, environment variables, service commands, and in-chat commands on one page. Print it out or keep it open while you work.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why this guide */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why this guide exists</h2>
          <div className="prose prose-gray max-w-2xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              OpenClaw&apos;s README gets you 70% of the way there. The other 30% — the fly.toml settings that trip people up, why launchd doesn&apos;t inherit your shell environment, the gateway lock file that silently blocks restarts — those live scattered across GitHub issues and closed Discord threads.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              This guide is sourced from the official docs, the repo&apos;s source files, and the actual error messages you hit when deploying. Every command is tested. Every troubleshooting fix is real.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              It covers Mac mini because that&apos;s the best always-on home server. It covers fly.io because that&apos;s what the official repo recommends for cloud. And it covers the mistakes so you don&apos;t have to make them.
            </p>
          </div>
        </div>
      </div>

      {/* Sample content preview */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample: The most common fly.io mistake</h2>
        <p className="text-gray-500 mb-8">Here&apos;s an example of the kind of gotcha this guide covers:</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-2xl">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm font-mono text-red-700 bg-red-50 border border-red-100 rounded px-3 py-2 mb-3">
                auto_stop_machines = true
              </p>
              <p className="text-sm text-gray-600">
                If you leave this as the fly.io default, the machine will stop after a few minutes of inactivity. Your Telegram connection drops. Messages go undelivered. The machine restarts when fly.io gets a new request — but by then Telegram has given up polling.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm font-mono text-green-700 bg-green-50 border border-green-100 rounded px-3 py-2 mb-3">
                auto_stop_machines = false
              </p>
              <p className="text-sm text-gray-600">
                Always set this to <code className="text-xs bg-gray-100 px-1 rounded">false</code>. The machine runs 24/7, Telegram polling stays alive, your agent is always there when you message it.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-4">The guide has 14 of these — the exact errors with the exact fixes.</p>
      </div>

      {/* CTA */}
      <div className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stop reading GitHub issues.<br />Start using OpenClaw.
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            17 pages. Every setup step. Every common error. One payment, instant download.
          </p>
          <a
            href={PAYMENT_LINK}
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Get the guide — $19
          </a>
          <p className="text-gray-600 text-sm mt-4">One-time payment · PDF download · No subscription</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-400">
          <span>© 2026 GetMetaFix</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
