import { GraduationCap } from 'lucide-react'

export default function FormacionIAPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <GraduationCap className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Formación en IA</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Ofrezco cursos especializados para equipos sobre el uso práctico de inteligencia artificial en tareas diarias y comunicación. 
          Formación adaptada a diferentes niveles, desde introducción hasta aplicaciones avanzadas.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Cursos introductorios sobre IA para equipos no técnicos</li>
            <li>Talleres prácticos de herramientas de IA aplicada a comunicación</li>
            <li>Formación en prompt engineering y optimización de resultados</li>
            <li>Capacitación en automatización de procesos con IA</li>
            <li>Sesiones de seguimiento y resolución de dudas</li>
            <li>Material didáctico personalizado y casos de uso específicos</li>
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