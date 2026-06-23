import { useState, useEffect } from 'react'
import './Navbar.css'
import logoGutacom from '../../assets/images/logoGutacom.png'

const NAV_LINKS = [
  { label: 'Inicio',       href: '#inicio' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Cobertura',    href: '#cobertura' },
  { label: 'Capacidades',  href: '#capacidades' },
  { label: 'Clientes',     href: '#clientes' },
  { label: 'Contacto',     href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#inicio" className="navbar__logo">
          <img src={logoGutacom} alt="GUTACOM — Consultores / Vía Pública" />
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}