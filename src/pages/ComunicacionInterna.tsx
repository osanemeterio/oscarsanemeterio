import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ComunicacionInternaPage() {
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
            Comunicación interna: productividad, compromiso, retención e innovación
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
                Durante demasiado tiempo, la comunicación interna se ha reducido a boletines, comunicados o reuniones esporádicas. 
                Sin embargo, las organizaciones que la entienden como una herramienta estratégica multiplican su capacidad para 
                producir más, retener talento y generar ideas innovadoras. La clave no está solo en transmitir información, 
                sino en construir un diálogo fluido, bidireccional y coherente.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">Cuatro pilares del éxito organizacional</h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  En este artículo analizo cómo una comunicación interna estratégica impacta directamente en cuatro 
                  áreas críticas para el éxito de cualquier organización: productividad, compromiso, retención de 
                  talento e innovación.
                </p>
                
                <p>
                  Exploro datos concretos y estrategias prácticas que demuestran por qué las empresas que comunican 
                  mejor internamente obtienen resultados superiores en todas estas dimensiones.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cómo la mala comunicación reduce un 40% la productividad</li>
                    <li>El poder del reconocimiento: 51% más compromiso con feedback mensual</li>
                    <li>Por qué la comunicación eficaz reduce 50% la rotación de personal</li>
                    <li>La conexión entre comunicación interna e innovación</li>
                    <li>Estrategias prácticas para liderar con la palabra</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="https://osanemeterio.substack.com/p/comunicacion-interna-productividad"
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