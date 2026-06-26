import './Footer.css'
import logoGutacom from '../../assets/images/logoGutacom.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={logoGutacom} alt="GUTACOM — Consultores / Vía Pública" className="footer__logo" />
            <p className="footer__tagline">Vía pública · Patagonia Norte</p>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              Copyright © {new Date().getFullYear()} GUTACOM
            </p>
            <p className="footer__dev">
              Desarrollado por{' '}
              <a href="https://santiago-viale-web.vercel.app" target="_blank" rel="noopener noreferrer">
                Santiago Viale
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}