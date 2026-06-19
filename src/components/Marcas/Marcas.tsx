import './Marcas.css'

// Cuando lleguen los logos reemplazar con imports de imágenes
const MARCAS = [
  'Macro',
  'YPF',
  'Flybondi',
  'Correo Argentino',
  'Télam',
  'Aerolíneas Argentinas',
  'Corona',
  'Quilmes',
  'RN Patagonio',
  'Patagonia',
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
            <div key={marca} className="marcas__item">
              {/*
                Reemplazar contenido por:
                <img src={logoMarca} alt={marca} />
              */}
              <span className="marcas__nombre">{marca}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
