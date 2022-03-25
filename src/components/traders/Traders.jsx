import React from "react";
import MyTabs from "../tabs/tabs";
import styles from "./Traders.module.css";
import Indices from "../Indice/Indice.jsx";

const Traders = () => {
  const tabsItems = [
    "All",
    "Top",
    "Traders",
    "Subscriptions",
    "Indices",
    "Stocs",
    "Subscribe",
  ];
  const tabsData = {
    All: "All",
    Top: "Top",
    Traders: "Traders",
    Subscriptions: "Subscriptions",
    Indices: <Indices />,
    Stocs: "Stocs",
    Subscribe: "Subscribe",
  };

  return (
    <div className={styles.mainPart}>
      <p className={styles.title}>Traders</p>
      <div className={styles.traders}>
        <MyTabs WIDTHSIZE={600} tabsData={tabsData} arrs={tabsItems} />
      </div>
    </div>
  );
};

export default Traders;
