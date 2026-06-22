import './Hero.css'
import heroImg from '../../assets/images/hero.webp'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <img src={heroImg} alt="Camión en ruta patagónica" />
      </div>

      <div className="hero__overlay" />

      <div className="hero__content container">
        <h1 className="hero__title">
          Presencia estratégica<br />
          en Patagonia Norte
        </h1>
        <div className="hero__separator" />
        <p className="hero__subtitle">
          Vía pública para marcas que necesitan presencia real<br />
          en el corredor energético de Vaca Muerta.
        </p>
      </div>

      <div className="hero__actions container">
        <a href="#contacto" className="btn btn--primary">Solicitar propuesta</a>
        <a href="#cobertura" className="btn btn--outline">Ver cobertura</a>
      </div>
    </section>
  )
}