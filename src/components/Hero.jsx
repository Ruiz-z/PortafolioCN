import { ChevronDown } from 'lucide-react'
import '../styles/Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-institucion">TecNM — Instituto Tecnologico de saltillo</p>
        <h1 className="hero-nombre">Mauro Rodrigo Ruiz Alvarez</h1>
        <h2 className="hero-materia">Cómputo en la Nube</h2>
        <div className="hero-meta">
          <span>Ing.Sistemas Computacionales</span>
          <span className="hero-separador">·</span>
          <span>Semestre Enero–Junio 2026</span>
          <span className="hero-separador">·</span>
          <span>Profesor: Ing. Miguel Salazar del Bosque</span>
        </div>
        <a href="#indice" className="hero-scroll">
            <ChevronDown size={30}/>
            <ChevronDown size={30}/>
        </a>
      </div>
    </section>
  )
}

export default Hero