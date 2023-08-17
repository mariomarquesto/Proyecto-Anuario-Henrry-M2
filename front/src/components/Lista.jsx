import Persona from "./Persona.jsx";
import style from "./css/Lista.module.css";
import { connect } from "react-redux";

function Lista({ alumnos }) {
  return (
    <div className={style.grilla}>
      <h3 className={style.h3}>Integrantes:</h3>
      {alumnos.map((p, i) => (
        <Persona {...p} key={i} />
      ))}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    alumnos: state.alumnos,
  };
}

export default connect(mapStateToProps, null)(Lista);
