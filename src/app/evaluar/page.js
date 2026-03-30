"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const campuses = [
  { id: 1, name: "Campus Central" },
  { id: 2, name: "Campus Norte" },
  { id: 3, name: "Campus Sur" },
  { id: 4, name: "Campus Oriente" },
];

const mockTeachers = {
  1: [
    { id: 1, name: "Dra. María González" },
    { id: 2, name: "Dr. Carlos Ramírez" },
    { id: 3, name: "Mtra. Ana López" },
  ],
  2: [
    { id: 4, name: "Dr. Juan Pérez" },
    { id: 5, name: "Mtra. Sofia Hernández" },
  ],
  3: [
    { id: 6, name: "Dr. Roberto Díaz" },
    { id: 7, name: "Mtra. Elena Vargas" },
    { id: 8, name: "Dr. Miguel Torres" },
  ],
  4: [
    { id: 9, name: "Mtra. Patricia Ruiz" },
    { id: 10, name: "Dr. Francisco Morales" },
  ],
};

const questions = [
  {
    id: 1,
    text: "¿Qué tan clara es la explicación del profesor/a al impartir su clase?",
    scale: [
      { value: 1, label: "Muy mala" },
      { value: 2, label: "Mala" },
      { value: 3, label: "Regular" },
      { value: 4, label: "Buena" },
      { value: 5, label: "Excelente" },
    ],
  },
  {
    id: 2,
    text: "¿Qué tan disponible está el profesor/a para resolver dudas?",
    scale: [
      { value: 1, label: "Muy mala" },
      { value: 2, label: "Mala" },
      { value: 3, label: "Regular" },
      { value: 4, label: "Buena" },
      { value: 5, label: "Excelente" },
    ],
  },
  {
    id: 3,
    text: "¿El profesor/a fomenta la participación y el pensamiento crítico?",
    scale: [
      { value: 1, label: "Muy mala" },
      { value: 2, label: "Mala" },
      { value: 3, label: "Regular" },
      { value: 4, label: "Buena" },
      { value: 5, label: "Excelente" },
    ],
  },
  {
    id: 4,
    text: "¿Qué tan justas son las formas de evaluación del profesor/a?",
    scale: [
      { value: 1, label: "Muy mala" },
      { value: 2, label: "Mala" },
      { value: 3, label: "Regular" },
      { value: 4, label: "Buena" },
      { value: 5, label: "Excelente" },
    ],
  },
];

function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

export default function EvaluarPage() {
  const [selectedCampus, setSelectedCampus] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const teachers = selectedCampus ? mockTeachers[selectedCampus] || [] : [];
  const canSubmit = selectedCampus && selectedTeacher && Object.keys(answers).length === questions.length;

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedCampus("");
    setSelectedTeacher("");
    setAnswers({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeftIcon /> Volver al inicio
          </Link>
        </header>
        <main className={styles.main}>
          <div className={styles.formContainer}>
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>
                <CheckIcon />
              </div>
              <h2 className={styles.successTitle}>¡Evaluación enviada!</h2>
              <p className={styles.successText}>
                Gracias por tu retroalimentación. Tu opinión ayuda a mejorar la calidad educativa.
              </p>
              <Link href="/" className={styles.backHomeBtn}>
                <HomeIcon /> Volver al inicio
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeftIcon /> Volver al inicio
        </Link>
        <span className={styles.logo}>EvaluaProfe</span>
      </header>

      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Evalúa a tu profesor</h1>
          <p className={styles.formSubtitle}>
            Tu opinión es匿名 y nos ayuda a mejorar la calidad educativa.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="campus">
                Selecciona tu campus
              </label>
              <select
                id="campus"
                className={styles.select}
                value={selectedCampus}
                onChange={(e) => {
                  setSelectedCampus(e.target.value);
                  setSelectedTeacher("");
                }}
              >
                <option value="">Elige un campus</option>
                {campuses.map((campus) => (
                  <option key={campus.id} value={campus.id}>
                    {campus.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="teacher">
                Selecciona tu profesor/a
              </label>
              <select
                id="teacher"
                className={styles.select}
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                disabled={!selectedCampus}
              >
                <option value="">
                  {selectedCampus ? "Elige un profesor" : "Primero selecciona un campus"}
                </option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.questionsSection}>
              <h2 className={styles.sectionTitle}>Preguntas de evaluación</h2>

              {questions.map((question) => (
                <div key={question.id} className={styles.question}>
                  <p className={styles.questionText}>{question.text}</p>
                  <div className={styles.ratingContainer}>
                    {question.scale.map((option) => (
                      <label key={option.value} className={styles.ratingOption}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => handleAnswer(question.id, option.value)}
                        />
                        <span className={styles.ratingLabel}>{option.value}</span>
                        <span className={styles.ratingText}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!canSubmit}
            >
              <SendIcon /> Enviar evaluación
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
