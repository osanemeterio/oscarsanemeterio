import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MessageSquare, Brain, FileText } from 'lucide-react'
import ConsultoriaEnComunicacion from './pages/ConsultoriaEnComunicacion'

function Landing() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [newsletterEmail, setNewsletterEmail] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up')
    animatedElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const coreServices = [
    {
      icon: <MessageSquare className="w-10 h-10 text-[#39bdf5]" />,
      title: "Consultoría en Comunicación",
      description: "Estrategias efectivas para conectar con tu audiencia",
      link: "/consultoria-en-comunicacion"
    },
    {
      icon: <Brain className="w-10 h-10 text-[#39bdf5]" />,
      title: "Capacitación en IA",
      description: "Formación estratégica en herramientas de inteligencia artificial"
    },
    {
      icon: <FileText className="w-10 h-10 text-[#39bdf5]" />,
      title: "Producción de Contenidos",
      description: "Contenido web, podcasts y cursos online de calidad"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-20 text-center">
      <h2 className="text-base font-medium text-white/80 mb-6">
        Consultor en comunicación e IA aplicada
      </h2>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
        Servicios estratégicos de <span className="text-sky-400">comunicación e IA</span><br />
        para organizaciones con propósito
      </h1>
      <p className="text-white/70 text-lg max-w-3xl mx-auto mb-12">
        Potenciamos tu impacto a través de estrategia, tecnología y creatividad
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coreServices.map((service, index) => (
          <a
            key={index}
            href={service.link || '#'}
            className="bg-gray-800 hover:bg-sky-700 p-6 rounded-xl transition block text-left"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-white/70">{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/consultoria-en-comunicacion" element={<ConsultoriaEnComunicacion />} />
      </Routes>
    </Router>
  )
}

export default App
