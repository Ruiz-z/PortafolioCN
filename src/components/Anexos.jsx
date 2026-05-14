import { X, FileText, Link, Video } from 'lucide-react'
import { anexos } from '../data/anexos'
import '../styles/Anexos.css'

// Íconos por tipo de anexo
const iconoTipo = { pdf: FileText, link: Link, video: Video }

function Anexos({ onCerrar }) {
  return (
    <>
      {/* Fondo oscuro detrás del modal */}
      <div className="modal-overlay" onClick={onCerrar} />

      {/* Modal */}
      <div className="modal">
        <div className="modal-header">
          <h2>Anexos</h2>
          <button className="modal-cerrar" onClick={onCerrar}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-subtitulo">Recursos y materiales del curso</p>

          <div className="anexos-lista">
            {anexos.map((anexo, i) => {
              const Icono = iconoTipo[anexo.tipo] || Link
              return (
                <a
                  key={i}
                  href={anexo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="anexo-item"
                >
                  <span className="anexo-icono"><Icono size={20} /></span>
                  <div>
                    <p className="anexo-nombre">{anexo.nombre}</p>
                    <p className="anexo-tipo">{anexo.tipo.toUpperCase()}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Anexos
