import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ContenidoMediosReputacionPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#5a5b7f] py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center text-white hover:text-[#39bdf5] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a la página principal
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contenido, medios y reputación: cuando la estrategia desaparece
          </h1>
          <p className="text-xl text-white/90">
            Nueva reflexión • Óscar San Emeterio
          </p>
        </div>
      </header>

      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-[#5a5b7f] mb-4">Resumen</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                La comunicación corporativa en crisis no desaparece, sino que pierde su capacidad estratégica cuando
                se reduce a ejecución táctica. Sin integración en decisiones clave, las organizaciones pueden ganar
                visibilidad inmediata pero erosionar su reputación a medio plazo.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">Cuando la comunicación pierde su función estratégica</h2>

              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  El debate sobre la supuesta muerte del PR está mal planteado. El verdadero problema no es la
                  desaparición de las relaciones públicas, sino la confusión sistemática entre comunicación estratégica
                  y simple ejecución táctica. Las organizaciones reducen frecuentemente la comunicación a tareas
                  operativas, perdiendo su función como herramienta de dirección.
                </p>

                <h3 className="text-2xl font-bold text-[#5a5b7f] mt-8 mb-4">La ilusión de la visibilidad</h3>

                <p>
                  En el ecosistema digital actual, las organizaciones confunden presencia con posicionamiento.
                  Aparecer en medios no equivale a construir una posición coherente. La visibilidad sin estrategia
                  puede incluso erosionar la credibilidad cuando los mensajes contradicen las acciones o no responden
                  a un análisis previo de públicos y riesgos.
                </p>

                <h3 className="text-2xl font-bold text-[#5a5b7f] mt-8 mb-4">Decisiones sin análisis previo</h3>

                <p>
                  Las decisiones editoriales se toman con frecuencia de manera reactiva, sin análisis de públicos
                  objetivo ni evaluación de riesgos reputacionales. Esta dinámica convierte la comunicación en un
                  departamento de servicios que simplemente "coloca" contenidos, en lugar de construir narrativas
                  que refuercen la posición estratégica de la organización.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Cuatro ideas centrales del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>La "ilusión de visibilidad": aparición no equivale a construcción de posición</li>
                    <li>Decisiones editoriales reactivas sin análisis previo de públicos o riesgos</li>
                    <li>La reputación requiere coherencia a largo plazo, no acumulación de impactos puntuales</li>
                    <li>Sin autoridad estratégica, la comunicación queda atrapada en la lógica del corto plazo</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-[#5a5b7f] mt-8 mb-4">Reputación como activo de largo plazo</h3>

                <p>
                  La reputación no se construye mediante la acumulación de impactos mediáticos puntuales. Es un
                  activo que requiere coherencia temporal y alineación entre lo que la organización dice y lo que
                  hace. Cuando la comunicación pierde su capacidad de influir en las decisiones estratégicas,
                  este alineamiento se rompe.
                </p>

                <p className="font-semibold text-[#5a5b7f]">
                  La pregunta fundamental no es si el PR está muriendo, sino: ¿Queremos comunicar para salir hoy,
                  o para sostener una posición mañana?
                </p>

                <p>
                  Cuando la comunicación recupera su lugar en la toma de decisiones estratégicas, deja de ser
                  simplemente ejecución y vuelve a ser una herramienta de construcción de valor empresarial y
                  reputacional sostenible.
                </p>

                <div className="text-center mt-8">
                  <a
                    href="https://osanemeterio.substack.com/p/4ed2252b-34c6-4c27-9962-ed3efcae5687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2 text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Leer artículo completo en Substack</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a la página principal</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
