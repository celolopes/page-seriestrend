import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | SeriesTrend",
  description:
    "Entre em contato com a equipe do SeriesTrend para suporte, dúvidas ou sugestões",
};

export default function Contact() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← Voltar para a página inicial
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Entre em <span className="text-accent">Contato</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Fale Conosco</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato o mais
                breve possível.
              </p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="support">Suporte Técnico</option>
                    <option value="suggestion">Sugestão</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Parcerias</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Digite sua mensagem aqui..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="bg-app-dark text-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">E-mail</h3>
                  <a
                    href="mailto:marcelo.cae@gmail.com"
                    className="text-accent hover:underline"
                  >
                    marcelo.cae@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-gray-300">
                    Segunda a Sexta: 9h às 18h <br />
                    Sábado: 9h às 13h <br />
                    Domingo: Fechado
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Tempo de Resposta
                  </h3>
                  <p className="text-gray-300">
                    Nossa equipe responderá sua solicitação em até 24 horas
                    úteis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
