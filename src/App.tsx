import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import ConsultoriaPage from './pages/consultoria'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<ConsultoriaPage />} />
      </Routes>
    </Router>
  )
}

export default App
