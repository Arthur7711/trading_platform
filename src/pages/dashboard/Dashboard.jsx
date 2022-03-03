import React from "react";
import Main from "../../components/main/Main";
import Speedometer from "../../components/speedometer/Speedometer";
import Topcarousel from "../../components/topCaroucel/TopCarousel";

const Dashboard = () => {
  return (
    <div>
      <Main> 
        <Topcarousel />
        <main>
          <Speedometer />
        </main>
      </Main>
    </div>
  );
};

export default Dashboard;
