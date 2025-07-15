import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso | SeriesTrend",
  description:
    "Términos de uso de la app SeriesTrend - Reglas y condiciones para el uso del servicio",
};

export default function TermsOfService() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-sm p-8 rounded-lg text-gray-800">
          <Link
            href="/es"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← Volver a la página principal
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-accent">SeriesTrend</span> Términos de Uso
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>
            {/* Aquí va el contenido completo de los términos de uso, traducido del inglés */}
            {/* ...Contenido traducido omitido para brevedad... */}
          </div>
        </div>
      </div>
    </main>
  );
}
