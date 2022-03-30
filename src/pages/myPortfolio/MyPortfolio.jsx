import React from "react";
import Main from "../../components/main/Main";
import styles from "./Myportfolio.module.css";
import MyTabs from "../../components/tabs/tabs";
import Profiletable from "../../components/profileTable/ProfileTable";
import Myorders from "../../components/myOrders/MyOrders";

const Myportfolio = () => {
  const tabsItems = [
    "All",
    "Indices Futures",
    "Stocs",
    "Traders",
    "Subscriptions",
    "Stocings",
    "Subscribe",
  ];
  const tabsData = {
    All: <Profiletable />,
    "Indices Futures": "Indices Futures",
    Stocs: "Stocs",
    Traders: "Traders",
    Subscriptions: "Subscriptions",
    Stocings: "Stocings",
    Subscribe: "Subscribe",
  };
  return (
    <Main>
      <div>
        <div>
          <select className={styles.mySelect}>
            <option value="Mywatchlist">My watchlist</option>
            <option value="Allwatchlist">All watchlist</option>
            <option value="Recentlyinvested">Recently invested</option>
          </select>
        </div>
        <main className={styles.topMain}>
          <div>
            <MyTabs WIDTHSIZE={"100%"} tabsData={tabsData} arrs={tabsItems} />
          </div>
        </main>
        <main className={styles.bottomMain}>
          <Myorders />
        </main>
      </div>
    </Main>
  );
};

export default Myportfolio;
