'use client';

import React, { useState } from 'react';
import Input from '@/components/input/input'; 
import PrimaryBtn from '@/components/buttons/primaryBtn'; 
import SecondaryBtn from '@/components/buttons/secondaryBtn';
import styles from './page.module.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Iniciando sesión...');
    } else {
      console.log('Registrando usuario...');
    }
  };

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <main className={styles.content}>
        <div className={styles.loginCard}>
          <div className={styles.cardHeader}>
            <h1>{isLogin ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
            <p className={styles.subtitle}>
              {isLogin 
                ? 'Ingresa tus datos para continuar.' 
                : 'Únete para empezar a evaluar profesores.'}
            </p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            {/* Campo extra que solo aparece en el Registro */}
            {!isLogin && (
              <Input
                id="name"
                label="Nombre completo"
                type="text"
                placeholder="Ej. Juan Pérez"
                required
              />
            )}

            <Input
              id="email"
              label="Correo electrónico"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />

            <Input
              id="password"
              label="Contraseña"
              type="password"
              placeholder="Min. 8 caracteres"
              required
            />

            {/* Contenedor de botones ajustado */}
            <div className={styles.actionRow}>
                <SecondaryBtn onClick={toggleAuthMode}>
                  {isLogin ? 'Regístrate' : 'Inicia sesión'}
                </SecondaryBtn>
                <PrimaryBtn onClick={handleSubmit}>
                  {isLogin ? 'Iniciar sesión' : 'Registrarme'}
                </PrimaryBtn>
            </div>
          </form>
        </div>

        <div className={styles.visualColumn}>
          {/* Elementos decorativos animados */}
          <div className={styles.patternBox} />
          <div className={styles.patternCircle} />
          
          <div className={styles.textBlock}>
            <h2>{isLogin ? 'Bienvenido de vuelta.' : 'Comienza hoy mismo.'}</h2>
            <p>
              {isLogin 
                ? 'Accede para revisar estadísticas y continuar tus evaluaciones.' 
                : 'Tu retroalimentación ayuda a crear un mejor ambiente de aprendizaje para todos.'}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}