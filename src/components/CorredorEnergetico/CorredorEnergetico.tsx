import './CorredorEnergetico.css'
import mapa from '../../assets/images/mapa.png'
const CIUDADES_NQN = [
  'Neuquén Capital', 'Añelo', 'Plottier', 'Junín de los Andes',
  'Rincón de los Sauces', 'Centenario', 'Arroyito', 'Las Lajas',
  'Vista Alegre', 'Mari Menuco', 'Loncopué', 'Plaza Huincul',
  'Cutral Co', 'La Rinconada', 'Collón Curá', 'Piedra del Águila',
  'Picún Leufú', 'El Chocón', 'Chos Malal', 'Zapala',
]

const CIUDADES_RN = [
  'Viedma', 'Bariloche', 'Catriel', 'El Bolsón', 'Campo Grande',
  'Cinco Saltos', 'Cipolletti', 'Allen', 'Villa Regina', 'Choele Choel',
  'Pomona', 'Lamarque', 'San Antonio Oeste', 'Ing. Jacobacci',
  'Los Menucos', 'Maquinchao', 'Chichinales', 'Río Colorado',
]

export default function CorredorEnergetico() {
  return (
    <section className="corredor section section--surface" id="cobertura">
      <div className="container">
        <div className="corredor__grid">
          <div className="corredor__content">
            <p className="eyebrow">Corredor Energético</p>
            <h2 className="section-header__title">
              Presencia en una zona clave del país
            </h2>
            <p className="corredor__intro">
              Cobertura en rutas, accesos, ciudades y áreas de desarrollo económico
              vinculadas a la actividad energética, logística e industrial.
            </p>

            <div className="corredor__provincias">
              <div className="corredor__provincia">
                <p className="corredor__ciudad-list">
                  {CIUDADES_NQN.join(', ')}.
                </p>
              </div>
              <div className="corredor__provincia">
                <p className="corredor__ciudad-list">
                  {CIUDADES_RN.join(', ')}.
                </p>
              </div>
            </div>
          </div>

          <div className="corredor__map">
            Reemplazar con <img src={mapa} alt="Mapa Patagonia Norte" />
          </div>
        </div>
      </div>
    </section>
  )
}
