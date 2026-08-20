"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ job = false }: { job?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <form className="contact-form" onSubmit={submit}>
    <label>Nombre completo<input name="nombre" required autoComplete="name" /></label>
    <label>Correo electrónico<input name="correo" required type="email" autoComplete="email" /></label>
    {job ? <><label>Perfil de interés<select name="perfil" required defaultValue=""><option value="" disabled>Selecciona un perfil</option><option>Jefe de Proyectos</option><option>Recursos Humanos</option><option>Logística / Informática</option><option>Supervisor de Aplicación</option><option>Examinador/a</option><option>Controller</option></select></label><label>Currículum<input name="cv" type="file" accept=".pdf,.doc,.docx" /></label></> : <label>Asunto<select name="asunto" defaultValue="Proyecto"><option>Proyecto</option><option>Proveedor</option><option>Consulta general</option><option>Integridad</option></select></label>}
    <label>{job ? "Presentación breve" : "Mensaje"}<textarea name="mensaje" rows={5} required /></label>
    <button className="button primary" type="submit">{job ? "Enviar postulación" : "Enviar mensaje"}</button>
    {sent && <p className="form-status" role="status">Formulario validado. La recepción se activará al conectar el sitio con el correo o servidor institucional.</p>}
  </form>;
}
