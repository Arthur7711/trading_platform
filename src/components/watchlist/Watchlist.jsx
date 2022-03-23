import React from "react";
import styles from "./Watchlist.module.css";
import MyTabs from "../tabs/tabs";
import Wlist from "../wList/Wlist";

const Watchlist = () => {
  const tabsItems = [
    "All",
    "Indices",
    "Indices Futures",
    "Traders",
    "Subscriptions",
    "Stocs",
    "Subscribe",
  ];
  const tabsData = {
    All: "All",
    Indices: <Wlist />,
    Top: "Indices Futures",
    Traders: "Traders",
    Subscriptions: "Subscriptions",
    Stocs: "Stocs",
    Subscribe: "Subscribe",
  };

  return (
    <div className={styles.mainPart}>
      <p className={styles.title}>Watchlist</p>
      <div className={styles.traders}>
        <MyTabs WIDTHSIZE={390} tabsData={tabsData} arrs={tabsItems} />
      </div>
    </div>
  );
};

export default Watchlist;
