import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | SeriesTrend",
  description:
    "Contacta con el equipo de SeriesTrend para soporte, preguntas o sugerencias",
};

export default function Contact() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/es"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← Volver a la página principal
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-accent">Contacto</span> con nosotros
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Ponte en contacto</h2>
              <p className="text-gray-600 mb-8">
                Rellena el siguiente formulario y te responderemos lo antes
                posible.
              </p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="seriestrend.app@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="support">Soporte técnico</option>
                    <option value="suggestion">Sugerencia</option>
                    <option value="feedback">Comentarios</option>
                    <option value="partnership">Colaboración</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className="bg-app-dark text-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Información de contacto
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Correo electrónico
                  </h3>
                  <a
                    href="mailto:seriestrend.app@gmail.com"
                    className="text-accent hover:underline"
                  >
                    seriestrend.app@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Redes sociales</h3>
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
                    Horario de atención
                  </h3>
                  <p className="text-gray-300">
                    Lunes a viernes: 9h a 18h <br />
                    Sábado: 9h a 13h <br />
                    Domingo: Cerrado
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Tiempo de respuesta
                  </h3>
                  <p className="text-gray-300">
                    Nuestro equipo responderá a tu solicitud en un plazo de 24
                    horas laborables.
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
