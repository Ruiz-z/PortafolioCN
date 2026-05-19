import { Cloud, Target, BookOpen, Brain, MessageSquare, User } from 'lucide-react'
import '../styles/indice.css'

// Secciones con scroll suave
const secciones = [
  { icono: <BookOpen size={28} />,      nombre: 'Introducción',    href: '#introduccion' },
  { icono: <Target size={28} />,        nombre: 'Objetivos',       href: '#objetivos' },
  { icono: <Cloud size={28} />,         nombre: 'Evidencias',      href: '#evidencias' },
  { icono: <Brain size={28} />,         nombre: 'Reflexión Final', href: '#reflexion' },
  { icono: <MessageSquare size={28} />, nombre: 'Conclusión',      href: '#conclusion' },
]

// "Acerca de mí" abre el panel lateral — se maneja por separado
function Indice({ onAbrirAcerca }) {
  return (
    <section id="indice" className="indice">
      <h2 className="seccion-titulo">Índice</h2>
      <p className="seccion-subtitulo">Navega por las secciones del portafolio</p>

      <div className="indice-grid">
        {/* Cards con scroll suave */}
        {secciones.map(sec => (
          <a key={sec.href} href={sec.href} className="indice-card">
            <span className="indice-icono">{sec.icono}</span>
            <span className="indice-nombre">{sec.nombre}</span>
          </a>
        ))}

        {/* Card de Acerca de mí — abre panel lateral */}
        <button className="indice-card" onClick={onAbrirAcerca}>
          <span className="indice-icono"><User size={28} /></span>
          <span className="indice-nombre">Acerca de mí</span>
        </button>
      </div>
    </section>
  )
}

export default Indice
