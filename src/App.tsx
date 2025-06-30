import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Consultoria from './pages/Consultoria'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<Consultoria />} />
      </Routes>
    </Router>
  )
}

export default App
