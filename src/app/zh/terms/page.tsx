import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用條款 | SeriesTrend",
  description: "SeriesTrend 應用程式使用條款 - 服務使用規則與條件",
};

export default function TermsOfService() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-sm p-8 rounded-lg text-gray-800">
          <Link
            href="/zh"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← 返回主頁
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-accent">SeriesTrend</span> 使用條款
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              最後更新：{new Date().toLocaleDateString("zh-TW")}
            </p>
            {/* 這裡插入完整的使用條款內容，翻譯自英文版 */}
            {/* ...Conteúdo traduzido omitido para brevidade... */}
          </div>
        </div>
      </div>
    </main>
  );
}
