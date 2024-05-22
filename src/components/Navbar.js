import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <NavLink to="/" className={styles.brand}>
        BLOG<span>DEBELEZA</span>
      </NavLink>

      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active: "")}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/login" className={({isActive}) => (isActive ? styles.active: "")}>Login</NavLink>
        </li>

        <li>
          <NavLink to="/register" className={({isActive}) => (isActive ? styles.active: "")}>Cadastrar</NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active: "")}>Sobre</NavLink>
        </li>

        <li>
          <NavLink to="/produtos" className={({isActive}) => (isActive ? styles.active: "")}>Produtos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
