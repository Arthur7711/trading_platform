import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import styles from "./Tradeschart.module.css";

const Tradeschart = () => {
  return (
    <div className={styles.mainPart}>
      <p className={styles.title}>Trades</p>
      <div className={styles.advanced}>
        <AdvancedRealTimeChart
          theme="dark"
          width={600}
          height={400}
        ></AdvancedRealTimeChart>
      </div>
    </div>
  );
};

export default Tradeschart;
