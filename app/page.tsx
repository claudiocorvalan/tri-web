import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "./site-shell";
import { projectSummary } from "./projects-data";

const services = [
  ["01", "Gestión de Recursos Humanos", "Convocamos, seleccionamos y coordinamos equipos para proyectos licitados."],
  ["02", "Aplicación de instrumentos", "Desplegamos operaciones de medición del aprendizaje en establecimientos educacionales."],
  ["03", "Digitalización de documentos", "Convertimos documentación física en información digital trazable y ordenada."],
  ["04", "Digitación y captura de datos", "Procesamos datos con foco en precisión, confidencialidad y cumplimiento."],
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="recruitment-banner" aria-labelledby="convocatoria-2026">
          <div className="campaign-copy"><span className="campaign-label">Sistema Nacional de Evaluaciones 2026 · RM</span><h2 id="convocatoria-2026">Participa en las evaluaciones nacionales 2026</h2><p>Buscamos examinadores/as y otros perfiles de aplicación. Conoce los requisitos y postula en el portal de reclutamiento del proyecto.</p><a className="button banner-button" href="https://yosimce.cl/" target="_blank" rel="noopener noreferrer">Postular ahora en yosimce.cl ↗</a></div>
          <figure><Image src="/images/logo-utp.jpeg" alt="Ingemas y Tri Ingeniería, Unión Temporal de Proveedores" fill priority sizes="(max-width: 750px) 100vw, 340px" /></figure>
        </section>

        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Proveedor del Estado · Desde 2014</span>
            <h1>Ingeniería aplicada a proyectos de medición del aprendizaje.</h1>
            <p>Planificamos y ejecutamos servicios de alta exigencia operativa, con equipos capacitados, control de procesos y compromiso con las bases de licitación.</p>
            <div className="actions">
              <Link className="button primary" href="/contacto">Conversemos</Link>
              <Link className="button ghost" href="/servicios">Conocer servicios</Link>
            </div>
          </div>
          <figure className="hero-visual">
            <Image src="/images/operacion-tri.png" alt="Equipo profesional coordinando materiales y controles de una operación de evaluación" fill priority sizes="(max-width: 1000px) 100vw, 46vw" />
            <figcaption><span>Operación controlada</span><b>Calidad · Integridad · Confidencialidad</b><small>Imagen referencial</small></figcaption>
          </figure>
        </section>

        <section className="section services-preview">
          <div className="section-head">
            <div><span className="eyebrow">Qué hacemos</span><h2>Servicios para operaciones complejas</h2></div>
            <Link className="text-link" href="/servicios">Ver todos los servicios →</Link>
          </div>
          <div className="service-grid">
            {services.map(([num, title, text]) => <article className="service-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="metrics" aria-label="Cifras institucionales">
          <div><strong>2014</strong><span>Inicio de operaciones</span></div>
          <div><strong>{projectSummary.count}</strong><span>Proyectos ejecutados o en curso</span></div>
          <div><strong>{projectSummary.students}</strong><span>Estudiantes evaluados</span></div>
          <div><strong>ISO</strong><span>Sistema de gestión de calidad 9001:2015</span></div>
        </section>

        <section className="section visual-story">
          <figure><Image src="/images/proyectos-terreno.png" alt="Supervisor revisando materiales trazables antes de una operación en terreno" fill sizes="(max-width: 1000px) 100vw, 52vw" /><figcaption>Imagen referencial de una operación en terreno.</figcaption></figure>
          <div><span className="eyebrow">Del diseño al terreno</span><h2>Coordinación que llega a cada establecimiento.</h2><p>Personas, materiales, soporte y control se articulan en una sola operación. Esa capacidad permite responder a despliegues regionales y estudios de cobertura nacional.</p><Link className="text-link" href="/proyectos">Explorar la trayectoria →</Link></div>
        </section>

        <section className="section split-callout">
          <div><span className="eyebrow light">Súmate a nuestros proyectos</span><h2>Personas rigurosas para desafíos que importan.</h2></div>
          <div><p>Buscamos examinadores, supervisores y perfiles técnicos comprometidos con el trabajo responsable en terreno.</p><a className="button light" href="https://yosimce.cl/" target="_blank" rel="noopener noreferrer">Postular en yosimce.cl ↗</a></div>
        </section>
      </main>
    </SiteShell>
  );
}
