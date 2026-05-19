import { X, GraduationCap, Calendar, Hash, Building, BookOpen } from 'lucide-react'
import '../styles/AcercaDe.css'

// Datos del estudiante
const datos = [
  { icono: GraduationCap, label: 'Carrera',        valor: 'Ingeniería en Sistemas Computacionales' },
  { icono: BookOpen,      label: 'Materia',         valor: 'Cómputo en la Nube' },
  { icono: Calendar,      label: 'Semestre',        valor: 'Enero – Junio 2026' },
  { icono: Hash,          label: 'No. de Control',  valor: '22050727' },
  { icono: Building,      label: 'Institución',     valor: 'TecNM Campus Saltillo' },
]

// Panel lateral deslizable — se abre desde el navbar o el índice
function AcercaDe({ onCerrar }) {
  return (
    <div className="perfil-panel">

      {/* Botón cerrar */}
      <button className="perfil-cerrar" onClick={onCerrar}>
        <X size={20} />
      </button>

      {/* Foto de perfil circular */}
      <div className="perfil-avatar">
        <img src="/sobre mi.jpg" alt="Mauro Rodrigo Ruiz Alvarez" />
      </div>

      {/* Nombre y rol */}
      <div className="perfil-header">
        <h2 className="perfil-nombre">Mauro Rodrigo Ruiz Alvarez</h2>
        <span className="perfil-badge">Estudiante ITS</span>
      </div>

      {/* Separador */}
      <div className="perfil-divider" />

      {/* Lista de datos */}
      <div className="perfil-datos">
        {datos.map((dato, i) => {
          const Icono = dato.icono
          return (
            <div key={i} className="perfil-item">
              <span className="perfil-icono"><Icono size={16} /></span>
              <div>
                <p className="perfil-label">{dato.label}</p>
                <p className="perfil-valor">{dato.valor}</p>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default AcercaDe
