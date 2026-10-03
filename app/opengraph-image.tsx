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
          background: "#132a41",
          color: "white",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#dce7f2" }}>
          Phone, laptop, console, and household repair
        </div>
        <div style={{ fontSize: 34, marginTop: 40, color: "#fdba74" }}>
          {`Free diagnostic · ${site.contact.phoneDisplay}`}
        </div>
        <div style={{ fontSize: 30, marginTop: 12, color: "#dce7f2" }}>{site.serviceArea}</div>
      </div>
    ),
    size,
  );
}
