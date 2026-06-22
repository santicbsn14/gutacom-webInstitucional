import './Cobertura.css'
import coberturaUno from '../../assets/images/coberturaUno.webp'
import coberturaDos from '../../assets/images/coberturaDos.webp'
import coberturaTres from '../../assets/images/coberturaTres.webp'

const FOTOS = [
  { id: 1, src: coberturaUno, alt: 'Cobertura — ruta' },
  { id: 2, src: coberturaDos, alt: 'Cobertura — ciudad' },
  { id: 3, src: coberturaTres, alt: 'Cobertura — autopista' },
]

export default function Cobertura() {
  return (
    <section className="cobertura section" id="capacidades">
      <div className="container">
        <div className="cobertura__header section-header">
          <p className="eyebrow">Cobertura y Circuitos</p>
          <h2 className="section-header__title">
            Posiciones ruteras de alto impacto.
          </h2>
          <p className="section-header__subtitle">
            Inventario estratégico y circuitos específicos según objetivos de campaña.
          </p>
        </div>

        <div className="cobertura__grid">
          {FOTOS.map(foto => (
            <div key={foto.id} className="cobertura__foto">
              <img src={foto.src} alt={foto.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}