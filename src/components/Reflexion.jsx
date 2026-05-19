import '../styles/Reflexion.css'

function Reflexion() {
  return (
    <section id="reflexion" className="reflexion">
      <div className="reflexion-content">
        <h2 className="seccion-titulo">Reflexión Final</h2>
        <p className="seccion-subtitulo">Aprendizajes, fortalezas y áreas de oportunidad</p>

        <div className="reflexion-grid">

          <div className="reflexion-card">
            <h3>¿Qué aprendí?</h3>
            <p>
              Durante el semestre comprendí cómo funciona el cómputo en la nube
              desde sus fundamentos hasta el despliegue real de aplicaciones.
              Trabajar con plataformas como AWS, Azure y Google Cloud me permitió
              ver la teoría aplicada en entornos reales.
            </p>
          </div>

          <div className="reflexion-card">
            <h3>Fortalezas</h3>
            <p>
              Me adapté rápidamente a las herramientas nuevas y mantuve
              constancia en la entrega de actividades. La práctica con
              contenedores Docker y la seguridad en servidores fueron las
              áreas donde más me desenvolvía.
            </p>
          </div>

          <div className="reflexion-card">
            <h3>Áreas de oportunidad</h3>
            <p>
              Necesito profundizar más en arquitecturas de microservicios y
              en la automatización de infraestructura. El tiempo de respuesta
              ante errores en entornos cloud es algo que quiero mejorar.
            </p>
          </div>

          <div className="reflexion-card reflexion-card--destacada">
            <h3>Aprendizaje más significativo</h3>
            <p>
              Desplegar una aplicación real en la nube y verla funcionar
              desde cualquier dispositivo fue el momento que más me marcó.
              Entendí que la nube no es solo tecnología — es una forma
              diferente de pensar el software.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Reflexion