import React from "react";
import MyTabs from "../tabs/tabs";

const Traders = () => {
  const tabsItems = [
    "All",
    "Top",
    "Traders",
    "Subscriptions",
    "Indices",
    "Stocs",
    "Subscribe",
  ];

  return (
    <div>
      <MyTabs arrs={tabsItems}/>
    </div>
  );
};

export default Traders;
