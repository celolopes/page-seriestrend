"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-app-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/en" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="SeriesTrend Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">
                  Series<span className="text-accent">Trend</span>
                </span>
                <span className="text-xs text-gray-400">
                  Track What's Trending
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              The essential app to track the most watched TV series trends of
              the week and day.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://github.com/celolopes/SeriesTrend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#screenshots"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Screenshots
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/en/terms"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/en/privacy-policy"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:marcelo.cae@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  marcelo.cae@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <Link
                  href="/en/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SeriesTrend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
