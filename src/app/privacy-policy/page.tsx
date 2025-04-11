import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | SeriesTrend",
  description:
    "Política de Privacidade do aplicativo SeriesTrend - Como tratamos seus dados e informações pessoais",
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-28 pb-16 min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-sm p-8 rounded-lg">
          <Link
            href="/"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← Voltar para a página inicial
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Política de Privacidade do{" "}
            <span className="text-accent">SeriesTrend</span>
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introdução</h2>
            <p>
              A SeriesTrend ("nós", "nosso" ou "nossos") está comprometida em
              proteger a privacidade dos usuários do aplicativo SeriesTrend
              ("Aplicativo"). Esta Política de Privacidade explica como
              coletamos, usamos, divulgamos e protegemos suas informações quando
              você utiliza nosso Aplicativo.
            </p>
            <p>
              Ao usar o SeriesTrend, você concorda com a coleta e uso de
              informações de acordo com esta política. As informações pessoais
              que coletamos são utilizadas apenas para fornecer e melhorar o
              Aplicativo. Não usaremos ou compartilharemos suas informações com
              ninguém, exceto conforme descrito nesta Política de Privacidade.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Informações que Coletamos
            </h2>
            <p>
              Para proporcionar uma melhor experiência ao utilizar nosso
              Aplicativo, podemos coletar certos tipos de informações, incluindo
              mas não limitado a:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Informações de Conta
            </h3>
            <p>
              Quando você cria uma conta no SeriesTrend, podemos solicitar
              informações como nome de usuário, endereço de e-mail e senha.
              Estas informações são usadas para criar e gerenciar sua conta,
              autenticar seu acesso e personalizar sua experiência no
              Aplicativo.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Informações de Uso
            </h3>
            <p>
              Coletamos informações sobre como você utiliza o Aplicativo,
              incluindo séries que você acompanha, preferências de conteúdo,
              interações com outros usuários e funcionalidades que você utiliza.
              Estas informações nos ajudam a personalizar sua experiência e
              melhorar nossos serviços.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Informações do Dispositivo
            </h3>
            <p>
              Podemos coletar informações sobre o dispositivo que você usa para
              acessar o Aplicativo, incluindo modelo de hardware, sistema
              operacional, identificadores únicos de dispositivo e informações
              de rede móvel. Estas informações são utilizadas para melhorar o
              desempenho do Aplicativo e solucionar problemas técnicos.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Dados de Localização
            </h3>
            <p>
              Com sua permissão, podemos coletar e processar informações sobre
              sua localização aproximada. Estas informações são utilizadas para
              fornecer recursos baseados em localização e melhorar a relevância
              do conteúdo exibido.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Como Utilizamos Suas Informações
            </h2>
            <p>
              As informações que coletamos são utilizadas para os seguintes
              propósitos:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Fornecer, manter e melhorar o Aplicativo e seus recursos;</li>
              <li>
                Personalizar sua experiência com base em suas preferências e
                interações;
              </li>
              <li>Desenvolver novos recursos, produtos e serviços;</li>
              <li>
                Comunicar-se com você sobre atualizações, ofertas especiais e
                informações relevantes;
              </li>
              <li>
                Analisar tendências de uso e eficácia das funcionalidades do
                Aplicativo;
              </li>
              <li>
                Detectar, prevenir e solucionar problemas técnicos e de
                segurança;
              </li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Compartilhamento e Divulgação de Informações
            </h2>
            <p>
              Não vendemos ou alugamos suas informações pessoais a terceiros.
              Podemos compartilhar suas informações nas seguintes
              circunstâncias:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Parceiros de Serviço
            </h3>
            <p>
              Podemos compartilhar suas informações com empresas terceirizadas e
              indivíduos que nos auxiliam no fornecimento, manutenção e
              aprimoramento do Aplicativo (como provedores de hospedagem,
              análise de dados e atendimento ao cliente). Estes parceiros estão
              sujeitos a obrigações contratuais de confidencialidade e
              segurança.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Requisitos Legais
            </h3>
            <p>
              Podemos divulgar suas informações se exigido por lei, regulamento,
              processo legal ou solicitação governamental.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Proteção de Direitos
            </h3>
            <p>
              Podemos divulgar informações para proteger nossos direitos,
              propriedade ou segurança, bem como os de nossos usuários ou
              outros.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Transferências Comerciais
            </h3>
            <p>
              Se estivermos envolvidos em uma fusão, aquisição ou venda de
              ativos, suas informações podem ser transferidas como parte desse
              processo. Notificaremos você sobre qualquer mudança na propriedade
              ou uso de suas informações pessoais.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Segurança de Dados
            </h2>
            <p>
              A segurança de suas informações é importante para nós.
              Implementamos medidas técnicas, administrativas e físicas
              projetadas para proteger suas informações contra acesso não
              autorizado, perda, uso indevido ou alteração. No entanto, nenhum
              método de transmissão pela Internet ou método de armazenamento
              eletrônico é 100% seguro. Portanto, embora nos esforcemos para
              proteger suas informações pessoais, não podemos garantir sua
              segurança absoluta.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Publicidade e Analytics
            </h2>
            <p>
              Podemos utilizar serviços de terceiros para publicidade e análise
              de dados, como o Google Analytics e ferramentas de publicidade.
              Estes serviços podem coletar informações enviadas pelo seu
              dispositivo, incluindo páginas visitadas e interações dentro do
              Aplicativo. Para mais informações sobre como o Google coleta e
              processa dados, visite:{" "}
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
              Privacidade de Crianças
            </h2>
            <p>
              Nosso Aplicativo não é direcionado a pessoas menores de 13 anos.
              Não coletamos intencionalmente informações pessoais identificáveis
              de crianças menores de 13 anos. Se você é pai/mãe ou responsável e
              sabe que seu filho nos forneceu informações pessoais, entre em
              contato conosco para que possamos tomar as medidas necessárias.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Seus Direitos e Escolhas
            </h2>
            <p>
              Você tem direitos relacionados às suas informações pessoais,
              incluindo:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Acessar, corrigir ou excluir suas informações pessoais;</li>
              <li>Retirar seu consentimento a qualquer momento;</li>
              <li>Optar por não receber comunicações de marketing;</li>
              <li>
                Solicitar a restrição do processamento de suas informações;
              </li>
              <li>Solicitar a portabilidade de seus dados.</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato conosco através das
              informações fornecidas abaixo.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Alterações a Esta Política de Privacidade
            </h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em
              tempos. Notificaremos você sobre quaisquer alterações publicando a
              nova Política de Privacidade nesta página e, se as alterações
              forem significativas, enviaremos uma notificação mais proeminente
              (como um e-mail ou uma notificação no Aplicativo).
            </p>
            <p>
              Recomendamos que você revise esta Política de Privacidade
              periodicamente para quaisquer alterações. As alterações a esta
              Política de Privacidade são efetivas quando publicadas nesta
              página.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade,
              entre em contato conosco:
            </p>
            <ul className="list-none mt-2 mb-4 space-y-2">
              <li>
                <strong>Por e-mail:</strong> privacy@seriestrend.com
              </li>
              <li>
                <strong>Pelo formulário de contato:</strong>{" "}
                <Link href="/contato" className="text-accent hover:underline">
                  www.seriestrend.com/contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
