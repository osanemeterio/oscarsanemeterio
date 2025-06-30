import { Cpu } from 'lucide-react'

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Cpu className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultoría en Comunicación e IA</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Acompaño a empresas, ONG e instituciones a potenciar su comunicación con un enfoque
          estratégico, riguroso y adaptado al nuevo contexto digital. La inteligencia artificial
          se integra como herramienta para optimizar procesos, generar contenido y tomar decisiones más informadas.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye mi servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Diagnóstico de comunicación y procesos internos</li>
            <li>Asesoramiento estratégico personalizado</li>
            <li>Implantación de herramientas de IA ajustadas a cada organización</li>
            <li>Apoyo en la redacción, posicionamiento y planificación de contenidos</li>
            <li>Reuniones periódicas de seguimiento y mejora continua</li>
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
