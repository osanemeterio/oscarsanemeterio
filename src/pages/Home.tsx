import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Brain, FileText, Send, Linkedin, Twitter, Cpu, Building2, GraduationCap, PenTool, Users, Target, Mail, User, Phone, MapPin, BookOpen } from 'lucide-react'

function App() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = 'https://osanemeterio.substack.com/subscribe'
  }

  const coreServices = [
    {
      icon: <MessageSquare className="w-10 h-10 text-[#39bdf5]" />,
      title: "Consultoría en Comunicación",
      description: "Estrategias efectivas para conectar con tu audiencia"
    },
    {
      icon: <Brain className="w-10 h-10 text-[#39bdf5]" />,
      title: "Capacitación en IA Aplicada", 
      description: "Formación estratégica en herramientas de inteligencia artificial"
    },
    {
      icon: <FileText className="w-10 h-10 text-[#39bdf5]" />,
      title: "Producción de Contenidos",
      description: "Contenido web, podcasts y cursos online de calidad"
    }
  ]

  const extendedServices = [
    {
      icon: <Cpu className="w-10 h-10 text-[#39bdf5]" />,
      title: "Consultoría en IA",
      description: "Implementación estratégica de IA para comunicación efectiva y optimización de procesos organizacionales."
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#39bdf5]" />,
      title: "Comunicación Institucional",
      description: "Estrategias de comunicación especializadas para instituciones públicas y privadas en Cantabria."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#39bdf5]" />,
      title: "Formación en IA",
      description: "Cursos especializados para equipos sobre el uso práctico de IA en tareas diarias y comunicación."
    },
    {
      icon: <PenTool className="w-10 h-10 text-[#39bdf5]" />,
      title: "Creación de Contenidos",
      description: "Redacción profesional orientada a SEO para canales digitales y posicionamiento web."
    },
    {
      icon: <Users className="w-10 h-10 text-[#39bdf5]" />,
      title: "Talleres Prácticos",
      description: "Aplicación real de herramientas de IA en comunicación con casos prácticos y metodologías probadas."
    },
    {
      icon: <Target className="w-10 h-10 text-[#39bdf5]" />,
      title: "Mentoría y Seguimiento Estratégico",
      description: "Acompañamiento mensual para equipos que quieren integrar la IA y la comunicación."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#5a5b7f] min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <div className="fade-in mb-12">
           <div className="text-center mb-6">
  <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
    Óscar San Emeterio
  </h2>
  <hr className="w-24 border-t-4 border-[#39bdf5] mx-auto my-4" />
  <p className="text-xl md:text-2xl text-white/80">
    Consultor de comunicación e inteligencia artificial
  </p>
</div>
          </div>
          <h1 className="fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Servicios estratégicos de<br />
            <span className="text-[#39bdf5]">comunicación e IA</span><br />
            para organizaciones con propósito
          </h1>
          <p className="fade-in text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Potencio tu impacto a través de estrategia, tecnología y creatividad
          </p>
          <a 
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3dPNmLgARl5QQtwFkO6oBuSsCHnBPkow5biWhKCdEBM7V-FYwHH3omucOgrgZqVDR5RubmXYuc"
            className="fade-in btn-primary text-lg font-semibold inline-block"
          >
            Solicita una consulta gratuita
          </a>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="fade-in text-4xl md:text-5xl font-bold mb-6 text-[#5a5b7f]">
              Mis áreas de trabajo
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Link 
                key={index} 
                to={
                  service.title === 'Consultoría en Comunicación' ? '/ConsultoriaEnComunicacion' :
                  service.title === 'Capacitación en IA Aplicada' ? '/capacitacion-ia' :
                  service.title === 'Producción de Contenidos' ? '/produccion-contenidos' : '/'
                }
                className="slide-up service-card text-center block no-underline hover:scale-105 transition-transform"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="fade-in text-4xl md:text-5xl font-bold mb-6 text-[#5a5b7f]">
        Mis Servicios
      </h2>
      <p className="fade-in text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Soluciones profesionales en comunicación e IA para impulsar tu organización en Cantabria
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {extendedServices.map((service, index) => {
        // Definir las rutas para cada servicio
        const serviceRoutes: { [key: string]: string } = {
          'Consultoría en IA': '/consultoria',
          'Comunicación Institucional': '/comunicacion-institucional',
          'Formación en IA': '/formacion-ia',
          'Creación de Contenidos': '/creacion-contenidos',
          'Talleres Prácticos': '/talleres-practicos',
          'Mentoría y Seguimiento Estratégico': '/mentoria-seguimiento'
        }

        const route = serviceRoutes[service.title]
        
        if (route) {
          return (
            <Link
              key={index}
              to={route}
              className="slide-up service-card text-center block no-underline hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          )
        }

        // Fallback para tarjetas sin ruta definida
        return (
          <div
            key={index}
            className="slide-up service-card text-center cursor-default"
          >
            <div className="mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        )
      })}
    </div>
    
    {/* Botón ¿Hablamos? */}
    <div className="text-center mt-16">
      <a
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3dPNmLgARl5QQtwFkO6oBuSsCHnBPkow5biWhKCdEBM7V-FYwHH3omucOgrgZqVDR5RubmXYuc"
        className="btn-primary text-lg font-semibold inline-block"
      >
        ¿Hablamos?
      </a>
    </div>
  </div>
</section>

      {/* Personal Introduction Section */}
      <section className="py-20 px-4 bg-[#5a5b7f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="fade-in mb-8">
            <User className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Dirigido por Óscar San Emeterio
            </h2>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="slide-up text-white">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Con más de 16 años de experiencia en comunicación institucional y un enfoque estratégico centrado en la innovación, ayudo a organizaciones a transformar su mensaje aplicando inteligencia artificial y narrativa profesional.
              </p>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Fundador de <a href="https://www.conexionpublica.es" target="_blank" rel="noopener noreferrer" className="underline text-[#39bdf5] hover:text-white transition-colors">Conexión Pública</a>, consultor, formador y creador del pódcast del mismo nombre. Estoy especializado en comunicación con IA para pymes, ONG e instituciones.
</p>
            <a 
              href="https://www.linkedin.com/in/osanemeterio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Sígueme en LinkedIn
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Formativa Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="fade-in mb-8">
              <GraduationCap className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#5a5b7f]">
                Oferta Formativa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Descarga mi catálogo completo de cursos especializados en inteligencia artificial
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="slide-up service-card text-center">
              <div className="mb-4 flex justify-center">
                <GraduationCap className="w-10 h-10 text-[#39bdf5]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">
                Habilidades IA
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Curso específico para adquirir las competencias básicas para entender cómo funciona la IA y adaptarse a cualquier entorno.
              </p>
              <a
                href="/Mi-oferta-formativa-en-IA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Descargar PDF</span>
              </a>
            </div>
            
            <div className="slide-up service-card text-center">
              <div className="mb-4 flex justify-center">
                <Building2 className="w-10 h-10 text-[#39bdf5]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">
                IA en las instituciones
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Curso que imparto en ADR Formación sobre comunicación institucional en la era de la IA. Todos los datos disponibles en el enlace.
              </p>
              <a
                href="https://www.adrformacion.com/curso-online/comunicacion-institucional-era-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Building2 className="w-5 h-5" />
                <span>Ver curso en ADR</span>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="slide-up service-card text-center">
              <div className="mb-4 flex justify-center">
                <Users className="w-10 h-10 text-[#39bdf5]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">
                Formación Personalizada
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Diseño cursos a medida según las necesidades específicas de tu organización. Formación adaptada a tu sector y objetivos.
              </p>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3dPNmLgARl5QQtwFkO6oBuSsCHnBPkow5biWhKCdEBM7V-FYwHH3omucOgrgZqVDR5RubmXYuc"
                className="btn-primary inline-block"
              >
                Solicitar consulta
              </a>
            </div>
          </div>
          
          {/* Manuales IA Section */}
          <div className="text-center">
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-[#5a5b7f] mb-4">
                Manuales prácticos de IA
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Accede a una biblioteca completa de manuales y guías prácticas sobre inteligencia artificial, 
                herramientas específicas y casos de uso reales.
              </p>
              <Link
                to="/manuales-ia"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Ver manuales disponibles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mis reflexiones Section */}
      <section className="py-20 px-4 bg-[#5a5b7f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="fade-in mb-8">
            <BookOpen className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Mis reflexiones
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Reflexiones sobre comunicación, inteligencia artificial y el futuro del trabajo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Entrada sobre comunicación institucional e IA */}
            <Link
              to="/blog/comunicacion-institucional-ia"
              className="slide-up bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 block text-left"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Comunicación institucional en la era de la IA
              </h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Cómo la inteligencia artificial está transformando la comunicación institucional y los nuevos desafíos que enfrentan las organizaciones.
              </p>
              <span className="text-[#39bdf5] font-medium">Leer más →</span>
            </Link>

            {/* Entrada sobre ONGs en Cantabria */}
            <Link
              to="/blog/ongs-cantabria-impacto"
              className="slide-up bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 block text-left"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                ONGs en Cantabria: impulsa su impacto con comunicación estratégica
              </h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Reflexiones sobre cómo las organizaciones sin ánimo de lucro pueden potenciar su mensaje y amplificar su impacto social.
              </p>
              <span className="text-[#39bdf5] font-medium">Leer más →</span>
            </Link>
          </div>
          
          <div className="slide-up bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Accede a todos mis contenidos
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Encuentra mis artículos, reflexiones y el podcast en mis diferentes plataformas
            </p>
            <div className="space-y-4">
              <Link
                to="/blog"
                className="btn-primary inline-flex items-center space-x-2 text-lg w-full justify-center"
              >
                <BookOpen className="w-5 h-5" />
                <span>Ver Blog</span>
              </Link>
              <a
                href="https://osanemeterio.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2 text-lg w-full justify-center"
              >
                <BookOpen className="w-5 h-5" />
                <span>Substack</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#5a5b7f]">
              Mantente Informado
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Suscríbete a mi newsletter para recibir las últimas actualizaciones sobre comunicación e inteligencia artificial
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="slide-up max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="email"
                placeholder="Tu dirección de email"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39bdf5] focus:border-transparent transition-all duration-300"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn-newsletter whitespace-nowrap"
              >
                Suscribirme
              </button>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Respetamos tu privacidad. Puedes cancelar la suscripción en cualquier momento.
            </p>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#5a5b7f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="fade-in text-4xl md:text-5xl font-bold mb-16 text-white">
            Contáctame
          </h2>
          
          <div className="slide-up bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <div className="space-y-8">
              {/* Email Contact */}
              <div className="text-center">
                <Mail className="w-12 h-12 text-[#39bdf5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:osanemeterio@conexionpublica.es"
                  className="text-lg text-white/90 hover:text-[#39bdf5] transition-colors"
                >
                  osanemeterio@conexionpublica.es
                </a>
              </div>

              {/* Phone Contact */}
              <div className="text-center">
                <Phone className="w-12 h-12 text-[#39bdf5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Teléfono</h3>
                <a 
                  href="tel:+34676060487"
                  className="text-lg text-white/90 hover:text-[#39bdf5] transition-colors"
                >
                  +34 676 060 487
                </a>
              </div>

              {/* Location */}
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#39bdf5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Ubicación</h3>
                <p className="text-lg text-white/90">
                  Cantabria, España
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="mailto:osanemeterio@conexionpublica.es?subject=Consulta%20desde%20web&body=Hola%20Óscar,%0A%0AMe%20gustaría%20contactar%20contigo%20para%20hablar%20sobre..."
                  className="btn-primary inline-flex items-center space-x-2 text-lg w-full justify-center"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <p className="text-gray-700 text-xl md:text-2xl font-medium">
                Ayudo a potenciar organizaciones con propósito
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/osanemeterio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#39bdf5] hover:text-[#5a5b7f] transition-colors duration-300 p-2 rounded-lg hover:bg-gray-200"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a 
                href="https://twitter.com/osanemeterio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#39bdf5] hover:text-[#5a5b7f] transition-colors duration-300 p-2 rounded-lg hover:bg-gray-200"
              >
                <Twitter className="w-7 h-7" />
              </a>
              <a 
                href="https://osanemeterio.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#39bdf5] hover:text-[#5a5b7f] transition-colors duration-300 p-2 rounded-lg hover:bg-gray-200"
              >
                <BookOpen className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
            © 2025 Conexión Pública. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App