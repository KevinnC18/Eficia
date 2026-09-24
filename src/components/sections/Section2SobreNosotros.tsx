const NOSOTROS = [
  { value: '30+', label: 'comercializadoras en el mercado' },
  { value: '€347', label: 'ahorro medio por hogar' },
  { value: '3.000+', label: 'clientes satisfechos' },
  { value: '100%', label: 'auditoría de ahorro' },
] as const

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
            <p>
              En Eficia no vendemos energía. Somos consultores independientes. Revisamos al detalle tus
              facturas recientes, comparamos entre más de 30 comercializadoras en España y negociamos las
              mejores condiciones para tu hogar o negocio.
            </p>
            <p>
              Sin letra pequeña, sin permanencias ocultas. Solo ahorro real y transparente para tu bolsillo.
            </p>
          </div>

          <ul className="landing-stats" aria-label="Estadísticas">
            {NOSOTROS.map((beneficio) => (
              <li key={beneficio.value} className="landing-stat">
                <span className="landing-stat__value">{beneficio.value}</span>
                <span className="landing-stat__label">{beneficio.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
