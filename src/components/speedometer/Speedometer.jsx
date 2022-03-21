import React from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import styles from "./Speedometer.module.css";

const Speedometer = () => {
  return (
    <div className={styles.mainPart}>
      <p className={styles.title}>Indicator</p>
      <div className={styles.speedArea}>
        <TechnicalAnalysis
          colorTheme="dark"
          width={400}
          height={390}
        ></TechnicalAnalysis>
      </div>
    </div>
  );
};

export default Speedometer;
