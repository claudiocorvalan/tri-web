import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve("out");
const routes = ["", "nosotros", "servicios", "proyectos", "calidad-e-integridad", "trabaja-con-nosotros", "contacto"];

async function htmlFor(route) { return readFile(path.join(root, route, "index.html"), "utf8"); }
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else files.push(absolute);
  }
  return files;
}

test("exporta todas las rutas institucionales", async () => {
  for (const route of routes) {
    const html = await htmlFor(route);
    assert.match(html, /<html lang="es">/);
    assert.match(html, /<main>/);
    assert.match(html, /<h1>/);
    assert.match(html, /aria-label="Navegación principal"/);
  }
});

test("publica once proyectos y distingue el proyecto en curso", async () => {
  const html = await htmlFor("proyectos");
  assert.equal((html.match(/class="project-card"/g) ?? []).length, 11);
  assert.match(html, /721703-4-LP14/);
  assert.match(html, /721703-24-LR23/);
  assert.match(html, /Unión Temporal de Proveedores/);
  assert.match(html, /PISA 2025/);
  assert.match(html, /ERCE 2025/);
  assert.match(html, /721703-49-LQ23/);
  assert.match(html, /721703-4-LR26/);
  assert.match(html, /En curso/);
  assert.match(html, /ERCE experimental 2024/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /Información en preparación/);
});

test("deriva las postulaciones a YoSIMCE sin duplicar formulario", async () => {
  const home = await htmlFor("");
  const jobs = await htmlFor("trabaja-con-nosotros");
  assert.match(home, /Sistema Nacional de Evaluaciones 2026/);
  assert.match(home, /https:\/\/yosimce\.cl\//);
  assert.match(home, /logo-utp\.jpeg/);
  assert.match(jobs, /https:\/\/yosimce\.cl\//);
  assert.doesNotMatch(jobs, /<form/);
});

test("incluye recursos visuales y el logo oficial", async () => {
  const home = await htmlFor("");
  const projects = await htmlFor("proyectos");
  assert.match(home, /operacion-tri\.png/);
  assert.match(projects, /proyectos-terreno\.png/);
  await stat(path.join(root, "images", "equipo-tri.png"));
  await stat(path.join(root, "logo.png"));
  assert.match(home, /logo\.png/);
});

test("incluye descubrimiento y seguridad de Cloudflare", async () => {
  const headers = await readFile(path.join(root, "_headers"), "utf8");
  assert.match(headers, /Content-Security-Policy:/);
  assert.match(headers, /X-Frame-Options: DENY/);
  await stat(path.join(root, "robots.txt"));
  await stat(path.join(root, "sitemap.xml"));
  await stat(path.join(root, "llms.txt"));
});

test("se mantiene dentro de los límites gratuitos de Pages", async () => {
  const files = await walk(root);
  assert.ok(files.length < 20_000, `La exportación contiene ${files.length} archivos`);
  for (const file of files) {
    const info = await stat(file);
    assert.ok(info.size <= 25 * 1024 * 1024, `${file} supera 25 MiB`);
  }
});

test("los enlaces internos resuelven en la exportación", async () => {
  for (const route of routes) {
    const html = await htmlFor(route);
    const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((match) => match[1]);
    for (const href of hrefs) {
      if (href.startsWith("/_next/")) continue;
      const relative = decodeURIComponent(href).replace(/^\//, "").replace(/\/$/, "");
      const target = path.join(root, relative);
      const candidates = [target, `${target}.html`, path.join(target, "index.html")];
      let found = false;
      for (const candidate of candidates) {
        try { await stat(candidate); found = true; break; } catch {}
      }
      assert.ok(found, `Enlace sin destino exportado: ${href} desde /${route}`);
    }
  }
});
