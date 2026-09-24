import { useState } from 'react'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'

const NAV_ITEMS = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#sobre-nosotros', label: 'Sobre Eficia' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#contacto', label: 'Contacto' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="landing-header">
      <div className="landing-container landing-header__inner">
        <a href="#" className="landing-header__brand" aria-label="Inicio — Eficia">
          <img
            className="landing-header__logo"
            src="https://res.cloudinary.com/dz1vsm25f/image/upload/Eficia-removebg-preview_hmnvbw.png"
            alt="Eficia"
          />
        </a>

        <nav
          className={`landing-header__nav ${isMenuOpen ? 'landing-header__nav--open' : ''}`}
          aria-label="Principal"
        >
          <ul className="landing-header__nav-list">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="landing-header__menu-btn"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX aria-hidden /> : <HiOutlineMenuAlt3 aria-hidden />}
        </button>
      </div>
    </header>
  )
}
