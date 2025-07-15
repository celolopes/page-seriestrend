import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | SeriesTrend",
  description:
    "Política de privacidad de la aplicación SeriesTrend - Cómo gestionamos tus datos e información personal",
};

export default function PrivacyPolicy() {
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
            <span className="text-accent">SeriesTrend</span> Política de
            Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introducción</h2>
            <p>
              SeriesTrend ("nosotros") se compromete a proteger la privacidad de
              los usuarios de la aplicación SeriesTrend ("App"). Esta Política
              de Privacidad explica cómo recopilamos, usamos, divulgamos y
              protegemos tu información cuando usas nuestra App.
            </p>
            <p>
              Al usar SeriesTrend, aceptas la recopilación y el uso de
              información de acuerdo con esta política. La información personal
              que recopilamos se utiliza solo para proporcionar y mejorar la
              App. No usaremos ni compartiremos tu información con nadie excepto
              como se describe en esta Política de Privacidad.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Información que Recopilamos
            </h2>
            <p>
              Para ofrecerte una mejor experiencia al usar nuestra App, podemos
              recopilar cierta información personal identificable, incluyendo
              pero no limitado a:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Información de la Cuenta
            </h3>
            <p>
              Cuando creas una cuenta en SeriesTrend, podemos solicitar
              información como nombre de usuario, correo electrónico y
              contraseña. Esta información se utiliza para crear y gestionar tu
              cuenta, autenticar tu acceso y personalizar tu experiencia en la
              App.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Información de Uso
            </h3>
            <p>
              Recopilamos información sobre cómo usas la App, incluidas las
              series que sigues, preferencias de contenido, interacciones con
              otros usuarios y funciones que utilizas. Esta información nos
              ayuda a personalizar tu experiencia y mejorar nuestros servicios.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Información del Dispositivo
            </h3>
            <p>
              Podemos recopilar información sobre el dispositivo que usas para
              acceder a la App, incluido el modelo de hardware, sistema
              operativo, identificadores únicos del dispositivo e información de
              la red móvil. Esta información se utiliza para mejorar el
              rendimiento de la App y solucionar problemas técnicos.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Datos de Ubicación
            </h3>
            <p>
              Con tu permiso, podemos recopilar y procesar información sobre tu
              ubicación aproximada. Esta información se utiliza para
              proporcionar funciones basadas en la ubicación y mejorar la
              relevancia del contenido mostrado.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Cómo Usamos tu Información
            </h2>
            <p>
              La información que recopilamos se utiliza para los siguientes
              propósitos:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Proporcionar, mantener y mejorar la App y sus funciones;</li>
              <li>
                Personalizar tu experiencia según tus preferencias e
                interacciones;
              </li>
              <li>Desarrollar nuevas funciones, productos y servicios;</li>
              <li>
                Comunicarnos contigo sobre actualizaciones, ofertas especiales e
                información relevante;
              </li>
              <li>
                Analizar tendencias de uso y efectividad de las funciones de la
                App;
              </li>
              <li>
                Detectar, prevenir y abordar problemas técnicos y de seguridad;
              </li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Compartir y Divulgar Información
            </h2>
            <p>
              No vendemos ni alquilamos tu información personal a terceros.
              Podemos compartir tu información en las siguientes circunstancias:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Proveedores de Servicios
            </h3>
            <p>
              Podemos compartir tu información con empresas y personas externas
              que nos ayudan a proporcionar, mantener y mejorar la App (como
              proveedores de hosting, análisis de datos y atención al cliente).
              Estos socios están sujetos a obligaciones contractuales de
              confidencialidad y seguridad.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Requisitos Legales
            </h3>
            <p>
              Podemos divulgar tu información si es requerido por ley,
              regulación, proceso legal o solicitud gubernamental.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Protección de Derechos
            </h3>
            <p>
              Podemos divulgar información para proteger nuestros derechos,
              propiedad o seguridad, así como los de nuestros usuarios u otros.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Transferencias Comerciales
            </h3>
            <p>
              Si participamos en una fusión, adquisición o venta de activos, tu
              información puede ser transferida como parte de ese proceso. Te
              notificaremos cualquier cambio en la propiedad o uso de tu
              información personal.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Seguridad de los Datos
            </h2>
            <p>
              La seguridad de tu información es importante para nosotros.
              Implementamos medidas técnicas, administrativas y físicas
              diseñadas para proteger tu información contra el acceso no
              autorizado, pérdida, uso indebido o alteración. Sin embargo,
              ningún método de transmisión por Internet o almacenamiento
              electrónico es 100% seguro. Por lo tanto, aunque nos esforzamos
              por proteger tu información personal, no podemos garantizar su
              seguridad absoluta.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Publicidad y Analítica
            </h2>
            <p>
              Podemos utilizar servicios de terceros para publicidad y análisis
              de datos, como Google Analytics y herramientas publicitarias.
              Estos servicios pueden recopilar información enviada por tu
              dispositivo, incluidas las páginas visitadas e interacciones
              dentro de la App. Para más información sobre cómo Google recopila
              y procesa datos, visita:
              <a
                href="https://policies.google.com/privacy"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Privacidad de los Niños
            </h2>
            <p>
              Nuestra App no está dirigida a menores de 13 años. No recopilamos
              conscientemente información personal identificable de niños
              menores de 13 años. Si eres padre, madre o tutor y sabes que tu
              hijo nos ha proporcionado información personal, por favor
              contáctanos para que podamos tomar las medidas necesarias.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Tus Derechos y Opciones
            </h2>
            <p>Tienes derechos sobre tu información personal, incluyendo:</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Acceder, corregir o eliminar tu información personal;</li>
              <li>Retirar tu consentimiento en cualquier momento;</li>
              <li>Optar por no recibir comunicaciones de marketing;</li>
              <li>
                Solicitar la restricción del procesamiento de tu información;
              </li>
              <li>Solicitar la portabilidad de los datos.</li>
            </ul>
            <p>
              Para ejercer estos derechos, por favor contáctanos usando la
              información proporcionada a continuación.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Cambios en esta Política de Privacidad
            </h2>
            <p>
              Podemos actualizar nuestra Política de Privacidad ocasionalmente.
              Te notificaremos cualquier cambio publicando la nueva Política de
              Privacidad en esta página y, si los cambios son significativos,
              proporcionaremos un aviso más destacado (como un correo
              electrónico o una notificación en la App).
            </p>
            <p>
              Te recomendamos que revises esta Política de Privacidad
              periódicamente para ver si hay cambios. Los cambios a esta
              Política de Privacidad entran en vigor cuando se publican en esta
              página.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre esta Política de Privacidad, por
              favor contáctanos:
            </p>
            <ul className="list-none mt-2 mb-4 space-y-2">
              <li>
                <strong>Por correo electrónico:</strong> marcelo.cae@gmail.com
              </li>
              <li>
                <strong>Por formulario de contacto:</strong>{" "}
                <Link
                  href="/es/contact"
                  className="text-accent hover:underline"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
