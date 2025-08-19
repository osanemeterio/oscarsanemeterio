import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function RetenerTalentoArticlePage() {
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
            Retener talento empieza por comunicar mejor
          </h1>
          <p className="text-xl text-white/90">
            Nueva reflexión • Óscar San Emeterio
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Resumen introductorio */}
          <div className="mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-[#5a5b7f] mb-4">Resumen</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En un mercado laboral cada vez más competitivo, retener el mejor talento se ha convertido en 
                una prioridad estratégica. Sin embargo, muchas organizaciones buscan soluciones complejas 
                cuando la clave está en algo más fundamental: comunicar mejor. Una comunicación interna 
                efectiva no solo mejora el clima laboral, sino que se convierte en el factor decisivo 
                para que los profesionales más valiosos decidan quedarse.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#5a5b7f] mb-6">La comunicación como herramienta de retención</h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  En este artículo analizo cómo una estrategia de comunicación interna bien diseñada 
                  puede convertirse en la herramienta más poderosa para retener talento, crear compromiso 
                  y construir una cultura organizacional sólida.
                </p>
                
                <p>
                  Exploro las conexiones entre comunicación efectiva, satisfacción laboral y permanencia 
                  en la empresa, basándome en datos concretos y casos prácticos que demuestran el impacto 
                  real de comunicar mejor.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h3 className="text-xl font-semibold text-[#5a5b7f] mb-3">Puntos clave del artículo:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Por qué la comunicación es el factor más subestimado en retención de talento</li>
                    <li>Datos sobre el impacto de la comunicación interna en la permanencia laboral</li>
                    <li>Estrategias prácticas para mejorar la comunicación con equipos</li>
                    <li>Cómo crear una cultura de comunicación bidireccional</li>
                    <li>El ROI de invertir en comunicación interna para retener talento</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="https://osanemeterio.substack.com/p/retener-talento-empieza-por-comunicar"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2 text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Leer artículo completo en Substack</span>
                  </a>
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