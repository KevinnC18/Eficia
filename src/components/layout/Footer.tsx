/**
 * Footer de la landing.
 * - Logo: mismo criterio que en el header.
 * - Links útiles: navegación secundaria o recursos (políticas, FAQ, etc.).
 * - Legal: textos legales simulados (copyright, términos, privacidad).
 */
export function Footer() {
  return (
    <footer className="landing-footer landing-bordered">
      <div className="landing-container landing-footer__grid">
        <div className="landing-footer__brand">
          <img src="https://res.cloudinary.com/dz1vsm25f/image/upload/Eficia-removebg-preview_hmnvbw.png" alt="Eficia" />
        </div>

        <div className="landing-footer__links">
          <h2 className="landing-footer__heading">Links útiles</h2>
          <ul>
            <li>
              <a href="#beneficios">Beneficios</a>
            </li>
            <li>
              <a href="#sobre-nosotros">Sobre Eficia</a>
            </li>
            <li>
              <a href="#como-funciona">Como funciona</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="landing-footer__legal">
          <h2 className="landing-footer__heading">Información legal</h2>
          <p>Texto legal</p>
          <p>© 2026 — Eficia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
