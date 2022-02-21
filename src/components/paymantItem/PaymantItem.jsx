import React from "react";
import styles from "./PaymantItem.module.css";
import { ReactComponent as DoneSvg } from "../../assets/images/done.svg";
import { ReactComponent as ErrorSvg } from "../../assets/images/error.svg";

const Paymantitem = ({ fakeData, cost }) => {
  return (
    <div className={styles.item}>
      {fakeData.map((el, i) => (
        <div key={i} className={styles.eachElement}>
          {el.supported === false ? <ErrorSvg /> : <DoneSvg />}
          <p>{el.title}</p>
        </div>
      ))}
      <div className={styles.line}></div>
      <p className={styles.cost}>{cost}</p>
    </div>
  );
};

export default Paymantitem;
