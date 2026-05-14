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

function App() {
  const [anexosAbierto, setAnexosAbierto] = useState(false)

  return (
    <div>
      <Navbar onAbrirAnexos={() => setAnexosAbierto(true)} />
      <Hero />
      <Indice />
      <Introduccion />
      <Objetivos />
      <Evidencias />
      <Reflexion />
      <Conclusion />
      <AcercaDe />

      {/* Modal de anexos */}
      {anexosAbierto && <Anexos onCerrar={() => setAnexosAbierto(false)} />}
    </div>
  )
}

export default App
