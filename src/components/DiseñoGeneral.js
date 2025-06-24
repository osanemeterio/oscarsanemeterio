// DiseñoGeneral.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function DiseñoGeneral({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Encabezado (menú) */}
      <header style={{ background: '#333', color: '#fff', padding: '10px' }}>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/servicios" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link>
          <Link to="/contacto" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</Link>
        </nav>
      </header>

      {/* Aquí irá el contenido de cada página */}
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>

      {/* Pie de página */}
      <footer style={{ background: '#eee', textAlign: 'center', padding: '10px' }}>
        © {new Date().getFullYear()} Oscar San Emeterio
      </footer>
    </div>
  );
}
