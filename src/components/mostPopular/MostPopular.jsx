import React from "react";
import styles from "./MostPopular.module.css";
import popularImg from "../../assets/images/popular.png";

const Mostpopular = () => {
  return (
    <div className={styles.popular}>
      <div className={styles.imgBox}>
        <img src={popularImg} alt="popularImg" />
      </div>
      <p className={styles.title}>Lorem ipsum dolor sit amet, consectetur</p>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>
  );
};

export default Mostpopular;
