"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Download, Star, Users, Tv } from "lucide-react";

const Hero = () => {
  const { translations } = useLanguage();
  const t = translations.hero;

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full glass border border-primary/30 mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                #1 App para Amantes de Séries
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              {t.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                {t.titleHighlight}
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#download"
                className="group relative px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/25 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  {t.ctaButton}
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </motion.a>
              
              <motion.a
                href="#features"
                className="px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Saiba Mais
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, value: "50K+", label: t.statsUsers },
                { icon: Tv, value: "1000+", label: t.statsSeries },
                { icon: Star, value: "4.8", label: t.statsRatings },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass p-4 rounded-2xl text-center border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
              <Image
                src="/images/screenshot-1.png"
                alt="SeriesTrend App Interface"
                width={380}
                height={760}
                className="mx-auto drop-shadow-2xl rounded-[3rem] border-8 border-gray-900"
                priority
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -right-12 top-1/4 glass p-4 rounded-2xl flex items-center gap-3 shadow-xl border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-white font-bold">98% Match</p>
                  <p className="text-xs text-gray-400">Para você</p>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -left-12 bottom-1/4 glass p-4 rounded-2xl flex items-center gap-3 shadow-xl border border-white/10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <Tv className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold">Novos Eps</p>
                  <p className="text-xs text-gray-400">Disponíveis agora</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
