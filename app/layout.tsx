import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Tri Ingeniería", template: "%s | Tri Ingeniería" },
  description: "Servicios de medición del aprendizaje, gestión de personas, digitalización y captura de datos para proyectos del sector público.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Tri Ingeniería",
    description: "Medición del aprendizaje, operación nacional y gestión de proyectos desde 2014.",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Logo oficial de Sociedad de Profesionales Tri Ingeniería Limitada" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
