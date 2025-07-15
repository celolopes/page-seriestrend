import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seriestrend.vercel.app"),
  title: "SeriesTrend - 追蹤熱門影集趨勢",
  description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式",
  keywords: ["影集追蹤", "電視劇", "熱門影集", "影集應用程式", "娛樂應用程式"],
  openGraph: {
    title: "SeriesTrend - 追蹤熱門影集趨勢",
    description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式",
    url: "https://seriestrend.vercel.app/zh",
    siteName: "SeriesTrend",
    images: [
      {
        url: "https://seriestrend.vercel.app/images/og-image.jpg",
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
    images: ["https://seriestrend.vercel.app/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
