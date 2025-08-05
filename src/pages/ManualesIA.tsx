import { ArrowLeft, FileText, ExternalLink } from 'lucide-react'

export default function ManualesIAPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación */}
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
            Manuales prácticos de IA
          </h1>
          <p className="text-xl text-white/90">
            Recursos gratuitos para dominar las herramientas de inteligencia artificial
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Información sobre el contenido */}
          <div className="mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <FileText className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">
                  Biblioteca de recursos IA
                </h2>
              </div>

              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  He creado una biblioteca completa de manuales y guías prácticas sobre inteligencia artificial 
                  que están disponibles de forma gratuita en la sección de descargas de Conexión Pública.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                  <h3 className="text-xl font-bold text-[#5a5b7f] mb-3 flex items-center">
                    📚 ¿Qué encontrarás?
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Manuales paso a paso de herramientas específicas de IA</li>
                    <li>Guías prácticas para casos de uso reales</li>
                    <li>Plantillas y prompts optimizados</li>
                    <li>Recursos actualizados regularmente</li>
                    <li>Contenido gratuito y de acceso directo</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <h3 className="text-xl font-bold text-[#5a5b7f] mb-3 flex items-center">
                    ⚠️ Vas a salir de esta web
                  </h3>
                  <p className="text-gray-700">
                    Al hacer clic en el botón de abajo, serás redirigido a la sección de descargas de 
                    <strong> Conexión Pública</strong>, mi proyecto divulgativo donde mantengo actualizada 
                    toda esta biblioteca de recursos sobre inteligencia artificial.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  <a
                    href="https://conexionpublica.es/descargas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2 text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Acceder a los manuales en Conexión Pública</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Navegación al final */}
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