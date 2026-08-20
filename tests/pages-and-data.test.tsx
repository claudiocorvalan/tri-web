import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Page, { generateStaticParams } from "../app/[slug]/page";
import { projects, projectSummary } from "../app/projects-data";
import sitemap from "../app/sitemap";

describe("contenido y rutas institucionales", () => {
  it("declara todas las rutas estáticas", () => {
    expect(generateStaticParams().map(({ slug }) => slug)).toEqual([
      "nosotros", "servicios", "proyectos", "calidad-e-integridad", "trabaja-con-nosotros", "contacto",
    ]);
  });

  it.each([
    ["nosotros", "Trayectoria construida con cumplimiento."],
    ["servicios", "Capacidad operativa de principio a fin."],
    ["proyectos", "Experiencia que muestra escala."],
    ["calidad-e-integridad", "Cumplir bien también es una forma de confianza."],
    ["trabaja-con-nosotros", "Tu rigurosidad puede marcar la diferencia."],
    ["contacto", "Hablemos de su próximo proyecto."],
  ])("renderiza /%s", async (slug, heading) => {
    render(await Page({ params: Promise.resolve({ slug }) }));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(heading);
  });

  it("rechaza rutas inexistentes", async () => {
    await expect(Page({ params: Promise.resolve({ slug: "inexistente" }) })).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("mantiene íntegro el catálogo de proyectos", () => {
    expect(projects).toHaveLength(projectSummary.count);
    expect(new Set(projects.map(({ id }) => id)).size).toBe(projects.length);
    expect(new Set(projects.map(({ procurementId }) => procurementId)).size).toBe(projects.length);
    expect(projects.filter(({ status }) => status === "En curso")).toHaveLength(1);
    expect(projects.every(({ coverage, title }) => coverage.length > 30 && title.length > 20)).toBe(true);
  });

  it("genera el sitemap canónico con prioridades", () => {
    const entries = sitemap();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tri-ingenieria.pages.dev";
    expect(entries).toHaveLength(7);
    expect(entries[0]).toMatchObject({ url: `${baseUrl}/`, priority: 1, changeFrequency: "monthly" });
    expect(entries.find(({ url }) => url.endsWith("/proyectos/"))?.priority).toBe(0.9);
    expect(entries.filter(({ changeFrequency }) => changeFrequency === "yearly")).toHaveLength(6);
  });
});
