const NAV_ITEMS = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#contacto', label: 'Contacto' },
] as const

export function Header() {
  return (
    <header className="landing-header landing-bordered">
      <div className="landing-container landing-header__inner">
        <a href="#Beneficios" className="landing-header__logo" aria-label="Inicio — Eficia">
          <img src="https://res.cloudinary.com/dz1vsm25f/image/upload/Eficia-removebg-preview_hmnvbw.png" alt="Eficia" />
        </a>

        <nav className="landing-header__nav" aria-label="Principal">
          <ul className="landing-header__nav-list">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
