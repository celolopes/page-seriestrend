"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { translations, language } = useLanguage();
  const t = translations;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: t.header.nav.features, href: "#features" },
    { label: t.header.nav.screenshots, href: "#screenshots" },
    { label: t.header.nav.testimonials, href: "#testimonials" },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
            <Image
              src="/images/logo.png"
              alt="SeriesTrend Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tight">
              Series<span className="text-primary">Trend</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-primary/80 transition-colors">
              {t.header.subtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Link
                href="/"
                className={`${
                  language === "pt-BR"
                    ? "text-primary"
                    : "text-gray-400 hover:text-white"
                } transition-colors`}
              >
                {t.header.language.pt}
              </Link>
              <span className="text-gray-600">/</span>
              <Link
                href="/en"
                className={`${
                  language === "en"
                    ? "text-primary"
                    : "text-gray-400 hover:text-white"
                } transition-colors`}
              >
                {t.header.language.en}
              </Link>
              <span className="text-gray-600">/</span>
              <Link
                href="/es"
                className={`${
                  language === "es"
                    ? "text-primary"
                    : "text-gray-400 hover:text-white"
                } transition-colors`}
              >
                {t.header.language.es}
              </Link>
              <span className="text-gray-600">/</span>
              <Link
                href="/zh"
                className={`${
                  language === "zh"
                    ? "text-primary"
                    : "text-gray-400 hover:text-white"
                } transition-colors`}
              >
                {t.header.language.zh}
              </Link>
            </div>

            <motion.a
              href="#download"
              className="bg-primary hover:bg-primary-light text-white px-5 py-2 rounded-full font-semibold text-sm shadow-lg shadow-primary/25 transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 107, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t.header.nav.download}
            </motion.a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? t.header.menu.close : t.header.menu.open}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full glass border-t border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-gray-200 hover:text-primary py-2 border-b border-white/5"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-4 text-sm font-bold">
                  <Link
                    href="/"
                    className={
                      language === "pt-BR" ? "text-primary" : "text-gray-400"
                    }
                  >
                    {t.header.language.pt}
                  </Link>
                  <Link
                    href="/en"
                    className={
                      language === "en" ? "text-primary" : "text-gray-400"
                    }
                  >
                    {t.header.language.en}
                  </Link>
                  <Link
                    href="/es"
                    className={
                      language === "es" ? "text-primary" : "text-gray-400"
                    }
                  >
                    {t.header.language.es}
                  </Link>
                  <Link
                    href="/zh"
                    className={
                      language === "zh" ? "text-primary" : "text-gray-400"
                    }
                  >
                    {t.header.language.zh}
                  </Link>
                </div>
                <Link
                  href="#download"
                  className="bg-primary text-white px-6 py-2 rounded-full font-semibold text-sm"
                  onClick={toggleMobileMenu}
                >
                  {t.header.nav.download}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
