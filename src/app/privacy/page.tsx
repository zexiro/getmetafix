import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GetMetaFix",
  description: "How GetMetaFix collects, uses, and protects your personal data under UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPage() {
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
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="text-green-600 font-medium">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Legal
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: 20 March 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              GetMetaFix is operated by <strong>Maestro Labs</strong>, a company registered in England and Wales.
              We provide an automated SEO audit tool, an AI-powered meta tag fix package, and a website monitoring subscription.
            </p>
            <p className="mt-3">
              <strong>Contact:</strong>{" "}
              <a href="mailto:hello@getmetafix.com" className="text-green-600 hover:underline">hello@getmetafix.com</a>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Maestro Labs is the data controller for the personal data described in this policy. This policy is governed
              by the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Data We Collect and Why</h2>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Website URLs submitted for auditing</h3>
            <p className="text-sm">
              When you enter a URL into our audit tool, we process that URL to perform the SEO analysis. URLs are
              processed in real time and are not stored in a persistent database after the audit session ends.
              <br /><strong>Legal basis:</strong> Legitimate interests (providing the core service you requested).
            </p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Email address</h3>
            <p className="text-sm">
              If you provide your email address to receive audit results or to set up website monitoring, we store
              your email to send you reports and service-related communications.
              <br /><strong>Legal basis:</strong> Contract (necessary to deliver the service you signed up for).
            </p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Payment information</h3>
            <p className="text-sm">
              Payments for the $29 fix package and $19/mo monitoring subscription are processed by Stripe, Inc.
              We never see, store, or process your card number. Stripe stores payment data under their own PCI-DSS
              compliant systems. We receive a transaction reference and your billing email from Stripe.
              <br /><strong>Legal basis:</strong> Contract (fulfilling your purchase).
            </p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Usage analytics</h3>
            <p className="text-sm">
              We use Vercel Analytics, which collects anonymised, aggregated data about page views and interactions.
              No personally identifiable information is associated with these analytics. No cookies are used.
              <br /><strong>Legal basis:</strong> Legitimate interests (understanding how our service is used to improve it).
            </p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">IP address and browser information</h3>
            <p className="text-sm">
              Our hosting provider (Vercel) collects standard server logs including IP addresses and browser user-agent
              strings for security, debugging, and abuse prevention. These logs are retained for 30 days.
              <br /><strong>Legal basis:</strong> Legitimate interests (security and preventing misuse of the service).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. International Data Transfers</h2>
            <p className="text-sm">
              Some of our third-party processors are based outside the UK. We ensure adequate safeguards are in place
              for all international transfers, typically through the UK Government&apos;s International Data Transfer
              Agreements (IDTAs) or equivalent adequacy mechanisms:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-3">
              <li>
                <strong>Stripe, Inc.</strong> (USA) &mdash; Payment processing. Stripe is certified under the UK-US
                Data Bridge and maintains Standard Contractual Clauses.
              </li>
              <li>
                <strong>Twilio / SendGrid</strong> (USA) &mdash; Transactional email delivery (audit results,
                subscription receipts, monitoring alerts). We share your email address and the content of the
                notification only.
              </li>
              <li>
                <strong>Vercel, Inc.</strong> (USA) &mdash; Website hosting, serverless functions, and edge network.
                Your IP and browser information are processed by Vercel&apos;s infrastructure.
              </li>
              <li>
                <strong>Railway</strong> (USA) &mdash; Database hosting for monitoring subscription data (email
                address, monitored URL, subscription status).
              </li>
              <li>
                <strong>OpenAI, LLC</strong> (USA) &mdash; AI processing. When you purchase the $29 fix package,
                your website&apos;s audit data (page structure, meta tag content) is sent to OpenAI to generate
                fix recommendations. OpenAI processes this data under our API agreement and does not use API
                inputs to train its models.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies and Tracking</h2>
            <p className="text-sm">
              We use no third-party advertising cookies. Vercel Analytics operates on a cookieless basis. We may
              set a session cookie to maintain your audit results during your browser session; this cookie contains
              no personal data and expires when you close your browser.
            </p>
            <p className="text-sm mt-2">
              This website complies with the Privacy and Electronic Communications Regulations (PECR).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Retention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Audit results:</strong> Stored in your browser session only (sessionStorage). Not retained on our servers after the session.</li>
              <li><strong>Email addresses (monitoring):</strong> Retained for the duration of your subscription plus 90 days after cancellation, to allow for reactivation and billing queries.</li>
              <li><strong>Payment records:</strong> Retained for 7 years as required by UK tax law.</li>
              <li><strong>Server logs:</strong> Retained for 30 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights Under UK GDPR</h2>
            <p className="text-sm mb-3">
              Under the UK General Data Protection Regulation and the Data Protection Act 2018, you have the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Right of access:</strong> You may request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong>Right to rectification:</strong> You may ask us to correct inaccurate or incomplete personal data.
              </li>
              <li>
                <strong>Right to erasure (&ldquo;right to be forgotten&rdquo;):</strong> You may ask us to delete your
                personal data where there is no compelling reason for us to continue processing it.
              </li>
              <li>
                <strong>Right to restriction of processing:</strong> You may ask us to restrict how we use your data
                in certain circumstances (e.g. while a rectification request is being resolved).
              </li>
              <li>
                <strong>Right to data portability:</strong> Where processing is based on consent or contract and carried
                out by automated means, you may request your data in a structured, commonly used, machine-readable format.
              </li>
              <li>
                <strong>Right to object:</strong> You may object to processing based on legitimate interests.
                We will cease processing unless we can demonstrate compelling legitimate grounds.
              </li>
              <li>
                <strong>Right to lodge a complaint with the ICO:</strong> If you believe we have not handled your data
                lawfully, you have the right to complain to the Information Commissioner&apos;s Office (ICO) at{" "}
                <a href="https://ico.org.uk" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>{" "}
                or by calling <strong>0303 123 1113</strong>.
              </li>
            </ul>
            <p className="text-sm mt-3">
              To exercise any of your rights, please email{" "}
              <a href="mailto:hello@getmetafix.com" className="text-green-600 hover:underline">hello@getmetafix.com</a>.
              We will respond within one calendar month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Security</h2>
            <p className="text-sm">
              All data is transmitted over HTTPS/TLS. Access to production systems is restricted to authorised personnel.
              We do not store payment card details. We apply the principle of data minimisation throughout the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
            <p className="text-sm">
              We may update this policy from time to time. If you have a monitoring subscription, we will notify you
              by email of any material changes at least 14 days before they take effect. The current version is always
              available at getmetafix.com/privacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
            <p className="text-sm">
              For any questions about this Privacy Policy or your personal data, please contact:
            </p>
            <p className="text-sm mt-2">
              <strong>Maestro Labs</strong><br />
              Email: <a href="mailto:hello@getmetafix.com" className="text-green-600 hover:underline">hello@getmetafix.com</a>
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">S</span>
            </div>
            <span className="text-gray-900 font-medium">GetMetaFix</span>
            <span className="text-gray-300">&mdash;</span>
            <span>by Maestro Labs</span>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <Link href="/privacy" className="text-green-600 font-medium">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
