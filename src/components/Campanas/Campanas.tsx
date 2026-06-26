import './Campanas.css'
import campanaYpfUno from '../../assets/images/campanaYpfUno.png'
import campanaYpfDos from '../../assets/images/campanaYpfDos.png'
import campanaYpfTres from '../../assets/images/campanaYpfTres.png'
import campanaMacroUno from '../../assets/images/campanaMacroUno.png'
import campanaMacroDos from '../../assets/images/campanaMacroDos.png'
import campanaMacroTres from '../../assets/images/campanaMacroTres.png'
import ypfCampañas from '../../assets/images/ypfCampañas.png'
import macroCampañas from '../../assets/images/macroCampañas.png'

const CASOS = [
  {
    id: 1,
    cliente: 'YPF',
    logo: ypfCampañas,
    circuito: 'Circuito Patagonia Norte',
    descripcion: 'Presencia estratégica en corredores vinculados a Vaca Muerta',
    tipo: '',
    fotos: [campanaYpfUno, campanaYpfDos, campanaYpfTres],
  },
  {
    id: 2,
    cliente: 'Macro',
    logo: macroCampañas,
    circuito: 'Aeropuerto San Carlos de Bariloche',
    descripcion: 'Campaña institucional / cobertura regional.',
    tipo: null,
    fotos: [campanaMacroUno, campanaMacroDos, campanaMacroTres],
  },
]

export default function Campanas() {
  return (
    <section className="campanas section section--surface-2" id="casos">
      <div className="container">
        <div className="campanas__header section-header">
          <p className="eyebrow">Campañas en Territorio</p>
          <h2 className="section-header__title">
            Casos reales en Patagonia Norte.
          </h2>
        </div>

        <div className="campanas__casos">
          {CASOS.map(caso => (
            <div key={caso.id} className="campanas__caso">
              <div
                className="campanas__fotos"
                style={{ gridTemplateColumns: `repeat(${caso.fotos.length}, 1fr)` }}
              >
                {caso.fotos.map((foto, i) => (
                  <div key={i} className="campanas__foto">
                    <img src={foto} alt={`${caso.cliente} campaña ${i + 1}`} />
                  </div>
                ))}
              </div>

              <div className="campanas__info">
                <img src={caso.logo} alt={caso.cliente} className="campanas__logo" />
                {caso.circuito && (
                  <p className="campanas__circuito">{caso.circuito}</p>
                )}
                <p className="campanas__descripcion">{caso.descripcion}</p>
                {caso.tipo && (
                  <p className="campanas__tipo">{caso.tipo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}