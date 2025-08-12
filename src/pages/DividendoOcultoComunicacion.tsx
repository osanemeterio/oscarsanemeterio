import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function DividendoOcultoComunicacionPage() {
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
            El dividendo oculto de la comunicación
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
                Durante décadas, la comunicación se consideró un gasto inevitable, una función accesoria al margen de la estrategia. 
                Hoy, los datos cuentan otra historia: las organizaciones que comunican mejor no solo generan más confianza, 
                sino que multiplican su rentabilidad, retienen mejor el talento y son más resilientes ante las crisis. 
                Este es el dividendo oculto que pocos líderes miden… pero que todos pueden aprovechar.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">El valor oculto de comunicar bien</h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  En este artículo analizo cómo la comunicación ha pasado de ser considerada un gasto inevitable 
                  a convertirse en uno de los motores de valor más importantes para las organizaciones modernas.
                </p>
                
                <p>
                  Exploro los datos que demuestran el impacto real de una comunicación estratégica: desde el 47% 
                  de mayor retorno para el accionista hasta la reducción del 50% en rotación de personal.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Por qué la comunicación genera un ROI del 47% superior</li>
                    <li>El círculo virtuoso entre comunicación interna y externa</li>
                    <li>Datos concretos sobre productividad y retención de talento</li>
                    <li>La oportunidad específica en España y Cantabria</li>
                    <li>Cómo medir y aprovechar este "dividendo oculto"</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="https://osanemeterio.substack.com/p/el-dividendo-oculto-de-la-comunicacion"
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