"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBackground() {
  // Criamos 3 colunas que se movem em velocidades diferentes para dar profundidade
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-40 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
      
      <div className="flex gap-4 h-[120%] -rotate-12 -translate-y-20 -translate-x-10 scale-110">
        {[0, 1, 2, 3, 4].map((col) => (
          <motion.div
            key={col}
            initial={{ translateY: col % 2 === 0 ? "0%" : "-50%" }}
            animate={{ 
              translateY: col % 2 === 0 ? "-50%" : "0%" 
            }}
            transition={{
              duration: 40 + (col * 5),
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col gap-4 w-64 flex-shrink-0"
          >
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="relative aspect-[2/3] w-full rounded-xl overflow-hidden border border-white/5 shadow-2xl"
              >
                <Image
                  src="/images/tv-collage.png"
                  alt="Series Background"
                  fill
                  className="object-cover grayscale brightness-80"
                  sizes="256px"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
