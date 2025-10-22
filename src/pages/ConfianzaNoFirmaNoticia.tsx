import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function ConfianzaNoFirmaNoticia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero del post (mismo tono que tu web) */}
      <section className="bg-[#5a5b7f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a5b7f] via-[#5a5b7f] to-[#4a4b6f] opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center text-white">
          <BookOpen className="w-12 h-12 text-[#39bdf5] mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            La confianza ya no firma las noticias
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Mis reflexiones · Comunicación, IA y autoría
          </p>
        </div>
      </section>

      {/* Cuerpo del artículo dentro de una “tarjeta” */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          {/* Entradilla / resumen */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Cuando pedimos a la IA que nos explique el mundo, ganamos contexto,
            pero se diluye la voz que firma. ¿Qué pasa con la confianza si lo que
            leemos no viene de un autor reconocible?
          </p>

          {/* Contenido base (puedes ampliarlo) */}
          <div className="prose prose-neutral max-w-none">
            <p>
              Este resumen recoge las ideas principales del artículo original
              publicado en Substack. Si quieres leer el desarrollo completo,
              incluyendo ejemplos y referencias, puedes abrir la versión extendida.
            </p>
          </div>

          {/* CTA a Substack */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://osanemeterio.substack.com/p/la-confianza-ya-no-firma-las-noticias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl border bg-black text-white hover:opacity-90"
            >
              Leer artículo completo en Substack
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl border hover:bg-gray-50"
            >
              ← Volver al blog
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
