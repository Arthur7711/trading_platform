import React from "react";
import styles from "./Spot.module.css";

const Spot = () => {
  const incomingData = [
    {
      title: "Total balance",
      count: "0.00000056",
      rate: 150,
    },
    {
      title: "Loced",
      count: "0.00000000",
      rate: 0,
    },
    {
      title: "Flexible",
      count: "0.00000000",
      rate: 0,
    },
  ];
  return (
    <div className={styles.main}>
      {incomingData.map((el, i) => (
        <div className={styles.item} key={i}>
          <p className={styles.title}>{el.title}:</p>
          <p className={styles.count}>
            {el.count} 
            <span>BTC=${el.rate}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Spot;
