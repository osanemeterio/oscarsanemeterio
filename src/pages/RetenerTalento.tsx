import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function RetenerTalentoPage() {
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
            Retener talento empieza por comunicar mejor
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
                La mayoría de los empleados no decide marcharse de un día para otro. Primero, desconectan: 
                dejan de aportar ideas, responden con monosílabos y se muestran ausentes. Este proceso invisible 
                suele tener un origen común: la falta de una comunicación interna efectiva. Cuando no se explica 
                el rumbo, cuando no se da feedback y cuando las decisiones parecen tomadas en un despacho inaccesible, 
                el vínculo emocional se rompe mucho antes de que aparezca la carta de renuncia.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">La marca empleadora nace dentro</h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Muchos directivos invierten en construir una "marca empleadora" de cara al exterior: campañas 
                  en LinkedIn, ferias de talento, vídeos sobre la cultura corporativa. Todo eso puede atraer… 
                  pero no retiene.
                </p>
                
                <p>
                  La verdadera marca empleadora se forja en el día a día: en cómo se comunican los logros y 
                  los errores, en si las personas sienten que su voz cuenta, en la coherencia entre lo que 
                  se dice hacia fuera y lo que se vive dentro.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Señales de alarma que anticipan la fuga de profesionales</li>
                    <li>Por qué la marca empleadora real se construye desde dentro</li>
                    <li>La disonancia entre comunicación externa e interna</li>
                    <li>Cómo la coherencia se convierte en ventaja competitiva</li>
                    <li>El contrato emocional que va más allá del salario</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="https://osanemeterio.substack.com/p/973d4ba5-7983-415f-b903-6b8daccb90c6"
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