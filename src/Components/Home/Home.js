import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import Head from "../Helper/Head";
const Home = () => {
  return (
    <main className={styles.introBg}>
      <Head title="Home" />
      <div className={`container ${styles.introContainer}`}>
        <section className={styles.info}>
          <p>Olá 👋, me chamo Danyllo</p>
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Desenvolvedor Front-end / UI Design.")
                  .pauseFor(1000)
                  .stop()
                  .start();
              }}
            />
          </h1>
          <Link to="sobre" className={styles.link}>
            Quero Conhecê-lo
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
