// Browser fallback when an installed SeriesTrend build does not claim the HTTPS app link.
// OAuth parameters are handled only by the native app. Never read, render or forward them here.
const body = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Conexão com o Trakt | SeriesTrend</title>
</head>
<body>
  <main>
    <h1>Volte ao SeriesTrend</h1>
    <p>Abra o SeriesTrend e volte à tela de conexão com o Trakt. Se a conexão não tiver sido concluída, inicie uma nova tentativa pelo app.</p>
  </main>
</body>
</html>`;

function fallback(bodyContent: string | null) {
  return new Response(bodyContent, {
    headers: {
      "Cache-Control": "no-store",
      "Content-Security-Policy": "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
      "Content-Type": "text/html; charset=utf-8",
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const dynamic = "force-dynamic";

export function GET() {
  return fallback(body);
}

export function HEAD() {
  return fallback(null);
}
