const profesoresMock = [
  {
    id: "1",
    nombre: "Hector Joaquin Escobar Cuevas",
    datos: {
      departamento: "Ingenieria en Sistemas",
      correo: "hector.escobar@universidad.edu",
      oficina: "Edificio D, cubiculo 204",
      antiguedad: "8 anios",
    },
    materias: [
      { nombre: "Programacion Web", seccion: "D12", nrc: "12345", alumnos: 30 },
      { nombre: "Estructuras de Datos", seccion: "D11", nrc: "22346", alumnos: 28 },
      { nombre: "Algoritmos", seccion: "D10", nrc: "123450", alumnos: 32 },
    ],
    estadisticas: {
      evaluacionesTotales: 146,
      promedioGeneral: 4.6,
      recomendacion: "94%",
      claridad: 4.7,
      puntualidad: 4.8,
      dominioTema: 4.6,
    },
  },
  {
    id: "2",
    nombre: "Norma Elva Espino Rojas",
    datos: {
      departamento: "Base de Datos",
      correo: "norma.espino@universidad.edu",
      oficina: "Edificio B, cubiculo 110",
      antiguedad: "11 anios",
    },
    materias: [
      { nombre: "Bases de Datos I", seccion: "D13", nrc: "12346", alumnos: 34 },
      { nombre: "Modelado de Datos", seccion: "BD13", nrc: "112346", alumnos: 29 },
    ],
    estadisticas: {
      evaluacionesTotales: 189,
      promedioGeneral: 4.8,
      recomendacion: "96%",
      claridad: 4.9,
      puntualidad: 4.7,
      dominioTema: 4.8,
    },
  },
  {
    id: "3",
    nombre: "Emanuel Jose Avila Vazquez",
    datos: {
      departamento: "Matematicas Aplicadas",
      correo: "emanuel.avila@universidad.edu",
      oficina: "Edificio C, cubiculo 307",
      antiguedad: "5 anios",
    },
    materias: [
      { nombre: "Calculo Integral", seccion: "D14", nrc: "12347", alumnos: 31 },
    ],
    estadisticas: {
      evaluacionesTotales: 97,
      promedioGeneral: 4.4,
      recomendacion: "89%",
      claridad: 4.3,
      puntualidad: 4.6,
      dominioTema: 4.5,
    },
  },
  {
    id: "4",
    nombre: "Laura Fernandez Mendez",
    datos: {
      departamento: "Ingenieria de Software",
      correo: "laura.fernandez@universidad.edu",
      oficina: "Edificio A, cubiculo 118",
      antiguedad: "9 anios",
    },
    materias: [
      { nombre: "Ingenieria de Requisitos", seccion: "IS21", nrc: "45621", alumnos: 33 },
      { nombre: "Pruebas de Software", seccion: "IS22", nrc: "45622", alumnos: 27 },
    ],
    estadisticas: {
      evaluacionesTotales: 154,
      promedioGeneral: 4.5,
      recomendacion: "91%",
      claridad: 4.6,
      puntualidad: 4.5,
      dominioTema: 4.7,
    },
  },
  {
    id: "5",
    nombre: "Carlos Alberto Ramirez Soto",
    datos: {
      departamento: "Redes y Telecomunicaciones",
      correo: "carlos.ramirez@universidad.edu",
      oficina: "Edificio T, cubiculo 09",
      antiguedad: "13 anios",
    },
    materias: [
      { nombre: "Redes de Computadoras", seccion: "RT10", nrc: "51010", alumnos: 35 },
      { nombre: "Seguridad en Redes", seccion: "RT11", nrc: "51011", alumnos: 30 },
    ],
    estadisticas: {
      evaluacionesTotales: 201,
      promedioGeneral: 4.2,
      recomendacion: "86%",
      claridad: 4.1,
      puntualidad: 4.4,
      dominioTema: 4.5,
    },
  },
  {
    id: "6",
    nombre: "Patricia Gomez Ibarra",
    datos: {
      departamento: "Ciencias Basicas",
      correo: "patricia.gomez@universidad.edu",
      oficina: "Edificio C, cubiculo 201",
      antiguedad: "6 anios",
    },
    materias: [
      { nombre: "Probabilidad y Estadistica", seccion: "CB31", nrc: "63131", alumnos: 40 },
    ],
    estadisticas: {
      evaluacionesTotales: 118,
      promedioGeneral: 4.3,
      recomendacion: "88%",
      claridad: 4.2,
      puntualidad: 4.6,
      dominioTema: 4.4,
    },
  },
  {
    id: "7",
    nombre: "Miguel Angel Torres Cano",
    datos: {
      departamento: "Arquitectura de Computadoras",
      correo: "miguel.torres@universidad.edu",
      oficina: "Edificio H, cubiculo 015",
      antiguedad: "10 anios",
    },
    materias: [
      { nombre: "Arquitectura de Computadoras", seccion: "AC12", nrc: "71212", alumnos: 29 },
      { nombre: "Sistemas Embebidos", seccion: "AC13", nrc: "71213", alumnos: 25 },
    ],
    estadisticas: {
      evaluacionesTotales: 166,
      promedioGeneral: 4.1,
      recomendacion: "84%",
      claridad: 4,
      puntualidad: 4.3,
      dominioTema: 4.5,
    },
  },
  {
    id: "8",
    nombre: "Daniela Ruiz Salinas",
    datos: {
      departamento: "Desarrollo Web",
      correo: "daniela.ruiz@universidad.edu",
      oficina: "Edificio D, cubiculo 123",
      antiguedad: "4 anios",
    },
    materias: [
      { nombre: "Frontend Avanzado", seccion: "DW41", nrc: "84141", alumnos: 26 },
      { nombre: "Backend con Node", seccion: "DW42", nrc: "84142", alumnos: 24 },
    ],
    estadisticas: {
      evaluacionesTotales: 92,
      promedioGeneral: 4.7,
      recomendacion: "95%",
      claridad: 4.8,
      puntualidad: 4.7,
      dominioTema: 4.6,
    },
  },
  {
    id: "9",
    nombre: "Ricardo Ponce Valdes",
    datos: {
      departamento: "Inteligencia Artificial",
      correo: "ricardo.ponce@universidad.edu",
      oficina: "Edificio IA, cubiculo 03",
      antiguedad: "7 anios",
    },
    materias: [
      { nombre: "Aprendizaje Automatico", seccion: "IA20", nrc: "92020", alumnos: 31 },
      { nombre: "Vision por Computadora", seccion: "IA21", nrc: "92021", alumnos: 22 },
    ],
    estadisticas: {
      evaluacionesTotales: 143,
      promedioGeneral: 4.6,
      recomendacion: "93%",
      claridad: 4.5,
      puntualidad: 4.4,
      dominioTema: 4.9,
    },
  },
  {
    id: "10",
    nombre: "Sofia Hernandez Lozano",
    datos: {
      departamento: "Gestion de Proyectos",
      correo: "sofia.hernandez@universidad.edu",
      oficina: "Edificio G, cubiculo 302",
      antiguedad: "12 anios",
    },
    materias: [
      { nombre: "Administracion de Proyectos", seccion: "GP50", nrc: "105050", alumnos: 38 },
      { nombre: "Metodologias Agiles", seccion: "GP51", nrc: "105051", alumnos: 36 },
    ],
    estadisticas: {
      evaluacionesTotales: 212,
      promedioGeneral: 4.4,
      recomendacion: "90%",
      claridad: 4.4,
      puntualidad: 4.7,
      dominioTema: 4.3,
    },
  },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchProfesorByIdMock(profesorId) {
  await wait(200);
  return profesoresMock.find((profesor) => profesor.id === String(profesorId)) ?? null;
}

export async function fetchProfesoresMock() {
  await wait(200);
  return profesoresMock;
}
