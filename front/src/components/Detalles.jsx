import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Container from "./Container.jsx";
import style from "./css/Detalles.module.css";
import { connect } from "react-redux";

function Detalles({ alumnos }) {
  // useEffect(() => {
  //   // componentDidMount
  //   console.log("Estoy en el DOM: ", props.nombre);

  //   return () => console.log("¡Adiós!"); // componentWillUnmount
  // }, [props.mostrar]); // ,[]);

  // console.log("Me actualicé: ", props.nombre); // componentDidUpdate

  //
  // const location = useLocation();
  // console.log(location);
  // let id = location.pathname[location.pathname.length - 1];

  const { id } = useParams();

  const [alumno, setAlumno] = useState(alumnos.find((a) => a.id == id));

  const navigate = useNavigate();

  useEffect(() => {
    if (id < 0 || id > alumnos.length - 1) navigate("/error");

    return () => setAlumno({});
  }, []);

  return (
    <Container>
      <div className={style.sDiv}>
        <span>
          {/* <h3>Detalle de alumno:</h3> */}
          <img
            src={
              alumno.img ||
              "https://avatars.githubusercontent.com/u/57154655?s=280&v=4"
            }
            className={style.img}
          />
        </span>
        <span style={{ marginLeft: "-180px" }}>
          <h2>ID: {id}</h2>
          <h4>Nombre: {alumno.nombre}</h4>
          <h4>Apellido: {alumno.apellido}</h4>
          <h4>País: {alumno.localizacion.pais || "Desconicido"}</h4>
          <h4>Mensaje: {alumno.mensaje || "Desconicido"}</h4>
        </span>
        <span>
          <Link to={`/editar/${id}`} className={style.btn}>
            Editar
          </Link>
        </span>
      </div>
    </Container>
  );
}

export function mapStateToProps(state) {
  return {
    alumnos: state.alumnos,
  };
}

export default connect(mapStateToProps, null)(Detalles);
