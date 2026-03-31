import styles from "./page.module.css";
import Link from "next/link";
import PrimaryBtn from "@/components/Buttons/primaryBtn";
import SecondaryBtn from "@/components/Buttons/secondaryBtn";
import {
  ArrowIcon,
  ChartIcon,
  CheckCircleIcon,
  ClockIcon,
  PencilIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons";

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
          <Link href="#features" className={styles.navLink}>Características</Link>
          <Link href="#como-funciona" className={styles.navLink}>Cómo funciona</Link>
          <Link href="/evaluar" className={styles.navLink}>
            <PrimaryBtn>
              Comenzar ahora
            </PrimaryBtn>
          </Link>
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
            <Link href={'/evaluar'} className={styles.primaryBtn}>
              <PrimaryBtn>
                Evaluar ahora <ArrowIcon />
              </PrimaryBtn>
            </Link>
            <Link href={'#como-funciona'} className={styles.secondaryBtn}>
              <SecondaryBtn>
                Saber más
              </SecondaryBtn>
            </Link>
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
                <CheckCircleIcon />
              </div>
              <h3 className={styles.featureTitle}>Resultados accionables</h3>
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
          <Link href="/evaluar" className={styles.linkBtn}>
            <PrimaryBtn>
              <PencilIcon /> &ensp;Comenzar evaluación
            </PrimaryBtn>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>EvaluaProfe</div>
        <p>Transformando la educación, una evaluación a la vez.</p>
      </footer>
    </div>
  );
}
