"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Activity, BarChart3, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

const sectionIds = {
  "pt-BR": "social",
  en: "social",
  es: "social",
  zh: "social",
} as const;

const socialScreenshots = [
  {
    src: "/images/Screenshot-8.png",
    key: "dashboard",
  },
  {
    src: "/images/Screenshot-9.png",
    key: "activity",
  },
  {
    src: "/images/Screenshot-10.png",
    key: "badges",
  },
  {
    src: "/images/Screenshot-11.png",
    key: "compare",
  },
];

const SocialShowcase = () => {
  const { translations, language } = useLanguage();
  const t = translations.socialShowcase;
  const sectionId = sectionIds[language] || "social";
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const highlightIcons = [Activity, BarChart3, Trophy];

  const screenshotLabels = t?.screenshotLabels || [
    "Dashboard Social",
    "Feed de Atividades",
    "Badges e Conquistas",
    "Comparação de Amigos",
  ];

  const nextScreenshot = () => {
    setActiveScreenshot((current) =>
      current === socialScreenshots.length - 1 ? 0 : current + 1
    );
  };

  const prevScreenshot = () => {
    setActiveScreenshot((current) =>
      current === 0 ? socialScreenshots.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextScreenshot();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeScreenshot]);

  if (!t) return null;

  return (
    <section id={sectionId} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,0,0.16),transparent_35%),radial-gradient(circle_at_80%_65%,rgba(167,139,250,0.12),transparent_28%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full glass-success text-green-400 text-sm font-semibold tracking-[0.18em] uppercase">
                {t.badge}
              </span>
              <span className="px-4 py-1.5 rounded-full glass text-sm text-white/80">
                {t.version}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
              {t.title} <span className="text-gradient-social">SeriesTrend</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              {t.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="glass rounded-full px-4 py-2 text-sm text-white/85 border border-white/8">
                {t.traktBadge}
              </span>
              <span className="glass rounded-full px-4 py-2 text-sm text-white/85 border border-white/8">
                {t.supabaseBadge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {t.highlights.map((highlight: string, index: number) => {
                const Icon = highlightIcons[index] || Activity;

                return (
                  <motion.div
                    key={highlight}
                    className="glass-card rounded-2xl p-5 h-full"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {highlight}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="glass rounded-2xl p-5 border border-white/8 max-w-2xl">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {t.note}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-8 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent rounded-[3rem] scale-95 blur-2xl pointer-events-none" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreenshot}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={socialScreenshots[activeScreenshot].src}
                      alt={screenshotLabels[activeScreenshot]}
                      width={334}
                      height={746}
                      sizes="(max-width: 768px) 100vw, 390px"
                      className="w-full h-auto rounded-[1.5rem] border border-white/6"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Screenshot Navigation */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  onClick={prevScreenshot}
                  className="p-2 rounded-full glass hover:bg-white/10 text-white/60 hover:text-white transition-all"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                  {socialScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScreenshot(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeScreenshot
                          ? "w-8 bg-primary"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`View ${screenshotLabels[index]}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextScreenshot}
                  className="p-2 rounded-full glass hover:bg-white/10 text-white/60 hover:text-white transition-all"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="mt-3 flex justify-center">
                <span className="glass rounded-full px-4 py-2 text-sm text-white/85 border border-white/8">
                  {screenshotLabels[activeScreenshot]}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialShowcase;
