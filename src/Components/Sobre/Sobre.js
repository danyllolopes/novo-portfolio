import React from "react";
import styles from "./Sobre.module.css";
import sobreimg from "../../Assets/sobreimg.svg";
import seta from "../../Assets/seta.svg";
import images from "./Images";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Head from "../Helper/Head";

const Sobre = () => {
  const [selected, setSelected] = React.useState(images[0]);
  const carousel = React.useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  const handleRightClick = (e) => {
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };
  return (
    <>
      <section className={styles.sobreBg}>
        <Head title="Sobre" />
        <div className={`${styles.sobre} container`}>
          <h2 className="animeTop">Sobre Mim</h2>
          <img src={sobreimg} alt="Imagem" className="animeLeft" />
          <p className="animeRigth">
            Olá, me chamo Danyllo Cesar, sou desenvolvedor{" "}
            <strong>Front-end & UI Design</strong>, sou formado em Sistemas de
            Informação pela Una de Belo Horizonte, tenho experiência em
            programação Web como desenvolvedor FullStack com as principais
            tecnologias do mercado,
            <strong> VueJs, Vuex, Vuetify, Node, TypeScript</strong>. Possuo
            sólidos conhecimentos em{" "}
            <strong>
              ReactJs, Hooks, Forms, ReactRouter, Styled Components, MaterialUI
            </strong>{" "}
            e prototipagem de telas utilizando a ferramenta{" "}
            <strong>Figma</strong>. Entusiasta em tecnologia, sempre aprimorando
            e inovando junto a ela para poder proporcionar a melhor experiência
            possível.
          </p>
        </div>
        <div className={styles.seta}>
          <a href="#certificados">
            <img className="animeTop" src={seta} alt="Seta" />
          </a>
        </div>
      </section>

      <section id="certificados" className={`${styles.certificadosContainer}`}>
        <h2 className={`animeTop ${styles.title}`}>Certificados</h2>
        <div className={`container`}>
          <div className={`${styles.selecionada} animeTop`}>
            <img src={selected} alt="Selecionada" />
          </div>
        </div>

        <div className={`${styles.container} animeTop`}>
          <div className={styles.carousel} ref={carousel}>
            {images.map((img, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.image}>
                  <img
                    style={{
                      transform: `${selected === img ? "scale(1.1)" : ""}`,
                    }}
                    onClick={() => setSelected(img)}
                    src={img}
                    alt="Certificados"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.button}>
            <button onClick={handleLeftClick}>
              {" "}
              <ArrowBackIosIcon style={{ fontSize: "30px" }} />{" "}
            </button>
            <button onClick={handleRightClick}>
              {" "}
              <ArrowForwardIosIcon style={{ fontSize: "30px" }} />{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
