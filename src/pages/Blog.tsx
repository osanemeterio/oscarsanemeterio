import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación */}
      <header className="bg-[#5a5b7f] py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center text-white hover:text-[#39bdf5] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a la página principal
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog y Contenido Editorial
          </h1>
          <p className="text-xl text-white/90">
            Reflexiones sobre comunicación e inteligencia artificial
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Contenido actualizado */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <BookOpen className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">
                  Mis publicaciones: artículos, podcast y más
                </h2>
              </div>

              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Distribuyo mi contenido en varios canales, según el tipo de publicación:
                </p>

                {/* Bloque azul: Artículos editoriales diarios */}
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                  <h3 className="text-xl font-bold text-[#5a5b7f] mb-3 flex items-center">
                    🔹 Artículos editoriales diarios sobre IA
                  </h3>
                  <p className="text-gray-700">
                    Están disponibles en mi proyecto divulgativo <a href="https://conexionpublica.es" target="_blank" rel="noopener noreferrer" className="underline text-[#39bdf5] hover:text-[#5a5b7f] transition-colors"><strong>Conexión Pública</strong></a>,
                    donde analizo a diario el impacto de la inteligencia artificial en la sociedad,
                    la tecnología y la comunicación.
                  </p>
                </div>

                {/* Bloque verde: Artículos personales y podcast */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                  <h3 className="text-xl font-bold text-[#5a5b7f] mb-3 flex items-center">
                    🔹 Artículos personales y podcast
                  </h3>
                  <p className="text-gray-700">
                    He centralizado mi contenido personal —incluyendo reflexiones, recursos y
                    episodios del podcast "Conexión Pública"— en <a href="https://osanemeterio.substack.com/" target="_blank" rel="noopener noreferrer" className="underline text-[#39bdf5] hover:text-[#5a5b7f] transition-colors">Substack</a>.
                  </p>
                </div>

                {/* CTA Conexión Pública */}
                <div className="mt-8 text-center">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#5a5b7f] mb-4 flex items-center justify-center">
                      📚 ¿Quieres leer mis artículos diarios?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Visita el archivo completo en:
                    </p>
                    <a
                      href="https://conexionpublica.es/actualidad-2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2 text-lg"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Ver artículos en Conexión Pública</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Navegación al final */}
          <div className="text-center">
            <a
              href="/"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a la página principal</span>
            </a>
          </div>

        </div>
      </main>
    </div>
  )
}