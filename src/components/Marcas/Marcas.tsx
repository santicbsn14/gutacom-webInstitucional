import './Marcas.css'
import macro from '../../assets/images/macro.png'
import ypf from '../../assets/images/ypf.png'
import flybondi from '../../assets/images/flybondi.png'
import correoArgentino from '../../assets/images/correoArgentino.png'
import telam from '../../assets/images/telam.png'
import aerolineasArgentinas from '../../assets/images/aerolineasArgentinas.png'
import corona from '../../assets/images/corona.png'
import quilmes from '../../assets/images/quilmes.png'
import rioNegro from '../../assets/images/rioNegro.png'
import patagonia from '../../assets/images/patagonia.png'
const MARCAS = [
  { nombre: 'Macro', logo: macro },
  { nombre: 'YPF', logo: ypf },
  { nombre: 'Flybondi', logo: flybondi },
  { nombre: 'Correo Argentino', logo: correoArgentino },
  { nombre: 'Télam', logo: telam },
  { nombre: 'Aerolíneas Argentinas', logo: aerolineasArgentinas },
  { nombre: 'Corona', logo: corona },
  { nombre: 'Quilmes', logo: quilmes },
  { nombre: 'Río Negro', logo: rioNegro },
  { nombre: 'Patagonia', logo: patagonia },
]

export default function Marcas() {
  return (
    <section className="marcas section" id="clientes">
      <div className="container">
        <p className="eyebrow marcas__eyebrow">Marcas que confían</p>
        <h2 className="marcas__title">en nuestra cobertura</h2>
        <div className="marcas__separator" />
        <div className="marcas__grid">
          {MARCAS.map(marca => (
            <div key={marca.nombre} className="marcas__item">
              <img src={marca.logo} alt={marca.nombre} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}