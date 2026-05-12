import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// 引入組件
import Header from "@/components/Header";
import HeroScroll from "@/components/HeroScroll";
import Features from "@/components/Features";
import SocialShowcase from "@/components/SocialShowcase";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

// 語言提供者
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "SeriesTrend - 追蹤影集並與朋友連結",
  description: "追蹤影集、查看朋友正在看什麼、反應、分享推薦並獲得徽章。透過 Trakt.tv 同步的社群追蹤。",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      <Analytics />
      <LanguageProvider language="zh">
        <Header />
        <HeroScroll />
        <Features />
        <SocialShowcase />
        <Screenshots />
        <Testimonials />
        <Download />
        <Footer />
      </LanguageProvider>
    </main>
  );
}
