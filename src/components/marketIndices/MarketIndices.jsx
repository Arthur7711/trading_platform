import React from "react";
import Balancemarket from "../balanceMarket/BalanceMarket";
import styles from "./MarketIndices.module.css";

const Marketindices = () => {
  const incomingData = [
    { title: "Binance: BTC USDT", buy: true, info: "Buy Now" },
    { title: "Binance: BTC USDT", buy: false, info: "Short podition" },
    { title: "Binance: BTC USDT", buy: true, info: "Buy Now" },
    { title: "Binance: BTC USDT", buy: false, info: "Short podition" },
    { title: "Binance: BTC USDT", buy: true, info: "Buy Now" },
    { title: "Binance: BTC USDT", buy: true, info: "Buy Now" },
  ];
  return (
    <div>
      {incomingData.map((el, i) => (
        <Balancemarket data={el} key={i} />
      ))}
    </div>
  );
};

export default Marketindices;
