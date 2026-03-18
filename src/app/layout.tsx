import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEOAudit.ai — Free SEO Audit in 30 Seconds",
  description:
    "Instant SEO audit for Shopify & WordPress. Find broken meta tags, missing OG images, schema errors. AI-generated fixes included. Free to audit, $29 to fix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
