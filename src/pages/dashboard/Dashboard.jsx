import React from "react";
import Main from "../../components/main/Main";
import Marketscanner from "../../components/marketScanner/MarketScanner";
import News from "../../components/news/News";
import Analysis from "../../components/quickAnalysis/Analysis";
import Speedometer from "../../components/speedometer/Speedometer";
import Topcarousel from "../../components/topCaroucel/TopCarousel";
import Tradechat from "../../components/tradeChat/TradeChat";
import Traders from "../../components/traders/Traders";
import Tradeschart from "../../components/tradesChart/TradesChart";
import Watchlist from "../../components/watchlist/Watchlist";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <Main>
        <Topcarousel />
        <main className={styles.topMain}>
          <Traders />
          <Tradechat />
          <Speedometer />
          <Analysis />
        </main>
        <main className={styles.topMain}>
          <Tradeschart />
          <Marketscanner />
          <Watchlist />
          <News />
        </main>
      </Main>
    </div>
  );
};

export default Dashboard;
