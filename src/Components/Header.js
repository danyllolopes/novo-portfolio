import React from "react";
import styles from "./Header.module.css";
import logo from "../Assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInfo}>
        <nav className={`container animeTop  ${styles.headerContainer}`}>
          <NavLink to="/" end>
            {" "}
            <img src={logo} alt="Logo" />
          </NavLink>
          <ul className={styles.headerNav}>
            <NavLink to="sobre">Sobre</NavLink>
            <NavLink to="projetos">Portfolio</NavLink>
            <NavLink to="contato">Contato</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
