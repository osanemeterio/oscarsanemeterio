import { BarChart3 } from 'lucide-react'

export default function AnalisisDatosPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <BarChart3 className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Análisis de Datos</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Métricas avanzadas y optimización para estrategia digital con enfoque en resultados medibles. 
          Transformo datos en insights accionables para mejorar la efectividad de tu comunicación.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Análisis de métricas de comunicación digital y redes sociales</li>
            <li>Implementación de sistemas de tracking y medición</li>
            <li>Reportes personalizados con insights accionables</li>
            <li>Optimización de estrategias basada en datos</li>
            <li>Configuración de dashboards y herramientas de monitorización</li>
            <li>Formación del equipo en interpretación de métricas</li>
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