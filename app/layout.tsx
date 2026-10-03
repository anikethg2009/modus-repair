import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site, serviceCategories } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

const defaultTitle = `${site.name} | Electronics Repair in Loudoun County, VA`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: defaultTitle,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phoneHref.replace("tel:", ""),
  email: site.contact.email,
  image: `${site.url}/opengraph-image`,
  priceRange: "$$",
  // TODO: Add your city (e.g. addressLocality: "Ashburn") if you're comfortable listing it.
  address: {
    "@type": "PostalAddress",
    addressRegion: "VA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Loudoun County, VA" },
    { "@type": "State", name: "Virginia" },
  ],
  // TODO: Add opening hours once set, e.g. openingHours: ["Mo-Fr 16:00-20:00", "Sa 10:00-18:00"].
  ...(site.social.length > 0 && { sameAs: site.social.map((s) => s.href) }),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Repair services",
    itemListElement: serviceCategories.map((cat) => ({
      "@type": "OfferCatalog",
      name: cat.title,
      itemListElement: cat.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: Number(s.price.replace(/[^0-9.]/g, "")),
        },
      })),
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[57px] font-sans md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
