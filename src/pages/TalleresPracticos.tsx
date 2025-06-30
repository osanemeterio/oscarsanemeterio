import { Users } from 'lucide-react'

export default function TalleresPracticosPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Users className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Talleres Prácticos</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Aplicación real de herramientas de IA en comunicación con casos prácticos y metodologías probadas. 
          Sesiones hands-on donde los participantes aprenden haciendo con ejemplos reales de su sector.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Talleres presenciales y online adaptados a necesidades específicas</li>
            <li>Casos prácticos reales del sector de cada organización</li>
            <li>Ejercicios con herramientas de IA aplicadas a comunicación</li>
            <li>Metodologías probadas para implementación inmediata</li>
            <li>Sesiones de Q&A y resolución de problemas específicos</li>
            <li>Material de apoyo y recursos para seguimiento posterior</li>
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