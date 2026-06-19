import './Posicionamiento.css'
import posicionamientoImg from '../../assets/images/posicionamiento.png'

export default function Posicionamiento() {
  return (
    <section className="posicionamiento section" id="quienes-somos">
      <div className="container">
        <div className="posicionamiento__grid">
          <div className="posicionamiento__content">
            <p className="eyebrow posicionamiento__eyebrow">Posicionamiento</p>
            <h2 className="posicionamiento__title">
              Más que cartelería: presencia territorial
            </h2>
            <p className="posicionamiento__text">
              GUTACOM desarrolla, comercializa y gestiona circuitos de vía pública
              en ubicaciones estratégicas de Neuquén y Río Negro, con foco en
              corredores de alto tránsito y zonas vinculadas a Vaca Muerta.
            </p>
          </div>

          <div className="posicionamiento__image">
            <img src={posicionamientoImg} alt="Cartelería GUTACOM — campaña Macro" />
          </div>
        </div>
      </div>
    </section>
  )
}