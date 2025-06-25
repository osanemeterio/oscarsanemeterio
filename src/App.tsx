// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DiseñoGeneral from './components/ui/DiseñoGeneral';
import Home from './pages/Home';
import ConsultoriaComunicacion from './pages/ConsultoriaComunicacion';
import CapacitacionIA from './pages/CapacitacionIA';
import ProduccionContenidos from './pages/ProduccionContenidos';
import ConsultoriaIA from './pages/ConsultoriaIA';
import ComunicacionInstitucional from './pages/ComunicacionInstitucional';
import FormacionIA from './pages/FormacionIA';
import CreacionContenidos from './pages/CreacionContenidos';
import TalleresPracticos from './pages/TalleresPracticos';
import AnalisisDatos from './pages/AnalisisDatos';

function App() {
  return (
    <BrowserRouter>
      <DiseñoGeneral>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultoria-comunicacion" element={<ConsultoriaComunicacion />} />
          <Route path="/capacitacion-ia" element={<CapacitacionIA />} />
          <Route path="/produccion-contenidos" element={<ProduccionContenidos />} />
          <Route path="/consultoria-ia" element={<ConsultoriaIA />} />
          <Route path="/comunicacion-institucional" element={<ComunicacionInstitucional />} />
          <Route path="/formacion-ia" element={<FormacionIA />} />
          <Route path="/creacion-contenidos" element={<CreacionContenidos />} />
          <Route path="/talleres-practicos" element={<TalleresPracticos />} />
          <Route path="/analisis-datos" element={<AnalisisDatos />} />
        </Routes>
      </DiseñoGeneral>
    </BrowserRouter>
  );
}

export default App;
