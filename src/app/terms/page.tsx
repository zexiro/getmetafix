import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | GetMetaFix",
  description: "Terms and conditions for using GetMetaFix, including the free audit tool, fix package, and monitoring subscription.",
};

export default function TermsPage() {
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
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-green-600 font-medium">Terms &amp; Conditions</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Legal
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms &amp; Conditions</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: 20 March 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              GetMetaFix is operated by <strong>CodeHawks Limited</strong>, a company registered in England and Wales (Company No. 16095971).
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the GetMetaFix website and services
              at <a href="https://getmetafix.com" className="text-green-600 hover:underline">getmetafix.com</a>.
            </p>
            <p className="mt-3">
              By using GetMetaFix, you confirm you have read, understood, and agree to these Terms. If you do not agree,
              please do not use our services.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Our Services</h2>
            <p className="text-sm">GetMetaFix offers three tiers of service:</p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Free SEO Audit</h3>
            <p className="text-sm">
              Anyone may submit a URL for a free, automated SEO audit at no charge and without creating an account.
              The audit checks meta tags, Open Graph data, Twitter Cards, heading structure, image alt text, and
              technical SEO signals. No payment is required.
            </p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Fix Package &mdash; $29 one-time payment</h3>
            <p className="text-sm">
              After completing a free audit, you may purchase the fix package for a one-time fee of $29 USD.
              This provides AI-generated, copy-ready HTML fixes for every issue identified in your audit report,
              plus a prioritised remediation order and a shareable audit report.
            </p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Website Monitoring &mdash; $19/month subscription</h3>
            <p className="text-sm">
              A recurring monthly subscription that provides weekly automated re-crawls, regression alerts, and a
              monthly summary email. Billing is monthly. You may cancel at any time; your access continues until the
              end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Nature of Audit Results</h2>
            <p className="text-sm">
              Audit results are generated automatically by software and are provided for <strong>informational and advisory
              purposes only</strong>. They do not constitute professional SEO advice.
            </p>
            <p className="text-sm mt-3">
              <strong>We make no guarantee of SEO improvement.</strong> Search engine rankings depend on many factors
              outside our control, including search engine algorithm changes, competitor activity, backlink profiles,
              and website authority. Implementing the fixes we suggest may improve your SEO, but we cannot and do not
              guarantee any specific outcome, ranking position, or traffic increase.
            </p>
            <p className="text-sm mt-3">
              You are responsible for reviewing any AI-generated code or recommendations before implementing them on
              your website. We are not liable for any issues arising from implementing our suggestions without
              independent review.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Payment and Billing</h2>
            <p className="text-sm">
              All payments are processed securely by Stripe, Inc. By making a payment, you agree to Stripe&apos;s
              terms of service. We do not store or process your card details directly.
            </p>
            <p className="text-sm mt-3">
              Prices are displayed in US Dollars (USD). If you are located in the UK or EU, your bank or card provider
              may apply a currency conversion charge; we are not responsible for such charges.
            </p>
            <p className="text-sm mt-3">
              For the monthly monitoring subscription, your card will be charged automatically at the start of each
              billing period. You will receive a receipt by email after each charge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Refund Policy</h2>

            <h3 className="font-semibold text-gray-800 mb-2 mt-3">Fix Package ($29 one-time)</h3>
            <p className="text-sm">
              The fix package is a digital product that is delivered immediately upon payment. Once the AI-generated
              fixes have been delivered to you, <strong>we do not offer refunds</strong>, as the service has been fully
              rendered. This is consistent with Regulation 28 of the Consumer Contracts (Information, Cancellation and
              Additional Charges) Regulations 2013, which permits the right of withdrawal to be lost once digital
              content has been fully supplied with your prior express consent.
            </p>
            <p className="text-sm mt-2">
              If you did not receive your fixes due to a technical error on our part, please contact us within 7 days
              at <a href="mailto:hello@getmetafix.com" className="text-green-600 hover:underline">hello@getmetafix.com</a>{" "}
              and we will resolve the issue promptly.
            </p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Monitoring Subscription ($19/month)</h3>
            <p className="text-sm">
              Under the Consumer Rights Act 2015, you have a <strong>14-day statutory right to cancel</strong> a
              subscription from the date of purchase if the service has not yet been fully performed. If you request
              cancellation within 14 days and we have not yet provided any monitoring reports, you are entitled to a
              full refund.
            </p>
            <p className="text-sm mt-2">
              After 14 days, or if monitoring has already commenced, you may cancel at any time but are not entitled
              to a refund for the current billing period. Your monitoring access will continue until the end of the
              paid period.
            </p>
            <p className="text-sm mt-2">
              To cancel, email <a href="mailto:hello@getmetafix.com" className="text-green-600 hover:underline">hello@getmetafix.com</a>{" "}
              with the subject line &ldquo;Cancel Monitoring&rdquo;. We will process your cancellation within 2 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Acceptable Use</h2>
            <p className="text-sm">When using GetMetaFix, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-3">
              <li>Submit URLs to websites you do not own or have permission to audit</li>
              <li>Attempt to circumvent usage limits, rate limits, or security measures</li>
              <li>Use our service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Use automated scripts or bots to access the service without prior written permission</li>
              <li>Resell, redistribute, or white-label our audit reports without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Intellectual Property</h2>
            <p className="text-sm">
              All content on the GetMetaFix website, including text, software, design, and graphics, is owned by
              CodeHawks Limited or its licensors and is protected by copyright. You may not reproduce or redistribute
              our content without prior written permission.
            </p>
            <p className="text-sm mt-3">
              The AI-generated fix recommendations we produce for you are provided for your personal or business use.
              You may implement the fixes on your own website. You may not resell or sublicense them without our
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p className="text-sm">
              To the fullest extent permitted by law, CodeHawks Limited shall not be liable for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-3">
              <li>Any loss of revenue, profits, business, or anticipated savings</li>
              <li>Any indirect, incidental, or consequential loss or damage</li>
              <li>Any damage to your website resulting from implementing our recommendations</li>
              <li>Any loss arising from search engine algorithm changes after an audit</li>
            </ul>
            <p className="text-sm mt-3">
              Our total liability to you for any claim shall not exceed the total amount paid by you to GetMetaFix in
              the 12 months preceding the claim.
            </p>
            <p className="text-sm mt-3">
              Nothing in these Terms limits our liability for death or personal injury caused by our negligence,
              fraud or fraudulent misrepresentation, or any other liability that cannot be excluded under English law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Service Availability</h2>
            <p className="text-sm">
              We aim to provide a reliable service but do not guarantee uninterrupted availability. We may perform
              maintenance, updates, or experience downtime. We will not be liable for any losses arising from
              service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Electronic Commerce</h2>
            <p className="text-sm">
              These Terms comply with the Electronic Commerce (EC Directive) Regulations 2002. Before completing
              a purchase, you will be presented with a clear order summary including the price and what is included.
              You will receive a confirmation email upon successful payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Changes to These Terms</h2>
            <p className="text-sm">
              We may update these Terms from time to time. We will notify monitoring subscribers by email of any
              material changes at least 14 days before they take effect. Continued use of the service after changes
              take effect constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Contact Us</h2>
            <p className="text-sm">
              For any questions about these Terms, please contact:
            </p>
            <p className="text-sm mt-2">
              <strong>CodeHawks Limited</strong><br />
              Company No. 16095971<br />
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
            <span>by CodeHawks Limited</span>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-green-600 font-medium">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
