import React from "react";
import styles from "./Header.module.css";
import logo from "../Assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import useMedia from "./Helper/useMedia";

const Header = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <nav className={`container animeTop  ${styles.headerContainer}`}>
            <NavLink to="/" end>
              {" "}
              <img src={logo} alt="Logo" />
            </NavLink>
            {mobile && (
              <button
                className={`${styles.mobileButton} ${
                  mobileMenu && styles.mobileButtonActive
                }`}
                aria-label="Menu"
                onClick={() => setMobileMenu(!mobileMenu)}
              ></button>
            )}
            <ul
              className={`${mobile ? styles.navMobile : styles.headerNav} ${
                mobileMenu && styles.navMobileActive
              }`}
            >
              <NavLink end to="/">
                Inicio
              </NavLink>
              <NavLink to="sobre">Sobre</NavLink>
              <NavLink to="projetos">Portfolio</NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
