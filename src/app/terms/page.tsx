import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | SeriesTrend",
  description:
    "Termos de Uso do aplicativo SeriesTrend - Regras e condições para utilização do serviço",
};

export default function TermsOfService() {
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
            Termos de Uso do <span className="text-accent">SeriesTrend</span>
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao baixar, instalar ou usar o aplicativo SeriesTrend
              ("Aplicativo"), você concorda em ficar vinculado a estes Termos de
              Uso. Se você não concordar com qualquer parte destes termos, não
              poderá acessar ou usar nosso Aplicativo.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Alterações nos Termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer
              momento. As alterações entrarão em vigor imediatamente após a
              publicação dos termos atualizados. Seu uso contínuo do Aplicativo
              após a publicação das alterações constituirá sua aceitação dos
              termos revisados.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Uso do Aplicativo
            </h2>
            <p>
              O SeriesTrend é um aplicativo projetado para ajudar os usuários a
              acompanhar tendências e informações sobre séries de TV. Ao usar
              nosso Aplicativo, você concorda em:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Usar o Aplicativo apenas para fins legais e de acordo com estes
                Termos;
              </li>
              <li>
                Não usar o Aplicativo de qualquer maneira que possa danificar,
                desabilitar ou sobrecarregar nossos servidores ou redes;
              </li>
              <li>
                Não tentar acessar qualquer parte do Aplicativo por meios não
                autorizados;
              </li>
              <li>
                Não utilizar o Aplicativo para distribuir vírus, malware ou
                outros códigos maliciosos;
              </li>
              <li>
                Não coletar ou extrair dados de usuários sem consentimento;
              </li>
              <li>Seguir todas as leis aplicáveis ao usar o Aplicativo.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Criação de Conta
            </h2>
            <p>
              Algumas funcionalidades do Aplicativo podem exigir que você crie
              uma conta. Ao criar uma conta, você concorda em:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Fornecer informações precisas, atuais e completas;</li>
              <li>Manter e atualizar suas informações conforme necessário;</li>
              <li>
                Ser responsável por manter a confidencialidade de sua senha e
                restringir o acesso à sua conta;
              </li>
              <li>
                Ser responsável por todas as atividades que ocorrerem sob sua
                conta;
              </li>
              <li>
                Notificar-nos imediatamente sobre qualquer uso não autorizado de
                sua conta.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Propriedade Intelectual
            </h2>
            <p>
              O Aplicativo e todo o seu conteúdo, recursos e funcionalidades
              (incluindo, mas não limitado a, texto, gráficos, logotipos,
              design, software e código) são de propriedade do SeriesTrend e
              protegidos por leis nacionais e internacionais de propriedade
              intelectual.
            </p>
            <p>Você não está autorizado a:</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Modificar, desmontar, descompilar ou fazer engenharia reversa do
                Aplicativo;
              </li>
              <li>
                Remover avisos de direitos autorais, marcas registradas ou
                outros avisos de propriedade;
              </li>
              <li>
                Usar o conteúdo do Aplicativo para fins comerciais sem
                autorização prévia por escrito;
              </li>
              <li>
                Transferir, sublicenciar ou transferir seus direitos sob estes
                Termos.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Conteúdo do Usuário
            </h2>
            <p>
              O Aplicativo pode permitir que você publique, vincule, armazene,
              compartilhe ou disponibilize certas informações, textos, gráficos,
              vídeos ou outros materiais ("Conteúdo do Usuário"). Você é
              responsável por qualquer Conteúdo do Usuário que fornecer.
            </p>
            <p>
              Ao fornecer Conteúdo do Usuário, você concede ao SeriesTrend um
              direito e licença não exclusivos, transferíveis, sublicenciáveis,
              livres de royalties, mundiais para usar, reproduzir, modificar,
              executar, exibir, distribuir e criar trabalhos derivados do seu
              Conteúdo do Usuário em conexão com o Aplicativo.
            </p>
            <p>Você declara e garante que:</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Possui ou tem as licenças, direitos, consentimentos e permissões
                necessários para usar e autorizar o SeriesTrend a usar seu
                Conteúdo do Usuário;
              </li>
              <li>
                O Conteúdo do Usuário não viola os direitos de privacidade,
                direitos de publicidade, direitos autorais, direitos contratuais
                ou quaisquer outros direitos de qualquer pessoa.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Conteúdo de Terceiros
            </h2>
            <p>
              O Aplicativo pode conter links para sites de terceiros, serviços,
              anúncios ou outros conteúdos que não são de propriedade ou
              controlados pelo SeriesTrend. Não endossamos nem assumimos
              qualquer responsabilidade pelo conteúdo, políticas de privacidade
              ou práticas de sites ou serviços de terceiros.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Isenção de Garantias
            </h2>
            <p>
              O Aplicativo é fornecido "como está" e "conforme disponível", sem
              garantias de qualquer tipo, expressas ou implícitas. Não
              garantimos que o Aplicativo funcionará sem interrupções ou estará
              livre de erros, que os defeitos serão corrigidos ou que o
              Aplicativo ou o servidor que o disponibiliza estejam livres de
              vírus ou outros componentes prejudiciais.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Limitação de Responsabilidade
            </h2>
            <p>
              Em nenhuma circunstância o SeriesTrend, seus diretores,
              funcionários, parceiros, agentes, fornecedores ou afiliados serão
              responsáveis por quaisquer danos indiretos, incidentais,
              especiais, consequenciais ou punitivos, incluindo, sem limitação,
              perda de lucros, dados, uso, boa vontade ou outras perdas
              intangíveis, resultantes de:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Seu acesso ou uso ou incapacidade de acessar ou usar o
                Aplicativo;
              </li>
              <li>Qualquer conduta ou conteúdo de terceiros no Aplicativo;</li>
              <li>Conteúdo obtido do Aplicativo;</li>
              <li>
                Acesso não autorizado, uso ou alteração de suas transmissões ou
                conteúdo.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              10. Indenização
            </h2>
            <p>
              Você concorda em defender, indenizar e isentar o SeriesTrend e
              seus licenciadores e licenciados, funcionários, contratados,
              agentes, fornecedores e sucessores de qualquer reclamação, danos,
              obrigações, perdas, responsabilidades, custos ou dívidas e
              despesas (incluindo, mas não limitado a honorários advocatícios)
              decorrentes de:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Seu uso e acesso ao Aplicativo;</li>
              <li>Sua violação destes Termos;</li>
              <li>
                Sua violação de quaisquer direitos de terceiros, incluindo, mas
                não limitado a, direitos autorais, propriedade ou privacidade.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Rescisão</h2>
            <p>
              Podemos encerrar ou suspender sua conta e o acesso ao Aplicativo
              imediatamente, sem aviso prévio ou responsabilidade, por qualquer
              motivo, incluindo, sem limitação, se você violar os Termos.
            </p>
            <p>
              Após a rescisão, seu direito de usar o Aplicativo cessará
              imediatamente. Se você deseja encerrar sua conta, você pode
              simplesmente descontinuar o uso do Aplicativo ou nos notificar.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              12. Lei Aplicável
            </h2>
            <p>
              Estes Termos serão regidos e interpretados de acordo com as leis
              do Brasil, sem consideração aos seus conflitos de princípios
              legais.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              13. Resolução de Disputas
            </h2>
            <p>
              Qualquer disputa decorrente ou relacionada a estes Termos será
              resolvida por meio de negociação amigável. Se não for possível
              resolver a disputa amigavelmente, qualquer ação legal deverá ser
              submetida aos tribunais competentes do Brasil.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              14. Disposições Gerais
            </h2>
            <p>
              Se qualquer disposição destes Termos for considerada inválida ou
              inexequível, tal disposição será alterada e interpretada para
              cumprir os objetivos de tal disposição na medida do possível e as
              disposições restantes continuarão em pleno vigor e efeito.
            </p>
            <p>
              Nossa falha em fazer valer qualquer direito ou disposição destes
              Termos não será considerada uma renúncia a tais direitos. A
              renúncia a qualquer direito ou disposição só será efetiva se for
              feita por escrito e assinada por um representante autorizado do
              SeriesTrend.
            </p>
            <p>
              Estes Termos, junto com a{" "}
              <Link
                href="/privacy-policy"
                className="text-accent hover:underline"
              >
                Política de Privacidade
              </Link>
              , constituem o acordo completo entre você e o SeriesTrend em
              relação ao Aplicativo e substituem todos os acordos anteriores e
              contemporâneos, sejam escritos ou orais, relativos ao Aplicativo.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">15. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos, entre em contato
              conosco:
            </p>
            <ul className="list-none mt-2 mb-4 space-y-2">
              <li>
                <strong>Por e-mail:</strong> legal@seriestrend.com
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
