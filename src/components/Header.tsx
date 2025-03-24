"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

        {/* Botão de menu mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu de navegação desktop */}
        <nav className="hidden md:block">
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

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-app-dark border-t border-gray-800 mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="#recursos"
                  className="text-white hover:text-accent transition block py-2"
                  onClick={toggleMobileMenu}
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="#prints"
                  className="text-white hover:text-accent transition block py-2"
                  onClick={toggleMobileMenu}
                >
                  Prints
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-white hover:text-accent transition block py-2"
                  onClick={toggleMobileMenu}
                >
                  Depoimentos
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="#download"
                  className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors block text-center"
                  onClick={toggleMobileMenu}
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
