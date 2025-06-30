import { Brain } from 'lucide-react'

export default function CapacitacionIAPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Brain className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Capacitación en IA Aplicada</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Formación estratégica en herramientas de inteligencia artificial diseñada para profesionales y equipos 
          que quieren aprovechar el potencial de la IA de manera práctica y efectiva en su trabajo diario.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Introducción práctica a herramientas de IA más relevantes</li>
            <li>Capacitación en prompt engineering y optimización</li>
            <li>Talleres hands-on con casos reales del sector</li>
            <li>Implementación de flujos de trabajo con IA</li>
            <li>Evaluación y selección de herramientas adecuadas</li>
            <li>Seguimiento personalizado post-formación</li>
            <li>Recursos y materiales de apoyo continuos</li>
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