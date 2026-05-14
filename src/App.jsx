import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Indice from './components/Indice'
import Introduccion from './components/Introduccion'
import Objetivos from './components/Objetivos'
import Evidencias from './components/Evidencias'

function App(){
  return(
    <div>
      <Navbar />
      <Hero />
      <Indice />
      <Introduccion />
      <Objetivos />
      <Evidencias />
    </div>
  )
}

export default App