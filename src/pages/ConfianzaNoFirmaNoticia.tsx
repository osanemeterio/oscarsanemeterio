import ArticleLayout from "../components/ArticleLayout";

export default function ConfianzaNoFirmaNoticia() {
  return (
    <ArticleLayout
      title="La confianza ya no firma las noticias"
      subtitle="Nueva reflexión • Óscar San Emeterio"
      backTo="/"
      ctaHref="https://osanemeterio.substack.com/p/la-confianza-ya-no-firma-las-noticias"
      ctaLabel="Leer artículo completo en Substack"
    >
      {/* Bloque resumen (caja blanca suave) */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-[#5a5b7f] mb-3">Resumen</h2>
        <p className="text-gray-700 leading-relaxed">
          Cuando pedimos a la IA que nos explique el mundo ganamos contexto, pero se
          diluye la voz que firma. ¿Qué pasa con la confianza si lo que leemos no
          viene de un autor reconocible? Este resumen recoge la idea central del
          artículo publicado en Substack y abre preguntas sobre autoría, trazabilidad
          y responsabilidad editorial en la era de la IA.
        </p>
      </section>

      {/* Bloque 2 (sección amplia, igual estilo que el ejemplo) */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-[#5a5b7f] mb-4">Del autor al sistema</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La lectura guiada por IA nos da acceso inmediato a contexto y síntesis,
          pero desplaza la referencia de una voz concreta a un sistema. La confianza,
          tradicionalmente asociada a la firma y al medio, se vuelve difusa cuando el
          contenido lo presenta un asistente inteligente sin identidad editorial.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Preguntas que abre el artículo:</span>
            <br />• ¿Cómo acreditamos autoría cuando el texto final es asistido?
            <br />• ¿Qué metadatos mínimos debería ver el lector (fuentes, método)?
            <br />• ¿Puede la verificación humana preservar la credibilidad del conjunto?
          </p>
        </div>
      </section>

      {/* Bloque 3 (conclusión corta, como en tu estilo) */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-[#5a5b7f] mb-3">Una confianza verificable</h2>
        <p className="text-gray-700 leading-relaxed">
          El reto no es volver atrás, sino diseñar una confianza verificable: avisos
          claros de asistencia por IA, trazabilidad de fuentes y supervisión
          profesional. Más que desaparecer, la autoría se redefine: pasa de una firma
          visible a un proceso explícito de edición responsable.
        </p>
      </section>
    </ArticleLayout>
  );
}
