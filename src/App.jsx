import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Indice from './components/Indice'
import Introduccion from './components/Introduccion'
import Objetivos from './components/Objetivos'
import Evidencias from './components/Evidencias'
import Reflexion from './components/Reflexion'
import Conclusion from './components/Conclusion'
import AcercaDe from './components/AcercaDe'
import Anexos from './components/Anexos'
import Footer from './components/Footer'

function App() {
  // Estado para el modal de anexos
  const [anexosAbierto, setAnexosAbierto] = useState(false)
  // Estado para el panel lateral de perfil
  const [acercaAbierto, setAcercaAbierto] = useState(false)

  return (
    <div>
      <Navbar
        onAbrirAnexos={() => setAnexosAbierto(true)}
        onAbrirAcerca={() => setAcercaAbierto(true)}
      />
      <Hero />
      <Indice onAbrirAcerca={() => setAcercaAbierto(true)} />
      <Introduccion />
      <Objetivos />
      <Evidencias />
      <Reflexion />
      <Conclusion />
      <Footer />

      {/* Modal de anexos */}
      {anexosAbierto && <Anexos onCerrar={() => setAnexosAbierto(false)} />}

      {/* Panel lateral de perfil */}
      {acercaAbierto && <AcercaDe onCerrar={() => setAcercaAbierto(false)} />}
    </div>
  )
}

export default App
