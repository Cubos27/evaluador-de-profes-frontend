import styles from "./header.module.css";
import Link from "next/link";
import PrimaryBtn from "../buttons/primaryBtn";
import { StarIcon } from "@/components/icons";

export default function Header() {
  return (
    <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <StarIcon />
          </div>
          EvaluaProfe
        </Link>
        <nav className={styles.nav}>
          <Link href="/profesores" className={styles.navLink}>Estadísticas de profesores</Link>
          <Link href="/" className={styles.navLink}>Iniciar sesión</Link>
          <Link href="/evaluar" className={styles.navLink}>
            <PrimaryBtn>
              Comenzar ahora
            </PrimaryBtn>
          </Link>
        </nav>
      </header>
  );
}