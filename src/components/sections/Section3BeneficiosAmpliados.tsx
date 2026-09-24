/**
 * Sección 3 — Beneficios ampliados / valor detallado.
 * Estructura: título de sección + subtítulo (segundo título) + 6 tarjetas (título + texto).
 */
const BENEFICIOS = [
  {
    title: "Ahorro garantizado",
    description: "Solo te proponemos un cambio si realmente reducimos tu gasto mensual. Si no ahorramos, no cambiamos nada."
  },
  {
    title: "Sin papeleos",
    description: "El mercado libre español tiene decenas de tarifas con variables que cambian cada mes. Es un laberinto diseñado a propósito."
  },
  {
    title: "Estudio 100% gratuito",
    description: "No pagas nada por nuestro análisis inicial. Ni ahora, ni después, ni nunca si decides no cambiar."
  },
  {
    title: "Independencia real",
    description: "Trabajamos para ti, no para las grandes eléctricas. Sin comisiones ocultas de comercializadoras."
  },
  {
    title: "Atención personalizada",
    description: "Un asesor dedicado resolverá todas tus dudas por teléfono o WhatsApp, cuando lo necesites."
  },
  {
    title: "Sin corte de suministro",
    description: "El cambio de tarifa es meramente administrativo. Tu luz y gas nunca se interrumpen."
  }
];

export function Section3BeneficiosAmpliados() {
  return (
    <section
      className="landing-section landing-bordered"
      aria-labelledby="section-3-title"
    >
      <div className="landing-container">
        <h2 id="section-3-title">Seis razones para confiar en nosotros.</h2>

        <ul className="landing-cards landing-cards--6">
          {BENEFICIOS.map((beneficio, i) => (
            <li key={i} className="landing-card landing-bordered-inner">
              <h3>{beneficio.title}</h3>
              <p>{beneficio.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
