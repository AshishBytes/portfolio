import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@repo/config";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const description = `${site.name}'s links, projects, and social profiles.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.linksOrigin),
  title: `${site.name} — Links`,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.linksOrigin,
    title: `${site.name} — Links`,
    description,
    siteName: site.brand,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} links` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Links`,
    description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
