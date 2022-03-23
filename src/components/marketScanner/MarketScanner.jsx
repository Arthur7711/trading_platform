import React from "react";
import MyTabs from "../tabs/tabs";
import styles from "./Marketscanner.module.css";
import Marketindices from '../marketIndices/MarketIndices'

const Marketscanner = () => {
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
    Indices: <Marketindices /> ,
    Top: "Indices Futures",
    Traders: "Traders",
    Subscriptions: "Subscriptions",
    Stocs: "Stocs",
    Subscribe: "Subscribe",
  };

  return (
    <div className={styles.mainPart}>
      <p className={styles.title}>Market Scanner</p>
      <div className={styles.traders}>
        <MyTabs WIDTHSIZE={390} tabsData={tabsData} arrs={tabsItems} />
      </div>
    </div>
  );
};

export default Marketscanner;
