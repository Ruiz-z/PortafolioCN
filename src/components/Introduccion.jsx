import '../styles/Introduccion.css'

function Introduccion() {
  return (
    <section id="introduccion" className="introduccion">
      <div className="introduccion-content">
        <h2 className="seccion-titulo">Introducción</h2>
        <p className="seccion-subtitulo">Propósito y enfoque de este portafolio</p>

        <div className="introduccion-texto">
          <p>
            El presente portafolio de evidencias documenta el proceso de aprendizaje
            desarrollado durante el semestre en la materia de <strong>Cómputo en la Nube</strong>,
            correspondiente a la carrera de Ingeniería en Sistemas Computacionales del
            TecNM Campus Saltillo.
          </p>
          <p>
            A lo largo de las cinco unidades del curso se exploraron los fundamentos,
            arquitectura, consideraciones de desarrollo, seguridad y diseño de aplicaciones
            en la nube. Cada evidencia aquí presentada refleja una actividad concreta
            realizada durante el semestre.
          </p>
          <p>
            El objetivo de este portafolio es demostrar de forma ordenada y reflexiva
            las competencias adquiridas, no solo como registro de actividades, sino como
            una herramienta de metacognición que permite identificar avances, áreas de
            oportunidad y aprendizajes significativos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Introduccion