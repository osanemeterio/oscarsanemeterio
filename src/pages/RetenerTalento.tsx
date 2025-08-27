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
                La retención de talento se ha convertido en uno de los mayores desafíos para las organizaciones. 
                Más allá de los salarios competitivos y los beneficios, existe un factor que marca la diferencia: 
                la comunicación. Las empresas que comunican mejor internamente logran retener hasta un 50% más 
                de su talento, creando un entorno donde los profesionales se sienten valorados, informados y 
                comprometidos con el proyecto común.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">La comunicación como herramienta de retención</h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  En este artículo analizo cómo una comunicación interna efectiva se convierte en la clave 
                  para retener el talento más valioso de una organización, creando vínculos que van más allá 
                  de lo económico.
                </p>
                
                <p>
                  Exploro las estrategias concretas que utilizan las empresas más exitosas para crear un 
                  entorno comunicativo que fomente la permanencia, el compromiso y el desarrollo profesional.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Por qué la comunicación es más efectiva que los incentivos económicos</li>
                    <li>El impacto de la transparencia en la retención de talento</li>
                    <li>Estrategias de comunicación que generan compromiso a largo plazo</li>
                    <li>Cómo crear canales de comunicación bidireccional efectivos</li>
                    <li>El papel del reconocimiento y feedback en la fidelización</li>
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