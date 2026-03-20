import Link from "next/link";
import type { Metadata } from "next";
import { TrackEvent } from "@/components/TrackEvent";

export const metadata: Metadata = {
  title: "You&apos;re all set | GetMetaFix Monitor",
  description:
    "Your website health monitoring is active. First report arriving Monday.",
};

export default async function MonitorSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  void params.session_id;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TrackEvent event="purchase_completed" props={{ product: "monitor", value: 79 }} />
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="font-semibold text-gray-900">GetMetaFix</span>
          </Link>
        </div>
      </nav>

      {/* Success message */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            You&apos;re all set.
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            Your first health report arrives Monday. We&apos;ll email you if anything
            breaks before then.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-3">
            {[
              { icon: "✓", label: "Subscription activated" },
              { icon: "✓", label: "Site added to weekly monitoring queue" },
              { icon: "⏳", label: "First scan running within 24 hours" },
              { icon: "📧", label: "First full report delivered this Monday" },
            ].map(({ icon, label }, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-600"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-6">
            Check your spam folder if you don&apos;t see the confirmation email.
            Questions? Reply to your confirmation email or contact us at{" "}
            <a
              href="mailto:hello@getmetafix.com"
              className="text-gray-700 underline"
            >
              hello@getmetafix.com
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors"
            >
              Back to GetMetaFix
            </Link>
            <Link
              href="/monitor"
              className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              View Monitor page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
