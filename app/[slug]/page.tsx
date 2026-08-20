import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteShell } from "../site-shell";
import { ContactForm } from "../contact-form";
import { projects, projectSummary } from "../projects-data";

const pages = ["nosotros", "servicios", "proyectos", "calidad-e-integridad", "trabaja-con-nosotros", "contacto"];
export function generateStaticParams() { return pages.map(slug => ({ slug })); }

const services = [
  ["Gestión de Recursos Humanos", "Convocatoria, selección y contratación de personal para proyectos licitados.", "Equipos conformados según requisitos técnicos, perfiles y plazos del mandante."],
  ["Aplicación de instrumentos de medición", "Operación en establecimientos de enseñanza básica y media.", "Despliegue coordinado, resguardo de instrumentos y ejecución estandarizada."],
  ["Digitalización de documentos", "Conversión y organización de documentación física.", "Información accesible, trazable y preparada para los flujos del proyecto."],
  ["Digitación y captura de datos", "Procesamiento estructurado de información.", "Precisión, confidencialidad y controles de calidad durante todo el proceso."],
];

function Header({ kicker, title, lead }: { kicker: string; title: string; lead: string }) {
  return <section className="page-hero"><span className="eyebrow light">{kicker}</span><h1>{title}</h1><p>{lead}</p></section>;
}

function Nosotros() { return <><Header kicker="Quiénes somos" title="Trayectoria construida con cumplimiento." lead="Desde 2014 desarrollamos operaciones especializadas para proyectos de medición del aprendizaje y servicios afines." /><section className="section prose-grid"><div><span className="big-number">2014</span><h2>El origen</h2><p>La organización inició sus actividades como CGS Logística Ltda., ejecutando la aplicación de instrumentos de medición en establecimientos de enseñanza básica y media.</p><p>Con la evolución de sus capacidades y servicios, la empresa se transformó en Sociedad de Profesionales Tri Ingeniería Limitada.</p></div><div className="statement"><span>Misión</span><h3>Ejecutar servicios confiables y de calidad mediante equipos capacitados y procesos controlados.</h3><span>Visión</span><h3>Ser un socio técnico reconocido por su cumplimiento, integridad y capacidad operativa.</h3></div></section><section className="section"><div className="section-head"><div><span className="eyebrow">Nuestra forma de trabajar</span><h2>Valores que sostienen cada proyecto</h2></div></div><div className="value-grid">{[["Integridad","Actuamos con honestidad y transparencia."],["Confidencialidad","Protegemos los datos e instrumentos bajo nuestra responsabilidad."],["Cumplimiento","Alineamos la ejecución con la normativa y las bases de licitación."],["Mejora continua","Revisamos los procesos para elevar su eficacia y confiabilidad."]].map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section></>; }

function Servicios() { return <><Header kicker="Servicios" title="Capacidad operativa de principio a fin." lead="Cuatro líneas de servicio diseñadas para apoyar proyectos licitados con orden, cobertura y control." /><section className="section service-list">{services.map(([title, desc, value], i)=><article key={title}><span>0{i+1}</span><div><h2>{title}</h2><p>{desc}</p></div><aside><b>Valor para el mandante</b><p>{value}</p></aside></article>)}</section><section className="section cta-inline"><h2>¿Necesita evaluar un servicio?</h2><p>Conversemos sobre el alcance, los plazos y las necesidades operativas de su proyecto.</p><Link className="button primary" href="/contacto">Contactar</Link></section></>; }

function Proyectos() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Proyectos ejecutados por Tri Ingeniería",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Project",
        "@id": `#${project.id}`,
        name: project.title,
        description: project.coverage,
        identifier: project.procurementId,
      },
    })),
  };
  return <><Header kicker="Proyectos y experiencia" title="Experiencia que muestra escala." lead="Once proyectos ejecutados o en curso para la Agencia de Calidad de la Educación desde 2014, con alcance e identificadores de licitación." />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="project-stats" aria-label="Cifras consolidadas de experiencia">
      <div><strong>{projectSummary.count}</strong><span>proyectos ejecutados</span></div>
      <div><strong>{projectSummary.awarded}</strong><span>adjudicados según registros públicos, sin TIMSS 2023</span></div>
      <div><strong>{projectSummary.regions}</strong><span>más cobertura nacional en TIMSS</span></div>
      <div><strong>{projectSummary.students}</strong><span>estudiantes evaluados a nivel nacional</span></div>
    </section>
    <section className="section project-feature">
      <figure><Image src="/images/proyectos-terreno.png" alt="Preparación y control de materiales para una operación de evaluación en terreno" fill sizes="(max-width: 1000px) 100vw, 52vw" /><figcaption>Imagen referencial. No corresponde a un registro de un proyecto específico.</figcaption></figure>
      <div><span className="eyebrow">Cobertura y trazabilidad</span><h2>Una trayectoria que conecta territorio, equipos y datos.</h2><p>Desde aplicaciones SIMCE regionales hasta estudios internacionales de cobertura nacional, cada despliegue exige preparación, resguardo y seguimiento.</p><div className="mini-timeline"><span>2014<br /><b>Inicio</b></span><i /><span>2023<br /><b>TIMSS</b></span><i /><span>2025–26<br /><b>PISA · ERCE</b></span></div></div>
    </section>
    <section className="section project-history" aria-labelledby="trayectoria-proyectos">
      <div className="section-head"><div><span className="eyebrow">Trayectoria {projectSummary.period}</span><h2 id="trayectoria-proyectos">Proyectos ejecutados</h2></div><p className="project-source">Mandante: {projectSummary.client}<br />Antecedentes actualizados al {projectSummary.updatedAt}</p></div>
      <div className="project-list">
        {projects.map((project, index) => <article className="project-card" id={project.id} key={project.id}>
          <div className="project-index"><span>{String(index + 1).padStart(2, "0")}</span><b>{project.category}</b>{project.status && <em>{project.status}</em>}</div>
          <div className="project-main"><h3>{project.title}</h3><p>{project.coverage}</p>{project.consortium && <p className="consortium"><b>Modalidad de ejecución:</b> {project.consortium}</p>}{project.verification && <p className="verification"><b>Estado de verificación:</b> {project.verification}</p>}</div>
          <dl><div><dt>Período</dt><dd>{project.period}</dd></div><div><dt>ID de licitación</dt><dd><code>{project.procurementId}</code></dd></div></dl>
        </article>)}
      </div>
    </section>
    <section className="section evidence-note">
      <div><span className="eyebrow light">Alcance de la información</span><h2>Lo publicado y lo pendiente.</h2></div>
      <div><p>Los identificadores y fechas de los proyectos recientes provienen de resoluciones públicas de adjudicación. Los contactos de referencia no se publican por confidencialidad y los montos individuales permanecen como antecedentes internos.</p><p><b>Pendiente:</b> sistematizar el detalle operativo de ERCE experimental 2024 y actualizar la ficha del proyecto 2026 al cierre de su ejecución.</p></div>
    </section>
  </>;
}

function Calidad() { return <><Header kicker="Calidad e Integridad" title="Cumplir bien también es una forma de confianza." lead="Integramos calidad, ética y protección de la información en la manera en que planificamos y ejecutamos." /><section className="section quality-grid"><article className="iso-card"><span>ISO</span><strong>9001:2015</strong><p>Sistema de Gestión de Calidad</p></article><div><span className="eyebrow">Política de calidad</span><blockquote>“Tri Ingeniería es una empresa proveedora del Estado en ámbitos de servicios de medición del aprendizaje y otros afines, y su compromiso es otorgar un servicio de calidad a través de un equipo capacitado, garantizando el cumplimiento de las Bases de Licitación del servicio.”</blockquote></div></section><section className="section"><div className="section-head"><div><span className="eyebrow">Programa de Integridad</span><h2>Prevención y mejora continua</h2></div><a className="text-link" href="/programa-integridad.pdf" target="_blank">Consultar programa →</a></div><div className="value-grid">{[["Datos íntegros","Controles para prevenir alteraciones o falsificación de información."],["Cero soborno","Normas éticas para relaciones transparentes y competencia justa."],["Canal confidencial","Mecanismo para reportar inquietudes o posibles incumplimientos."],["Gestión responsable","Investigación, acciones correctivas y evaluación continua."]].map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section></>; }

function Trabaja() { const roles=[["Jefe de Proyectos","Lidera la planificación y ejecución."],["Recursos Humanos","Coordina convocatoria y gestión de equipos."],["Logística / Informática","Habilita recursos, soporte y continuidad operacional."],["Supervisor de Aplicación","Asegura la ejecución en terreno."],["Examinadores","Aplican instrumentos según protocolos."],["Controller","Apoya seguimiento y control del proyecto."]]; return <><Header kicker="Trabaja con nosotros" title="Tu rigurosidad puede marcar la diferencia." lead="Construimos equipos por proyecto para trabajar en establecimientos educacionales y operaciones de soporte." /><section className="active-callout"><div><span className="eyebrow light">Convocatoria vigente</span><h2>Sistema Nacional de Evaluaciones 2026</h2><p>La postulación se gestiona de forma centralizada en yosimce.cl.</p></div><a className="button light" href="https://yosimce.cl/" target="_blank" rel="noopener noreferrer">Postular en yosimce.cl ↗</a></section><section className="section people-feature"><figure><Image src="/images/equipo-tri.png" alt="Equipo profesional coordinando una operación antes de salir a terreno" fill sizes="(max-width: 1000px) 100vw, 52vw" /><figcaption>Imagen referencial de coordinación de equipos.</figcaption></figure><div><span className="eyebrow">Trabajo con propósito</span><h2>La operación se sostiene en personas preparadas.</h2><p>Cada rol se integra a una cadena de coordinación, soporte y control para ejecutar los protocolos con responsabilidad.</p></div></section><section className="section"><div className="section-head"><div><span className="eyebrow">Perfiles frecuentes</span><h2>¿Dónde puedes aportar?</h2></div></div><div className="roles-grid">{roles.map(([r,d])=><article key={r}><h3>{r}</h3><p>{d}</p></article>)}</div></section><section className="section application"><div><span className="eyebrow light">Postulación externa</span><h2>Un solo canal para cada convocatoria.</h2><p>Para evitar registros duplicados, los antecedentes se reciben exclusivamente en yosimce.cl.</p></div><a className="button light" href="https://yosimce.cl/" target="_blank" rel="noopener noreferrer">Postular en yosimce.cl ↗</a></section></>; }

function Contacto() { return <><Header kicker="Contacto" title="Hablemos de su próximo proyecto." lead="Canal para mandantes, proveedores, colaboradores y personas interesadas en trabajar con nosotros." /><section className="section contact-grid"><div><span className="eyebrow">Escríbanos</span><h2>Cuéntenos qué necesita.</h2><p>Responderemos mediante los datos institucionales que se configuren al publicar el sitio.</p><div className="contact-note"><b>Sociedad de Profesionales Tri Ingeniería Limitada</b><span>Chile</span><span>Dirección, teléfono y correo: por configurar</span></div></div><ContactForm /></section></>; }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const {slug}=await params; const content:Record<string,React.ReactNode>={nosotros:<Nosotros/>,servicios:<Servicios/>,proyectos:<Proyectos/>,"calidad-e-integridad":<Calidad/>,"trabaja-con-nosotros":<Trabaja/>,contacto:<Contacto/>}; if(!pages.includes(slug))notFound(); return <SiteShell><main>{content[slug]}</main></SiteShell>; }
