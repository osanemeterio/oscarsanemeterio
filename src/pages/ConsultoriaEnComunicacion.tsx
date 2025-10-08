import { MessageSquare } from 'lucide-react'

export default function ConsultoriaEnComunicacionPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <MessageSquare className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultoría en Comunicación</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Desarrollo estrategias efectivas para conectar con tu audiencia, construir una imagen sólida y 
          transmitir mensajes que generen impacto real. Mi enfoque combina experiencia tradicional con 
          herramientas digitales innovadoras.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Auditoría completa de comunicación actual</li>
            <li>Desarrollo de estrategia de comunicación integral</li>
            <li>Definición de tono, voz y mensajes clave</li>
            <li>Plan de comunicación externa e interna</li>
            <li>Optimización de presencia digital y redes sociales</li>
            <li>Formación del equipo en comunicación efectiva</li>
            <li>Seguimiento y medición de resultados</li>
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