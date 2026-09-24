/**
 * Sección 1 — Beneficios (id: #beneficios).
 * Estructura: título de sección + 3 tarjetas (cada una con título + texto breve).
 */
const BENEFICIOS = [
  {
    title: "Tarifas opacas",
    description: "Términos de potencia inflados y cláusulas que nadie explica. Tu comercializadora cuenta con ello."
  },
  {
    title: "Subidas silenciosas",
    description: "Descuentos temporales que vencen sin previo aviso. De repente pagas un 20% más sin haber cambiado nada."
  },
  {
    title: "Comparar es agotador",
    description: "El mercado libre español tiene decenas de tarifas con variables que cambian cada mes. Es un laberinto diseñado a propósito."
  }
];

export function Section1Beneficios() {
  return (
    <section
      id="beneficios"
      className="landing-section landing-bordered"
      aria-labelledby="section-1-title"
    >
      <div className="landing-container">
        <h2 id="section-1-title">¿Sientes que pagas demasiado en tu factura energética cada mes?</h2>

        <ul className="landing-cards landing-cards--3">
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
