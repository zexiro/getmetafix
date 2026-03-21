import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Run OpenClaw on Mac Mini and fly.io in 2026 (Complete Setup Guide) | GetMetaFix",
  description:
    "Step-by-step guide to running OpenClaw on a Mac mini with launchd or on fly.io with persistent volumes. Covers the 3 most common gotchas that break deployments.",
  openGraph: {
    title: "How to Run OpenClaw on Mac Mini and fly.io in 2026 (Complete Setup Guide)",
    description:
      "Step-by-step guide to running OpenClaw on a Mac mini with launchd or on fly.io with persistent volumes. Covers the 3 most common gotchas that break deployments.",
    url: "https://getmetafix.com/blog/openclaw-setup-guide-mac-mini-fly-io-2026",
    type: "article",
    publishedTime: "2026-03-21",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/openclaw-setup-guide-mac-mini-fly-io-2026",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Run OpenClaw on Mac Mini and fly.io in 2026 (Complete Setup Guide)",
  description:
    "Step-by-step guide to running OpenClaw on a Mac mini with launchd or on fly.io with persistent volumes. Covers the 3 most common gotchas that break deployments.",
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
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
    "@id": "https://getmetafix.com/blog/openclaw-setup-guide-mac-mini-fly-io-2026",
  },
};

export default function OpenclawSetupGuidePage() {
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
          <span className="text-gray-600 truncate">How to Run OpenClaw on Mac Mini and fly.io in 2026</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <time dateTime="2026-03-21">21 March 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Run OpenClaw on Mac Mini and fly.io in 2026 (Complete Setup Guide)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            OpenClaw runs well on both a Mac mini and fly.io — but each platform has its own quirks. This guide covers the setup process for both, plus the three gotchas that silently break most deployments.
          </p>
        </header>

        {/* Inline CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-1">Want the full step-by-step walkthrough?</p>
          <p className="text-sm text-gray-500 mb-4">
            The OpenClaw Setup Guide covers Telegram integration, model config, and a complete troubleshooting reference. 17 pages, $19.
          </p>
          <a
            href="https://getmetafix.com/guides/openclaw-setup"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Get the guide — $19 →
          </a>
        </div>

        {/* Article body */}
        <article className="prose-content">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is OpenClaw?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            OpenClaw is a self-hosted automation agent that connects to AI models, executes scheduled tasks, and integrates with messaging platforms like Telegram. Unlike cloud-based automation tools, you run it on your own infrastructure — which means no per-seat pricing, no vendor lock-in, and full control over what data leaves your environment.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The tradeoff is setup complexity. OpenClaw is not a one-click install. It requires Node.js, a process manager, and some configuration work before it runs reliably. This guide covers the two deployment targets that work best in practice: a Mac mini for always-on local hosting, and fly.io for cloud-based deployment without managing a full VPS.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Mac mini and fly.io are the best deployment targets</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            OpenClaw needs to run continuously. It checks queues, responds to triggers, and — if you have Telegram integration enabled — needs to be reachable at any time. That requirement rules out standard developer laptops (which sleep) and eliminates most cheap VPS options (which have unreliable uptime or throttle sustained CPU usage).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Mac mini: best for local or home-office deployments</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The M-series Mac mini is near-silent, draws under 10W at idle, and runs macOS — which means <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">launchd</code>, Apple&apos;s service manager, for automatic startup and restart. A Mac mini M2 costs around $600 and will run OpenClaw indefinitely without thermal issues. It also gives you direct access to the filesystem for logs and model caches, which simplifies debugging.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The main limitation is that your Mac mini needs to be powered on and connected. If you want OpenClaw accessible from outside your home network, you&apos;ll need to configure port forwarding or use a tunnel service.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">fly.io: best for cloud deployments without DevOps overhead</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            fly.io runs containerised applications close to your users across a global network. Unlike AWS or GCP, it doesn&apos;t require you to manage VMs, networking rules, or load balancers. You define your app in a <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">fly.toml</code> file, attach a persistent volume for state, and deploy with a single command.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The free tier is limited — OpenClaw needs at least a shared-cpu-1x instance with 512MB RAM to run without OOM errors — but the paid tier starts at $1.94/month per machine. For a lightweight agent that isn&apos;t under constant load, this is cost-effective.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Mac mini setup overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This section gives you the high-level steps. The full guide includes exact commands, expected output at each stage, and a checklist.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Step 1: Install Node.js 24</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            OpenClaw requires Node.js 24 or later. The recommended installation method is via <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">nvm</code> (Node Version Manager), which lets you switch Node versions without affecting system tools:
          </p>
          <pre className="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>{`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 24
nvm use 24
node -v  # should output v24.x.x`}</code></pre>
          <p className="text-gray-600 leading-relaxed mb-4">
            Do not install Node.js via Homebrew for this use case. Homebrew-managed Node can cause path issues when <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">launchd</code> launches OpenClaw at boot, because launchd does not inherit your shell&apos;s <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">PATH</code>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Step 2: Clone and install OpenClaw</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Clone the repository into a stable location (not your Downloads folder) and run the install:
          </p>
          <pre className="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>{`git clone https://github.com/openclaw/openclaw ~/openclaw
cd ~/openclaw
npm install
cp .env.example .env
# Edit .env with your API keys and config`}</code></pre>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Step 3: Configure launchd for automatic startup</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            On macOS, <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">launchd</code> is the recommended way to run OpenClaw as a background service that starts on login and restarts on crash. You create a <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">.plist</code> file in <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">~/Library/LaunchAgents/</code>:
          </p>
          <pre className="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.openclaw.agent</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/YOUR_USERNAME/.nvm/versions/node/v24.0.0/bin/node</string>
    <string>/Users/YOUR_USERNAME/openclaw/index.js</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/Users/YOUR_USERNAME/openclaw/logs/stdout.log</string>
  <key>StandardErrorPath</key>
  <string>/Users/YOUR_USERNAME/openclaw/logs/stderr.log</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>HOME</key>
    <string>/Users/YOUR_USERNAME</string>
    <key>PATH</key>
    <string>/Users/YOUR_USERNAME/.nvm/versions/node/v24.0.0/bin:/usr/local/bin:/usr/bin:/bin</string>
  </dict>
</dict>
</plist>`}</code></pre>
          <p className="text-gray-600 leading-relaxed mb-4">
            Load it with <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">launchctl load ~/Library/LaunchAgents/com.openclaw.agent.plist</code>. After a reboot, OpenClaw will start automatically.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">fly.io setup overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The fly.io deployment requires a Dockerfile, a <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">fly.toml</code> config file, a persistent volume for OpenClaw&apos;s state directory, and secrets for your API keys.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">fly.toml configuration</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A minimal <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">fly.toml</code> for OpenClaw looks like this:
          </p>
          <pre className="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>{`app = "my-openclaw"
primary_region = "lhr"

[build]
  dockerfile = "Dockerfile"

[env]
  NODE_ENV = "production"

[[mounts]]
  source = "openclaw_data"
  destination = "/app/data"

[http_service]
  internal_port = 3000
  force_https = true
  auto_stop_machines = false
  auto_start_machines = true
  min_machines_running = 1

[[vm]]
  memory = "512mb"
  cpu_kind = "shared"
  cpus = 1`}</code></pre>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Creating the volume and setting secrets</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Create the persistent volume before first deployment. This is where OpenClaw stores its queue state and gateway lock files:
          </p>
          <pre className="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>{`# Create the volume (do this once)
fly volumes create openclaw_data --size 1 --region lhr

# Set secrets (these become environment variables in your container)
fly secrets set OPENAI_API_KEY=sk-...
fly secrets set TELEGRAM_BOT_TOKEN=...
fly secrets set OPENCLAW_SECRET=...

# Deploy
fly deploy`}</code></pre>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The 3 most common OpenClaw setup gotchas</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            These three issues account for the vast majority of broken OpenClaw deployments. If your instance starts but behaves unexpectedly, check these first.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Gotcha 1: <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">auto_stop_machines</code> stopping your fly.io instance</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            fly.io&apos;s default configuration sets <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">auto_stop_machines = true</code>, which stops your machine when it receives no HTTP traffic for a period. For a web app that only runs on request, this is a sensible cost-saving default. For OpenClaw — which runs scheduled background tasks and needs to receive Telegram webhooks at any time — it is catastrophic.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The fix: set <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">auto_stop_machines = false</code> and <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">min_machines_running = 1</code> in your <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">fly.toml</code>. Without this, your OpenClaw instance will silently go offline after a few minutes of inactivity and miss scheduled tasks.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Gotcha 2: launchd not inheriting environment variables on Mac mini</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When you run OpenClaw manually in your terminal, your shell loads <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">~/.zshrc</code> or <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">~/.bash_profile</code>, which sets environment variables like <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">PATH</code>, <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">HOME</code>, and any API keys you&apos;ve exported. When <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">launchd</code> starts OpenClaw at boot, it does not load your shell config. It starts with a minimal environment.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The result: OpenClaw either fails to start (because <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">node</code> is not found) or starts but fails silently (because API key environment variables are missing). The fix is to declare all required environment variables explicitly in the <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">EnvironmentVariables</code> dict in your <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">.plist</code> file, and to use the absolute path to your <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">nvm</code>-managed Node binary (not just <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">node</code>).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Gotcha 3: Stale gateway lock file blocking startup</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            OpenClaw creates a lock file at startup to prevent multiple instances from running simultaneously. If the process exits uncleanly — due to a crash, a forced kill, or a fly.io machine restart — the lock file is not deleted. On the next startup, OpenClaw sees the lock file, assumes another instance is already running, and exits immediately.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            On Mac mini, the lock file lives at <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">~/openclaw/.gateway.lock</code> by default. On fly.io, it lives in your mounted volume at <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">/app/data/.gateway.lock</code>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If OpenClaw is not running but shows no errors in the logs, check for a stale lock file. Delete it and restart the service. For fly.io, you can do this via <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">fly ssh console</code> and removing the file manually, or by configuring OpenClaw to delete a stale lock file on startup (available in the config options documented in the full guide).
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Verifying your OpenClaw deployment</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once deployed, run a quick health check to confirm OpenClaw is running and connected:
          </p>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">Mac mini:</strong> Check <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">~/openclaw/logs/stdout.log</code> for startup messages and the first scheduled task run</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">fly.io:</strong> Run <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">fly logs</code> to tail live output from your machine</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc"><strong className="font-semibold text-gray-900">Both:</strong> If Telegram is configured, send a <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">/status</code> command to your bot — a response confirms the agent is running and the Telegram webhook is working</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            For fly.io, also verify that your machine is not in <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">stopped</code> state by running <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">fly machines list</code>. The status column should show <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">started</code>.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What this guide does not cover</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This overview covers the core setup path and the three deployment-breaking gotchas. It intentionally omits:
          </p>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">Telegram bot creation and webhook registration</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Model configuration (switching between OpenAI, Anthropic, and local models)</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Scheduling syntax and task config</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Multi-region fly.io deployments</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Log rotation on Mac mini</li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">Full troubleshooting reference (10+ additional error states)</li>
          </ul>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Get the complete walkthrough</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For the complete step-by-step walkthrough including Telegram integration, model config, and a full troubleshooting guide, get the{" "}
            <a
              href="https://getmetafix.com/guides/openclaw-setup"
              className="text-black underline hover:text-gray-600 transition-colors"
            >
              OpenClaw Setup Guide
            </a>{" "}
            — 17 pages, $19.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The guide covers both Mac mini and fly.io deployments end-to-end, with exact commands at every step, annotated config files, and a troubleshooting section that addresses 12 known failure modes. It&apos;s written for developers who are comfortable with the terminal but have not deployed OpenClaw before.
          </p>

        </article>

        {/* Bottom CTA */}
        <div className="mt-16 bg-black rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to run OpenClaw?</h2>
          <p className="text-gray-400 mb-6">17-page setup guide. Mac mini + fly.io. Telegram integration. $19.</p>
          <a
            href="https://getmetafix.com/guides/openclaw-setup"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Get the OpenClaw Setup Guide →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">S</span>
            </div>
            <span className="text-sm font-medium text-gray-900">GetMetaFix</span>
          </div>
          <p className="text-sm text-gray-400">Built by an AI. Powered by actual SEO knowledge.</p>
        </div>
      </footer>
    </div>
  );
}
