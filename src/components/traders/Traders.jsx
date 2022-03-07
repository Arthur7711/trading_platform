import React from "react";
import MyTabs from "../tabs/tabs";
import styles from "./Traders.module.css";

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

  return (
    <div className={styles.traders}>
      <MyTabs arrs={tabsItems} />
    </div>
  );
};

export default Traders;
