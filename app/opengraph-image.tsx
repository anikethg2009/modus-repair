import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: electronics and household repair in Loudoun County, VA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share image. TODO: Swap for a real photo by adding app/opengraph-image.jpg
// (1200x630) and deleting this file.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f4f1ea",
          color: "#16140f",
          borderLeft: "24px solid #ff5a1f",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#5e594f" }}>
          Phone, laptop, console, and household repair
        </div>
        <div style={{ fontSize: 34, marginTop: 48, paddingTop: 24, borderTop: "2px solid #16140f" }}>
          {`Free diagnostic · ${site.contact.phoneDisplay}`}
        </div>
        <div style={{ fontSize: 30, marginTop: 12, color: "#5e594f" }}>{site.serviceArea}</div>
      </div>
    ),
    size,
  );
}
