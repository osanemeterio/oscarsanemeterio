import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ComunicacionInstitucionalIAPage() {
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
            Comunicación institucional en la era de la IA
          </h1>
          <p className="text-xl text-white/90">
            Nueva reflexión • Óscar San Emeterio
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
                La inteligencia artificial está transformando la comunicación institucional de manera profunda. 
                Las organizaciones públicas y privadas se enfrentan a nuevos desafíos y oportunidades que requieren 
                una adaptación estratégica para mantener la confianza ciudadana, mejorar la eficacia comunicativa 
                y aprovechar las ventajas que ofrece esta tecnología emergente.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">El nuevo paradigma comunicativo</h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  En esta reflexión analizo cómo la inteligencia artificial está redefiniendo las reglas del juego 
                  en la comunicación institucional, desde la personalización de mensajes hasta la automatización 
                  de procesos, pasando por los nuevos retos éticos y de transparencia que surgen.
                </p>
                
                <p>
                  Exploro las oportunidades que se abren para las instituciones que sepan adaptarse, así como 
                  los riesgos de quedarse atrás en esta transformación digital que ya está en marcha.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cómo la IA está cambiando la relación entre instituciones y ciudadanos</li>
                    <li>Nuevas herramientas para la personalización y segmentación de mensajes</li>
                    <li>Desafíos éticos y de transparencia en el uso de IA institucional</li>
                    <li>Estrategias prácticas para la implementación responsable</li>
                    <li>El futuro de la comunicación pública en la era digital</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="https://osanemeterio.substack.com/p/comunicacion-institucional-en-la"
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