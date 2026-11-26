import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/lib/site-seo";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "SeriesTrend - 追蹤熱門影集趨勢",
  description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式",
  keywords: ["影集追蹤", "電視劇", "熱門影集", "影集應用程式", "娛樂應用程式"],
  openGraph: {
    title: "SeriesTrend - 追蹤熱門影集趨勢",
    description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式",
    url: "./",
    siteName: "SeriesTrend",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SeriesTrend App 預覽圖",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeriesTrend - 追蹤熱門影集趨勢",
    description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式",
    images: ["/images/og-image.jpg"],
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
