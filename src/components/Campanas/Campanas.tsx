import './Campanas.css'
import campanaYpfUno from '../../assets/images/campanaYpfUno.png'
import campanaYpfDos from '../../assets/images/campanaYpfDos.png'
import campanaYpfTres from '../../assets/images/campanaYpfTres.png'
import campanaMacroUno from '../../assets/images/campanaMacroUno.png'
import campanaMacroDos from '../../assets/images/campanaMacroDos.png'
import campanaMacroTres from '../../assets/images/campanaMacroTres.png'
// Cuando lleguen las fotos reemplazar con imports de imágenes
const CASOS = [
  {
    id: 1,
    cliente: 'YPF',
    circuito: 'Circuito Patagonia Norte',
    descripcion: 'Presencia estratégica en corredores vinculados a Vaca Muerta',
    tipo: '',
    fotos: [campanaYpfUno, campanaYpfDos, campanaYpfTres],
  },
  {
    id: 2,
    cliente: 'Macro',
    circuito: null,
    descripcion: 'Campaña institucional / cobertura regional.',
    tipo: null,
    fotos: [campanaMacroUno, campanaMacroDos, campanaMacroTres],
  },
]

export default function Campanas() {
  return (
    <section className="campanas section section--surface-2">
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
                    {typeof foto === 'string' && foto.startsWith('Foto') ? (
                      <div className="img-placeholder">
                        <span>📷</span>
                        <p>{foto}</p>
                      </div>
                    ) : (
                      <img src={foto} alt={`${caso.cliente} campaña ${i + 1}`} />
                    )}
                  </div>
                ))}
              </div>

              <div className="campanas__info">
                <span className="campanas__cliente">{caso.cliente}</span>
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