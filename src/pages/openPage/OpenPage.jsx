import React from "react";
import Logregheader from "../../components/logRegHeader/LogRegHeader";
import Logregmain from "../../components/logRegMain/LogRegMain";
import styles from "./OpenPage.module.css";

const Openpage = () => {
  return (
    <div className={styles.openPage}>
      <Logregheader />
      <Logregmain />
    </div>
  );
};

export default Openpage;
