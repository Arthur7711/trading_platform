import React from "react";
import Main from "../../components/main/Main";
import Speedometer from "../../components/speedometer/Speedometer";
import Topcarousel from "../../components/topCaroucel/TopCarousel";
import Traders from "../../components/traders/Traders";
import Tradeschart from "../../components/tradesChart/TradesChart";

const Dashboard = () => {
  return (
    <div>
      <Main> 
        <Topcarousel />
        <main>
          <Traders />
          <Speedometer />
          <Tradeschart />
        </main>
      </Main>
    </div>
  );
};

export default Dashboard;
