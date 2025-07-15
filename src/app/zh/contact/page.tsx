import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡我們 | SeriesTrend",
  description: "聯絡 SeriesTrend 團隊以獲得支援、提問或建議",
};

export default function Contact() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/zh"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← 返回主頁
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-accent">聯絡</span> 我們
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">聯絡方式</h2>
              <p className="text-gray-600 mb-8">
                請填寫下方表單，我們會盡快回覆您。
              </p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="您的全名"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    電子郵件
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="seriestrend.app@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    主題
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  >
                    <option value="">選擇主題</option>
                    <option value="support">技術支援</option>
                    <option value="suggestion">建議</option>
                    <option value="feedback">回饋</option>
                    <option value="partnership">合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    訊息
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="請輸入您的訊息..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  送出訊息
                </button>
              </form>
            </div>

            <div className="bg-app-dark text-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">聯絡資訊</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">電子郵件</h3>
                  <a
                    href="mailto:seriestrend.app@gmail.com"
                    className="text-accent hover:underline"
                  >
                    seriestrend.app@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">社群媒體</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">辦公時間</h3>
                  <p className="text-gray-300">
                    週一至週五：上午 9 點至下午 6 點 <br />
                    週六：上午 9 點至下午 1 點 <br />
                    週日：休息
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">回覆時間</h3>
                  <p className="text-gray-300">
                    我們團隊會在 24 小時內回覆您的需求。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
