import React from "react";
import { MiniChart } from "react-ts-tradingview-widgets";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Topcarousel = () => {
  // working first 4
  const market = [
    "BTCUSD",
    "ETHUSD",
    "TSLA",
    "AAPL",
    "SOLUSD",
    "LUNAUSD",
    "UNIUSD",
    "EURUSD",
    "BTCUER",
    "BTCGBP",
    "BTCJPY",
    "BTCRUB",
    "BTC1!",
    "ETHUSD",
    "ETHEUR",
    "ETHGBP",
    "ETHJPY",
    "ETHBTC",
    "ETHUSDT",
    "SOLUSD",
    "SOLEUR",
    "SOLGBP",
    "SOLBTC",
    "SOLETH",
    "SOLUSDT",
    "INUISD",
    "UNIEUR",
    "USNIGBP",
    "UNIBTC",
    "UNIETH",
    "UNIUSDT",
  ];
  let sliderCount = market.length;
  return (
    <CarouselProvider
      naturalSlideWidth={120}
      naturalSlideHeight={80}
      totalSlides={sliderCount}
      visibleSlides={4}
      infinite={true}
      dragEnabled={false}
      isPlaying={false}
      interval={3000}
      children=""
    >
      <Slider>
        {market.map((el, i) => (
          <Slide key={i} index={i}>
            <MiniChart
              symbol={`FX:${el}`}
              colorTheme="dark"
              width={350}
              height={200}
            ></MiniChart>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default Topcarousel;
