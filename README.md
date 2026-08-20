# Sitio institucional de Tri Ingeniería

Sitio multipágina de Sociedad de Profesionales Tri Ingeniería Limitada, desarrollado con Next.js y exportado como contenido estático para Cloudflare Pages.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Verificación completa

```bash
pnpm check
```

El comando revisa el código, genera la carpeta `out` y ejecuta las pruebas del sitio publicado.

## Cloudflare Pages

- Preset: Next.js (Static HTML Export)
- Comando: `pnpm build`
- Salida: `out`
- Node.js: 22

GitHub Actions verifica y publica automáticamente la rama `main` mediante Cloudflare Wrangler. Consulta `GUIA_PUBLICACION.md` para configurar los secretos, el proyecto y el dominio.
