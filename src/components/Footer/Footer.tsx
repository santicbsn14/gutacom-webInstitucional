import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            {/* Reemplazar con <img src={logo} alt="GUTACOM" /> */}
            <span className="footer__logo">GUTACOM</span>
            <p className="footer__tagline">Vía pública · Patagonia Norte</p>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              Copyright © {new Date().getFullYear()} GUTACOM
            </p>
            <p className="footer__dev">
              Desarrollado por{' '}
              {/* TODO: reemplazar con el nombre/link del desarrollador */}
              <a href="https://santiago-viale-web.vercel.app" target="_blank" rel="noopener noreferrer">
                ComunicacionDigital.ar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
