import { User, Hash, GraduationCap, Building, Calendar } from 'lucide-react'
import '../styles/AcercaDe.css'

// Datos del estudiante
const datos = [
  { icono: User,          label: 'Nombre',    valor: 'Mauro Rodrigo Ruiz Alvarez' },
  { icono: Hash,          label: 'No. Control', valor: '22050727' },
  { icono: GraduationCap, label: 'Carrera',   valor: 'Ingeniería en Sistemas Computacionales' },
  { icono: Calendar,      label: 'Semestre',  valor: 'Enero – Junio 2026' },
  { icono: Building,      label: 'Institución', valor: 'TecNM — Campus Saltillo' },
]

function AcercaDe() {
  return (
    <section id="acerca" className="acerca">
      <div className="acerca-content">
        <h2 className="seccion-titulo">Acerca de mí</h2>
        <p className="seccion-subtitulo">Datos del estudiante</p>

        <div className="acerca-grid">
          {datos.map((dato, i) => {
            const Icono = dato.icono
            return (
              <div key={i} className="acerca-card">
                <span className="acerca-icono"><Icono size={20} /></span>
                <div>
                  <p className="acerca-label">{dato.label}</p>
                  <p className="acerca-valor">{dato.valor}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AcercaDe
