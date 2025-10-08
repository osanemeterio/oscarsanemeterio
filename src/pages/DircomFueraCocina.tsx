import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function DircomFueraCocinaPage() {
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
            Un dircom fuera de la cocina es un dircom a medias
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
                En España, solo un tercio de los directores de comunicación participa en los comités
                ejecutivos de sus empresas, frente al 60–70 % en Reino Unido y Estados Unidos.
                El informe Estado de la Comunicación en España 2025 confirma un retraso que no es
                cultural, sino competitivo. Cuando la comunicación no está en la mesa donde se decide,
                las empresas pierden agilidad, legitimidad y capacidad de anticiparse.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">La comunicación como función estratégica</h2>

              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  El problema no es solo que el director de comunicación no esté presente en las reuniones
                  estratégicas. El problema es que, sin esa presencia, las decisiones se toman sin considerar
                  su impacto comunicacional hasta que ya es demasiado tarde.
                </p>

                <p>
                  La comunicación deja de ser un complemento cuando se convierte en el elemento que determina
                  si una estrategia será comprendida, aceptada y ejecutada por todos los públicos relevantes:
                  empleados, clientes, inversores, instituciones.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Por qué la ausencia del dircom en el comité ejecutivo es un déficit estratégico</li>
                    <li>La diferencia entre España y otros mercados desarrollados</li>
                    <li>Cómo la comunicación impulsa la reputación y la ventaja competitiva</li>
                    <li>El papel del dircom en la gestión de crisis y la anticipación de riesgos</li>
                    <li>Claves para que la comunicación alcance el nivel que le corresponde</li>
                  </ul>
                </div>

                <div className="text-center mt-8">
                  <a
                    href="https://osanemeterio.substack.com/p/un-dircom-fuera-de-la-cocina-es-un"
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
