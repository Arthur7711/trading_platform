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
    <div className={styles.traders}>
      <MyTabs tabsData={tabsData} arrs={tabsItems} />
    </div>
  );
};

export default Traders;
