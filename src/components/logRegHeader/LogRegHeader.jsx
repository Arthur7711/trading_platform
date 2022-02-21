import React from "react";
import styles from "./Logregheader.module.css";
import logo from "../../assets/images/logo.png";

const Logregheader = () => {
  return (
    <header className={styles.head}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Logregheader;
