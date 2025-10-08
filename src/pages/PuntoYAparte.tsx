import { ArrowLeft, Play } from 'lucide-react'

export default function PuntoYApartePage() {
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
            Punto y aparte: comienzan los servicios de consultoría
          </h1>
          <p className="text-xl text-white/90">
            Nueva entrada del blog • Óscar San Emeterio
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Resumen introductorio */}
          <div className="mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-[#5a5b7f] mb-4">Resumen</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ya ejercía como consultor antes de ponerle nombre. La experiencia me había dado el fondo necesario, pero gracias al Coworking Santander 2025 he podido asentar la estructura del negocio. En este artículo reflexiono sobre mi experiencia en el programa, los aprendizajes clave y cómo enfoco mi propuesta de comunicación estratégica con IA.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">Punto y aparte</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tras meses de valiosas enseñanzas <a href="https://www.oscarsanemeterio.es" className="text-[#39bdf5] hover:underline" target="_blank" rel="noopener noreferrer">www.oscarsanemeterio.es</a> da sus primeros pasos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En este vídeo te cuento cómo ha sido el proceso y qué ofrezco a partir de ahora como consultor de comunicación estratégica con inteligencia artificial.
              </p>
              
              {/* Video de YouTube */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#5a5b7f] mb-4 flex items-center">
                  <Play className="w-6 h-6 mr-2" />
                  Mira el vídeo completo aquí:
                </h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/_xEp1KgurtE?si=LzXK4t4Q1NutZTc8" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Enlaces adicionales */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5]">
                  <h4 className="text-lg font-semibold text-[#5a5b7f] mb-2">📖 Leer el post completo</h4>
                  <p className="text-gray-700 mb-3">Si prefieres leer el post completo, lo tienes publicado en Substack:</p>
                  <a 
                    href="https://oscarsanemeterio.substack.com/p/punto-y-aparte" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#39bdf5] hover:underline font-medium text-lg"
                  >
                    👉 https://oscarsanemeterio.substack.com/p/punto-y-aparte
                  </a>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-[#5a5b7f] mb-2">📝 Más artículos</h4>
                  <p className="text-gray-700">
                    También puedes ver más artículos y publicaciones recientes en la sección{' '}
                    <a 
                      href="https://oscarsanemeterio.es/blog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline font-medium"
                    >
                      Blog
                    </a>.
                  </p>
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