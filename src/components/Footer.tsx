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
            <Link href="/" className="flex items-center gap-2 mb-4">
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
                <span className="text-xs text-gray-400">Séries em Alta</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              O aplicativo essencial para acompanhar as tendências de séries
              mais assistidas na semana e no dia.
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
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#recursos"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="#prints"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Prints
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Depoimentos
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
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Política de Privacidade
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
                  Licenças
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:contato@seriestrend.app"
                  className="hover:text-accent transition-colors"
                >
                  contato@seriestrend.app
                </a>
              </li>
              <li className="text-gray-400">
                Suporte:{" "}
                <a
                  href="mailto:suporte@seriestrend.app"
                  className="hover:text-accent transition-colors"
                >
                  suporte@seriestrend.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SeriesTrend. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
