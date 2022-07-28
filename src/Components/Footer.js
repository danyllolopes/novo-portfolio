import React from "react";
import styles from "./Footer.module.css";
import fivecon from "../Assets/fivecon.svg";
import { ReactComponent as Email } from "../Assets/icones/email.svg";
import { ReactComponent as Github } from "../Assets/icones/github.svg";
import { ReactComponent as Instagram } from "../Assets/icones/instagram.svg";
import { ReactComponent as Linkedin } from "../Assets/icones/linkedin.svg";
import { ReactComponent as Localizacao } from "../Assets/icones/localizacao.svg";
import { ReactComponent as Telefone } from "../Assets/icones/telefone.svg";

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={`container ${styles.footer}`}>
        <img src={fivecon} alt="logo" />
        <div className={styles.icones}>
          <a
            href="https://www.google.com.br/maps/place/Sion,+Belo+Horizonte+-+MG/@-19.9536768,-43.9439711,15z/data=!3m1!4b1!4m5!3m4!1s0xa69830bbbacaaf:0x19aae75c8c2129fc!8m2!3d-19.9530657!4d-43.934134"
            target="_blank"
          >
            {" "}
            <Localizacao />
          </a>
          <a href="tel:+5531999566511" target="_blank">
            <Telefone />
          </a>
          <a href="https://www.linkedin.com/in/danyllo-leles/" target="_blank">
            {" "}
            <Linkedin />
          </a>
          <a href="mailto:danyllolopes@outlook.com.br" target="_blank">
            {" "}
            <Email />
          </a>
          <a href="https://www.instagram.com/danyllocesar_/" target="_blank">
            {" "}
            <Instagram />
          </a>

          <a href="https://github.com/danyllolopes" target="_blank">
            {" "}
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
