export function Footer() {
  return (
    <footer className="landing-footer landing-bordered" id="footer-legal">
      <div className="landing-container landing-footer__grid">
        <div className="landing-footer__brand">
          <img
            className="landing-footer__logo"
            src="https://res.cloudinary.com/dz1vsm25f/image/upload/Eficia-removebg-preview_hmnvbw.png"
            alt="Eficia"
          />
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
              <a href="#como-funciona">Cómo funciona</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="landing-footer__legal">
          <h2 className="landing-footer__heading">Información legal</h2>
          <p>
            Eficia Energía Consultores S.L., domicilio social en Calle Gran Vía 28, 28013 Madrid, España.
            CIF B-88451236. Inscrita en el Registro Mercantil de Madrid, Tomo 41258, Folio 92, Hoja M-734821.
          </p>
          <p>
            Eficia actúa como intermediario independiente en servicios de comparación y asesoramiento energético;
            no comercializa suministro eléctrico ni gas por cuenta propia. El uso de este sitio implica la
            aceptación de nuestros Términos y Condiciones y el tratamiento de datos conforme al RGPD (UE) 2016/679.
          </p>
          <p className="landing-footer__copy">© 2026 Eficia Energía Consultores S.L.. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
