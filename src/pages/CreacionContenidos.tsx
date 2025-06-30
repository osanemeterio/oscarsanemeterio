import { PenTool } from 'lucide-react'

export default function CreacionContenidosPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <PenTool className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Creación de Contenidos</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Redacción profesional orientada a SEO para canales digitales y posicionamiento web. 
          Creación de contenidos estratégicos que conecten con tu audiencia y generen resultados medibles.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Redacción web optimizada para SEO y conversión</li>
            <li>Creación de contenido para redes sociales y newsletters</li>
            <li>Desarrollo de estrategias de content marketing</li>
            <li>Producción de artículos especializados y casos de estudio</li>
            <li>Optimización de contenido existente para mejor rendimiento</li>
            <li>Calendario editorial y planificación de contenidos</li>
          </ul>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="btn-primary text-lg font-semibold inline-block"
          >
            Volver a la página principal
          </a>
        </div>
      </div>
    </div>
  )
}