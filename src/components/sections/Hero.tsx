/**
 * Hero (bloque inicial bajo el header).
 * - Título principal (H1) y subtítulo de propuesta de valor.
 * - Imagen destacada.
 * - Dos CTAs: acción primaria y secundaria.
 */
export function Hero() {
  return (
    <section className="landing-hero landing-bordered" aria-labelledby="hero-title">
      <div className="landing-container landing-hero__grid">
        <div className="landing-hero__content">
          <h1 id="hero-title">Ahorra hasta un 40% en tu factura de luz y gas sin cambiar tus hábitos.</h1>
          <p className="landing-hero__subtitle">Analizamos tu consumo actual, detectamos los cobros indebidos de las comercializadoras y te conseguimos la tarifa más barata del mercado español.</p>

          <div className="landing-hero__actions">
            <a href="#como-funciona" className="landing-cta landing-cta--primary">
              Cómo funciona
            </a>
            <a href="#contacto" className="landing-cta landing-cta--secondary">
              Solicitar auditoría gratuita
            </a>
          </div>
        </div>

        <figure className="landing-hero__media">
          <img
            className="landing-hero__image"
            src="https://images.unsplash.com/photo-1713942590404-d6981e63fb56?w=640&h=480&fit=crop&auto=format"
            alt="Familia revisando su factura de energía en el sofá"
          />
        </figure>
      </div>
    </section>
  )
}
