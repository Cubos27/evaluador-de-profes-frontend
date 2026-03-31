"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeftIcon, CheckIcon, HomeIcon, SendIcon } from "@/components/icons";

const mockTeachersResults = [
  {
    "name": "Hector Joaquin Escobar Cuevas",
    "id": 1,
    "secciones": [
      {
        "name": "D12",
        "nrc": "12345",
        "cupos": 30,
        "id": 1
      },
      {
        "name": "D11",
        "nrc": "22346",
        "cupos": 30,
        "id": 5
      },
      {
        "name": "D10",
        "nrc": "123450",
        "cupos": 30,
        "id": 4
      }
    ]
  },
  {
    "name": "Norma Elva Espino Rojas",
    "id": 2,
    "secciones": [
      {
        "name": "D13",
        "nrc": "12346",
        "cupos": 30,
        "id": 2
      },
      {
        "name": "BD13",
        "nrc": "112346",
        "cupos": 30,
        "id": 6
      }
    ]
  },
  {
    "name": "Emanuel Jose Avila Vazquez",
    "id": 3,
    "secciones": [
      {
        "name": "D14",
        "nrc": "12347",
        "cupos": 30,
        "id": 3
      }
    ]
  },
]

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
      { value: 1, label: "Nunca" },
      { value: 2, label: "Ocasionalmente" },
      { value: 3, label: "A veces" },
      { value: 4, label: "Frecuentemente" },
      { value: 5, label: "Siempre" },
    ],
  },
  {
    id: 3,
    text: "¿El profesor/a fomenta el pensamiento crítico?",
    scale: [
      { value: 1, label: "Nunca" },
      { value: 2, label: "Ocasionalmente" },
      { value: 3, label: "A veces" },
      { value: 4, label: "Frecuentemente" },
      { value: 5, label: "Siempre" },
    ],
  },
  {
    id: 4,
    text: "¿El profesor/a fomenta la participación de los estudiantes?",
    scale: [
      { value: 1, label: "Nunca" },
      { value: 2, label: "Ocasionalmente" },
      { value: 3, label: "A veces" },
      { value: 4, label: "Frecuentemente" },
      { value: 5, label: "Siempre" },
    ],
  },
  {
    id: 5,
    text: "¿Qué tan justas son las formas de evaluación del profesor/a?",
    scale: [
      { value: 1, label: "Muy malas" },
      { value: 2, label: "Malas" },
      { value: 3, label: "Regulares" },
      { value: 4, label: "Buenas" },
      { value: 5, label: "Excelentes" },
    ],
  },
];

export default function EvaluarPage() {
  const [selectedTeacherId, setSelectedTeacherId] = useState("");
  const [selectedSeccionId, setSelectedSeccionId] = useState("");
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const teachersOrdered = [...mockTeachersResults].sort((a, b) =>
    a.name.localeCompare(b.name, "es")
  );
  const selectedTeacher = mockTeachersResults.find(
    (t) => String(t.id) === String(selectedTeacherId)
  );
  const seccionesOrdered = selectedTeacher
    ? [...selectedTeacher.secciones].sort((a, b) => a.name.localeCompare(b.name, "es"))
    : [];

  const canSubmit =
    selectedTeacherId &&
    selectedSeccionId &&
    Object.keys(answers).length === questions.length;

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
    setSelectedTeacherId("");
    setSelectedSeccionId("");
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
                Gracias por tu retroalimentación. Tu opinión ayuda a todos los estudiantes.
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
            Tu opinión es anónima y nos ayuda a todos los estudiantes.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="teacher">
                Selecciona tu profesor/a
              </label>
              <select
                id="teacher"
                className={styles.select}
                value={selectedTeacherId}
                onChange={(e) => {
                  setSelectedTeacherId(e.target.value);
                  setSelectedSeccionId("");
                }}
              >
                <option value="">Elige un profesor</option>
                {teachersOrdered.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="materia">
                Selecciona la materia
              </label>
              <select
                id="materia"
                className={styles.select}
                value={selectedSeccionId}
                onChange={(e) => setSelectedSeccionId(e.target.value)}
                disabled={!selectedTeacherId}
              >
                <option value="">
                  {selectedTeacherId
                    ? "Elige una materia"
                    : "Primero selecciona un profesor"}
                </option>
                {seccionesOrdered.map((seccion) => (
                  <option key={seccion.id} value={seccion.id}>
                    {seccion.name} · NRC {seccion.nrc}
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
