/**
 * Post-build prerender: crawls every route in dist/sitemap.xml with headless
 * Chrome and writes a fully-rendered index.html per route into dist/.
 *
 * Why: this is a client-side SPA, so a crawler that doesn't run JS sees an
 * empty <div id="root"> on every URL. That includes GPTBot, PerplexityBot and
 * ClaudeBot. This bakes each page's real <title>, meta description, canonical
 * and body copy into the HTML they fetch.
 *
 * Netlify serves a matching static file in preference to the /* -> /index.html
 * rewrite, so dist/services/index.html wins for /services automatically.
 *
 * Deploy-safe: any failure warns and exits 0, so the site still ships as a
 * working SPA rather than breaking the build. Because that failure mode is
 * silent, `npm run verify:prerender` checks the output is actually distinct.
 */
import http from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4197;
const ORIGIN = `http://localhost:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// Minimal static server for dist/ with SPA fallback to index.html.
function startServer() {
  const server = http.createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(DIST, urlPath);
      const isDir = existsSync(filePath) && (await stat(filePath)).isDirectory();
      if (urlPath.endsWith('/') || isDir) filePath = path.join(filePath, 'index.html');

      if (!existsSync(filePath)) {
        if (path.extname(filePath)) {
          res.writeHead(404);
          return res.end('Not found');
        }
        filePath = path.join(DIST, 'index.html');
      }
      const data = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end('Server error');
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// The exit-0-on-failure policy protects client deploys but hides breakage, so
// every skip path shouts what the site just lost.
function banner(reason, detail) {
  const line = '='.repeat(72);
  console.warn(`\n${line}`);
  console.warn('  PRERENDER DID NOT RUN — THIS SITE JUST SHIPPED AS A BARE SPA.');
  console.warn(`  Reason: ${reason}`);
  if (detail) console.warn(`  Detail: ${detail}`);
  console.warn('  Crawlers that do not execute JS will see an empty page on every URL.');
  console.warn('  Check PUPPETEER_CACHE_DIR and the Chrome install step in netlify.toml.');
  console.warn(`${line}\n`);
}

function routesFromSitemap() {
  const sitemapPath = path.join(DIST, 'sitemap.xml');
  if (!existsSync(sitemapPath)) return ['/'];
  const xml = readFileSync(sitemapPath, 'utf-8');
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => {
      try {
        return new URL(m[1]).pathname;
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  return paths.length ? [...new Set(paths)] : ['/'];
}

async function run() {
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch (e) {
    banner('puppeteer could not be imported', e?.message);
    process.exit(0);
  }

  const routes = routesFromSitemap();
  const server = await startServer();

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
  } catch (e) {
    banner('Chromium failed to launch', e?.message);
    server.close();
    process.exit(0);
  }

  // The Maps iframe never settles, which would stall networkidle2 on /contact.
  const BLOCK = /\/maps\/|maps\.google|maps\.googleapis|googletagmanager|google-analytics/i;
  let ok = 0;
  let failed = 0;

  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 1280, height: 900 });
      await page.setRequestInterception(true);
      page.on('request', (r) => (BLOCK.test(r.url()) ? r.abort() : r.continue()));
      page.on('pageerror', () => {});

      await page.goto(`${ORIGIN}${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
      // Every page renders the shared footer; wait for it, then let the
      // per-page title/meta effect flush.
      await page.waitForSelector('#site-footer', { timeout: 15000 });
      await new Promise((r) => setTimeout(r, 250));

      const html = await page.content();
      const outDir = route === '/' ? DIST : path.join(DIST, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, 'index.html'), html, 'utf-8');
      ok++;
      const title = await page.title();
      console.log(`[prerender] ${route.padEnd(10)} -> ${(html.length / 1024).toFixed(0)} KB  "${title.slice(0, 52)}"`);
    } catch (e) {
      failed++;
      console.warn(`[prerender] failed ${route}: ${e?.message}`);
    } finally {
      await page.close().catch(() => {});
    }
  }

  await browser.close().catch(() => {});
  server.close();
  console.log(`[prerender] done — ${ok} prerendered, ${failed} failed.`);
}

run().catch((e) => {
  banner('unexpected error during prerender', e?.message);
  process.exit(0);
});
