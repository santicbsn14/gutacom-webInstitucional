import './Expansion.css'
import fotoExpansion from '../../assets/images/expansionAMedida.png'
const PASOS = [
  'Relevamiento territorial',
  'Proyecto y habilitaciones',
  'Construcción de estructura',
  'Instalación y puesta en operación',
]

export default function Expansion() {
  return (
    <section className="expansion section" id="posiciones">
      <div className="expansion__inner">
        <div className="expansion__image">
           <img src={fotoExpansion} alt="Expansión GUTACOM" />
          <div className="expansion__image-overlay" />

          <div className="expansion__image-text">
            <p className="eyebrow expansion__eyebrow">Expansión a Medida</p>
            <h2 className="expansion__title">
              Desarrollo de nuevas posiciones.
            </h2>
          </div>
        </div>

        <div className="expansion__content">
          <p className="expansion__intro">
            Si una ubicación estratégica no existe, la desarrollamos.
          </p>
          <ul className="expansion__pasos">
            {PASOS.map((paso, i) => (
              <li key={i} className="expansion__paso">
                {paso}
              </li>
            ))}
          </ul>
          <p className="expansion__footer">
            Desarrollo de nuevos emplazamientos y soluciones de cobertura
            en función de los objetivos de cada marca.
          </p>
        </div>
      </div>
    </section>
  )
}