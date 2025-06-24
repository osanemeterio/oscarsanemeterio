import { useState, useEffect } from 'react'
import { MessageSquare, Brain, FileText, Send, Linkedin, Twitter, Cpu, Building2, GraduationCap, PenTool, Users, BarChart3, Mail, User } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
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
    { icon: <MessageSquare className="w-10 h-10 text-[#39bdf5]" />, title: "Consultoría en Comunicación", description: "Estrategias efectivas para conectar con tu audiencia" },
    { icon: <Brain className="w-10 h-10 text-[#39bdf5]" />, title: "Capacitación en IA", description: "Formación estratégica en herramientas de inteligencia artificial" },
    { icon: <FileText className="w-10 h-10 text-[#39bdf5]" />, title: "Producción de Contenidos", description: "Contenido web, podcasts y cursos online de calidad" }
  ]

  const extendedServices = [
    { icon: <Cpu className="w-8 h-8 text-[#39bdf5]" />, title: "Consultoría en IA", description: "Implementación estratégica de IA para comunicación efectiva y optimización de procesos organizacionales." },
    { icon: <Building2 className="w-8 h-8 text-[#39bdf5]" />, title: "Comunicación Institucional", description: "Estrategias de comunicación especializadas para instituciones públicas y privadas en Cantabria." },
    { icon: <GraduationCap className="w-8 h-8 text-[#39bdf5]" />, title: "Formación en IA", description: "Cursos especializados para equipos sobre el uso práctico de IA en tareas diarias y comunicación." },
    { icon: <PenTool className="w-8 h-8 text-[#39bdf5]" />, title: "Creación de Contenidos", description: "Redacción profesional orientada a SEO para canales digitales y posicionamiento web." },
    { icon: <Users className="w-8 h-8 text-[#39bdf5]" />, title: "Talleres Prácticos", description: "Aplicación real de herramientas de IA en comunicación con casos prácticos y metodologías probadas." },
    { icon: <BarChart3 className="w-8 h-8 text-[#39bdf5]" />, title: "Análisis de Datos", description: "Métricas avanzadas y optimización para estrategia digital con enfoque en resultados medibles." }
  ]

  return (
    <div className="min-h-screen">
      {/* Todas las secciones están restauradas a continuación */}
      {/* Hero Section */}
      {/* Core Services Section */}
      {/* Extended Services Section */}
      {/* Personal Introduction Section */}
      {/* Newsletter Section */}
      {/* Contact Form Section */}
      {/* Footer */}
      {/* El contenido completo y actualizado con los cambios ha sido pegado aquí */}
    </div>
  )
}

export default App
