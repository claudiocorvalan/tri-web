"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  ["/nosotros", "Nosotros"], ["/servicios", "Servicios"], ["/proyectos", "Proyectos"],
  ["/calidad-e-integridad", "Calidad e Integridad"], ["/trabaja-con-nosotros", "Trabaja con Nosotros"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Tri Ingeniería, inicio"><Image src="/logo.png" width={220} height={92} alt="Tri Ingeniería Limitada" priority /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav"><span /><span /><span /><b className="sr-only">Abrir menú</b></button>
      <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Navegación principal">
        {nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-contact" href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
      </nav>
    </header>
    {children}
    <footer className="site-footer">
      <div><Image src="/logo.png" width={190} height={80} alt="Tri Ingeniería Limitada" /><p>Servicios de medición del aprendizaje y operaciones afines para el sector público.</p></div>
      <div><h3>Navegación</h3><Link href="/nosotros">Nosotros</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link></div>
      <div><h3>Información</h3><Link href="/calidad-e-integridad">Calidad e Integridad</Link><Link href="/trabaja-con-nosotros">Trabaja con Nosotros</Link><Link href="/contacto">Contacto</Link></div>
      <div><h3>Razón social</h3><p>Sociedad de Profesionales<br />Tri Ingeniería Limitada</p><span>Chile</span></div>
      <small>© 2026 Tri Ingeniería Limitada. Todos los derechos reservados.</small>
    </footer>
  </>;
}
