import React from "react";
import styles from "./News.module.css";
import MyTabs from "../tabs/tabs";
import Mostpopular from "../mostPopular/MostPopular";

const News = () => {
  const tabsItems = [
    "All",
    "Most popular",
    "Latest",
    "Traders",
    "Subscriptions",
    "Stocs",
    "Subscribe",
  ];
  const tabsData = {
    All: "All",
    "Most popular": <Mostpopular />,
    Top: "Latest",
    Traders: "Traders",
    Subscriptions: "Subscriptions",
    Stocs: "Stocs",
    Subscribe: "Subscribe",
  };
  return (
    <div className={styles.mainPart}>
      <p className={styles.title}>News</p>
      <div className={styles.traders}>
        <MyTabs WIDTHSIZE={390} tabsData={tabsData} arrs={tabsItems} />
      </div>
    </div>
  );
};

export default News;
