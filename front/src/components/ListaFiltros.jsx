import Persona from "./Persona.jsx";
import style from "./css/Lista.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  filtrarAlumnos,
  ordenarAlumnos,
  resetAlumnos,
} from "../redux/actions.js";

function ListaFiltros() {
  let paises = ["Argentina", "Colombia", "Venezuela", "México", "Perú"];

  const alumnos = useSelector((state) => state.alumnosFiltrados);

  const dispatch = useDispatch();

  const filtro = useRef(null);
  const orden = useRef(null);

  const reset = () => {
    filtro.current.value = "";
    orden.current.value = "";
    dispatch(resetAlumnos());
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <>
      <div className={style.fDiv}>
        <span className={style.fSpan}>
          <label className={style.fLabel}>Filtrar por País:</label>
          <select
            ref={filtro}
            className={style.filtros}
            onChange={(evento) => dispatch(filtrarAlumnos(evento.target.value))}
          >
            {paises.map((e, i) => (
              <option value={e} key={i}>
                {e}
              </option>
            ))}
          </select>
        </span>
        <span className={style.fSpan}>
          <label className={style.fLabel}>Ordenar Alfabéticamente:</label>
          <select
            ref={orden}
            className={style.filtros}
            onChange={(evento) => dispatch(ordenarAlumnos(evento.target.value))}
          >
            <option value="ASC" key="ASC">
              A - Z
            </option>
            <option value="DESC" key="DESC">
              Z - A
            </option>
          </select>
        </span>
        <button onClick={reset} className={style.fBtn}>
          Borrar Filtros
        </button>
      </div>
      <div className={style.grilla}>
        {alumnos.map((p, i) => (
          <Persona {...p} key={i} />
        ))}
      </div>
    </>
  );
}

export default ListaFiltros;
