import styles from "./page.module.css";

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <StarIcon />
          </div>
          EvaluaProfe
        </div>
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Características</a>
          <a href="#como-funciona" className={styles.navLink}>Cómo funciona</a>
          <a href="/evaluar" className={styles.ctaButton}>Comenzar</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Mejora la educación con <span className={styles.heroTitleAccent}>tu opinión</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Tu retroalimentación ayuda a los profesores a crecer y a crear un mejor ambiente de aprendizaje para todos. Juntos podemos transformar la educación.
          </p>
          <div className={styles.heroCta}>
            <a href="/evaluar" className={styles.primaryBtn}>
              Evaluar ahora <ArrowIcon />
            </a>
            <a href="#como-funciona" className={styles.secondaryBtn}>
              Saber más
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={`${styles.floatingCard} ${styles.card1}`}>
            <div className={styles.cardIcon}>
              <StarIcon />
            </div>
            <h3 className={styles.cardTitle}>Evalúa fácilmente</h3>
            <p className={styles.cardText}>Proceso rápido y sencillo en minutos</p>
          </div>
          <div className={`${styles.floatingCard} ${styles.card2}`}>
            <div className={styles.cardIcon}>
              <ChartIcon />
            </div>
            <h3 className={styles.cardTitle}>Resultados claros</h3>
            <p className={styles.cardText}>Visualiza el impacto de tus evaluaciones</p>
          </div>
          <div className={`${styles.floatingCard} ${styles.card3}`}>
            <div className={styles.cardIcon}>
              <ShieldIcon />
            </div>
            <h3 className={styles.cardTitle}>100% anónimo</h3>
            <p className={styles.cardText}>Tu opinión está protegida</p>
          </div>
        </div>
      </section>

      <section className={styles.features} id="features">
        <div className={styles.featuresInner}>
          <p className={styles.sectionLabel}>Características</p>
          <h2 className={styles.sectionTitle}>Una plataforma diseñada para ti</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <StarIcon />
              </div>
              <h3 className={styles.featureTitle}>Evaluaciones detalladas</h3>
              <p className={styles.featureText}>
                Preguntas cuidadosamente diseñadas para capturar la esencia del desempeño docente.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ShieldIcon />
              </div>
              <h3 className={styles.featureTitle}>Privacidad garantizada</h3>
              <p className={styles.featureText}>
                Tus respuestas son completamente anónimas. Nadie sabrá lo que evaluaste ni cuándo.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ChartIcon />
              </div>
              <h3 className={styles.featureTitle}>Análisis profundos</h3>
              <p className={styles.featureText}>
                Visualiza tendencias y patrones para entender mejor la calidad educativa.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <UsersIcon />
              </div>
              <h3 className={styles.featureTitle}>Comunidad activa</h3>
              <p className={styles.featureText}>
               Únete a miles de estudiantes que contribuyen a mejorar la educación cada día.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ClockIcon />
              </div>
              <h3 className={styles.featureTitle}>Rápido y eficiente</h3>
              <p className={styles.featureText}>
                Completa tus evaluaciones en menos de 5 minutos. Sin complicaciones.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <CheckIcon />
              </div>
              <h3 className={styles.featureTitle}>Resultados actionables</h3>
              <p className={styles.featureText}>
                Los profesores reciben retroalimentación constructiva para mejorar su enseñanza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks} id="como-funciona">
        <div className={styles.howItWorksInner}>
          <p className={`${styles.sectionLabel} ${styles.howItWorksSectionLabel}`}>Proceso simple</p>
          <h2 className={styles.sectionTitle}>Cómo funciona en 4 pasos</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Selecciona tu campus</h3>
              <p className={styles.stepText}>Elige la institución donde estudias</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Busca tu profesor</h3>
              <p className={styles.stepText}>Encuentra al docente que deseas evaluar</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Responde las preguntas</h3>
              <p className={styles.stepText}>Completa el cuestionario de evaluación</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Listo</h3>
              <p className={styles.stepText}>Tu retroalimentación hace la diferencia</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Tu voz importa</h2>
          <p className={styles.ctaText}>
            Cada evaluación contribuye a crear un mejor ambiente de aprendizaje. No subestimes el poder de tu opinión.
          </p>
          <a href="/evaluar" className={styles.ctaBtn}>
            <PencilIcon /> Comenzar evaluación
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>EvaluaProfe</div>
        <p>Transformando la educación, una evaluación a la vez.</p>
      </footer>
    </div>
  );
}
