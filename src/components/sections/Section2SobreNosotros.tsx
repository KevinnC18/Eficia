/**
 * Sección 2 — Sobre nosotros (id: #sobre-nosotros).
 * Estructura: título + columna izquierda (texto narrativo) + columna derecha (estadísticas).
 */
const NOSOTROS = [{
  title: "30+",
  description: "Comercializadoras comparadas"
},
{
  title: "€347",
  description: "Ahorro medio anual por hogar"
},
{
  title: "3.000+",
  description: "Clientes asesorados"
},
{
  title: "100%",
  description: "Auditorías sin coste"
}
]

export function Section2SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      className="landing-section landing-bordered"
      aria-labelledby="section-2-title"
    >
      <div className="landing-container">
        <h2 id="section-2-title">Tu auditoría energética 100% gratuita y sin compromiso.</h2>

        <div className="landing-split">
          <div className="landing-split__text">
            <p>En Eficia no vendemos energía. Somos consultores independientes. Revisamos al detalle tus facturas recientes, comparamos entre más de 30 comercializadoras en España y negociamos las mejores condiciones para tu hogar o negocio.</p>
          </div>

          <ul className="landing-stats" aria-label="Estadísticas">
            {NOSOTROS.map((beneficio, i) => (
              <li key={i} className="landing-card">
                <h3>{beneficio.title}</h3>
                <p>{beneficio.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
