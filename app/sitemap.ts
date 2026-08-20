import type { MetadataRoute } from "next";

const routes = ["", "/nosotros", "/servicios", "/proyectos", "/calidad-e-integridad", "/trabaja-con-nosotros", "/contacto"];
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tri-ingenieria.pages.dev";
  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date("2026-08-18"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/proyectos" ? 0.9 : 0.7,
  }));
}
