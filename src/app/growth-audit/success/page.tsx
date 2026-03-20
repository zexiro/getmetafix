import Link from "next/link";
import type { Metadata } from "next";
import { TrackEvent } from "@/components/TrackEvent";

export const metadata: Metadata = {
  title: "Order Confirmed: GetMetaFix Growth Audit",
  description: "Your Growth Audit is being prepared. Check your inbox within 30 minutes.",
};

export default async function GrowthAuditSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id;

  // We show a generic confirmation since retrieving the session server-side
  // would require the Stripe secret key here; the email already contains the details.
  // The session_id is available if needed for future DB lookup.
  void sessionId;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TrackEvent event="purchase_completed" props={{ product: "growth_audit", value: 149 }} />
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
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Growth Audit is being prepared
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            Check your inbox within 30 minutes. We&apos;ll email your full PDF report with all 47 findings and your top priority fixes.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-3">
            {[
              { icon: "✓", label: "Payment confirmed" },
              { icon: "⏳", label: "Audit running (this takes ~5 minutes)" },
              { icon: "📄", label: "PDF being generated" },
              { icon: "📧", label: "Report emailed to you within 30 minutes" },
            ].map(({ icon, label }, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-6">
            Check your spam folder if you don&apos;t see it. If you have any issues, reply to the confirmation email or contact us at{" "}
            <a href="mailto:hello@getmetafix.com" className="text-gray-700 underline">hello@getmetafix.com</a>.
          </p>

          <Link
            href="/"
            className="inline-block px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors"
          >
            Back to GetMetaFix
          </Link>
        </div>
      </div>
    </div>
  );
}
