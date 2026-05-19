import { Cloud, Server, Code, Shield, Layout } from 'lucide-react'
import { objetivoGeneral, objetivosEspecificos } from '../data/objetivos'
import '../styles/Objetivos.css'

// Mapa de íconos disponibles
const iconos = { cloud: Cloud, server: Server, code: Code, shield: Shield, layout: Layout }

function Objetivos() {
  return (
    <section id="objetivos" className="objetivos">
      <div className="objetivos-content">
        <h2 className="seccion-titulo">Objetivos</h2>
        <p className="seccion-subtitulo">Metas del curso</p>

        <div className="objetivo-general">
          <h3>Objetivo General</h3>
          <p>{objetivoGeneral}</p>
        </div>

        <div className="objetivos-grid">
          {objetivosEspecificos.map((obj, i) => {
            const Icono = iconos[obj.icono]
            return (
              <div key={i} className="objetivo-card">
                <span className="objetivo-icono">{Icono && <Icono size={24} />}</span>
                <p>{obj.texto}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Objetivos