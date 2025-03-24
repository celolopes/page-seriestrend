"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="fixed w-full bg-app-dark/90 backdrop-blur-sm z-50 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="SeriesTrend Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">
              Series<span className="text-accent">Trend</span>
            </span>
            <span className="text-xs text-gray-400">Séries em Alta</span>
          </div>
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                href="#recursos"
                className="text-white hover:text-accent transition"
              >
                Recursos
              </Link>
            </li>
            <li>
              <Link
                href="#prints"
                className="text-white hover:text-accent transition"
              >
                Prints
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className="text-white hover:text-accent transition"
              >
                Depoimentos
              </Link>
            </li>
            <li>
              <motion.a
                href="#download"
                className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
