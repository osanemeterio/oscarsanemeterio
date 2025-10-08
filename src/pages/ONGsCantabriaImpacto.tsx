import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ONGsCantabriaImpactoPage() {
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
            ONGs en Cantabria: impulsa su impacto con comunicación estratégica
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
                Las organizaciones sin ánimo de lucro en Cantabria tienen un potencial enorme para generar impacto social, 
                pero muchas veces su mensaje no llega con la fuerza necesaria. En esta reflexión analizo cómo una 
                comunicación estratégica bien planificada puede amplificar su alcance, conectar mejor con donantes y 
                voluntarios, y maximizar su impacto en la comunidad.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">Comunicación que transforma</h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  En este artículo exploro cómo las ONGs pueden desarrollar estrategias de comunicación que no solo 
                  informen sobre su trabajo, sino que inspiren, movilicen y generen un verdadero cambio social en 
                  nuestra región.
                </p>
                
                <p>
                  Analizo casos prácticos, herramientas accesibles y metodologías probadas que pueden implementar 
                  organizaciones de cualquier tamaño, desde pequeñas asociaciones locales hasta fundaciones consolidadas.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Estrategias de storytelling para ONGs: cómo contar historias que conecten</li>
                    <li>Herramientas digitales gratuitas para maximizar el alcance</li>
                    <li>Cómo medir el impacto real de las acciones comunicativas</li>
                    <li>Técnicas para involucrar a la comunidad local cántabra</li>
                    <li>Casos de éxito de organizaciones que han transformado su comunicación</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="https://osanemeterio.substack.com/p/ongs-en-cantabria-impulsa-su-impacto"
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