// src/components/DiseñoGeneral.tsx
import { ReactNode } from 'react';

function DiseñoGeneral({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabecera si quieres que sea fija (opcional) */}
      {/* <header className="bg-[#5a5b7f] text-white py-4 px-6 shadow-md">
        <h1 className="text-xl font-bold">Conexión Pública</h1>
      </header> */}

      <main className="flex-grow">{children}</main>

      {/* Footer común */}
      <footer className="bg-[#5a5b7f] text-white py-6 text-center text-sm mt-12">
        <p>© {new Date().getFullYear()} Conexión Pública. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default DiseñoGeneral;
