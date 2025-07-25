"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Download = () => {
  const { language, translations } = useLanguage();
  const t = translations.download;

  // Lista de recursos disponíveis no aplicativo com base no idioma
  const features = t.features || [];

  // Textos para componentes específicos
  const deviceRequirements =
    t.deviceRequirements || "Disponível para iOS 12.0+ e Android 8.0+";
  const freeWithInAppPurchases =
    t.freeWithInAppPurchases ||
    "Disponível para download gratuito com compras no aplicativo opcionais.";
  const appFeatureTitle =
    t.appFeatureTitle || "Tudo que você precisa saber sobre suas séries";
  const backToHome = t.backToHome || "← Voltar para a página inicial";

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-b from-app-dark/5 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title || "Baixe o Series"}
            <span className="text-accent">Trend</span>{" "}
            {language === "en"
              ? "now"
              : language === "es"
              ? "ahora"
              : language === "zh"
              ? "立即"
              : "agora"}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t.subtitle ||
              (language === "en"
                ? "Available for Android and iOS. Download now and start tracking your favorite series trends."
                : "Disponível para Android e iOS. Baixe agora e comece a acompanhar as tendências das suas séries favoritas.")}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-app-dark p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                {appFeatureTitle}
              </h3>
              <ul className="space-y-3 mb-6">
                {features.map((item: string, index: number) => (
                  <li key={index} className="flex items-center text-white">
                    <span className="mr-2 text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm mb-6">
                {freeWithInAppPurchases}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.celolopes.seriestrend"
              className="w-full flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/google-play-badge.png"
                  alt={t.googlePlay || "Disponível no Google Play"}
                  width={200}
                  height={60}
                  className="h-auto"
                />
              </div>
            </motion.a>

            <div className="relative w-full flex justify-center">
              <motion.a
                href="https://apps.apple.com/br/app/seriestrend/id6746804882"
                className="w-full flex justify-center"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/images/app-store-badge.png"
                    alt={t.appStore || "Baixar na App Store"}
                    width={200}
                    height={60}
                    className="h-auto"
                  />
                </div>
              </motion.a>
            </div>

            <p className="text-gray-500 text-sm text-center">
              {deviceRequirements}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;
