import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts/data";

export const metadata: Metadata = {
  title: "SEO Blog | GetMetaFix",
  description:
    "Practical guides on SEO meta tags, Open Graph, schema markup, and how to fix common issues on Shopify, WordPress, and custom sites.",
  openGraph: {
    title: "SEO Blog | GetMetaFix",
    description:
      "Practical guides on SEO meta tags, Open Graph, schema markup, and how to fix common issues on Shopify, WordPress, and custom sites.",
    url: "https://getmetafix.com/blog",
    type: "website",
  },
};

export default function BlogIndex() {
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
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="/" className="hover:text-gray-900 transition-colors px-3 py-1.5 bg-black text-white rounded-lg text-xs font-medium">
              Free audit →
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SEO Guides</h1>
          <p className="text-lg text-gray-500">
            Practical fixes for meta tags, Open Graph, and everything else that&apos;s quietly costing you Google traffic.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-100 pb-8 last:border-0">
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              >
                Read guide →
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* CTA Banner */}
      <section className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Check your own site right now</h2>
          <p className="text-gray-500 mb-6">Free SEO audit in 30 seconds. No account required.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Audit for free →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
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
