import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
  validateEdit,
  validateInputs,
  validateSubmit,
} from "../utils/validate";
import Container from "./Container";
import style from "./css/Form.module.css";
import { connect } from "react-redux";
import { addAlumno, editAlumno } from "../redux/actions";

function Form({ alumnos, editAlumno, addAlumno }) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/crear") {
      setInputs({
        nombre: "",
        apellido: "",
        localizacion: { pais: "", estado: "", ciudad: "" },
        contacto: "",
        mensaje: "",
      });
      setErrores({ ...objVacio });
    }
  }, [location.pathname]);

  const [inputs, setInputs] = useState(
    params.id
      ? { ...alumnos[params.id] }
      : {
          nombre: "",
          apellido: "",
          localizacion: { pais: "", estado: "", ciudad: "" },
          contacto: "",
          mensaje: "",
        }
  );

  let objVacio = {
    nombre: " ",
    apellido: " ",
    localizacion: { pais: " ", estado: " ", ciudad: " " },
    contacto: " ",
    mensaje: " ",
  };

  const [errores, setErrores] = useState(
    params.id ? validateEdit(inputs, { ...objVacio }) : { ...objVacio }
  );

  const handleChange = (evento) => {
    const { name, value } = evento.target;

    if (name === "pais" || name === "estado" || name === "ciudad")
      setInputs({
        ...inputs,
        localizacion: { ...inputs.localizacion, [name]: value },
      });
    else setInputs({ ...inputs, [name]: value });

    setErrores(validateInputs({ name, value }, errores));
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (params.id) editAlumno(params.id, inputs);
    else addAlumno(inputs);

    navigate("/");
  };

  return (
    <Container>
      <form className={style.sDiv} onSubmit={handleSubmit}>
        <h3>{params.id ? "Edición" : "Creación"} de alumno:</h3>

        {/* Nombre */}
        <input
          className={style.input1}
          type="text"
          name="nombre"
          value={inputs.nombre}
          placeholder="Nombre"
          onChange={handleChange}
        />
        {errores.nombre && <small>{errores.nombre}</small>}

        {/* Apellido */}
        <input
          className={style.input1}
          type="text"
          name="apellido"
          value={inputs.apellido}
          placeholder="Apellido"
          onChange={handleChange}
        />
        {errores.apellido && <small>{errores.apellido}</small>}

        {/* País - Estado - Ciudad */}
        <input
          className={style.input2}
          type="text"
          name="pais"
          value={inputs.localizacion.pais}
          placeholder="Pais"
          onChange={handleChange}
        />
        <input
          className={style.input2}
          type="text"
          name="estado"
          value={inputs.localizacion.estado}
          placeholder="Estado"
          onChange={handleChange}
        />
        <input
          className={style.input2}
          type="text"
          name="ciudad"
          value={inputs.localizacion.ciudad}
          placeholder="Ciudad"
          onChange={handleChange}
        />
        {errores.localizacion.pais && (
          <small>{errores.localizacion.pais}</small>
        )}
        {errores.localizacion.estado && (
          <small>{errores.localizacion.estado}</small>
        )}
        {errores.localizacion.ciudad && (
          <small>{errores.localizacion.ciudad}</small>
        )}

        {/* Contacto */}
        <input
          className={style.input1}
          type="text"
          name="contacto"
          value={inputs.contacto}
          placeholder="Contacto"
          onChange={handleChange}
        />
        {errores.contacto && <small>{errores.contacto}</small>}

        {/* Mensaje */}
        <textarea
          className={style.input1}
          name="mensaje"
          value={inputs.mensaje}
          placeholder="Mensaje..."
          rows="5"
          onChange={handleChange}
        ></textarea>
        {errores.mensaje && <small>{errores.mensaje}</small>}

        {/* Botón Submit */}
        <input
          className={validateSubmit(errores) ? style.disabled : style.btn}
          type="submit"
          value="Enviar"
          disabled={validateSubmit(errores)}
        />
      </form>
    </Container>
  );
}

export function mapStateToProps(state) {
  return {
    alumnos: state.alumnos,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addAlumno: function (alumno) {
      dispatch(addAlumno(alumno));
    },
    editAlumno: function (id, alumno) {
      dispatch(editAlumno(id, alumno));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
