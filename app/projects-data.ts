export type Project = {
  id: string;
  title: string;
  period: string;
  coverage: string;
  procurementId: string;
  category: "SIMCE" | "Pilotaje" | "Estudio internacional";
  consortium?: string;
  verification?: string;
  status?: "En curso";
};

export const projects: Project[] = [
  {
    id: "simce-2014",
    title: "Aplicación de Prueba SIMCE 2014 y SIMCE de Inglés — Ítem 4",
    period: "Julio–diciembre de 2014",
    coverage: "11.124 cursos, aproximadamente 330.000 estudiantes y 5 regiones: La Araucanía, Los Ríos, Los Lagos, Aysén y Magallanes.",
    procurementId: "721703-4-LP14",
    category: "SIMCE",
  },
  {
    id: "simce-2015",
    title: "Aplicación Pruebas SIMCE 2015 — Ítems 3 y 4",
    period: "Agosto–diciembre de 2015",
    coverage: "20.680 cursos, aproximadamente 620.000 estudiantes y 4 regiones: Metropolitana, O’Higgins, Maule y Biobío.",
    procurementId: "721703-9-LP15",
    category: "SIMCE",
  },
  {
    id: "pilotaje-2016",
    title: "Pilotaje cuantitativo de cuestionarios de 4° básico y II medio",
    period: "Marzo–mayo de 2016",
    coverage: "Más de 10.000 instrumentos: más de 5.000 estudiantes y más de 5.000 apoderados.",
    procurementId: "721703-42-LP15",
    category: "Pilotaje",
  },
  {
    id: "simce-2016",
    title: "Aplicación Pruebas SIMCE 2016 — Ítem 3, Región Metropolitana",
    period: "Junio de 2016–enero de 2017",
    coverage: "9.406 cursos y aproximadamente 300.000 estudiantes.",
    procurementId: "721703-1-LR16",
    category: "SIMCE",
  },
  {
    id: "pilotaje-2018",
    title: "Pilotaje cuantitativo de cuestionarios de 4° básico y II medio 2018",
    period: "Octubre de 2018–febrero de 2019",
    coverage: "Más de 10.000 instrumentos: 6.866 estudiantes, 5.354 apoderados, 387 docentes y 3 regiones.",
    procurementId: "721703-21-LQ18",
    category: "Pilotaje",
  },
  {
    id: "pilotaje-2019",
    title: "Pilotaje cuantitativo de cuestionarios de 4° básico y 2° medio 2019",
    period: "Septiembre de 2019–enero de 2020",
    coverage: "Más de 10.000 instrumentos: 4.894 estudiantes, 5.094 apoderados, 483 docentes y 3 regiones.",
    procurementId: "721703-14-LQ19",
    category: "Pilotaje",
  },
  {
    id: "timss-2023",
    title: "Aplicación definitiva del Estudio Internacional TIMSS 2023",
    period: "Septiembre de 2023–febrero de 2024",
    coverage: "200 establecimientos, 352 cursos de 4° y 8° básico, 9.100 estudiantes, 3.410 cuestionarios a padres y cobertura nacional.",
    procurementId: "721703-24-LR23",
    category: "Estudio internacional",
    consortium: "Ejecutado en Unión Temporal de Proveedores por Tri Ingeniería Ltda., Asesorías Profesionales Gumucio y Rivillo Ltda., Ingemas Operaciones Ltda. y ENNEA Consultores S.A.",
  },
  {
    id: "erce-experimental-2024",
    title: "Aplicación Experimental del Estudio ERCE 2025",
    period: "Adjudicado en marzo de 2024 · ejecución 2024/2025",
    coverage: "Piloto internacional. El detalle operativo de establecimientos, cursos y estudiantes está pendiente de sistematización.",
    procurementId: "721703-49-LQ23",
    category: "Estudio internacional",
    consortium: "Ejecutado en Unión Temporal de Proveedores (UTP).",
  },
  {
    id: "pisa-2025",
    title: "Aplicación Prueba PISA 2025 (OCDE)",
    period: "Agosto de 2025–febrero de 2026",
    coverage: "250 establecimientos, 6.494 estudiantes, modalidad 100% en línea y cobertura nacional.",
    procurementId: "721703-2-LR25",
    category: "Estudio internacional",
    consortium: "Ejecutado en Unión Temporal de Proveedores (UTP).",
  },
  {
    id: "erce-2025",
    title: "Aplicación Prueba ERCE 2025 (LLECE–UNESCO)",
    period: "Septiembre de 2025–agosto de 2026",
    coverage: "230 establecimientos y 11.756 estudiantes de 3° y 6° básico, en el marco del estudio regional latinoamericano.",
    procurementId: "721703-15-LR25",
    category: "Estudio internacional",
    consortium: "Ejecutado en Unión Temporal de Proveedores (UTP).",
  },
  {
    id: "sistema-nacional-2026",
    title: "Aplicación de Instrumentos del Sistema Nacional de Evaluaciones 2026 — Ítem 2",
    period: "Adjudicado en julio de 2026",
    coverage: "Proyecto actualmente en ejecución. El detalle operativo se incorporará al cierre, una vez sistematizada su cobertura final.",
    procurementId: "721703-4-LR26",
    category: "SIMCE",
    consortium: "Ejecutado en Unión Temporal de Proveedores (UTP).",
    status: "En curso",
  },
];

export const projectSummary = {
  count: 11,
  period: "2014–hoy",
  awarded: "+$14.767 MM",
  regions: "11 regiones",
  students: "+1,28 M",
  client: "Agencia de Calidad de la Educación",
  updatedAt: "19 de agosto de 2026",
};
