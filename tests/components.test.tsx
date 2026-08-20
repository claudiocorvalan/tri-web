import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactForm } from "../app/contact-form";
import { SiteShell } from "../app/site-shell";
import Home from "../app/page";

describe("componentes interactivos", () => {
  it("abre y cierra la navegación móvil", () => {
    render(<SiteShell><main>Contenido</main></SiteShell>);
    const button = screen.getByRole("button", { name: "Abrir menú" });
    const navigation = screen.getByRole("navigation", { name: "Navegación principal" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(navigation).not.toHaveClass("open");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(navigation).toHaveClass("open");
    const servicesLink = within(navigation).getByRole("link", { name: "Servicios" });
    servicesLink.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(servicesLink);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("valida el contacto institucional", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Asunto")).toHaveValue("Proyecto");
    fireEvent.submit(screen.getByRole("button", { name: "Enviar mensaje" }).closest("form")!);
    expect(screen.getByRole("status")).toHaveTextContent("Formulario validado");
  });

  it("muestra los campos adicionales de postulación", () => {
    render(<ContactForm job />);
    expect(screen.getByLabelText("Perfil de interés")).toBeRequired();
    expect(screen.getByLabelText("Currículum")).toHaveAttribute("accept", ".pdf,.doc,.docx");
    fireEvent.submit(screen.getByRole("button", { name: "Enviar postulación" }).closest("form")!);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("presenta la portada, servicios y convocatoria vigente", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Ingeniería aplicada");
    expect(screen.getAllByRole("link", { name: /yosimce\.cl/ })).toHaveLength(2);
    expect(screen.getByLabelText("Cifras institucionales")).toHaveTextContent("11");
    expect(screen.getByText("Gestión de Recursos Humanos")).toBeInTheDocument();
  });
});
