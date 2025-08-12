import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function DividendoOcultoComunicacionPage() {
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
            El dividendo oculto de la comunicación
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
                Durante décadas, la comunicación se consideró un gasto inevitable, una función accesoria al margen de la estrategia. 
                Hoy, los datos cuentan otra historia: las organizaciones que comunican mejor no solo generan más confianza, 
                sino que multiplican su rentabilidad, retienen mejor el talento y son más resilientes ante las crisis. 
                Este es el dividendo oculto que pocos líderes miden… pero que todos pueden aprovechar.
              </p>
            </div>
          </div>
          
          {/* Cuerpo del contenido */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                
                <div>
                  <h3 className="text-2xl font-bold text-[#5a5b7f] mb-4">De gasto inevitable a motor de valor</h3>
                  <p className="mb-4">
                    Históricamente, la comunicación corporativa ha ocupado un lugar poco visible en el presupuesto, 
                    etiquetada como gasto administrativo. Sin embargo, los estudios la sitúan en el centro de la rentabilidad. 
                    Según Towers Watson, las empresas con comunicación interna efectiva obtienen un retorno total para el 
                    accionista un <strong>47% superior</strong> al de aquellas con comunicación deficiente.
                  </p>
                  <p>
                    Peter Drucker ya advertía que el 60% de los problemas administrativos tienen su origen en una 
                    comunicación ineficaz. Esto se traduce en malentendidos, retrasos, duplicación de tareas y pérdida 
                    de oportunidades. En cambio, cuando la comunicación es estratégica y bidireccional, la información 
                    fluye, la confianza crece y la organización gana agilidad.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#5a5b7f] mb-4">El círculo virtuoso interno-externo</h3>
                  <p className="mb-4">
                    La distinción entre comunicación interna y externa se ha vuelto difusa. La información interna 
                    acaba proyectándose hacia el exterior, y la imagen externa influye en la moral de la plantilla. 
                    Una comunicación interna sólida mejora el clima laboral y convierte a los empleados en embajadores 
                    de marca.
                  </p>
                  <p>
                    Este círculo virtuoso se apoya en dos pilares: <strong>confianza y seguridad psicológica</strong>. 
                    La primera se construye con mensajes claros, transparencia y coherencia entre lo que se dice y lo 
                    que se hace. La segunda se logra cuando las personas pueden opinar, proponer y reconocer errores 
                    sin temor a represalias.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#5a5b7f] mb-4">Impacto medible y oportunidad local</h3>
                  <p className="mb-4">
                    Medir el "dividendo oculto" es posible. Además del ya citado +47% de ROI, Gallup calcula que una 
                    comunicación interna sólida puede aumentar la productividad un <strong>20%</strong> y reducir la 
                    rotación de personal hasta un <strong>50%</strong>.
                  </p>
                  <p>
                    En España, y especialmente en Cantabria, existe un margen de mejora significativo: solo el 32% 
                    de los empleados declara estar satisfecho con la comunicación interna de su empresa. Para quienes 
                    sepan actuar, esta es una oportunidad clara.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#39bdf5] my-8">
                  <h4 className="text-xl font-semibold text-[#5a5b7f] mb-3">El momento de actuar</h4>
                  <p className="text-gray-700">
                    El dividendo oculto de la comunicación está disponible, esperando a ser aprovechado. 
                    Las empresas y organizaciones que lo entienden y actúan hoy serán las que lideren mañana. 
                    <strong> Invertir en comunicación estratégica no es un lujo: es una de las decisiones más 
                    rentables y transformadoras que puede tomar un líder.</strong>
                  </p>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="https://osanemeterio.substack.com/p/el-dividendo-oculto-de-la-comunicacion"
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