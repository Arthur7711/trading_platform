import React from "react";
import styles from "./MyOrders.module.css";
import { ReactComponent as Vector } from "../../assets/images/vectorToRight.svg";
import { ReactComponent as Research } from "../../assets/images/researchOrders.svg";

const Myorders = () => {
  const dataForTopPart = [
    "Date",
    "Pair",
    "Type",
    "Side",
    "Price",
    "Amount",
    "Filled",
  ];
  const incomingData = [];
  return (
    <div>
      <p className={styles.title}>
        My orders <Vector />
      </p>
      <div className={styles.main}>
        <div className={styles.topPart}>
          {dataForTopPart.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </div>
        <main className={styles.mainArea}>
          {incomingData.lengtn ? (
            incomingData
          ) : (
            <div>
              <div className={styles.imgBox}>
                <Research />
              </div>
              <p className={styles.notFoundData}>There are no pending orders</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Myorders;
