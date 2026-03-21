import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Your OpenClaw Setup Guide",
  description: "Download your OpenClaw Setup Guide PDF.",
  robots: { index: false, follow: false },
};

export default function DownloadPage() {
  // PDF is publicly accessible at this path
  const PDF_URL = "https://getmetafix.com/public-files/openclaw-setup-guide.pdf";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-gray-900">GetMetaFix</span>
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          {/* Success icon */}
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment confirmed.</h1>
          <p className="text-gray-500 mb-10 text-lg">Your guide is ready to download.</p>

          <a
            href={PDF_URL}
            download="openclaw-setup-guide.pdf"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-800 transition-colors w-full justify-center mb-4"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download OpenClaw Setup Guide (PDF)
          </a>

          <p className="text-xs text-gray-400 mb-12">
            Bookmark this page or save the PDF — you can download it again any time.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">What&apos;s in your guide</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Mac mini setup with launchd boot persistence
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> fly.io deployment with persistent volume
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Telegram integration and pairing flow
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Secrets management and .env setup
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Full troubleshooting guide (14 errors)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Quick reference cheatsheet
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 px-6 py-6 text-center text-sm text-gray-400">
        Questions? <a href="mailto:hello@getmetafix.com" className="underline hover:text-gray-600">hello@getmetafix.com</a>
      </footer>
    </div>
  );
}
