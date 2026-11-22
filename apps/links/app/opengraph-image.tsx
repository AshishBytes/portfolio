import { ImageResponse } from "next/og";
import { site } from "@repo/config";

export const alt = `${site.name} — social links`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          color: "#f2f4ef",
          background: "#0c0e0d",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ color: "#d5ff53", fontSize: 38, fontWeight: 700, letterSpacing: "-6px" }}>ash.</div>
          <div style={{ width: 1, height: 28, background: "#343a34" }} />
          <div style={{ color: "#9ea69e", fontSize: 19, letterSpacing: 1 }}>SOCIAL · CONTACT</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, lineHeight: 1, fontWeight: 600, letterSpacing: "-5px" }}>{site.name}</div>
          <div style={{ color: "#a0a69f", fontSize: 30 }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#d5ff53", fontSize: 22 }}>
          <div style={{ width: 8, height: 8, borderRadius: 50, background: "#d5ff53" }} />
          <div>Instagram · YouTube · GitHub · X · LinkedIn</div>
        </div>
        <div style={{ position: "absolute", right: -120, top: -190, width: 570, height: 570, border: "1px solid #272e25", borderRadius: 999 }} />
        <div style={{ position: "absolute", right: -45, top: -115, width: 420, height: 420, border: "1px solid #272e25", borderRadius: 999 }} />
      </div>
    ),
    { ...size },
  );
}
