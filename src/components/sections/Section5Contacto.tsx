/**
 * Sección 5 — Contacto (id: #contacto).
 * Estructura: título, subtítulo, horarios, canales autorizados y formulario.
 * Formulario: nombre, teléfono, tipo de cliente (select), correo, mensaje opcional,
 * checkbox de política de privacidad y botón enviar.
 */
export function Section5Contacto() {
  return (
    <section
      id="contacto"
      className="landing-section landing-bordered"
      aria-labelledby="section-5-title"
    >
      <div className="landing-container landing-contact">
        <header className="landing-contact__intro">
          <h2 id="section-5-title">Empieza a ahorrar hoy mismo.</h2>
          <p className="landing-section__subtitle">Rellena el formulario y un asesor personal se pondrá en contacto contigo en menos de 24 horas. Sin compromiso, sin coste.</p>

          <div className="landing-contact__info">
            <div className="landing-contact__block">
              <h3>+34 900 123 456</h3>
              <span>Lun–Vie de 9:00 a 19:00</span>
              <h3>WhatsApp disponible</h3>
              <span>Respuesta en menos de 1 hora </span>
              <h3>info@eficia.es</h3>
              <span>Te respondemos en menos de 24 horas</span>
            </div>
          </div>
        </header>

        <form className="landing-form landing-bordered-inner" noValidate>
          <h3>Solicita tu estudio gratuito</h3>
          <div className="landing-form__field">
            <label htmlFor="contact-name">Nombre completo <span className="important">*</span> </label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Kevin Correal" />
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-phone">Teléfono <span className="important">*</span></label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+34 641 39 22 09" />
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-client-type">Tipo de cliente <span className="important">*</span></label>
            <select id="contact-client-type" name="clientType" defaultValue="">
              <option value="" disabled>
                Selecciona tipo de cliente
              </option>
              <option value="tipo-1">Empresa</option>
              <option value="tipo-2">Particulares</option>
              <option value="tipo-3">Autónomos</option>
            </select>
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-email">Correo electrónico <span className="important">*</span></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="kevin@email.com" />
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-message">
              Mensaje o consulta <span className="landing-form__optional">(opcional)</span>
            </label>
            <textarea id="contact-message" name="message" rows={6} placeholder="Cuéntanos algo sobre tu situación actual, consumo aproximado, dudas..." />
          </div>

          <div className="landing-form__field landing-form__field--checkbox">
            <input id="contact-privacy" name="privacyAccepted" type="checkbox" />
            <label htmlFor="contact-privacy">
              He leído y acepto la{' '}
              <a href="#" className="text-[--color-forest] underline underline-offset-2">política de privacidad</a>
              {' '}de Eficia. <span className="important">*</span>
            </label>
          </div>

          <button type="submit" className="landing-cta landing-cta--primary">
            Enviar
          </button>
          <p>Sin compromiso · Sin coste · Respuesta en 24h</p>
        </form>
      </div>
    </section>
  )
}
