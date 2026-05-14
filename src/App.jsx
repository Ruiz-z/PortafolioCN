import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Indice from './components/Indice'
import Introduccion from './components/Introduccion'
import Objetivos from './components/Objetivos'
import Evidencias from './components/Evidencias'
import Reflexion from './components/Reflexion'

function App(){
  return(
    <div>
      <Navbar />
      <Hero />
      <Indice />
      <Introduccion />
      <Objetivos />
      <Evidencias />
      <Reflexion />
    </div>
  )
}

export default App