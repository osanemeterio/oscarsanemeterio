import { Target } from 'lucide-react'

export default function MentoriaSeguimientoPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5b7f] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Target className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentoría y Seguimiento Estratégico</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Acompañamiento mensual para equipos que quieren integrar la IA y la comunicación con visión, 
          continuidad y criterio experto. Un servicio personalizado para organizaciones comprometidas con 
          la excelencia y la mejora continua.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Reuniones periódicas para resolver dudas y redefinir objetivos</li>
            <li>Apoyo en la toma de decisiones estratégicas sobre IA y comunicación</li>
            <li>Supervisión del progreso y ajuste de planes según resultados</li>
            <li>Acceso prioritario a recursos, prompts y buenas prácticas</li>
            <li>Formación puntual en nuevas herramientas o metodologías</li>
            <li>Coordinación con el equipo interno para reforzar autonomía y competencias</li>
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