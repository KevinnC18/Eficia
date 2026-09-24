/**
 * Sección 4 — Cómo funciona (id: #como-funciona).
 * Estructura: título + 3 columnas (cada columna = un paso del proceso de la empresa).
 */
const PASOS = [
  {
    title: "Analizamos tu caso",
    description: "Rellenas el formulario en menos de 1 minuto y nos adjuntas tu última factura — o simplemente nos das los datos clave por teléfono."
  },
  {
    title: "Revisamos consumo y contrato",
    description: "Un especialista estudia tu potencia contratada, peajes y tarifa actual frente a todo el mercado libre español."
  },
  {
    title: "Proponemos la mejor solución",
    description: "Te presentamos un informe claro con el ahorro exacto en euros que obtendrás al mes. Sin letra pequeña."
  }
];

export function Section4ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="landing-section landing-bordered"
      aria-labelledby="section-4-title"
    >
      <div className="landing-container">
        <h2 id="section-4-title">Tres pasos. Sin complicaciones.</h2>

        <ol className="landing-steps">
          {PASOS.map((paso, i) => (
            <li key={i} className="landing-step">
              <span className="landing-step__number" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{paso.title}</h3>
              <p>{paso.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
