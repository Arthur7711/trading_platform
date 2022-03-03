import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Tradeschart = () => {
  return (
    <div style={{ width: 500 }}>
      <AdvancedRealTimeChart
        theme="dark"
        width={550}
        height={400}
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default Tradeschart;
