import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function PeriodismoSupervivenciaPage() {
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
            Periodismo en modo supervivencia: credibilidad frente al algoritmo
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
                La inteligencia artificial está transformando radicalmente el consumo de noticias. Entre el 40 y el 61%
                del público ya utiliza IA generativa para informarse. El periodismo enfrenta un desafío existencial:
                competir con creadores de contenido que dominan los algoritmos mientras mantiene su credibilidad y autoridad.
                La profesión no desaparecerá, pero debe reinventarse dentro de los espacios algorítmicos.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">El nuevo ecosistema informativo</h2>

              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Según el Digital News Report del Instituto Reuters, entre el 40 y el 61% del público ya utiliza
                  inteligencia artificial generativa para acceder a noticias. El uso semanal se ha incrementado del
                  18% al 34%, especialmente entre los jóvenes de 18 a 24 años. Este cambio no es una tendencia: es
                  una transformación estructural del ecosistema informativo.
                </p>

                <h3 className="text-2xl font-bold text-[#5a5b7f] mt-8 mb-4">Tres transformaciones simultáneas</h3>

                <p>
                  El paisaje mediático experimenta cambios profundos en varios frentes. Los medios tradicionales se
                  integran cada vez más con marcas personales digitales. Asistimos a una integración vertical de
                  propiedades mediáticas. Y surgen nuevas interfaces entre la IA y las plataformas de medios.
                </p>

                <p>
                  En este nuevo escenario, el periodismo profesional compite con creadores de contenido que ganan
                  popularidad algorítmica pero carecen de la riguridad y verificación del trabajo periodístico. La
                  profesión enfrenta salarios bajos, inestabilidad estructural y dificultades crecientes para mantener
                  su autoridad.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Preguntas críticas que el artículo plantea:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>¿Cómo puede el periodismo recuperar visibilidad y autoridad?</li>
                    <li>¿Qué estrategias pueden combatir el contenido sensacionalista?</li>
                    <li>¿Cómo desarrollar modelos de compensación justos?</li>
                    <li>¿Cómo mantener la transparencia en contenido generado por IA?</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-[#5a5b7f] mt-8 mb-4">Credibilidad como ventaja competitiva</h3>

                <p className="font-semibold text-[#5a5b7f]">
                  El periodismo debe reimaginarse dentro de los espacios algorítmicos, definiendo estándares de
                  credibilidad que la IA debe respetar, en lugar de resistirse al cambio tecnológico.
                </p>

                <p>
                  La profesión periodística no desaparecerá, pero debe adaptarse a nuevos ecosistemas tecnológicos
                  donde la información está cada vez más mediada por algoritmos. Su valor diferencial radica
                  precisamente en la credibilidad, la verificación y el rigor que los creadores de contenido
                  algorítmico no pueden garantizar.
                </p>

                <div className="text-center mt-8">
                  <a
                    href="https://osanemeterio.substack.com/p/e0d1b12a-207a-4fba-be80-1c89a3f510f2"
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
