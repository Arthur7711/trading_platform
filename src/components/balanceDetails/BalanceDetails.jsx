import React from "react";
import styles from "./BalanceDetails.module.css";
import { ReactComponent as Vector } from "../../assets/images/vectorToRight.svg";
import MyTabs from "../tabs/tabs";
import Spot from "../spot/Spot";

const Balancedetails = () => {
  const tabsItems = ["Spot", "P2P", "Margin", "Earn"];
  const tabsData = {
    Spot: <Spot />,
    P2P: "P2P",
    Margin: "Margin",
    Earn: "Earn",
  };

  return (
    <div>
      <p className={styles.title}>
        Balance details <Vector />
      </p>
      <main className={styles.main}>
        <div className={styles.traders}>
          <MyTabs WIDTHSIZE={"100%"} tabsData={tabsData} arrs={tabsItems} />
        </div>
      </main>
    </div>
  );
};

export default Balancedetails;
