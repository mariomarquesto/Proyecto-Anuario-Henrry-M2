import {
  GET_ALUMNOS,
  ADD_ALUMNO,
  EDIT_ALUMNO,
  REMOVE_ALUMNO,
  FILTRO,
  ORDEN,
  RESET,
} from "./types";
import arrAlumnos from "../alumnos.json";

const initialState = {
  alumnos: arrAlumnos.map((a, i) => (a = { ...a, id: i })),
  alumnosFiltrados: arrAlumnos.map((a, i) => (a = { ...a, id: i })),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_ALUMNO:
      return {
        ...state,
        alumnos: [
          ...state.alumnos,
          { ...action.payload, id: state.alumnos.length },
        ],
      };
    case EDIT_ALUMNO:
      let { id, alumnoEditado } = action.payload;
      console.log(alumnoEditado);
      let copiaAlumnos = [...state.alumnos];
      copiaAlumnos[id] = { ...alumnoEditado, id };
      return {
        ...state,
        alumnos: copiaAlumnos,
      };
    case REMOVE_ALUMNO:
      return {
        ...state,
        alumnos: state.alumnos.filter((a) => a.id !== action.payload),
      };
    case FILTRO:
      return {
        ...state,
        alumnosFiltrados: state.alumnos.filter(
          (a) => a.localizacion.pais === action.payload
        ),
      };
    case ORDEN:
      let orderFunction =
        action.payload === "ASC"
          ? (a, b) => {
              return a.nombre > b.nombre ? 1 : -1;
            } // ASC
          : (a, b) => {
              return a.nombre < b.nombre ? 1 : -1;
            }; // DESC
      return {
        ...state,
        alumnosFiltrados: [...state.alumnosFiltrados.sort(orderFunction)],
      };
    case RESET:
      return {
        ...state,
        alumnosFiltrados: [...state.alumnos],
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
