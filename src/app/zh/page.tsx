import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// 引入組件
import Header from "@/components/en/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/en/Footer";

// 語言提供者
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "SeriesTrend - 追蹤熱門影集趨勢",
  description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式",
};

// 中文翻譯文本
const translations = {
  hero: {
    title: "追蹤影集世界的熱門趨勢",
    subtitle: "下載必備應用程式，隨時掌握每週和每日最受歡迎的影集",
    ctaButton: "立即下載",
    statsUsers: "活躍用戶",
    statsSeries: "監控影集",
    statsRatings: "用戶評分",
  },
  features: {
    title: "SeriesTrend 提供什麼",
    subtitle: "探索所有工具和功能，徹底改變你追劇的方式。",
    items: [
      {
        title: "追蹤趨勢",
        description: "即時查看目前熱門影集，提供每日和每週排行榜。",
      },
      {
        title: "AI 影集洞察",
        description: "透過 AI 獲取你最愛影集的幕後花絮、季節和集數細節。",
      },
      {
        title: "通知提醒",
        description: "當你最愛的影集進入趨勢榜或有新集數時即時通知。",
      },
      {
        title: "進階搜尋",
        description: "可依標題、類型、平台或人氣快速搜尋影集。",
      },
      {
        title: "上映日曆",
        description: "隨時掌握你最愛影集的最新集數上映日期。",
      },
      {
        title: "自訂清單",
        description: "建立並管理你正在追、已看過或計劃觀看的影集清單。",
      },
    ],
  },
  screenshots: {
    title: "看看 SeriesTrend 的實際操作",
    subtitle: "體驗我們應用程式直觀且優雅的介面",
  },
  testimonials: {
    title: "用戶怎麼說",
    subtitle: "超過 10,000 人信賴 SeriesTrend 追蹤他們最愛的影集。",
  },
  download: {
    title: "立即下載",
    subtitle: "iOS 與 Android 皆可用",
    googlePlay: "前往 Google Play 下載",
    appStore: "在 App Store 下載",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      {/* Adicionado Analytics para análise de acessos com Vercel */}
      <Analytics />
      <LanguageProvider language="zh">
        <Header />
        <Hero />
        <Features />
        <Screenshots />
        <Testimonials />
        <Download />
        <Footer />
      </LanguageProvider>
    </main>
  );
}
