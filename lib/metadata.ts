import type { Metadata } from "next";
import { site } from "@/content/site";

// Builds per-page metadata. openGraph is redeclared per page because Next.js
// replaces (rather than merges) the parent openGraph object.
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} repair services` }],
    },
  };
}
