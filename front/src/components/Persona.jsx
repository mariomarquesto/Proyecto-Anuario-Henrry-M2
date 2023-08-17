import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "./css/Persona.module.css";
import { connect } from "react-redux";
import { removeAlumno } from "../redux/actions";

const sDiv = {
  backgroundColor: "yellow",
  width: "180px",
  border: "1px solid grey",
  borderRadius: "10px",
  padding: "0 15px 15px 15px",
  color: "black",
};

const Alumno = styled.span`
  color: purple;
  &:hover {
    color: violet;
    cursor: pointer;
  }
`;

function Persona({ nombre, apellido, id, removeAlumno }) {
  return (
    <div style={sDiv}>
      <h4>
        Alumno:
        <Link to={`/detalle/${id}`}>
          <Alumno>{` ${nombre} ${apellido}`}</Alumno>
        </Link>
      </h4>

     
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <small style={{ color: "green" }}>ID: {id}</small>
        <button className={style.btn} onClick={() => removeAlumno(id)}>
          Borrar
        </button>
      </span>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    removeAlumno: function (id) {
      dispatch(removeAlumno(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Persona);
