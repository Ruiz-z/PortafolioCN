import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Indice from './components/Indice'
import Introduccion from './components/Introduccion'
import Objetivos from './components/Objetivos'
import Evidencias from './components/Evidencias'
import Reflexion from './components/Reflexion'
import Conclusion from './components/Conclusion'

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
      <Conclusion />
    </div>
  )
}

export default App