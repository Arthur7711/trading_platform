import React from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const Speedometer = () => {
  return (
    <div style={{ width: 400 }}>
      <TechnicalAnalysis
        colorTheme="dark"
        width={400}
        height={400}
      ></TechnicalAnalysis>
    </div>
  );
};

export default Speedometer;
