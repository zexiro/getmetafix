import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../posts/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — GetMetaFix`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://getmetafix.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://getmetafix.com/blog/${post.slug}`,
    },
  };
}

// Minimal markdown-to-HTML renderer
function renderMarkdown(content: string): string {
  return content
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="border-gray-200 my-8" />')
    // Unordered list items
    .replace(/^- \[x\] (.+)$/gm, '<li class="flex items-center gap-2 text-gray-600 mb-1"><span class="text-green-500 font-bold">✓</span> $1</li>')
    .replace(/^- \[ \] (.+)$/gm, '<li class="flex items-center gap-2 text-gray-500 mb-1"><span class="w-4 h-4 border border-gray-300 rounded inline-block"></span> $1</li>')
    .replace(/^- (.+)$/gm, '<li class="text-gray-600 mb-1 ml-4 list-disc">$1</li>')
    // Numbered list items
    .replace(/^\d+\. \*\*(.+?)\*\*(.*)$/gm, '<li class="mb-4 text-gray-600"><strong class="font-semibold text-gray-900">$1</strong>$2</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-black underline hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>')
    // Wrap consecutive list items in ul (no dotAll flag for compat)
    .replace(/(<li[\s\S]*?<\/li>\n?)+/g, (match) => {
      if (match.includes('list-disc')) {
        return `<ul class="list-disc list-inside space-y-1 my-4 ml-4">${match}</ul>`;
      }
      return `<ul class="space-y-1 my-4">${match}</ul>`;
    })
    // Paragraphs
    .replace(/^(?!<[hup]|<li|<pre|<hr|<ul|<ol)(.+)$/gm, '<p class="text-gray-600 leading-relaxed mb-4">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '');
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);

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
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/" className="hover:text-gray-900 transition-colors px-3 py-1.5 bg-black text-white rounded-lg text-xs font-medium">
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
          <span className="text-gray-600 truncate">{post.title}</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
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
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed">{post.description}</p>
        </header>

        {/* Inline CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-1">Check your site right now</p>
          <p className="text-sm text-gray-500 mb-4">Free SEO audit in 30 seconds — find all the issues covered in this guide.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Audit for free →
          </Link>
        </div>

        {/* Article body */}
        <article
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Bottom CTA */}
        <div className="mt-16 bg-black rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Fix your site&apos;s SEO in 30 seconds</h2>
          <p className="text-gray-400 mb-6">Free audit. AI-generated fixes for $29.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Audit for free →
          </Link>
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
