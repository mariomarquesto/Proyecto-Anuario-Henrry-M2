import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";
import style from "./css/Nav.module.css";

function Nav() {
  return (
    <nav>
      <Container>
        <img
          className={style.img}
          src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"
        />
        <h1> Anuario de Cohorte FT#41b</h1>
        <span>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "yellow", color: "black", outline: "none" }
                : null
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/crear"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "yellow", color: "black", outline: "none" }
                : null
            }
          >
            Form
          </NavLink>
          <NavLink
            to="/filtros"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "yellow", color: "black", outline: "none" }
                : null
            }
          >
            Filtros
          </NavLink>
        </span>
      </Container>
    </nav>
  );
}

export default Nav;
