import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Aquí irán más rutas como /consultoria, /formacion, etc. */}
      </Routes>
    </Router>
  )
}

export default App
