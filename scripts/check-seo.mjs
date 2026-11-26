// Usage: node scripts/check-seo.mjs http://127.0.0.1:3000
import assert from "node:assert/strict";

const origin = new URL(process.argv[2] ?? "http://127.0.0.1:3000");
const canonicalOrigin = "https://page-seriestrend.vercel.app";
const languages = ["pt-BR", "en", "es", "zh-Hant"];
// Deliberately independent of the application metadata config.
const groups = [
  ["/", "/en", "/es", "/zh"],
  ["/contato", "/en/contact", "/es/contact", "/zh/contact"],
  ["/privacy-policy", "/en/privacy-policy", "/es/privacy-policy", "/zh/privacy-policy"],
  ["/terms", "/en/terms", "/es/terms", "/zh/terms"],
];
const pageUrl = (path) => new URL(path, canonicalOrigin).href;
const request = (path) => fetch(new URL(path, origin), {
  redirect: "manual",
  signal: AbortSignal.timeout(30_000),
});

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\s+([^>]+)>`, "gi"))].map(([, body]) =>
    Object.fromEntries([...body.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, val]) => [key.toLowerCase(), val])),
  );
}

for (const group of groups) {
  await Promise.all(group.map(async (path) => {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const links = tags(html, "link");
    assert.deepEqual(links.filter((tag) => tag.rel === "canonical").map((tag) => new URL(tag.href).href), [pageUrl(path)], path);
    const alternates = links.filter((tag) => tag.rel === "alternate" && tag.hreflang);
    const expected = Object.fromEntries([...languages.map((lang, i) => [lang, pageUrl(group[i])]), ["x-default", pageUrl(group[0])]]);
    assert.equal(alternates.length, Object.keys(expected).length, path);
    assert.deepEqual(Object.fromEntries(alternates.map((tag) => [tag.hreflang, new URL(tag.href).href])), expected, path);
    assert.deepEqual(tags(html, "meta").filter((tag) => tag.property === "og:url").map((tag) => new URL(tag.content).href), [pageUrl(path)], path);
    assert.equal(tags(html, "meta").some((tag) => tag.name === "robots" && /noindex/.test(tag.content)), false, path);
  }));
}

const sitemap = await request("/sitemap.xml");
assert.equal(sitemap.status, 200);
const locs = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
assert.deepEqual(locs.sort(), groups.flat().map(pageUrl).sort());

const robots = await request("/robots.txt");
assert.equal(robots.status, 200);
assert.match(await robots.text(), /^Sitemap: https:\/\/page-seriestrend\.vercel\.app\/sitemap\.xml\s*$/m);

for (const path of ["/.well-known/apple-app-site-association", "/.well-known/assetlinks.json"]) {
  const response = await request(path);
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get("content-type") ?? "", /application\/json/i);
  await response.json();
}
assert.equal((await request("/google0110283bdedd814d.html")).status, 200);
assert.equal((await request("/seo-check-inexistent-20261126")).status, 404);
console.log("OK: SEO for 16 public pages, sitemap, robots, site verification, app links, and 404.");
