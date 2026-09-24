import type { FormEvent } from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'

export function Section5Contacto() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.alert('Un asesor se pondrá en contacto contigo lo más pronto posible.')
  }

  return (
    <section
      id="contacto"
      className="landing-section landing-section--contact landing-bordered"
      aria-labelledby="section-5-title"
    >
      <div className="landing-container landing-contact">
        <header className="landing-contact__intro">
          <h2 id="section-5-title">Empieza a ahorrar hoy mismo.</h2>
          <p className="landing-section__subtitle">
            Rellena el formulario y un asesor personal se pondrá en contacto contigo en menos de 24 horas.
            Sin compromiso, sin coste.
          </p>

          <ul className="landing-contact__channels">
            <li>
              <FaPhone className="landing-contact__icon" aria-hidden />
              <div>
                <strong>+34 900 123 456</strong>
                <span>Lun–Vie de 9:00 a 19:00</span>
              </div>
            </li>
            <li>
              <FaWhatsapp className="landing-contact__icon" aria-hidden />
              <div>
                <strong>WhatsApp disponible</strong>
                <span>Respuesta en menos de 1 hora</span>
              </div>
            </li>
            <li>
              <FaEnvelope className="landing-contact__icon" aria-hidden />
              <div>
                <strong>info@eficia.es</strong>
                <span>Te respondemos en menos de 24 horas</span>
              </div>
            </li>
          </ul>
        </header>

        <form className="landing-form" onSubmit={handleSubmit}>
          <h3>Solicita tu estudio gratuito</h3>

          <div className="landing-form__field">
            <label htmlFor="contact-name">
              Nombre completo <span style={{ color: 'var(--color-primary)' }}>*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Kevin Correal"
              required
            />
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-phone">
              Teléfono <span style={{ color: 'var(--color-primary)' }}>*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+34 641 39 22 09"
              required
            />
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-client-type">
              Tipo de cliente <span style={{ color: 'var(--color-primary)' }}>*</span>
            </label>
            <select
              id="contact-client-type"
              name="clientType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecciona tipo de cliente
              </option>
              <option value="empresa">Empresa</option>
              <option value="particulares">Particulares</option>
              <option value="autonomos">Autónomos</option>
            </select>
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-email">
              Correo electrónico <span style={{ color: 'var(--color-primary)' }}>*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="kevin@email.com"
              required
            />
          </div>

          <div className="landing-form__field">
            <label htmlFor="contact-message">
              Mensaje o consulta <span className="landing-form__optional">(opcional)</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Cuéntanos algo sobre tu situación actual, consumo aproximado, dudas..."
            />
          </div>

          <div className="landing-form__field landing-form__field--checkbox">
            <input
              id="contact-privacy"
              name="privacyAccepted"
              type="checkbox"
              required
            />
            <label htmlFor="contact-privacy">
              He leído y acepto la{' '}
              <a href="#footer-legal" className="landing-link">
                política de privacidad
              </a>{' '}
              de Eficia Energía Consultores S.L. <span style={{ color: 'var(--color-primary)' }}>*</span>
            </label>
          </div>

          <button type="submit" className="landing-cta landing-cta--primary">
            Enviar
          </button>
          <p className="landing-form__note">Sin compromiso · Sin coste · Respuesta en 24h</p>
        </form>
      </div>
    </section>
  )
}
