import { Download, Mail, FileText, BookOpen } from 'lucide-react'

function NuevosManualesIA() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 px-4 bg-[#5a5b7f]">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuevos Manuales de IA
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Recursos gratuitos para dominar la inteligencia artificial
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex justify-center mb-6">
              <Download className="w-12 h-12 text-[#39bdf5]" />
            </div>
            <h2 className="text-3xl font-bold text-[#5a5b7f] mb-4 text-center">
              Guía práctica: Cómo pedirle cosas a una IA (y que te haga caso)
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
              Descarga directamente esta guía completa con técnicas prácticas para comunicarte efectivamente con la IA y obtener los mejores resultados.
            </p>
            <div className="text-center">
              <a
                href="https://drive.google.com/file/d/12LN9oX5wR8AEVvTYO1B9BAA4YktuVXJo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-lg"
              >
                <Download className="w-5 h-5" />
                <span>Descargar ahora</span>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#5a5b7f] to-[#4a4b6f] rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Mail className="w-12 h-12 text-[#39bdf5]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Manuales exclusivos gratuitos
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-[#39bdf5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Por qué la IA no miente (y nosotros la usamos mal)
                    </h3>
                    <p className="text-white/80">
                      Comprende cómo funciona realmente la IA y por qué obtienes resultados inesperados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-[#39bdf5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Los 5 Niveles de Prompting Avanzado
                    </h3>
                    <p className="text-white/80">
                      Técnicas avanzadas para crear prompts efectivos y obtener resultados profesionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white/90 text-lg text-center mb-8 leading-relaxed">
              Envíame un email y recibirás estos dos manuales completamente gratis. Sin compromisos, sin suscripciones.
            </p>

            <div className="text-center">
              <a
                href="mailto:osanemeterio@conexionpublica.es?subject=Solicitud%20de%20manuales%20de%20IA&body=Hola%20Óscar,%0A%0AMe%20gustaría%20recibir%20los%20manuales%20gratuitos%20de%20IA:%0A%0A-%20Por%20qué%20la%20IA%20no%20miente%20(y%20nosotros%20la%20usamos%20mal)%0A-%20Los%205%20Niveles%20de%20Prompting%20Avanzado%0A%0AGracias."
                className="btn-primary inline-flex items-center space-x-2 text-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Solicitar manuales por email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NuevosManualesIA
