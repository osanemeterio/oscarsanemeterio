import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react'

export default function BlogPage() {
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
            Blog y Contenido Editorial
          </h1>
          <p className="text-xl text-white/90">
            Reflexiones sobre comunicación e inteligencia artificial
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Contenido principal */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <BookOpen className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">Todo mi contenido en Substack</h2>
              </div>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  He centralizado todo mi contenido editorial en <strong>Substack</strong>, donde publico regularmente 
                  reflexiones, análisis y recursos sobre comunicación estratégica e inteligencia artificial.
                </p>
                
                <p>
                  En mi newsletter encontrarás:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Artículos especializados</strong> sobre comunicación e IA</li>
                  <li><strong>Casos prácticos</strong> y experiencias reales</li>
                  <li><strong>Recursos y herramientas</strong> útiles para profesionales</li>
                  <li><strong>Reflexiones</strong> sobre el futuro del trabajo y la comunicación</li>
                  <li><strong>Episodios del podcast</strong> "Conexión Pública"</li>
                </ul>
                
                <p>
                  La suscripción es <strong>gratuita</strong> y puedes cancelarla en cualquier momento. 
                  Es la mejor forma de mantenerte al día con mis últimas publicaciones y reflexiones.
                </p>
              </div>
              
              {/* CTA destacado */}
              <div className="mt-12 text-center">
                <div className="bg-[#39bdf5]/10 p-8 rounded-xl border border-[#39bdf5]/20">
                  <h3 className="text-2xl font-bold text-[#5a5b7f] mb-4">
                    ¡Suscríbete ahora!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Únete a cientos de profesionales que ya reciben mis reflexiones sobre comunicación e IA
                  </p>
                  <a
                    href="https://osanemeterio.substack.com/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2 text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Suscribirme en Substack</span>
                  </a>
                </div>
              </div>
              
              {/* Enlace adicional */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  ¿Quieres explorar todo el contenido disponible?
                </p>
                <a
                  href="https://osanemeterio.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#39bdf5] hover:underline font-medium text-lg inline-flex items-center space-x-2"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Ver todos los artículos en Substack</span>
                </a>
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