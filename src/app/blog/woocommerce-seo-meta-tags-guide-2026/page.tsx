import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WooCommerce SEO Meta Tags: Complete Setup Guide (2026) | GetMetaFix",
  description:
    "Most WooCommerce stores ship with default meta descriptions or leave them blank entirely. Here's how to fix every WooCommerce meta tag issue: titles, descriptions, og:image, canonical, and more.",
  openGraph: {
    title: "WooCommerce SEO Meta Tags: Complete Setup Guide (2026)",
    description:
      "Most WooCommerce stores ship with default meta descriptions or leave them blank entirely. Here's how to fix every WooCommerce meta tag issue: titles, descriptions, og:image, canonical, and more.",
    url: "https://getmetafix.com/blog/woocommerce-seo-meta-tags-guide-2026",
    type: "article",
    publishedTime: "2026-03-20",
  },
  alternates: {
    canonical: "https://getmetafix.com/blog/woocommerce-seo-meta-tags-guide-2026",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce SEO Meta Tags: Complete Setup Guide (2026)",
  description:
    "Most WooCommerce stores ship with default meta descriptions or leave them blank entirely. Here's how to fix every WooCommerce meta tag issue: titles, descriptions, og:image, canonical, and more.",
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
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
    "@id": "https://getmetafix.com/blog/woocommerce-seo-meta-tags-guide-2026",
  },
};

export default function WooCommerceSeoMetaTagsGuide() {
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
          <span className="text-gray-600 truncate">WooCommerce SEO Meta Tags Guide</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <time dateTime="2026-03-20">20 March 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            WooCommerce SEO Meta Tags: Complete Setup Guide (2026)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Over 60% of WooCommerce product pages have either a default or missing meta description.
            That single issue is silently costing those stores thousands of clicks per month. Here is
            exactly how to fix every meta tag across your WooCommerce store.
          </p>
        </header>

        {/* Inline CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-1">Find your WooCommerce meta tag issues in 30 seconds</p>
          <p className="text-sm text-gray-500 mb-4">
            GetMetaFix scans your store and flags every missing title, broken og:image, and
            duplicate description, free, no account required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Audit your store free →
          </Link>
        </div>

        {/* Article body */}
        <article className="prose-content">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why WooCommerce meta tags are a bigger problem than you think
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            WooCommerce is the most widely used ecommerce platform in the world, powering roughly
            one in four online stores. It runs on WordPress, which means you have near-total control
            over your site, including your SEO. That sounds like an advantage. It frequently is not.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike a hosted platform that enforces defaults, WooCommerce leaves meta tag management
            almost entirely up to you. Install it, add products, launch your store. Unless you
            actively configured an SEO plugin and filled in every field, you are publishing pages
            with no meta descriptions, auto-generated title tags, and social previews that default
            to your site logo or nothing at all.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here is what a typical WooCommerce audit reveals:
          </p>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-1 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">62% of product pages</strong> have a
              missing or auto-generated meta description
            </li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">48% of category pages</strong> share
              a duplicate or blank description
            </li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">71% of stores</strong> have no
              og:image set on product pages, causing broken social previews
            </li>
            <li className="text-gray-600 mb-1 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">55% of stores</strong> have no
              canonical tag, leaving Google to guess which URL is authoritative when query strings
              create duplicate pages
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Each of these is a direct ranking and click-through rate problem. Let us fix them one
            by one.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The six meta tags that matter for WooCommerce
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not every meta tag moves the needle for search. These six do:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            1. Title tag{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">&lt;title&gt;</code>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the blue clickable link in Google search results. It is the single highest-impact
            on-page SEO element. Google displays approximately 60 characters before truncating. For
            WooCommerce product pages, the default WordPress format is often{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">Product Name | Site Name</code>,
            which frequently runs long and buries your keyword. Lead with the keyword. Keep it
            under 60 characters.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            2. Meta description{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">&lt;meta name=&quot;description&quot;&gt;</code>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google uses this as the snippet of text shown below your link in search results. It is
            not a direct ranking factor, but it heavily influences click-through rate, which is a
            ranking signal. Write 150-160 characters that include your primary keyword and a
            clear reason to click. Unique per page, always.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            3. og:title and og:description
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Open Graph tags control how your pages appear when shared on Facebook, LinkedIn,
            WhatsApp, and in iMessage link previews. If{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">og:title</code>{" "}
            is absent, platforms pull from your{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">&lt;title&gt;</code>{" "}
            tag, which is fine. If{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">og:description</code>{" "}
            is missing, you get an ugly preview with no supporting text.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            4. og:image
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This determines the thumbnail image shown in social link previews. For WooCommerce, the
            correct value is your product&apos;s featured image, specifically sized at{" "}
            <strong className="font-semibold text-gray-900">1200 × 630px</strong> for optimal
            rendering. Without this, Facebook and LinkedIn either grab a random image from the page
            or show nothing. A good product image in a link preview can double click-through rates
            from social traffic.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            5. twitter:card
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Controls how your product links render on X (formerly Twitter). Set this to{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">summary_large_image</code>{" "}
            for a large image preview, or{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">summary</code>{" "}
            for a compact card. Most ecommerce stores should use{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">summary_large_image</code>{" "}
            . It shows the product photo prominently and looks significantly more compelling in a
            feed.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            6. Canonical tag{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">&lt;link rel=&quot;canonical&quot;&gt;</code>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            WooCommerce creates duplicate URLs automatically. Sorting products by price generates{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">?orderby=price</code>.
            Filtering by attribute adds{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">?filter_color=red</code>.
            Pagination creates{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">/page/2/</code>.
            Without canonical tags, Google indexes all of these as separate pages, dilutes your
            ranking signal, and may penalise you for thin content. The canonical tag tells Google
            which URL is the authoritative one to index.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up meta tags with Yoast SEO
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yoast SEO is the most widely installed SEO plugin for WordPress and WooCommerce, with
            over 13 million active installations. The free version handles all the essentials.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Product pages
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Open any product in WooCommerce. Scroll below the editor to find the Yoast SEO metabox.
            You will see two tabs: SEO and Social.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under the SEO tab, set your focus keyphrase, then write a custom SEO title and meta
            description. Yoast previews exactly how your result will look in Google, use it. Under
            the Social tab, set a dedicated og:image and og:description. If you leave these blank,
            Yoast falls back to your SEO title and description, which is acceptable but not optimal.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yoast automatically handles canonical tags for product pages. It sets the canonical
            to the clean product URL and strips query string variants.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Category pages
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Go to <strong className="font-semibold text-gray-900">Products &rarr; Categories</strong> in
            WordPress, then click Edit on any category. The Yoast metabox appears at the bottom.
            Write a unique meta description that describes the category, not a generic
            &ldquo;Shop our range of X&rdquo; template. Mention specific product types, price ranges, or
            brands that live within the category.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Homepage
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your homepage is a static page set in{" "}
            <strong className="font-semibold text-gray-900">Settings &rarr; Reading</strong>, edit
            that page and use the Yoast metabox directly. If you are using the default WooCommerce
            shop page as your homepage, go to{" "}
            <strong className="font-semibold text-gray-900">SEO &rarr; Search Appearance &rarr; WooCommerce</strong>{" "}
            in Yoast to set the shop page title and description globally.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For the homepage og:image, set a site-wide social image under{" "}
            <strong className="font-semibold text-gray-900">SEO &rarr; Social &rarr; Facebook</strong>.
            This becomes the fallback og:image for any page that does not have one set manually.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up meta tags with RankMath
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            RankMath is the main alternative to Yoast. It has a more generous free tier and is
            considered by many developers to be cleaner and faster. The workflow for WooCommerce
            is similar.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            On any product, scroll to the RankMath panel. Set your focus keyword, then expand the
            General tab for title and description, and the Social tab for Open Graph and Twitter
            Card. RankMath surfaces a snippet preview and a real-time score. Aim for a green score,
            but do not write for the score at the expense of writing for humans.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            One RankMath advantage worth noting: it includes WooCommerce-specific schema markup
            (Product schema with price, availability, and review data) in its free tier. Yoast
            requires the paid WooCommerce SEO add-on for equivalent schema output. If schema markup
            matters to your store (and it should), RankMath is worth the switch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For bulk edits, RankMath&apos;s free Bulk Edit tool lets you update meta titles and
            descriptions across multiple products simultaneously from the product list screen.
            Yoast only offers bulk editing in the premium tier.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting meta tags manually via functions.php
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For developers who want programmatic control (or stores that cannot use a plugin),
            you can output meta tags directly from your theme&apos;s{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">functions.php</code>{" "}
            or a custom plugin using the{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">wp_head</code>{" "}
            hook.
          </p>
          <pre className="bg-gray-950 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-6"><code>{`add_action( 'wp_head', 'custom_woo_meta_tags' );

function custom_woo_meta_tags() {
    if ( is_product() ) {
        global $post;
        $product = wc_get_product( $post->ID );

        // Meta description from product short description
        $description = wp_strip_all_tags( $product->get_short_description() );
        $description = mb_substr( $description, 0, 160 );
        echo '<meta name="description" content="' . esc_attr( $description ) . '">' . "\n";

        // og:title
        echo '<meta property="og:title" content="' . esc_attr( get_the_title() ) . '">' . "\n";

        // og:description
        echo '<meta property="og:description" content="' . esc_attr( $description ) . '">' . "\n";

        // og:image: featured image at 1200x630
        $image_id  = $product->get_image_id();
        $image_url = wp_get_attachment_image_url( $image_id, 'full' );
        if ( $image_url ) {
            echo '<meta property="og:image" content="' . esc_url( $image_url ) . '">' . "\n";
        }

        // twitter:card
        echo '<meta name="twitter:card" content="summary_large_image">' . "\n";

        // canonical
        echo '<link rel="canonical" href="' . esc_url( get_permalink() ) . '">' . "\n";
    }
}`}</code></pre>
          <p className="text-gray-600 leading-relaxed mb-4">
            A few important caveats with this approach. First, if you already have Yoast or
            RankMath active, do not add this code. You will output duplicate tags. Second, the
            short description fallback for meta descriptions only works if your product short
            descriptions are actually written and kept under 160 characters. Third, this code does
            not handle category pages or the homepage. You would need additional{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">is_product_category()</code>{" "}
            and{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">is_front_page()</code>{" "}
            conditionals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For most stores, a well-configured Yoast or RankMath installation is faster to
            maintain and more reliable than hand-rolling meta tag output. Use the manual approach
            when you need fine-grained control or are building a headless WooCommerce setup.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Page-by-page priorities
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Product pages: highest priority
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every product page needs a unique title tag, a unique meta description, and a
            dedicated og:image pointing to the product&apos;s featured image. These pages are
            the commercial heart of your store and the ones Google ranks for high-intent
            transactional queries. Do not let them share descriptions or use auto-generated titles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Title tag formula that works:{" "}
            <strong className="font-semibold text-gray-900">[Primary Keyword], [Key Differentiator] | [Brand]</strong>.
            For example: <em>Organic Cotton T-Shirt, Heavyweight 280gsm | NovaApparel</em>. Under
            60 characters, keyword-first, brand at the end.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Category pages: often neglected, high opportunity
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Category pages are often where the most-searched category-level keywords land. A query
            like &ldquo;men&apos;s running shoes under £100&rdquo; should resolve to a category page, not a
            product. Yet most WooCommerce stores leave category page meta descriptions blank, let
            them duplicate across paginated pages, or write one generic sentence and call it done.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Write category meta descriptions that describe the selection, not the store. Mention
            the number of products, price range, key brands, or notable features. Set a canonical
            on paginated category pages (
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">/category/shoes/page/2/</code>{" "}
            canonicalises to{" "}
            <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">/category/shoes/</code>
            ). Yoast and RankMath both handle this automatically.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Homepage: your brand&apos;s first impression on Google
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your homepage title tag should lead with your brand name and follow with a short value
            proposition, meaning what you sell and why someone should buy from you. Keep it under 60
            characters. The meta description should be 150-160 characters that describe
            your store, include a keyword (e.g. your primary product category), and end with a
            soft call to action.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Set a single, high-quality homepage og:image that represents your brand, typically
            a hero image or product lifestyle shot. This image appears whenever someone shares
            your homepage URL on social media. It is worth a few minutes to get right.
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Quick wins checklist
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Work through this list in order. The first five will have the largest immediate
            impact on your rankings and click-through rate.
          </p>
          <ul className="list-disc list-inside space-y-1 my-4 ml-4">
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Install Yoast SEO or RankMath</strong> if
              you have not already. Do not run WooCommerce without an SEO plugin
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Audit your homepage:</strong> open
              your store in a browser, right-click &rarr; View Page Source, search for{" "}
              <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">meta name=&quot;description&quot;</code>{" "}
              and confirm it is set, unique, and under 160 characters
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Check your top 10 products</strong> in
              Google Search Console for pages with the highest impressions but low CTR. Those
              almost always have weak or missing meta descriptions
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Set a fallback og:image</strong> in
              Yoast (SEO &rarr; Social &rarr; Facebook) so that any page without a custom image
              still shows something sensible when shared
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Enable twitter:card:</strong> in
              Yoast, go to SEO &rarr; Social &rarr; Twitter and ensure Twitter card data is enabled;
              set the card type to Summary with Large Image
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Verify canonical tags are active:</strong>
              visit a category page with a sort parameter (e.g.{" "}
              <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">?orderby=price</code>),
              view source, and confirm a canonical pointing to the clean URL is present
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Write unique category descriptions:</strong>
              log into WordPress, go to Products &rarr; Categories, and add a 150-character
              description to every category that receives organic traffic
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Check og:image dimensions:</strong> your
              product featured images should be at least 1200 × 630px; smaller images render poorly
              in social previews and get cropped unpredictably
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Use Google&apos;s Rich Results Test</strong> on
              your top product page to verify Product schema is being output correctly with price
              and availability data
            </li>
            <li className="text-gray-600 mb-2 ml-4 list-disc">
              <strong className="font-semibold text-gray-900">Run a free GetMetaFix audit</strong> to
              catch anything this checklist missed. It checks all the above in 30 seconds and
              flags every issue with a specific fix
            </li>
          </ul>

        </article>

        {/* Bottom CTA */}
        <div className="mt-16 bg-black rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Find every meta tag issue on your WooCommerce store
          </h2>
          <p className="text-gray-400 mb-2">
            GetMetaFix runs a free 30-second audit on any URL, checking title tags, meta
            descriptions, og:image, canonical tags, and more.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            No account. No install. Paste your URL and see exactly what is costing you rankings.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Audit your store for free →
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
