"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { translations, language } = useLanguage();
  const t = translations.footer;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t.quickLinks.features, href: "#features" },
    { label: t.quickLinks.screenshots, href: "#screenshots" },
    { label: t.quickLinks.testimonials, href: "#testimonials" },
    { label: t.quickLinks.download, href: "#download" },
  ];

  const legalLinks = [
    { label: t.legal.terms, href: "/terms" },
    { label: t.legal.privacy, href: "/privacy-policy" },
    { label: t.legal.cookies, href: "#" },
    { label: t.legal.licenses, href: "#" },
  ];

  return (
    <footer className="bg-app-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                <Image
                  src="/images/logo.png"
                  alt="SeriesTrend Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  Series<span className="text-primary">Trend</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-primary/80 transition-colors">
                  {t.subtitle}
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t.description}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Facebook, href: "https://facebook.com" },
                {
                  icon: Github,
                  href: "https://github.com/celolopes/SeriesTrend",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">
              {t.titles.quickLinks}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">
              {t.titles.legal}
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">
              {t.titles.contact}
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
                  {t.contact.email}
                </span>
                <a
                  href="mailto:seriestrend.app@gmail.com"
                  className="hover:text-primary transition-colors font-medium text-white"
                >
                  seriestrend.app@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                >
                  {t.contact.form}
                  <span className="text-lg">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">{t.copyright(currentYear)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
