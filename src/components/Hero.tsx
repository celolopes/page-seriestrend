"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-app-dark to-app-blue text-white pt-32 pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-10 mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-44 h-44 gradient-glow">
              <Image
                src="/images/logo.png"
                alt="SeriesTrend Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
              SeriesTrend
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
            Acompanhe as tendências das suas séries favoritas
          </h2>
          <p className="text-lg text-gray-300 mb-8 text-center md:text-left">
            Descubra quais séries estão bombando, acompanhe estatísticas em
            tempo real e nunca fique por fora das tendências do momento.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#download"
              className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Baixar Agora
            </motion.a>
            <motion.a
              href="#recursos"
              className="bg-app-blue hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-[600px] w-[300px] mx-auto">
            <div className="absolute -top-10 -left-10 bg-accent/20 w-32 h-32 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 bg-accent/20 w-32 h-32 rounded-full blur-3xl"></div>
            <Image
              src="/images/screenshot-1.png"
              alt="SeriesTrend App Screenshot"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
