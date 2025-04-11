"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { translations } = useLanguage();
  const t = translations.hero;

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-app-dark to-app-blue opacity-75 -z-10"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t.title || "Acompanhe o que está em Alta no Mundo das Séries"}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              {t.subtitle ||
                "Baixe o aplicativo essencial para acompanhar as séries mais assistidas da semana e do dia"}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#download"
                className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center shadow-lg shadow-accent/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.ctaButton || "Baixe Agora"}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  50K+
                </p>
                <p className="text-gray-400">
                  {t.statsUsers || "Usuários Ativos"}
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  1000+
                </p>
                <p className="text-gray-400">
                  {t.statsSeries || "Séries Monitoradas"}
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  4.8
                </p>
                <p className="text-gray-400">
                  {t.statsRatings || "Avaliações de Usuários"}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:order-1 order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <Image
                src="/images/app-mockup.png"
                alt="SeriesTrend App"
                width={350}
                height={700}
                className="z-10 relative"
                priority
              />
              <div className="absolute w-full h-full top-0 left-0 blur-3xl bg-accent/20 rounded-full -z-10 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 -mb-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,213.3C672,203,768,149,864,117.3C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
