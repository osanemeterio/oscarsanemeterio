import { useState, useEffect } from 'react'
import { MessageSquare, Brain, FileText, Send, Cpu, Building2, GraduationCap, PenTool, Users, BarChart3, Mail, User } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Consulta desde Conexión Pública')
    const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`)
    window.location.href = `mailto:osanemeterio@conexionpublica.es?subject=${subject}&body=${body}`
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = 'https://osanemeterio.substack.com/subscribe'
  }

  const coreServices = [
    {
      icon: <MessageSquare className="w-10 h-10 text-[#39bdf5]" />, title: "Consultoría en Comunicación", description: "Estrategias efectivas para conectar con tu audiencia"
    },
    {
      icon: <Brain className="w-10 h-10 text-[#39bdf5]" />, title: "Capacitación en IA", description: "Formación estratégica en herramientas de inteligencia artificial"
    },
    {
      icon: <FileText className="w-10 h-10 text-[#39bdf5]" />, title: "Producción de Contenidos", description: "Contenido web, podcasts y cursos online de calidad"
    }
  ]

  const extendedServices = [
    {
      icon: <Cpu className="w-8 h-8 text-[#39bdf5]" />, title: "Consultoría en IA", description: "Implementación estratégica de IA para comunicación efectiva y optimización de procesos organizacionales."
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#39bdf5]" />, title: "Comunicación Institucional", description: "Estrategias de comunicación especializadas para instituciones públicas y privadas en Cantabria."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#39bdf5]" />, title: "Formación en IA", description: "Cursos especializados para equipos sobre el uso práctico de IA en tareas diarias y comunicación."
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#39bdf5]" />, title: "Creación de Contenidos", description: "Redacción profesional orientada a SEO para canales digitales y posicionamiento web."
    },
    {
      icon: <Users className="w-8 h-8 text-[#39bdf5]" />, title: "Talleres Prácticos", description: "Aplicación real de herramientas de IA en comunicación con casos prácticos y metodologías probadas."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#39bdf5]" />, title: "Análisis de Datos", description: "Métricas avanzadas y optimización para estrategia digital con enfoque en resultados medibles."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#5a5b7f] min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <div className="fade-in mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Óscar San Emeterio
              </h2>
            </div>
          </div>
          <h1 className="fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Servicios estratégicos de<br />
            <span className="text-[#39bdf5]">comunicación e IA</span><br />
            para organizaciones con propósito
          </h1>
          <p className="fade-in text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Potenciamos tu impacto a través de estrategia, tecnología y creatividad
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="slide-up service-card text-center block cursor-default">
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
            ))}
          </div>
        </div>
      </section>

      {/* Extended Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="fade-in text-4xl md:text-5xl font-bold mb-6 text-[#5a5b7f]">
              Nuestros Servicios
            </h2>
            <p className="fade-in text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluciones profesionales en comunicación e IA para impulsar tu organización en Cantabria
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedServices.map((service, index) => (
              <div 
                key={index} 
                className="slide-up extended-service-card block cursor-default"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#5a5b7f]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
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
                Con más de 15 años de experiencia en comunicación institucional y un enfoque estratégico centrado en la innovación, Óscar ayuda a organizaciones a transformar su mensaje aplicando inteligencia artificial y narrativa profesional.
              </p>
              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                Fundador de Conexión Pública, consultor, formador y creador del pódcast del mismo nombre, especializado en comunicación con IA para pymes, ONG e instituciones.
              </p>
              <a 
                href="#contacto"
                className="btn-primary inline-flex items-center space-x-2 text-lg"
              >
                <span>Ir al formulario de contacto</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a5b7f] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <p className="text-xl text-white/90 mb-4">
            Esta página es una presentación de <a href="https://conexionpublica.es" className="underline text-[#39bdf5] hover:text-white">Conexión Pública</a>.
          </p>
          <p className="text-white/70 text-sm">© 2024 Conexión Pública. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
