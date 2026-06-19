import './styles/index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Posicionamiento from './components/Posicionamiento/Posicionamiento'
import CorredorEnergetico from './components/CorredorEnergetico/CorredorEnergetico'
import Cobertura from './components/Cobertura/Cobertura'
import Expansion from './components/Expansion/Expansion'
import Marcas from './components/Marcas/Marcas'
import Campanas from './components/Campanas/Campanas'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Posicionamiento />
        <CorredorEnergetico />
        <Cobertura />
        <Expansion />
        <Marcas />
        <Campanas />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
