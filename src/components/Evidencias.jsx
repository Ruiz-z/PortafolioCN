import { useState } from 'react'
import { Cloud, Server, Layers, Shield, Cpu, ChevronLeft, ChevronRight, ArrowLeft, Link, FileText, Image } from 'lucide-react'
import { unidades } from '../data/evidencias'
import '../styles/Evidencias.css'

// Mapa de íconos por unidad
const iconos = { cloud: Cloud, server: Server, layers: Layers, shield: Shield, cpu: Cpu }

// Íconos para anexos
const iconoAnexo = { link: Link, pdf: FileText, captura: Image }

function Evidencias() {
  const [unidadActiva, setUnidadActiva] = useState(null) // null = vista grid
  const [slideActual, setSlideActual] = useState(0)

  // Abrir carrusel de una unidad
  function abrirUnidad(unidad) {
    setUnidadActiva(unidad)
    setSlideActual(0)
  }

  // Volver al grid
  function volver() {
    setUnidadActiva(null)
    setSlideActual(0)
  }

  // Navegar carrusel
  function anterior() {
    setSlideActual(i => Math.max(0, i - 1))
  }

  function siguiente() {
    setSlideActual(i => Math.min(unidadActiva.actividades.length - 1, i + 1))
  }

  return (
    <section id="evidencias" className="evidencias">
      <div className="evidencias-content">

        {/* ── VISTA GRID ── */}
        {!unidadActiva && (
          <>
            <h2 className="seccion-titulo">Evidencias de Aprendizaje</h2>
            <p className="seccion-subtitulo">
             Unidad 1 – 5
            </p>

            <div className="unidades-grid">
              {unidades.map(unidad => {
                const Icono = iconos[unidad.icono]
                return (
                  <button
                    key={unidad.id}
                    className="unidad-card"
                    onClick={() => abrirUnidad(unidad)}
                  >
                    <div className="unidad-card__top">
                      <span className="unidad-badge">Unidad {unidad.id}</span>
                      {Icono && <Icono size={22} className="unidad-icono" />}
                    </div>
                    <h3 className="unidad-card__titulo">{unidad.titulo}</h3>
                    <p className="unidad-card__desc">{unidad.descripcion}</p>
                    <div className="unidad-card__tags">
                      {unidad.actividades.slice(0, 3).map(act => (
                        <span key={act.id} className="unidad-tag">
                          {act.titulo.split(' ').slice(0, 3).join(' ')}...
                        </span>
                      ))}
                      {unidad.actividades.length > 3 && (
                        <span className="unidad-tag unidad-tag--mas">
                          +{unidad.actividades.length - 3} más
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* ── VISTA CARRUSEL ── */}
        {unidadActiva && (
          <div className="carrusel-wrapper">

            {/* Header del carrusel */}
            <div className="carrusel-header">
              <button className="carrusel-volver" onClick={volver}>
                <ArrowLeft size={18} /> Volver
              </button>
              <div>
                <span className="unidad-badge">Unidad {unidadActiva.id}</span>
                <h2 className="carrusel-titulo">{unidadActiva.titulo}</h2>
              </div>
              <span className="carrusel-contador">
                {slideActual + 1} / {unidadActiva.actividades.length}
              </span>
            </div>

            {/* Slide de la actividad actual */}
            {(() => {
              const act = unidadActiva.actividades[slideActual]
              return (
                <div className="carrusel-slide">
                  <div className="slide-meta">
                    <span className="slide-num">Actividad {act.id}</span>
                    <span className="slide-fecha">{act.fecha}</span>
                  </div>
                  <h3 className="slide-titulo">{act.titulo}</h3>

                  <div className="slide-bloque">
                    <h4>Descripción</h4>
                    <p>{act.descripcion}</p>
                  </div>

                  <div className="slide-bloque">
                    <h4>Aprendizaje</h4>
                    <p>{act.aprendizaje}</p>
                  </div>

                  <div className="slide-bloque">
                    <h4>Reflexión</h4>
                    <p>{act.reflexion}</p>
                  </div>

                  {act.anexos.length > 0 && (
                    <div className="slide-bloque">
                      <h4>Anexos</h4>
                      <div className="slide-anexos">
                        {act.anexos.map((anexo, i) => {
                          const IconoA = iconoAnexo[anexo.tipo] || Link
                          return (
                            <a
                              key={i}
                              href={anexo.url}
                              target="_blank"
                              rel="noreferrer"
                              className="slide-anexo"
                            >
                              <IconoA size={14} />
                              {anexo.nombre}
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })()}

            {/* Botones de navegación */}
            <div className="carrusel-nav">
              <button
                className="carrusel-btn"
                onClick={anterior}
                disabled={slideActual === 0}
              >
                <ChevronLeft size={20} /> Anterior
              </button>

              <div className="carrusel-dots">
                {unidadActiva.actividades.map((_, i) => (
                  <button
                    key={i}
                    className={`carrusel-dot${i === slideActual ? ' carrusel-dot--activo' : ''}`}
                    onClick={() => setSlideActual(i)}
                  />
                ))}
              </div>

              <button
                className="carrusel-btn"
                onClick={siguiente}
                disabled={slideActual === unidadActiva.actividades.length - 1}
              >
                Siguiente <ChevronRight size={20} />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}

export default Evidencias