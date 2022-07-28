import React from "react";
import styles from "./Portfolio.module.css";
import projetos from "./PortifolioSlide";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Portfolio = () => {
  const slide = React.useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    slide.current.scrollLeft -= slide.current.offsetWidth / 0.99;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    slide.current.scrollLeft += slide.current.offsetWidth / 0.99;
  };

  return (
    <section className={styles.projetos}>
      <h2 className="animeTop">Projetos</h2>

      <div className={styles.container}>
        <div className={`${styles.slide} animeTop`} ref={slide}>
          {projetos.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.image}>
                <a href={item.link} target="_blank">
                  <img src={item.slide} alt={item.titulo} />
                </a>
              </div>
              <div className={styles.info}>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <button onClick={handleLeftClick} className="animeLeft">
            {" "}
            <ArrowBackIosIcon style={{ fontSize: "30px" }} />{" "}
          </button>
          <button onClick={handleRightClick} className="animeRigth">
            {" "}
            <ArrowForwardIosIcon style={{ fontSize: "30px" }} />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
