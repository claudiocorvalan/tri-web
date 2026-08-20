# Publicación en Cloudflare Pages

El sitio se exporta como archivos estáticos. Cloudflare Pages debe publicar la carpeta `out`; no se necesita un proceso Node.js permanente ni Pages Functions para el sitio actual.

## Configuración del proyecto conectado por Git

- Framework preset: `Next.js (Static HTML Export)`.
- Build command: `pnpm build`.
- Build output directory: `out`.
- Root directory: `sitio-web` si el repositorio contiene la carpeta superior.
- Node.js: versión 22.
- Variable recomendada: `NEXT_PUBLIC_SITE_URL=https://dominio-final.cl` para generar el sitemap con el dominio definitivo.

Cloudflare despliega al recibir cambios en la rama de producción. No se incluye un segundo workflow de deploy, evitando compilaciones y publicaciones duplicadas.

## Validaciones automáticas

Ejecutar `pnpm check` antes de integrar cambios. El proceso valida:

- las siete rutas institucionales y su semántica HTML básica;
- los siete proyectos, identificadores de licitación y UTP de TIMSS;
- `robots.txt`, `sitemap.xml`, `llms.txt` y `_headers`;
- enlaces internos;
- máximo de 20.000 archivos y 25 MiB por archivo del plan gratuito.

El workflow de GitHub ejecuta estas pruebas en pull requests y ramas distintas de `main`. Cloudflare conserva el deploy de `main` mediante su integración existente.

## Uso del plan gratuito

La solución permanece completamente estática. No utiliza Pages Functions, Workers, KV, D1 ni R2. Los formularios todavía no transmiten información; cuando se conecten deberá revisarse el consumo de Workers y la protección contra abuso.

## Pendientes

- Configurar `NEXT_PUBLIC_SITE_URL` con el dominio institucional.
- Incorporar dirección, teléfono y correo institucional.
- Elegir el mecanismo de recepción de formularios y CV.
- Incorporar los proyectos pendientes cuando existan antecedentes verificables.
