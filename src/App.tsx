import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Consultoria from './pages/Consultoria'
import ConsultoriaEnComunicacion from './pages/ConsultoriaEnComunicacion'
import CapacitacionIA from './pages/CapacitacionIA'
import ProduccionContenidos from './pages/ProduccionContenidos'
import ComunicacionInstitucional from './pages/ComunicacionInstitucional'
import FormacionIA from './pages/FormacionIA'
import CreacionContenidos from './pages/CreacionContenidos'
import TalleresPracticos from './pages/TalleresPracticos'
import MentoriaSeguimiento from './pages/MentoriaSeguimiento'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/ConsultoriaEnComunicacion" element={<ConsultoriaEnComunicacion />} />
        <Route path="/capacitacion-ia" element={<CapacitacionIA />} />
        <Route path="/produccion-contenidos" element={<ProduccionContenidos />} />
        <Route path="/comunicacion-institucional" element={<ComunicacionInstitucional />} />
        <Route path="/formacion-ia" element={<FormacionIA />} />
        <Route path="/creacion-contenidos" element={<CreacionContenidos />} />
        <Route path="/talleres-practicos" element={<TalleresPracticos />} />
        <Route path="/mentoria-seguimiento" element={<MentoriaSeguimiento />} />
      </Routes>
    </Router>
  )
}

export default App