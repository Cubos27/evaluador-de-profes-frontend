import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { fetchProfesorByIdMock } from "@/mockData/profesores";

const statCards = [
  { key: "evaluacionesTotales", label: "Evaluaciones" },
  { key: "promedioGeneral", label: "Promedio general" },
  { key: "recomendacion", label: "Recomendacion" },
  { key: "claridad", label: "Claridad" },
  { key: "puntualidad", label: "Puntualidad" },
  { key: "dominioTema", label: "Dominio del tema" },
];

export default async function ProfesorPage({ params }) {
  const { profesorId } = await params;
  const profesor = await fetchProfesorByIdMock(profesorId);

  if (!profesor) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          Volver al inicio
        </Link>
        <Link href="/evaluar" className={styles.secondaryLink}>
          Ir a evaluar
        </Link>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Perfil del profesor</p>
          <h1 className={styles.name}>{profesor.nombre}</h1>
        </section>

        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Datos generales</h2>
          <div className={styles.detailsGrid}>
            <p>
              <span className={styles.label}>Departamento:</span> {profesor.datos.departamento}
            </p>
            <p>
              <span className={styles.label}>Correo:</span> {profesor.datos.correo}
            </p>
            <p>
              <span className={styles.label}>Oficina:</span> {profesor.datos.oficina}
            </p>
            <p>
              <span className={styles.label}>Antiguedad:</span> {profesor.datos.antiguedad}
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Materias y secciones</h2>
          <div className={styles.subjectsList}>
            {profesor.materias.map((materia) => (
              <article key={`${materia.nrc}-${materia.seccion}`} className={styles.subjectItem}>
                <h3>{materia.nombre}</h3>
                <p>Seccion: {materia.seccion}</p>
                <p>NRC: {materia.nrc}</p>
                <p>Alumnos: {materia.alumnos}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Estadisticas recopiladas</h2>
          <div className={styles.statsGrid}>
            {statCards.map((stat) => (
              <article key={stat.key} className={styles.statItem}>
                <p className={styles.statLabel}>{stat.label}</p>
                <p className={styles.statValue}>{profesor.estadisticas[stat.key]}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}