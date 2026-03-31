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

function Combobox({
  id,
  value,
  onValueChange,
  options,
  onSelect,
  placeholder,
  disabled = false,
  noResultsText = "Sin resultados",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setIsOpen(true);
      return;
    }

    if (!options.length) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % options.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const option = options[activeIndex];
      if (option) {
        onSelect(option);
        setIsOpen(false);
      }
    }

    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.comboboxWrapper}>
      <input
        id={id}
        className={styles.select}
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-autocomplete="list"
        onFocus={() => {
          setIsOpen(true);
          setActiveIndex(0);
        }}
        onBlur={() => {
          setTimeout(() => setIsOpen(false), 120);
        }}
        onChange={(e) => {
          onValueChange(e.target.value);
          setIsOpen(true);
          setActiveIndex(0);
        }}
        onKeyDown={handleKeyDown}
      />

      {isOpen && !disabled && (
        <ul id={`${id}-listbox`} className={styles.comboboxList} role="listbox">
          {options.length ? (
            options.map((option, index) => (
              <li key={option.id} role="option" aria-selected={index === activeIndex}>
                <button
                  type="button"
                  className={`${styles.comboboxOption} ${index === activeIndex ? styles.comboboxOptionActive : ""}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {option.label}
                </button>
              </li>
            ))
          ) : (
            <li className={styles.comboboxEmpty}>{noResultsText}</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default function EvaluarPage() {
  const [selectedTeacherId, setSelectedTeacherId] = useState("");
  const [selectedSeccionId, setSelectedSeccionId] = useState("");
  const [teacherQuery, setTeacherQuery] = useState("");
  const [seccionQuery, setSeccionQuery] = useState("");
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

  const filteredTeachers = teachersOrdered
    .filter((teacher) => teacher.name.toLowerCase().includes(teacherQuery.toLowerCase()))
    .map((teacher) => ({
      id: String(teacher.id),
      label: teacher.name,
    }));
  const filteredSecciones = seccionesOrdered
    .filter((seccion) =>
      `${seccion.name} ${seccion.nrc}`.toLowerCase().includes(seccionQuery.toLowerCase())
    )
    .map((seccion) => ({
      id: String(seccion.id),
      label: `${seccion.name} · NRC ${seccion.nrc}`,
    }));

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      setIsSubmitted(true);
    }
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
              <Combobox
                id="teacher"
                value={teacherQuery}
                placeholder="Escribe para buscar profesor"
                options={filteredTeachers}
                noResultsText="No hay profesores que coincidan"
                onValueChange={(query) => {
                  setTeacherQuery(query);
                  setSelectedTeacherId("");
                  setSelectedSeccionId("");
                  setSeccionQuery("");
                }}
                onSelect={(option) => {
                  setTeacherQuery(option.label);
                  setSelectedTeacherId(option.id);
                  setSelectedSeccionId("");
                  setSeccionQuery("");
                }}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="materia">
                Selecciona la materia
              </label>
              <Combobox
                id="materia"
                value={seccionQuery}
                options={filteredSecciones}
                placeholder={
                  selectedTeacherId
                    ? "Escribe para buscar materia"
                    : "Primero selecciona un profesor"
                }
                onValueChange={(query) => {
                  setSeccionQuery(query);
                  setSelectedSeccionId("");
                }}
                onSelect={(option) => {
                  setSeccionQuery(option.label);
                  setSelectedSeccionId(option.id);
                }}
                noResultsText="No hay materias que coincidan"
                disabled={!selectedTeacherId}
              />
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
