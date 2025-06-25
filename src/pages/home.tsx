import { useState, useEffect } from 'react'

import { MessageSquare, Brain, FileText, Send, Linkedin, Twitter, Cpu, Building2, GraduationCap, PenTool, Users, BarChart3, Mail, User } from 'lucide-react'

import { Link } from 'react-router-dom'

 

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

 const handleSubmit = (e) => {

   e.preventDefault()

   const subject = encodeURIComponent('Consulta desde Conexión Pública')

   const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`)

   window.location.href = `mailto:osanemeterio@conexionpublica.es?subject=${subject}&body=${body}` [cite: 3]

   setFormData({ nombre: '', email: '', mensaje: '' })

 }

 const handleNewsletterSubmit = (e) => {

   e.preventDefault()

   window.location.href = 'https://osanemeterio.substack.com/subscribe' [cite: 3]

 }

 const coreServices = [

   {

     icon: <MessageSquare className="w-10 h-10 text-[#39bdf5]" />,

     title: "Consultoría en Comunicación",

     description: "Estrategias efectivas para conectar con tu audiencia" [cite: 3]

   },

   {

     icon: <Brain className="w-10 h-10 text-[#39bdf5]" />,

     title: "Capacitación en IA Aplicada",

     description: "Formación estratégica en herramientas de inteligencia artificial" [cite: 4]

   },

   {

     icon: <FileText className="w-10 h-10 text-[#39bdf5]" />,

     title: "Producción de Contenidos",

     description: "Contenido web, podcasts y cursos online de calidad" [cite: 4]

   }

 ]

 const extendedServices = [

   {

     icon: <Cpu className="w-8 h-8 text-[#39bdf5]" />,

     title: "Consultoría en IA",

     description: "Implementación estratégica de IA para comunicación efectiva y optimización de procesos organizacionales." [cite: 5]

   },

   {

     icon: <Building2 className="w-8 h-8 text-[#39bdf5]" />,

     title: "Comunicación Institucional",

     description: "Estrategias de comunicación especializadas para instituciones públicas y privadas en Cantabria." [cite: 6]

   },

   {

     icon: <GraduationCap className="w-8 h-8 text-[#39bdf5]" />,

     title: "Formación en IA",

     description: "Cursos especializados para equipos sobre el uso práctico de IA en tareas diarias y comunicación." [cite: 7]

   },

   {

     icon: <PenTool className="w-8 h-8 text-[#39bdf5]" />,

     title: "Creación de Contenidos",

     description: "Redacción profesional orientada a SEO para canales digitales y posicionamiento web." [cite: 8]

   },

   {

     icon: <Users className="w-8 h-8 text-[#39bdf5]" />,

     title: "Talleres Prácticos",

     description: "Aplicación real de herramientas de IA en comunicación con casos prácticos y metodologías probadas." [cite: 9]

   },

   {

     icon: <BarChart3 className="w-8 h-8 text-[#39bdf5]" />,

     title: "Análisis de Datos",

     description: "Métricas avanzadas y optimización para estrategia digital con enfoque en resultados medibles." [cite: 10]

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

 <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">

   Óscar San Emeterio [cite: 12]

 </h2>

 <hr className="w-24 border-t-4 border-[#39bdf5] mx-auto my-4" />

 <p className="text-xl md:text-2xl text-white/80">

   Consultor de comunicación e inteligencia artificial [cite: 12]

 </p>

</div>

           <div className="inline-block p-4 rounded-2xl backdrop-blur-sm bg-white/5 mb-8">

         

           </div>

         </div>

         <h1 className="fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">

            Servicios estratégicos de<br /> [cite: 13]

           <span className="text-[#39bdf5]">comunicación e IA</span><br /> [cite: 13]

           para organizaciones con propósito [cite: 13]

         </h1>

         <p className="fade-in text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">

           Potencio tu impacto a través de estrategia, tecnología y creatividad [cite: 13]

         </p>

         <a

           href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3dPNmLgARl5QQtwFkO6oBuSsCHnBPkow5biWhKCdEBM7V-FYwHH3omucOgrgZqVDR5RubmXYuc"

           className="fade-in btn-primary text-lg font-semibold inline-block"

         >

           Solicita una consulta gratuita [cite: 14]

         </a>

       </div>

     </section>

     {/* Core Services Section */}

     <section className="py-16 px-4 bg-gray-50">

       <div className="max-w-6xl mx-auto">

         <div className="grid md:grid-cols-3 gap-8">

           {coreServices.map((service, index) => {

             if (service.title === "Consultoría en Comunicación") {

               return (

                 <Link

                   key={index}

                   to="/consultoria"

                   className="slide-up service-card text-center block no-underline"

                 >

                   <div className="mb-4 flex justify-center">

                     {service.icon} [cite: 16]

                   </div>

                   <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">

                     {service.title} [cite: 16]

                   </h3>

                   <p className="text-gray-600 leading-relaxed">

                     {service.description} [cite: 17]

                   </p>

                 </Link>

               );

             }

             return (

               <div key={index} className="slide-up service-card text-center">

                 <div className="mb-4 flex justify-center">

                   {service.icon} [cite: 16]

                 </div>

                 <h3 className="text-xl font-bold mb-3 text-[#5a5b7f]">

                   {service.title} [cite: 16]

                 </h3>

                 <p className="text-gray-600 leading-relaxed">

                   {service.description} [cite: 17]

                 </p>

               </div>

             );

           })}

         </div>

       </div>

     </section>

<section className="py-20 px-4 bg-white">

 <div className="max-w-7xl mx-auto">

   <div className="text-center mb-16">

     <h2 className="fade-in text-4xl md:text-5xl font-bold mb-6 text-[#5a5b7f]">

       Mis Servicios [cite: 18]

     </h2>

     <p className="fade-in text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

       Soluciones profesionales en comunicación e IA para impulsar tu organización en Cantabria [cite: 18]

     </p>

   </div>

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{extendedServices.map((service, index) => {

 if (service.title === 'Consultoría en IA') {

   return (

     <Link

       key={index}

       [cite_start]to="/consultoria" [cite: 19]

       [cite_start]className="slide-up extended-service-card block rounded-xl bg-white shadow-md p-6 transition-transform hover:scale-105 text-left no-underline" [cite: 19]

     >

       <div className="mb-4">

         {service.icon} [cite: 19]

       </div>

       <h3 className="text-xl font-bold mb-4 text-[#5a5b7f]">

         {service.title} [cite: 20]

       </h3>

       <p className="text-gray-600 leading-relaxed">

         {service.description} [cite: 20]

       </p>

     </Link>

   )

 }

 // el resto de tarjetas sin enlace:

 return (

   <div

     key={index}

     className="slide-up extended-service-card block rounded-xl bg-white shadow-md p-6 cursor-default text-left"

   >

     <div className="mb-4">{service.icon}</div>

     <h3 className="text-xl font-bold mb-4 text-[#5a5b7f]">

       {service.title} [cite: 21]

     </h3>

     <p className="text-gray-600 leading-relaxed">

       {service.description} [cite: 21]

     </p>

   </div>

 )

})}

   </div>

 </div>

</section>

     {/* Personal Introduction Section */}

     <section className="py-20 px-4 bg-[#5a5b7f] relative overflow-hidden">

       <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>

       <div className="max-w-4xl mx-auto text-center relative z-10">

         <div className="fade-in mb-8">

           <User className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" /> [cite: 22]

           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">

             Dirigido por Óscar San Emeterio [cite: 22]

           </h2>

         </div>

         <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">

           <div className="slide-up text-white">

             <p className="text-xl md:text-2xl mb-8 leading-relaxed">

               Con más de 16 años de experiencia en comunicación institucional y un enfoque estratégico centrado en la innovación, ayudo a organizaciones a transformar su mensaje aplicando inteligencia artificial y narrativa profesional. [cite: 23, 24]

             </p>

           <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">

 Fundador de <a href="https://www.conexionpublica.es" target="_blank" rel="noopener noreferrer" className="underline text-[#39bdf5] hover:text-white transition-colors">Conexión Pública</a>, consultor, formador y creador del pódcast del mismo nombre, especializado en comunicación con IA para pymes, ONG e instituciones. [cite: 24, 25]

           </p>

           <div className="btn-primary inline-flex items-center space-x-2 text-lg cursor-default">

 <span>Más sobre Óscar</span> [cite: 25]

</div>

           </div>

         </div>

       </div>

     </section>

     {/* Newsletter Section */}

     <section className="py-20 px-4 bg-gray-50">

       <div className="max-w-4xl mx-auto text-center">

         <div className="fade-in mb-8">

           <Mail className="w-16 h-16 text-[#39bdf5] mx-auto mb-6" /> [cite: 26]

           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#5a5b7f]">

             Mantente Informado [cite: 26]

           </h2>

           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">

             Suscríbete a mi newsletter para recibir las últimas actualizaciones sobre comunicación e inteligencia artificial [cite: 27]

           </p>

         </div>

         <form onSubmit={handleNewsletterSubmit} className="slide-up max-w-lg mx-auto">

           <div className="flex flex-col sm:flex-row gap-4 mb-4">

             <input

               type="email"

               [cite_start]placeholder="Tu dirección de email" [cite: 28]

               required

               className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39bdf5] focus:border-transparent transition-all duration-300"

               value={newsletterEmail}

               onChange={(e) => setNewsletterEmail(e.target.value)}

             />

             <button

               type="submit"

               [cite_start]className="btn-newsletter whitespace-nowrap" [cite: 29]

             >

               Suscribirme [cite: 29]

             </button>

           </div> [cite: 30]

           <p className="text-sm text-gray-500 leading-relaxed">

             Respetamos tu privacidad. Puedes cancelar la suscripción en cualquier momento. [cite: 31]

           </p>

         </form>

       </div>

     </section>

     {/* Contact Form Section */}

     <section className="py-20 px-4 bg-white">

       <div className="max-w-2xl mx-auto">

         <h2 className="fade-in text-4xl md:text-5xl font-bold text-center mb-16 text-[#5a5b7f]">

           Contáctame [cite: 32]

         </h2>

         <form onSubmit={handleSubmit} className="slide-up bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">

           <div className="mb-6">

             <label htmlFor="nombre" className="block text-[#5a5b7f] font-semibold mb-2">

               Nombre [cite: 32]

             </label>

             <input

               [cite_start]type="text" [cite: 33]

               id="nombre"

               required

               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39bdf5] focus:border-transparent transition-all duration-300 bg-white"

               value={formData.nombre}

               [cite_start]onChange={(e) => setFormData({...formData, nombre: e.target.value})} [cite: 34]

             />

           </div>

           <div className="mb-6">

             <label htmlFor="email" className="block text-[#5a5b7f] font-semibold mb-2">

               Email [cite: 35]

             </label>

             <input

               [cite_start]type="email" [cite: 35]

               id="email"

               required

               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39bdf5] focus:border-transparent transition-all duration-300 bg-white"

               value={formData.email}

               [cite_start]onChange={(e) => setFormData({...formData, email: e.target.value})} [cite: 36]

             />

           </div>

           <div className="mb-8">

             <label htmlFor="mensaje" className="block text-[#5a5b7f] font-semibold mb-2">

               Mensaje [cite: 37]

             </label>

             <textarea

               id="mensaje"

               rows={5}

               required

               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39bdf5] focus:border-transparent transition-all duration-300 resize-none bg-white"

               [cite_start]value={formData.mensaje} [cite: 38]

               [cite_start]onChange={(e) => setFormData({...formData, mensaje: e.target.value})} [cite: 38]

             />

           </div>

           <button

             type="submit"

             [cite_start]className="w-full btn-primary flex items-center justify-center space-x-2 text-lg" [cite: 39]

           >

             <Send className="w-5 h-5" />

             <span>Enviar mensaje</span> [cite: 39]

           </button>

         </form>

       </div>

     </section>

     {/* Footer */}

     <footer className="bg-[#5a5b7f] text-white py-16 px-4 relative overflow-hidden"> [cite: 40]

       <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90"></div>

       <div className="max-w-6xl mx-auto relative z-10">

         <div className="flex flex-col md:flex-row justify-between items-center mb-8">

           <div className="mb-8 md:mb-0 text-center md:text-left">

             <div className="inline-block p-3 rounded-xl backdrop-blur-sm bg-white/5 mb-4">

               <img src="/logo.png" alt="Conexión Pública" className="h-12" /> [cite: 41]

             </div>

             <p className="text-white/90 text-lg">

               Ayudo a potenciar organizaciones con propósito [cite: 41]

             </p>

           </div>

           <div className="flex space-x-6">

             <a href="#" className="text-[#39bdf5] hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"> [cite: 42]

               <Linkedin className="w-7 h-7" /> [cite: 42]

             </a>

             <a href="#" className="text-[#39bdf5] hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"> [cite: 42]

               <Twitter className="w-7 h-7" /> [cite: 43]

             </a> [cite: 43]

           </div>

         </div>

         <div className="border-t border-white/20 pt-8 text-center text-white/70">

           © 2024 Conexión Pública. Todos los derechos reservados. [cite: 44]

         </div>

       </div>

     </footer>

   </div>

 )

}

 

export default App

export default App
