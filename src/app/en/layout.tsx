import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* SVG favicon for modern browsers */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
