import React from "react";
import styles from "./BalanceMarket.module.css";
import { ReactComponent as RedBinance } from "../../assets/images/redBinance.svg";
import { ReactComponent as SelectedBinance } from "../../assets/images/selectedBinance.svg";

const Balancemarket = ({ data }) => {
  return (
    <div className={styles.main}>
      <p>{data.title}</p>
      {data.buy === true ? (
        <>
          <SelectedBinance />
          <p>{data.info}</p>
        </>
      ) : (
        <>
          <RedBinance />
          <p>{data.info}</p>
        </>
      )}
    </div>
  );
};

export default Balancemarket;
