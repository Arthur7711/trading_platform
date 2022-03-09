import React from "react";
import Indice from "../../components/Indice/Indice";
import Main from "../../components/main/Main";
import Speedometer from "../../components/speedometer/Speedometer";
import Topcarousel from "../../components/topCaroucel/TopCarousel";
import Traders from "../../components/traders/Traders";
import Tradeschart from "../../components/tradesChart/TradesChart";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <Main>
        <Topcarousel />
        <main className={styles.topMain}>
          <Traders />
          <Speedometer />
          <Indice />
        </main>
        <main>
          <Tradeschart />
        </main>
      </Main>
    </div>
  );
};

export default Dashboard;
