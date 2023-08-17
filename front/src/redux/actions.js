import {
  GET_ALUMNOS,
  ADD_ALUMNO,
  EDIT_ALUMNO,
  REMOVE_ALUMNO,
  FILTRO,
  ORDEN,
  RESET,
} from "./types";

export function getAlumnos() {
  return {
    type: GET_ALUMNOS,
  };
}

export function addAlumno(nuevoAlumno) {
  return {
    type: ADD_ALUMNO,
    payload: nuevoAlumno,
  };
}

export function editAlumno(id, alumnoEditado) {
  return {
    type: EDIT_ALUMNO,
    payload: { alumnoEditado, id },
  };
}

export function removeAlumno(id) {
  return {
    type: REMOVE_ALUMNO,
    payload: id,
  };
}

export function filtrarAlumnos(pais) {
  return {
    type: FILTRO,
    payload: pais,
  };
}

export function ordenarAlumnos(orden) {
  return {
    type: ORDEN,
    payload: orden,
  };
}

export function resetAlumnos() {
  return {
    type: RESET,
  };
}
