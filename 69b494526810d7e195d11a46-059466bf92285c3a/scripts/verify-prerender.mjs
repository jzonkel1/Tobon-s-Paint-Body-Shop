/**
 * Proves the prerender actually produced distinct static HTML per route.
 *
 * The prerender step deliberately exits 0 on failure so a bad Chromium install
 * can't break a client deploy — which means a green build can silently ship a
 * bare SPA. This is the check that catches that.
 *
 *   node scripts/verify-prerender.mjs               # checks ./dist
 *   node scripts/verify-prerender.mjs https://...   # checks a live site
 *
 * Exits 1 if any route is unrendered or if every route looks identical.
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const target = process.argv[2];

function routes() {
  const p = path.join(DIST, 'sitemap.xml');
  if (!existsSync(p)) return ['/'];
  return [...readFileSync(p, 'utf-8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

async function getHtml(route) {
  if (target) {
    const res = await fetch(new URL(route, target).href, { headers: { 'User-Agent': 'prerender-verify' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.text();
  }
  const f = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');
  if (!existsSync(f)) throw new Error('no file at ' + path.relative(DIST, f));
  return readFileSync(f, 'utf-8');
}

const titleOf = (h) => (h.match(/<title>([^<]*)<\/title>/i) || [, ''])[1].trim();
const descOf = (h) => (h.match(/<meta name="description" content="([^"]*)"/i) || [, ''])[1].trim();
// An unrendered shell has an empty root div.
const rendered = (h) => !/<div id="root">\s*<\/div>/.test(h) && /<div id="root">/.test(h);

const results = [];
let bad = 0;

for (const r of routes()) {
  try {
    const html = await getHtml(r);
    const ok = rendered(html);
    if (!ok) bad++;
    results.push({ route: r, kb: Math.round(html.length / 1024), rendered: ok, title: titleOf(html), desc: descOf(html) });
  } catch (e) {
    bad++;
    results.push({ route: r, kb: 0, rendered: false, title: 'ERROR: ' + e.message, desc: '' });
  }
}

console.log(`\nprerender check — ${target || 'dist/'}\n`);
for (const r of results) {
  console.log(`  ${r.rendered ? 'OK  ' : 'FAIL'} ${r.route.padEnd(10)} ${String(r.kb).padStart(4)} KB  ${r.title.slice(0, 60)}`);
}

const uniqueTitles = new Set(results.map((r) => r.title)).size;
const uniqueDescs = new Set(results.map((r) => r.desc)).size;
console.log(`\n  ${uniqueTitles}/${results.length} distinct titles, ${uniqueDescs}/${results.length} distinct descriptions`);

if (bad) console.error(`\n${bad} route(s) are NOT prerendered — the site shipped as a bare SPA.`);
else if (uniqueTitles < 2) console.error('\nEvery route has the same title — per-page meta did not apply.');
else console.log('\nPrerender verified.');

process.exit(bad || uniqueTitles < 2 ? 1 : 0);
