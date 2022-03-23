import React from "react";
import styles from "./WatchlistIndices.module.css";
import { ReactComponent as NotificationActive } from "../../assets/images/notifications-active.svg";
import { ReactComponent as NotificationDisActive } from "../../assets/images/notifications-disactive.svg";
import Bnb from "../../assets/images/bnb.png";

const Watchlistindices = ({ data }) => {
  return (
    <div className={styles.indices}>
      <div className={styles.bnbArea}>
        <img src={Bnb} alt="Bnb" />
        <div className={styles.textArea}>
          <p className={styles.title}>BNB</p>
          <p className={styles.desc}>Binance coin</p>
        </div>
      </div>
      <div className={styles.btnArea}>
        <button className={styles.buy}>Buy</button>
        <button className={styles.sell}>Sell</button>
      </div>
      {data.notify ? <NotificationActive /> : <NotificationDisActive />}
    </div>
  );
};

export default Watchlistindices;
