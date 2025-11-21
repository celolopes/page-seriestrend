"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Smartphone } from "lucide-react";

const Download = () => {
  const { language, translations } = useLanguage();
  const t = translations.download;

  // Lista de recursos disponíveis no aplicativo com base no idioma
  const features = t.features || [];

  // Textos para componentes específicos
  const deviceRequirements = t.deviceRequirements;
  const appFeatureTitle = t.appFeatureTitle;

  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-app-dark to-black -z-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {t.titlePre} <span className="text-primary">SeriesTrend</span>{" "}
              {t.titlePost}
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t.subtitle}
            </p>

            <div className="glass-card p-8 rounded-2xl border border-white/10 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Smartphone className="text-primary" />
                {appFeatureTitle}
              </h3>
              <ul className="space-y-4">
                {features.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.celolopes.seriestrend"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-2 transition-colors">
                  <Image
                    src="/images/google-play-badge.png"
                    alt={t.googlePlay}
                    width={200}
                    height={60}
                    className="w-full h-auto"
                  />
                </div>
              </motion.a>

              <motion.a
                href="https://apps.apple.com/br/app/seriestrend/id6746804882"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-2 transition-colors">
                  <Image
                    src="/images/app-store-badge.png"
                    alt={t.appStore}
                    width={200}
                    height={60}
                    className="w-full h-auto"
                  />
                </div>
              </motion.a>
            </div>
            
            <p className="text-gray-500 text-sm mt-4 text-center sm:text-left">
              {deviceRequirements}
            </p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-[80px] rounded-full" />
              <Image
                src="/images/screenshot-1.png"
                alt="SeriesTrend App Download"
                width={320}
                height={640}
                className="relative z-10 drop-shadow-2xl rounded-[2.5rem] border-8 border-gray-900/50"
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl border border-white/10 shadow-xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-primary font-bold text-2xl">100%</p>
                <p className="text-white text-sm">{t.freeBadge}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;
