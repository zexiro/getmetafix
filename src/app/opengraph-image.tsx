import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GetMetaFix – Free SEO Meta Tag Auditor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#15803d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#4ade80",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "900",
              color: "#14532d",
            }}
          >
            M
          </div>
          <span style={{ color: "#bbf7d0", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.5px" }}>
            GetMetaFix
          </span>
        </div>

        {/* Centre: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: "900",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              maxWidth: "860px",
            }}
          >
            Fix your SEO meta tags
            <br />
            in 30 seconds. Free.
          </div>
          <div
            style={{
              color: "#86efac",
              fontSize: "28px",
              fontWeight: "400",
              maxWidth: "700px",
            }}
          >
            Audit any website instantly. Find missing titles, broken OG tags, and
            duplicate descriptions before Google does.
          </div>
        </div>

        {/* Bottom: CTA pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div
            style={{
              background: "#4ade80",
              color: "#14532d",
              fontSize: "22px",
              fontWeight: "800",
              padding: "16px 36px",
              borderRadius: "999px",
            }}
          >
            getmetafix.com
          </div>
          <span style={{ color: "#86efac", fontSize: "20px" }}>Free audit. No sign-up needed.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
