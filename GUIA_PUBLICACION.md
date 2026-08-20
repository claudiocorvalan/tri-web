# Publicación en Cloudflare Pages

El sitio se exporta como archivos estáticos. Cloudflare Pages debe publicar la carpeta `out`; no se necesita un proceso Node.js permanente ni Pages Functions para el sitio actual.

## Flujo automatizado

El repositorio contiene dos flujos:

- `quality.yml`: ejecuta las pruebas en pull requests y ramas de trabajo.
- `production.yml`: ante cambios en `main`, instala dependencias, ejecuta `pnpm check` y publica `out` en Cloudflare Pages solo si todo aprueba.

El despliegue también puede iniciarse manualmente desde la sección Actions de GitHub.

## Configuración necesaria en GitHub

En `Settings > Secrets and variables > Actions`, crear estos secretos del repositorio:

- `CLOUDFLARE_API_TOKEN`: token limitado a despliegues de Cloudflare Pages.
- `CLOUDFLARE_ACCOUNT_ID`: identificador de la cuenta de Cloudflare.

Variables opcionales:

- `CLOUDFLARE_PAGES_PROJECT`: nombre del proyecto; usa `tri-web` si no se configura.
- `PRODUCTION_SITE_URL`: dominio público definitivo; usa `https://tri-web.pages.dev` mientras no exista dominio propio.

Los secretos nunca deben escribirse en archivos, commits, capturas ni registros.

## Configuración en Cloudflare

- Crear un proyecto Pages llamado `tri-web`, si todavía no existe.
- Usar Direct Upload, porque GitHub Actions realiza la compilación y publicación.
- No conectar simultáneamente el despliegue Git nativo de Pages: produciría dos publicaciones por cada cambio.
- Cuando exista dominio propio, asociarlo al proyecto y actualizar `PRODUCTION_SITE_URL`.

## Validaciones automáticas

Ejecutar `pnpm check` antes de integrar cambios. El proceso valida:

- las siete rutas institucionales y su semántica HTML básica;
- los once proyectos, identificadores de licitación y estado del proyecto 2026;
- `robots.txt`, `sitemap.xml`, `llms.txt` y `_headers`;
- enlaces internos;
- máximo de 20.000 archivos y 25 MiB por archivo del plan gratuito.

GitHub ejecuta estas pruebas antes de cualquier despliegue de producción. Si una validación falla, Cloudflare no recibe una nueva versión.

## Uso del plan gratuito

La solución permanece completamente estática. No utiliza Pages Functions, Workers, KV, D1 ni R2. Los formularios todavía no transmiten información; cuando se conecten deberá revisarse el consumo de Workers y la protección contra abuso.

## Pendientes

- Configurar los dos secretos de Cloudflare en GitHub.
- Confirmar el nombre del proyecto Pages y el dominio institucional.
- Incorporar dirección, teléfono y correo institucional.
- Elegir el mecanismo de recepción de formularios y CV.
- Incorporar los proyectos pendientes cuando existan antecedentes verificables.
