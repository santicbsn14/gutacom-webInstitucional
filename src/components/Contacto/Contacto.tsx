import { useState } from 'react'
import './Contacto.css'

type FormState = {
  nombre: string
  empresa: string
  email: string
  zona: string
  mensaje: string
}

const INITIAL_STATE: FormState = {
  nombre: '',
  empresa: '',
  email: '',
  zona: '',
  mensaje: '',
}

export default function Contacto() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.nombre || !form.email || !form.mensaje) return
    setLoading(true)

    // TODO: reemplazar con el endpoint real de envío de email
    // Ejemplo con EmailJS, Formspree o endpoint propio en Node
    await new Promise(resolve => setTimeout(resolve, 1000))

    setEnviado(true)
    setLoading(false)
    setForm(INITIAL_STATE)
  }

  return (
    <section className="contacto section" id="contacto">
      <div className="container">
        <div className="contacto__grid">
          <div className="contacto__info">
            <p className="eyebrow">Contacto</p>
            <h2 className="contacto__title">
              Solicitá una propuesta<br />para tu marca.
            </h2>
            <p className="contacto__subtitle">
              Contanos qué zona, circuito o campaña necesitás desarrollar.
            </p>
          </div>

          <div className="contacto__form">
            {enviado ? (
              <div className="contacto__success">
                <span>✓</span>
                <p>¡Consulta enviada! Nos ponemos en contacto a la brevedad.</p>
              </div>
            ) : (
              <div className="contacto__fields">
                <div className="contacto__row">
                  <div className="contacto__field">
                    <label className="contacto__label" htmlFor="nombre">Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      className="contacto__input"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contacto__field">
                    <label className="contacto__label" htmlFor="empresa">Empresa</label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      className="contacto__input"
                      placeholder="Tu empresa"
                      value={form.empresa}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contacto__row">
                  <div className="contacto__field">
                    <label className="contacto__label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contacto__input"
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contacto__field">
                    <label className="contacto__label" htmlFor="zona">Zona de interés</label>
                    <input
                      id="zona"
                      name="zona"
                      type="text"
                      className="contacto__input"
                      placeholder="Ej: Neuquén, Añelo..."
                      value={form.zona}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contacto__field">
                  <label className="contacto__label" htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="contacto__textarea"
                    placeholder="Contanos sobre tu campaña o circuito de interés..."
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="btn btn--primary contacto__btn"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar consulta'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
