import Link from "next/link";
import styles from "./page.module.css";
import { fetchProfesoresMock } from "@/mockData/profesores";

export default async function ProfesoresPage({ searchParams }) {
  const profesores = await fetchProfesoresMock();
  const params = await searchParams;
  const query = (params?.q ?? "").toLowerCase().trim();

  const profesoresFiltrados = profesores
    .filter((profesor) => {
      if (!query) {
        return true;
      }

      const searchableText = [
        profesor.nombre,
        profesor.datos.departamento,
        profesor.datos.correo,
        ...profesor.materias.map((materia) => materia.nombre),
        ...profesor.materias.map((materia) => materia.seccion),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    })
    .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          Volver al inicio
        </Link>
        <h1>Profesores</h1>
      </header>

      <main className={styles.main}>
        <form className={styles.searchForm} action="/profesores">
          <label htmlFor="q" className={styles.searchLabel}>
            Buscar profesor, departamento o materia
          </label>
          <input
            id="q"
            name="q"
            defaultValue={params?.q ?? ""}
            placeholder="Ejemplo: bases de datos"
            className={styles.searchInput}
          />
        </form>

        <p className={styles.resultsText}>
          {profesoresFiltrados.length} resultado{profesoresFiltrados.length === 1 ? "" : "s"}
        </p>

        <section className={styles.grid}>
          {profesoresFiltrados.map((profesor) => (
            <article key={profesor.id} className={styles.card}>
              <h2 className={styles.name}>{profesor.nombre}</h2>
              <p className={styles.meta}>{profesor.datos.departamento}</p>
              <p className={styles.meta}>{profesor.materias.length} materias activas</p>
              <p className={styles.meta}>
                Promedio: {profesor.estadisticas.promedioGeneral} | Recomendacion:{" "}
                {profesor.estadisticas.recomendacion}
              </p>
              <Link href={`/profesores/${profesor.id}`} className={styles.link}>
                Ver perfil
              </Link>
            </article>
          ))}
        </section>

        {profesoresFiltrados.length === 0 && (
          <p className={styles.empty}>
            No hay coincidencias para tu busqueda. Prueba con otro termino.
          </p>
        )}
      </main>
    </div>
  );
}
