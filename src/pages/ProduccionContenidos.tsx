import { FileText } from 'lucide-react'

export default function ProduccionContenidosPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FileText className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Producción de Contenidos</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Creación de contenido web, podcasts y cursos online de calidad que conecten con tu audiencia y 
          posicionen tu marca como referente en tu sector. Contenido estratégico que genera resultados.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Desarrollo de estrategia de contenidos integral</li>
            <li>Producción de podcasts profesionales</li>
            <li>Creación de cursos online y material educativo</li>
            <li>Redacción web y contenido para blogs</li>
            <li>Contenido para redes sociales y newsletters</li>
            <li>Optimización SEO y posicionamiento</li>
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