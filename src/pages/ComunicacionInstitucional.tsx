import { Building2 } from 'lucide-react'

export default function ComunicacionInstitucionalPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Building2 className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Comunicación Institucional</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Desarrollo estrategias de comunicación especializadas para instituciones públicas y privadas en Cantabria, 
          adaptadas al contexto local y con un enfoque en la transparencia, la cercanía ciudadana y el impacto social.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Auditoría de comunicación institucional y análisis de reputación</li>
            <li>Estrategias de comunicación externa e interna</li>
            <li>Planes de crisis y gestión de comunicación en situaciones complejas</li>
            <li>Formación de portavoces y equipos directivos</li>
            <li>Optimización de canales digitales institucionales</li>
            <li>Medición de impacto y seguimiento de resultados</li>
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