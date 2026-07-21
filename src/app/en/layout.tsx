import type { Metadata } from "next";

import "../globals.css";



export const metadata: Metadata = {
  metadataBase: new URL("https://seriestrend.vercel.app"),
  title: "SeriesTrend - Track What's Trending",
  description:
    "The essential app to track the most watched TV series trends of the week and day",
  keywords: [
    "series tracker",
    "tv shows",
    "trending series",
    "tv series app",
    "entertainment app",
  ],
  openGraph: {
    title: "SeriesTrend - Track What's Trending",
    description:
      "The essential app to track the most watched TV series trends of the week and day",
    url: "https://seriestrend.vercel.app/en",
    siteName: "SeriesTrend",
    images: [
      {
        url: "https://seriestrend.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SeriesTrend App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeriesTrend - Track What's Trending",
    description:
      "The essential app to track the most watched TV series trends of the week and day",
    images: ["https://seriestrend.vercel.app/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo.png", sizes: "464x464", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
