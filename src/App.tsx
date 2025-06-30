import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Consultoria from './pages/Consultoria'
import ComunicacionInstitucional from './pages/ComunicacionInstitucional'
import FormacionIA from './pages/FormacionIA'
import CreacionContenidos from './pages/CreacionContenidos'
import TalleresPracticos from './pages/TalleresPracticos'
import AnalisisDatos from './pages/AnalisisDatos'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/comunicacion-institucional" element={<ComunicacionInstitucional />} />
        <Route path="/formacion-ia" element={<FormacionIA />} />
        <Route path="/creacion-contenidos" element={<CreacionContenidos />} />
        <Route path="/talleres-practicos" element={<TalleresPracticos />} />
        <Route path="/analisis-datos" element={<AnalisisDatos />} />
      </Routes>
    </Router>
  )
}

export default App
