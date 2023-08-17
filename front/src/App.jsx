import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Detalles from "./components/Detalles.jsx";
import Nav from "./components/Nav.jsx";
import Form from "./components/Form.jsx";
import Lista from "./components/Lista.jsx";
import "./App.css";
import ListaFiltros from "./components/ListaFiltros.jsx";

function App() {
  // const [alumnos, setAlumnos] = useState([...personas]);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/detalle/:id" element={<Detalles />} />
        <Route path="/editar/:id" element={<Form />} />
        <Route path="/crear" element={<Form />} />
        <Route path="/filtros" element={<ListaFiltros />} />
        <Route
          path="*"
          element={
            <h1 style={{ color: "white", textAlign: "center" }}>Error 404</h1>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
